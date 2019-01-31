// Used by recipe.html //

// DOM Ready
$(function() {
    renderResults(1);
});
   
// Render the Recipes
const renderRecipe = function(recipe) {
    $('.recipeTitle').html(recipe.title);
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