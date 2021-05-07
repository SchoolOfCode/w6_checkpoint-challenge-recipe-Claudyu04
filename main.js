let foodToSearch = null;

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
