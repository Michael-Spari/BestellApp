function dishesTemplate(dish) {
    return `
        <div class="contentField">
          <div class="dishesField">
            <div class="imageField"><img src="${dish.image}" alt="${dish.name}" /></div>
              <div class="descriptionField"><h2>${dish.name}</h2><p>${dish.description}</p></div>
                <p>${dish.price.toFixed(2).replace('.', ',')} €</p>
                <div class="buttonField">
                  <img onclick="addDish(${dish.id})" class="addIcon" src="./assets/icons/button_add.jpg">
                </div>
          </div>
        </div>`;
  }

  function basketRowsTemplate(dish) {
    return `
      <div class="basketRow" id="row-${dish.id}">
        <div>${dish.name}</div>
          <div id="amount-${dish.id}">${dish.amount}</div>
            <div id="price-${dish.id}">${(dish.amount * dish.price).toFixed(2).replace('.', ',')} €</div>
              <div class="buttonField">
                  <img onclick="removeDish(${dish.id})" class="removeIcon" src="./assets/icons/button_remove.jpg">
                  <img onclick="addDish(${dish.id})" class="addIcon" src="./assets/icons/button_add.jpg">
                  <img onclick="clearBasket(${dish.id})" class="clearIcon" src="./assets/icons/trash.jpg">
              </div>
      </div>`;
  }