import { getRecipeCard } from "./getRecipeCard.js";
import { getCuisineCard } from "./getCuisine.js";

//=======================================Variable declaration and initialization============================================================//
const RECIPEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const CUISINEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines";

const cardParentContainer = document.querySelector(".main")
const cuisineParentContainer = document.querySelector(".cuisine-filter")
const searchBox = document.querySelector(".input");

let searchValue = "";
let filteredArrOfRecipes = [];
let arrOfSelectedCuisine = [];

const createElement = (element)=>document.createElement(element);

//===========================================================================================================================================//



//================================Async Await Function to fetch data from api using axios method=============================================//
const getData = async(url)=> {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch(err){
        console.log("Error in async function", err)
    }
}
const recipes = await getData(RECIPEURL);
console.log(recipes);

const cuisines = await getData(CUISINEURL);
console.log(cuisines);
//==============================================================================================================================================//



//=============================================Method to get filtered Data=================================================================//
const getFilteredData = ()=>{
    filteredArrOfRecipes = searchValue?.length > 0 ? 
        recipes.filter(recipe => recipe.TranslatedRecipeName.toLowerCase().includes(searchValue)) :
        recipes;

    if(arrOfSelectedCuisine?.length > 0 ){
        filteredArrOfRecipes = searchValue?.length < 1 ? recipes : filteredArrOfRecipes;
        filteredArrOfRecipes = filteredArrOfRecipes.filter(recipe => arrOfSelectedCuisine.includes(recipe.Cuisine));
    }
    return filteredArrOfRecipes;
}
//==============================================================================================================================================//



//==========================================Search Input Method Functionality====================================================================//
const searchInputHandler = (event) => {
    searchValue = event.target.value.toLowerCase();
    const filteredData = getFilteredData();

    cardParentContainer.innerHTML = "";
    getRecipeCard(filteredData, cardParentContainer, createElement);
}
//==============================================================================================================================================//



//==========================================Debounce Method for the Search Element Box==========================================================//
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, 
// that it stalls the performance of the web page. In other words, 
// it limits the rate at which a function gets invoked.
function debounce(callback, delay){
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(()=>{callback(...args)}, delay);
        
    };
}
const debounceInput = debounce(searchInputHandler, 700);
//==============================================================================================================================================//


//============================================Method for Cuisine CheckBox Filter================================================================//
const handleCuisineClick = (event)=>{
    const id = event.target.dataset.id;
    const isSelected = event.target.checked;
    
    const selectedCuisine = cuisines.reduce((acc, cur) => cur.ID === acc ? cur.Cuisine : acc,id);

    arrOfSelectedCuisine = isSelected ? [...arrOfSelectedCuisine, selectedCuisine] : arrOfSelectedCuisine.filter(cuisine => cuisine !== selectedCuisine);
    
    const filteredArrOfCuisine = getFilteredData();

    cardParentContainer .innerHTML = "";
    getRecipeCard(filteredArrOfCuisine, cardParentContainer, createElement);
}
//==============================================================================================================================================//



//==============================================Single Recipe On Next Page=====================================================================//
cardParentContainer.addEventListener("click", (event) => {
    const cardId = event.target.dataset.id;
    if(cardId){
        localStorage.clear();
        localStorage.setItem("id", cardId);
        location.href = "single-recipe.html";
    }
});
//==============================================================================================================================================//



searchBox.addEventListener("keyup", debounceInput);
cuisineParentContainer.addEventListener("click", handleCuisineClick);

getRecipeCard(recipes, cardParentContainer, createElement);
getCuisineCard(cuisines, cuisineParentContainer, createElement);