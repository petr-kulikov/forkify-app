// Module imports
import * as model from './model.js';
import { CLOSE_MODAL_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultsView from './views/searchResultsView.js';
import searchPaginationView from './views/searchPaginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// Libraries imports
import 'core-js/stable';
import 'regenerator-runtime/runtime';

init();

// --- FUNCTIONS ---

function init() {
  bookmarksView.addHanlderRender(controlRenderBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  searchPaginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUploadRecipe(controlAddRecipe);
}

async function controlRecipes() {
  try {
    // Getting the recipe id from the hash
    const id = window.location.hash.slice(1);

    // Guard clause if no id
    if (!id) return;

    // Update selected preview
    searchResultsView.update(
      model.getSearchResultsPage(model.state.search.page)
    );

    // Update selected bookmark
    bookmarksView.update(model.state.bookmarks);

    // Display spinner
    recipeView.renderSpinner();

    // Loading the recipe
    await model.loadRecipe(id);

    // Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`${err}`);
    recipeView.renderError();
  }
}

async function controlSearchResults() {
  try {
    // Get search query from search input
    const query = searchView.getQuery();

    // Guard clause if no query
    if (!query) return;

    // Display spinner
    searchResultsView.renderSpinner();

    // Load search results
    await model.loadSearchResults(query);

    // Render search results
    searchResultsView.render(model.getSearchResultsPage(1));

    // Render initial pagination
    searchPaginationView.render(model.state.search);
  } catch (err) {
    console.error(`${err}`);
    searchResultsView.renderError();
  }
}

function controlPagination(moveToPage) {
  // Render UPDATED results
  searchResultsView.render(model.getSearchResultsPage(moveToPage));

  // Render UPDATED pagination
  searchPaginationView.render(model.state.search);
}

function controlServings(newServings) {
  // Update the recipe object
  model.updateServings(newServings);

  // Display NEW recipe object
  recipeView.update(model.state.recipe);
}

function controlAddBookmark() {
  // add/remove bookmark
  if (!model.state.recipe.isBookmark) {
    model.addBookmark(model.state.recipe);
  } else {
    model.removeBookmark(model.state.recipe.id);
  }

  // Update bookmark icon in recipeView
  recipeView.update(model.state.recipe);

  // Render bookmark in bookmarksView
  bookmarksView.render(model.state.bookmarks);
}

function controlRenderBookmarks() {
  bookmarksView.render(model.state.bookmarks);
}

async function controlAddRecipe(userRecipe) {
  try {
    // Send the recipe to API
    await model.addUserRecipe(userRecipe);

    // Render sent recipe to the page
    recipeView.render(model.state.recipe);

    // Render sent recipe in bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Set the hash to sent recipe id
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Update bookmarks list to highlight current recipe
    bookmarksView.update(model.state.bookmarks);

    // Render success message on recipe form after submission
    addRecipeView.renderSuccessMessage();

    // Close form after 2,5 sec
    setTimeout(() => {
      addRecipeView.closeRecipeWindow();
    }, CLOSE_MODAL_SEC * 1000);
  } catch (err) {
    console.error(`${err}`);
    addRecipeView.renderError(err.message);
  }
}

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

function clearStorage() {
  localStorage.removeItem('bookmarks');
}
// clearStorage();
