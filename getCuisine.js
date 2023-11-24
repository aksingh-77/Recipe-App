export const getCuisineCard = (arrOfCuisine, parentElement, createElement) => {
    for(let cuisine of arrOfCuisine){
        const cuisineContainer = createElement("div");
        cuisineContainer.classList.add("filter");
        cuisineContainer.setAttribute("data-id", cuisine.ID);

        //Creating CheckBox
        const checkBox = createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.classList.add("checkbox");
        checkBox.setAttribute("data-id",cuisine.ID);

        //Creating Cuisine label
        const label = createElement("label");
        label.classList.add("cuisine-label", "d-flex", "align-items-center", "gap-sm");
        label.appendChild(checkBox);

        const labelText = createElement("span");
        labelText.innerText = cuisine.Cuisine;
        labelText.setAttribute("data-id",cuisine.ID);
        label.appendChild(labelText);

        label.appendChild(labelText);
        label.setAttribute("data-id", cuisine.ID);

        cuisineContainer.appendChild(label);
        parentElement.appendChild(cuisineContainer);

    }
}