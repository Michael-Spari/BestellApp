function init() {
  renderDishes();
  renderBasket();
}

function renderDishes() {
  const dishesFrame = document.getElementById('dishesFrame');
  dishesFrame.innerHTML = "";
  for (let index = 0; index < 4; index++) {
    const dish = dishes[index];
    dishesFrame.innerHTML += dishesTemplate(dish);
  }
}

function addDish(id) {
  // Sucht das Gericht mit der ID
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];
    
  // Prüfe, ob das Gericht bereits in der Anzeige des Warenkorbs existiert
  const amountElement = document.getElementById(`amount-${id}`);
  const priceElement = document.getElementById(`price-${id}`);
  // Falls Gericht gefunden wurde, Menge erhöhen
  if (dish) {
    dish.amount++;
    
    // Aktualisiere die Menge und den Preis des vorhandenen Gerichts
    if (amountElement && priceElement) {
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

function removeDish(id) {
  // Sucht das Gericht mit der ID
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];
    
  // Prüfe, ob das Gericht bereits in der Anzeige des Warenkorbs existiert
  const amountElement = document.getElementById(`amount-${id}`);
  const priceElement = document.getElementById(`price-${id}`);
    // Falls Gericht gefunden wurde, Menge verringern
  if (dish) {
    dish.amount--;

    // Aktualisiere die Menge und den Preis des vorhandenen Gerichts
    if (amountElement && priceElement) {
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

function clearBasket(id) {
  // Sucht das Gericht mit der ID
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];

  // Falls Gericht gefunden wurde, Menge auf 0 setzen
  if (dish) {
    dish.amount = 0;
    renderBasket();
    const basketRow = document.getElementById(`row-${id}`);
    if (basketRow) {
      basketRow.remove();
    }
  }
}

//zwischensumme in id="basketSubtotalPrice" und Gesamtpreis in id="basketTotalPrice" anzeigen

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
