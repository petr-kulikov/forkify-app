// Module imports
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultsView from './views/searchResultsView.js';

// Libraries imports
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept;
}

init();

// --- FUNCTIONS ---

function init() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

async function controlRecipes() {
  try {
    // Getting the recipe id from the hash
    const id = window.location.hash.slice(1);

    // Guard clause if no id
    if (!id) return;

    // Display spinner
    recipeView.renderSpinner();

    // Loading the recipe
    await model.loadRecipe(id);

    // Rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
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
    searchResultsView.render(model.state.search.results);
    console.log(model.state.search.results);
  } catch (err) {
    searchResultsView.renderError();
  }
}

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

// 00624c3d-c35f-43d5-9a23-817b34496641 my api key
