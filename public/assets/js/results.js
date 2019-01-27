// Used by results.js //

// DOM Ready
$(function() {

  const urlParams = new URLSearchParams(window.location.search);
  renderResults(urlParams.get('categoryid'));

});


// Recipe Card Template
const tmplRecipeCard = function(recipeId, title, photoUrl) {
  return `
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <a href="#">
      <div class="card mb-3">
        <img class="card-img-top" src="${photoUrl}" alt="photo of recipe">
        <p class="card-title pt-1">${title}</p>
      </div>
    </a>
  </div>
  `
}

const renderRecipes = function(array) {
  // clear the recipes div
  $('#recipes').empty();
  
  // foreach recipe in array, render to page using template
  for (let i = 0; i < array.length; i++) {
      let recipeId = array[i].recipeId;
      let title = array[i].name;
      let photoUrl = array[i].photoUrl;
      $('#recipes').append(tmplRecipeCard(recipeId, title, photoUrl));
  }
}

const renderResults = function(categoryId) {
  $.get(`/api/recipes?categoryId=${categoryId}`)
  .then(function(data){
      renderRecipes(data);
  });
}