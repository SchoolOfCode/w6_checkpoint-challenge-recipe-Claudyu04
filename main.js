let foodToSearch = null;
const recipeImage1 = document.getElementById("image-id1");
const recipeImage2 = document.getElementById("image-id2");
const recipeImage3 = document.getElementById("image-id3");
const recipeCaption1 = document.getElementById("caption1");

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

const YOUR_APP_ID = "eecc661d"
const YOUR_APP_KEY = "bf4bf82e13005c603841071bd3edcde0"

const aTag = document.getElementById("recipe-label");

async function fetchRecipe(food) {
  const requestUrl = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const dataResponse = await requestUrl.json();
  // console.log (dataResponse);
 const resultRecipe = dataResponse.hits[0];
 aTag.innerHTML = resultRecipe.recipe.label;
 aTag.href = resultRecipe.recipe.url;
}

// Can you add images, ingredients or other information to your page?
async function fetchRecipe(food) {
 // show first receipe image
  const requestUrl = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const dataResponse = await requestUrl.json();
  // console.log (dataResponse);
 const resultRecipe = dataResponse.hits[0];
 recipeImage1.src = resultRecipe.recipe.image;
recipeImage1.href = resultRecipe.recipe.url;
// aTag.innerHTML = resultRecipe.recipe.label;
recipeCaption1.innerHTML = resultRecipe.recipe.label;
 // show second receipe image
const requestUrl2 = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const dataResponse2 = await requestUrl2.json();
  const resultRecipe2 = dataResponse2.hits[1];
 aTag.href = resultRecipe.recipe.url;
 recipeImage2.src = resultRecipe2.recipe.image;
 recipeImage2.href = resultRecipe2.recipe.url;
// show third receipe image
 const requestUrl3 = await fetch (`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const dataResponse3 = await requestUrl3.json();
  const resultRecipe3 = dataResponse3.hits[2];
 aTag.href = resultRecipe.recipe.url;
 recipeImage3.src = resultRecipe3.recipe.image;
 recipeImage3.href = resultRecipe3.recipe.url;
}

// const todoIdList = [1, 2, 3, 4]
// for (const id of todoIdList) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//   const todo = await response.json()
//   console.log(todo.title)
// }
