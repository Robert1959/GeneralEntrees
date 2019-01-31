// Used by recipe.html //

// DOM Ready
$(function() {
    // get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    renderResults(urlParams.get('recipeId'));
});
   
// Render the Recipes
const renderRecipe = function(recipe) {
    $('.recipeTitle').html(recipe.title);
    $('.recipePhoto').html(`<img src="${recipe.image}" alt="..." />`);
    $('.recipeServe').html(recipe.servings);
    $('.recipeInstructions').html(recipe.instructions);
    $('.recipePrep').html(recipe.prepTime);
    $('.recipeCook').html(recipe.cookTime);
}
  
// Get recipes based on category and render results
const renderResults = function(recipeId) {
    $.get(`/api/recipe/${recipeId}`)
    .then(function(data){
        renderRecipe(data);
    });
}