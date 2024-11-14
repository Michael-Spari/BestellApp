function renderDishesNavi(array) {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const dish = array[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}