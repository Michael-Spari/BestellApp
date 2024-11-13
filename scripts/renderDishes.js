function renderDishesPizza() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesPizza.length; i++) {
        const dish = dishesPizza[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}

function renderDishesPasta() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesPasta.length; i++) {
        const dish = dishesPasta[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}

function renderDishesBurger() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesBurger.length; i++) {
        const dish = dishesBurger[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}

function renderDishesSalat() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesSalat.length; i++) {
        const dish = dishesSalat[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}

function renderDishesDesserts() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesDesserts.length; i++) {
        const dish = dishesDesserts[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}

function renderDishesDrinks() {
    const dishesFrame = document.getElementById('dishesFrame');
    dishesFrame.innerHTML = "";
    for (let i = 0; i < dishesDrinks.length; i++) {
        const dish = dishesDrinks[i];
        dishesFrame.innerHTML += dishesTemplate(dish);
    }
}