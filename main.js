let foodToSearch = null;
function handleRecipeClick() {
    fetchRecipe(foodToSearch);
 }
function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}
const YOUR_APP_ID = "eecc661d"
const YOUR_APP_KEY = "bf4bf82e13005c603841071bd3edcde0"
const searchForm = document.querySelector('form');
const searchResultSection = document.getElementById('search-result');
const recipeSection = document.getElementById('recipe-section');

 async function fetchRecipe() {
   //use fetch to do GET request for recipe 
   const requestUrl = await fetch(`https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&to=3`);
   //console.log(requestUrl);
   const dataResponse = await requestUrl.json();
   // only grabs the hits array from the response
   generateRecipeResults(dataResponse.hits);
   console.log(dataResponse);
 }
function generateRecipeResults(recipes){
 let generatedResults = '';   
 recipes.map(result => {
  generatedResults += 
  `
    <div class="recipe-data">
        <img class="recipe-img" src="${result.recipe.image}" alt="" />
        <div class="item-result">
            <h2 class="title">${result.recipe.label}</h2>
            <a class="recipe-label" href="${result.recipe.url}" target="_blank">View Recipe</a>
        </div>
        <p class="recipe-data">Calories : ${result.recipe.calories.toFixed(1)}</p>
        <p class="recipe-data">Diet label : ${result.recipe.dietLabels}</p>
        <p class="recipe-data"> Ingredients: ${result.recipe.ingredientLines}</p>
    </div>
  `
})
searchResultSection.innerHTML = generatedResults;
}