import { getRecipeCard } from "./getRecipeCard.js";

//=======================================Variable declaration and initialization============================================================//
const URL = " https://recipeapi.prakashsakari.repl.co/api/recipes";

const cardParentContainer = document.querySelector(".main")

const createElement = (element)=>document.createElement(element);

//===========================================================================================================================================//



//================================Async Await Function to fetch data from api using axios method=============================================//
const getRecipes = async(url)=> {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch(err){
        console.log("Error in async function", err)
    }
}
const recipes = await getRecipes(URL);
console.log(recipes);
//==============================================================================================================================================//



//==========================================================================//



//==============================================================================================================================================//
getRecipeCard(recipes, cardParentContainer, createElement);