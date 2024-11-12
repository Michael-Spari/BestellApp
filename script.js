function init() {
  renderDishes();
  renderBasket();
}

function renderDishes() {
  const dishesFrame = document.getElementById('dishesFrame');
  dishesFrame.innerHTML = "";
  for (let index = 0; index < dishes.length; index++) {
    const dish = dishes[index];
    dishesFrame.innerHTML += dishesTemplate(dish);
  }
}

function dishesTemplate(dish) {
  return `
      <div class="contentField">
          <div class="dishesField">
            <div class="imageField"><img src="${dish.image}" alt="${dish.name}" /></div>
            <div class="descriptionField"><h2>${dish.name}</h2><p>${dish.description}</p></div>
                <p>${dish.price.toFixed(2).replace('.', ',')} €</p>
                <div class="buttonField">
                  <img onclick="removeDish(${dish.id})" class="removeIcon" src="./assets/icons/button_remove.jpg">
                  <img onclick="addDish(${dish.id})" class="addIcon" src="./assets/icons/button_add.jpg">
                </div>
          </div>
      </div>`;
}

function addDish(id) {
  // Sucht das Gericht mit der ID
  let dish = null;
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].id === id) {
      dish = dishes[i];
      break;
    }
  }

  // Falls Gericht gefunden wurde, Menge erhöhen
  if (dish) {
    dish.amount++;
    
    // Prüfe, ob das Gericht bereits in der Anzeige des Warenkorbs existiert
    const amountElement = document.getElementById(`amount-${id}`);
    const priceElement = document.getElementById(`price-${id}`);
    
    if (amountElement && priceElement) {
      // Aktualisiere die Menge und den Preis des vorhandenen Gerichts
      amountElement.innerHTML = dish.amount;
      priceElement.innerHTML = (dish.amount * dish.price).toFixed(2).replace('.', ',') + ' €';
      renderBasket();
      
    } else {
      // Falls das Gericht noch nicht im Warenkorb ist, füge es hinzu
      const basketRowsContainer = document.getElementById('basketRows');
      basketRowsContainer.innerHTML += basketRowsTemplate(dish);
      renderBasket();
    }
  }
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
          </div>
  </div>`;
}

function removeDish(id) {
  // Sucht das Gericht mit der ID
  let dish = null;
  for (let i = 0; i < dishes.length; i++) {
    if (dishes[i].id === id) {
      dish = dishes[i];
      break;
    }
  }

  // Falls Gericht gefunden wurde, Menge verringern
  if (dish) {
    dish.amount--;
    
    // Prüfe, ob das Gericht bereits in der Anzeige des Warenkorbs existiert
    const amountElement = document.getElementById(`amount-${id}`);
    const priceElement = document.getElementById(`price-${id}`);
    
    if (amountElement && priceElement) {
      // Aktualisiere die Menge und den Preis des vorhandenen Gerichts
      amountElement.innerHTML = dish.amount;
      priceElement.innerHTML = (dish.amount * dish.price).toFixed(2).replace('.', ',') + ' €';
      renderBasket();
      
      // Entferne das Gericht aus dem Warenkorb, falls die Menge 0 erreicht
      if (dish.amount === 0) {
        const basketRow = document.getElementById(`row-${id}`);
        basketRow.remove();
        renderBasket();
      }
    }
  }
}

//zwischensumme in id="basketSubtotalPrice" und gesamtpreis in id="basketTotalPrice" anzeigen

function basketSubtotalPrice() {
  let subtotalPrice = 0;
  for (let i = 0; i < dishes.length; i++) {
    subtotalPrice += dishes[i].amount * dishes[i].price;
  }
  return subtotalPrice;
}

function basketTotalPrice() {
  if (basketSubtotalPrice() === 0) {
    return 0;
  }
  return basketSubtotalPrice() + 2.50;
}

function renderBasket() {
  const basketSubtotalPriceElement = document.getElementById('basketSubtotalPrice');
  const basketTotalPriceElement = document.getElementById('basketTotalPrice');
  basketSubtotalPriceElement.innerHTML = basketSubtotalPrice().toFixed(2).replace('.', ',') + ' €';
  basketTotalPriceElement.innerHTML = basketTotalPrice().toFixed(2).replace('.', ',') + ' €';
}
