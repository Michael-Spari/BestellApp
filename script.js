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
            <h2>${dish.name}</h2>
            <p>${dish.description}</p>
            <p>${dish.price.toFixed(2).replace('.', ',')} €</p>
                <div>${dish.amount}</div>
        </div>
    </div>`;
}