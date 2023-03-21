// Module imports
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Libraries imports
import 'core-js/stable';
import 'regenerator-runtime/runtime';

init();

// --- FUNCTIONS ---

function init() {
  recipeView.addHandlerRender(controlRecipes);
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

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}

// 00624c3d-c35f-43d5-9a23-817b34496641 my api key
