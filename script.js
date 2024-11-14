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
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];
  const amountElement = document.getElementById(`amount-${id}`);
  const priceElement = document.getElementById(`price-${id}`);
  if (dish) {
    dish.amount++;
    
    if (amountElement && priceElement) {
      amountElement.innerHTML = dish.amount;
      priceElement.innerHTML = (dish.amount * dish.price).toFixed(2).replace('.', ',') + ' €';
      renderBasket();
      
    } else {
      const basketRowsContainer = document.getElementById('basketRows');
      basketRowsContainer.innerHTML += basketRowsTemplate(dish);
      renderBasket();
    }
  }
}

function removeDish(id) {
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];
  const amountElement = document.getElementById(`amount-${id}`);
  const priceElement = document.getElementById(`price-${id}`);
  if (dish) {
    dish.amount--;

    if (amountElement && priceElement) {
      amountElement.innerHTML = dish.amount;
      priceElement.innerHTML = (dish.amount * dish.price).toFixed(2).replace('.', ',') + ' €';
      renderBasket();
      
      if (dish.amount === 0) {
        const basketRow = document.getElementById(`row-${id}`);
        basketRow.remove();
        renderBasket();
      }
    }
  }
}

function clearBasket(id) {
  const dishIndex = dishes.findIndex(dish => dish.id === id);
  const dish = dishes[dishIndex];

  if (dish) {
    dish.amount = 0;
    renderBasket();
    const basketRow = document.getElementById(`row-${id}`);

    if (basketRow) {
      basketRow.remove();
    }
  }
}

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
