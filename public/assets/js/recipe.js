// Used by recipe.html //

// Array for recipe ingredients
const ingredients = [];

// VIEW MODE //
// Dynamically create recipe HTML and render to page
const renderRecipe = function(recipeId) {
     
    // Render the Recipe data to the page
    $.get(`/api/recipe/${recipeId}`)
    .then(function(recipe) {
        $('.recipeTitle').html(`<h2>${recipe.title}</h2>`);
        $('.recipePhoto').html(`<img src="${recipe.image}" alt="..." />`);
        $('.recipeServe').html(`<p class="font-italic">Servings: ${recipe.servings}</p>`);
        $('.recipePrep').html(`<p class="font-italic">Prep Time: ${recipe.prepTime}</p>`);
        $('.recipeCook').html(`<p class="font-italic">Cooking Time: ${recipe.cookTime}</p>`); 
        $('.recipeInstructions').html(`<p>${recipe.instructions}</p>`);
    });

    // Define recipe table HTML
    let sectionIngredients = `
        <div class="row">
            <div class="col-12">
                <table id="ingredientsTable" class="table table-bordered table-sm">
                    <thead class="thead-light">
                        <th scope="col">Ingredient</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    `;

    // Render the Ingredients table HTML
    $('.recipeIngredients').html(sectionIngredients);
    
    // Call the Ingredients API to get All ingredients for the RecipeId
    $.get(`/api/ingredients?recipeId=${recipeId}`)
    .then(function(data) {
        data.forEach(record => {
            $('#ingredientsTable').append(`<tr><td>${record.name}</td><td>${record.units}</td><td>${record.measurementUnit}</td></tr>`)
        });
    });
}
  
// EDIT MODE //
// Build the HTML for the Recipe Add form
const buildRecipeForm = function() {
    let sectionCategory = `
        <div id=""sectionCategory class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="category">Category</label>
                    <select class="form-control" name="category">
                        <option value="0">Select a category...</option>
                    </select>
                </div>
            </div>
            <div class="col-6">
                <label for="photoUrl">Photo Url</label>
                    <input type="text" class="form-control" name="photoUrl" placeholder="http://...">
            </div>
        </div>`;

    let sectionIngredients = `
        <div class="row">
            <div class="col-12">
                <table id="ingredientsTable" class="table table-bordered table-sm">
                    <thead class="thead-light">
                        <th scope="col">Ingredient</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
        <div id="ingredientForm" class="form-row mb-3">
            <div class="col">
                <input type="text" class="form-control" name="ingredientName" placeholder="Ingredient Name">
            </div>
            <div class="col">
                <input type="text" class="form-control" name="ingredientQty" placeholder="Quantity">
            </div>
            <div class="col">
                <input type="text" class="form-control" name="ingredientUnits" placeholder="Unit of Measure">
            </div>
            <button type="button" id="btnAddIngredient" class="btn btn-primary">Add</button>
        </div>`;

    let formButtons = `
        <div class="row">
            <div class="col text-right">
                <button type="button" id="btnCancel" class="btn btn-secondary">Cancel</button>
                <button type="button" id="btnSave" class="btn btn-primary">Save Recipe</button>
            </div>
        </div>`;

    $('.recipeTitle').html(`<div class="form-group"><label for="title">Title</label><input type="text" class="form-control" name="title" placeholder="Recipe Title"></div>`);
    $('div#sectionTitle').after(sectionCategory);
    $('.recipeServe').html(`<div class="form-group"><label for="servings">Servings</label><input type="text" class="form-control" name="servings" placeholder="Servings"></div>`);
    $('.recipePrep').html(`<div class="form-group"><label for="prepTime">Prep Time</label><input type="text" class="form-control" name="prepTime" placeholder="Prep Time"></div>`);
    $('.recipeCook').html(`<div class="form-group"><label for="cookTime">Cook Time</label><input type="text" class="form-control" name="cookTime" placeholder="Cooking Time"></div>`);
    $('.recipeIngredients').append(sectionIngredients);
    $('.recipeInstructions').html(`<div class="form-group"><label for="instructions">Instructions</label><textarea class="form-control" name="instructions" rows="10"></textarea></div>`);
    $('.container').append(formButtons);
}

// Render the Recipe Add form
const renderRecipeForm = function() {

    // Render the recipe add from html
    buildRecipeForm();

    // populate the category field with options
    getCategories();
}

// Get categories for the Recipe Form
const getCategories = function() {
    $.get('/api/categories')
    .then(function(data) {
        data.forEach(category => {
            $("select[name='category']").append(`<option value="${category.categoryId}">${category.name}</option>`);
        });
    });
}

// DOM Ready
$(document).ready(function() {
    // get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // if MODE equals 'EDIT' then load the form otherwise display the recipe
    if(urlParams.get('mode') === 'edit') {
        renderRecipeForm();
    } else {
        renderRecipe(urlParams.get('recipeId'));
    }

    // Add row to ingredients array and update the table
    $('#btnAddIngredient').on('click', function(event) {
        // Prevent default button behavior
        event.preventDefault();

        // Get the values from the ingredient form
        let name = $("input[name='ingredientName']").val();
        let qty = $("input[name='ingredientQty']").val();
        let units = $("input[name='ingredientUnits']").val();
        
        // Create an object
        const ingredient = {
            name: name,
            qty: qty,
            units: units
        }
        
        // Add to Ingredients Array
        ingredients.push(ingredient);

        // Template for ingredients table row
        const tmplIngredientRow = (obj) => {
            return `
                <tr>
                    <td>${obj.name}</td>
                    <td>${obj.qty}</td>
                    <td>${obj.units}</td>
                </tr>
            `
        }

        // Add new Ingredient to Table
        $('#ingredientsTable').append(tmplIngredientRow(ingredient));

        // Reset Ingredient Form Fields
        $('#ingredientForm :input').val('');
    });

    // Cancel the form and return to the homepage
    $('#btnCancel').on('click', function(event) {
        // Prevent default button behavior
        event.preventDefault();

        // Redirect to index.html page
        window.location.href='/index.html';
    });

    // Save recipe to the database
    $('#btnSave').on('click', function(event) {
        // Prevent default button behavior
        event.preventDefault();

        // Get the values from the recipe fields
        let title = $("input[name='title']").val();
        let photoUrl = $("input[name='photoUrl']").val();
        let servings = $("input[name='servings']").val();
        let prepTime = $("input[name='prepTime']").val();
        let cookTime = $("input[name='cookTime']").val();
        let instructions = $("textarea[name='instructions']").val();
        let categoryId = $("select[name='category']").val();

        // Create an object for the recipe
        const recipe = {
            title: title,
            categoryId: categoryId,
            image: photoUrl,
            servings: servings,
            prepTime: prepTime,
            cookTime: cookTime,
            instructions: instructions
        }

        
        // Call the POST api to add the recipe to the database
        $.post('/api/recipe', recipe)
        .then(function(data) {
            // Get the new recipe's ID
            let recipeId = data.recipeId;    
            console.log(data);
            console.log(data.recipeId);
            
            // Foreach ingredient in the ingredents array, add to database
            ingredients.forEach(ingredient => {

                // Format the JSON object
                const obj = {
                    name: ingredient.name,
                    units: ingredient.qty,
                    measurementUnit: ingredient.units,
                    recipeId: recipeId
                };

                // call ingredients POST api to add the ingredient to database
                $.post('/api/ingredient', obj);
            });
    
            // Redirect to the new recipe's page
            window.location.href = `/recipe?recipeId=${recipeId}&mode=view`;
        });  
    });
});