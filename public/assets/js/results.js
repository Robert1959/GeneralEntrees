// Used by results.js //

// DOM Ready
$(function() {

  // get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  // get the category name and render to page
  $.get(`/api/category/${urlParams.get('categoryId')}`)
  .then(function(data){
    
    // if category doesn't exists return an error, else return recipes in the category
    if(!data) {
      $('#content').html(`<div class="row p-3 text-muted font-italic">Oops... We can't find a valid category.</div>`);
    } else {
      $('.category-title').html(data.name);
      renderResults(urlParams.get('categoryId'));
    }
  });
});

// Recipe Card Template
const tmplRecipeCard = function(recipeId, title, photoUrl) {
  return `
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <a href="#">
      <div class="card mb-3">
        <img class="card-img-top" src="${photoUrl}" alt="photo of recipe">
        <p class="card-title p-1">${title}</p>
      </div>
    </a>
  </div>
  `
}

// Render the Recipes
const renderRecipes = function(array) {
  // clear the recipes div
  $('#recipes').empty();
  
  // if array of recipes is empty then display no result message otherwise render results
  if(array.length === 0) {
    $('#recipes').html(`<p class="font-italic text-muted py-3">Sorry, We don't have any recipes in this category.</p>`);
  } else {
    // foreach recipe in array, render to page using template
    for (let i = 0; i < array.length; i++) {
        let recipeId = array[i].recipeId;
        let title = array[i].title;
        let photoUrl = `./assets/images/${array[i].image}`;
        $('#recipes').append(tmplRecipeCard(recipeId, title, photoUrl));
    }
  };
}

// Get recipes based on category and render results
const renderResults = function(categoryId) {
  
  // Set the API url
  let apiUrl = `/api/recipes?categoryId=${categoryId}`;

  // If no category is provided, change url to get all recipes
  if(!categoryId) {
    apiUrl = `/api/recipes`;
  }

  $.get(apiUrl)
  .then(function(data){
      renderRecipes(data);
  });
}