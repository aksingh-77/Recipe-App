import { getRecipeCard } from "./getRecipeCard.js";

//=================================================Varible Declaration and initilazation======================================================//
const cardId = localStorage.getItem("id");

const cardContainer = document.querySelector(".card");

const SINGLERECIPEURL = `https://recipeapi.prakashsakari.repl.co/api/recipes/${cardId}`;
//==============================================================================================================================================//



//=================================Create element Method=====================================================================================//
const createElement = (element) => document.createElement(element);
//==============================================================================================================================================//



//================================Async Await Function to fetch data from api using axios method=============================================//
const getData = async(url)=> {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch(err){
        console.log("Error in async function", err)
    }
};
const singleRecipe = await getData(SINGLERECIPEURL);
console.log(singleRecipe);


//Getting the Recipe Ingredients and Instruction in to variable
const recipeIngredients = singleRecipe[0]["TranslatedIngredients"].split(",");
const recipeInstructions = singleRecipe[0]["TranslatedInstructions"].split(",");
console.log(recipeIngredients);
console.log(recipeInstructions);
//==============================================================================================================================================//


//====================================================Creation of Single Recipe Ingrediants Section=============================================//
const ingredientsContainer = document.querySelector("#ingredients");
// console.log(ingredientsContainer);

for (let ingredient of recipeIngredients){
    const ingredientElement = createElement("li");
    ingredientElement.innerText = ingredient;
    ingredientsContainer.appendChild(ingredientElement);
}
//==============================================================================================================================================//



//===================================Creation of Single Recipe Instruction Section==============================================================//
const instructioncontainer = document.querySelector("#instructions");

for (let instruction of recipeInstructions){
    const instructionElement = createElement("li");
    instructionElement.innerText = instruction;

    instructioncontainer.appendChild(instructionElement);
}

//==============================================================================================================================================//
getRecipeCard(singleRecipe, cardContainer, createElement);