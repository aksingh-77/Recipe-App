export const getRecipeCard = (recipes, parentElement, createElement) => {
    for(let recipe of recipes) {

        /**Card Parent Container */
        const cardContainer = createElement("div");
        cardContainer.classList.add("card", "shadow");


        /**Card Image Conatiner */
        const cardImageContainer = createElement("div");
        cardImageContainer.classList.add("card-image-container");

        /**Card Image Element */
        const imageElement = createElement("img");
        imageElement.classList.add("card-image");
        imageElement.setAttribute("src", recipe["image-url"]);//here as hipen is used in between we will pass the parameter as this
        imageElement.setAttribute("alt", recipe.TranslatedRecipeName);
        imageElement.setAttribute("data-id", recipe.ID);
        cardImageContainer.appendChild(imageElement);

        cardContainer.appendChild(cardImageContainer);

        /**Card Details Container */
        const cardDetailsContainer = createElement("div");
        cardDetailsContainer.classList.add("recipe-details");

       /**Card Title Element */
       const CardTitleElement = createElement("div");
       CardTitleElement.classList.add("title");
       CardTitleElement.innerText = recipe.TranslatedRecipeName;
       cardDetailsContainer.appendChild(CardTitleElement);

       /**Card Rating & Duration Container */
       const cardRatingAndLength = createElement("div");
       cardRatingAndLength.classList.add("ratings");

       /**Rating Element */
        const cardRatingContainer = createElement("div");

        const ratingValueElement = createElement("span");
        ratingValueElement.innerText = `Cuisine : ${recipe.Cuisine}`;

        cardRatingContainer.appendChild(ratingValueElement);
        cardRatingAndLength.appendChild(cardRatingContainer);

        /**Duration Icon Timer */
        const lengthElement = createElement("div");
        lengthElement.classList.add("star-rating");

        const ratingIconElement = createElement("span");
        ratingIconElement.classList.add("time","material-icons-outlined");
        ratingIconElement.innerText = "timer";
        lengthElement.appendChild(ratingIconElement);
        
        /**duration timer */
        const duration = createElement("spna");
        duration.innerText = `${recipe.TotalTimeInMins} mins`;
        lengthElement.appendChild(duration);


        cardRatingAndLength.appendChild(lengthElement);
        cardDetailsContainer.appendChild(cardRatingAndLength);
        cardContainer.appendChild(cardDetailsContainer);

        parentElement.appendChild(cardContainer);
    }
};