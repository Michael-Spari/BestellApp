let dishes =[
    {
        "id": 1,
        "name": "Pizza Margherita", 
        "price": 15.00,
        "description": "mit Tomaten, Mozzarella, Basilikum",
        "amount": 0,
        "image": "./assets/img/pizza_margherita.jpg",
    },
    {
        "id": 2,
        "name": "Pizza Salami", 
        "price": 16.00,
        "description": "mit Tomaten, Mozzarella, Salami",
        "amount": 0,
        "image": "./assets/img/pizza_salami.jpg",
    },
    {
        "id": 3,
        "name": "Pizza Funghi", 
        "price": 16.00,
        "description": "mit Tomaten, Mozzarella, Champignons",
        "amount": 0,
        "image": "./assets/img/pizza_funghi.jpg",
    },
    {
        "id": 4,
        "name": "Pizza Prosciutto", 
        "price": 16.00,
        "description": "mit Tomaten, Mozzarella, Schinken",
        "amount": 0,
        "image": "./assets/img/pizza_prosciutto.jpg",
    },
    {
        "id": 5,
        "name": "Pizza Stagioni", 
        "price": 17.00,
        "description": "mit Tomaten, Mozzarella, Schinken, Champignons, Oliven",
        "amount": 0,
        "image": "./assets/img/pizza_quattro_stagioni.jpg",
    },
    {
        "id": 6,
        "name": "Burger Cheese",
        "price": 12.00,
        "description": "mit Rindfleisch, Käse, Tomaten, Gurken, Salat",
        "amount": 0,
        "image": "./assets/img/burger_cheese.jpg",
    },
    {   
        "id": 7,
        "name": "Burger Bacon",
        "price": 13.00,
        "description": "mit Rindfleisch, Käse, Tomaten, Gurken, Salat, Bacon",
        "amount": 0,
        "image": "./assets/img/burger_bacon.jpg",
    },
    {
        "id": 8,
        "name": "Burger Veggie",
        "price": 11.00,
        "description": "mit Gemüse, Käse, Tomaten, Gurken, Salat",
        "amount": 0,
        "image": "./assets/img/burger_veggie.jpg",
    },
    {
        "id": 9,
        "name": "Burger Chicken",
        "price": 12.00,
        "description": "mit Hähnchen, Käse, Tomaten, Gurken, Salat",
        "amount": 0,
        "image": "./assets/img/burger_chicken.jpg",
    },
    {
        "id": 10,
        "name": "Burger Fish",
        "price": 13.00,
        "description": "mit Fisch, Käse, Tomaten, Gurken, Salat",
        "amount": 0,
        "image": "./assets/img/burger_fish.jpg",
    },
    {
        "id": 11,
        "name": "Pasta Carbonara",
        "price": 12.00,
        "description": "mit Speck, Ei, Sahnesauce",
        "amount": 0,
        "image": "./assets/img/pasta_carbonara.jpg",
    },
    {
        "id": 12,
        "name": "Pasta Bolognese",
        "price": 12.00,
        "description": "mit Hackfleischsauce",
        "amount": 0,
        "image": "./assets/img/pasta_bolognese.jpg",
    },
    {
        "id": 13,
        "name": "Pasta Aglio e Olio",
        "price": 11.00,
        "description": "mit Knoblauch, Olivenöl, Peperoni",
        "amount": 0,
        "image": "./assets/img/pasta_aglio_e_olio.jpg",
    },
    {
        "id": 14,
        "name": "Pasta Arrabiata",
        "price": 11.00,
        "description": "mit Tomatensauce, Peperoni",
        "amount": 0,
        "image": "./assets/img/pasta_arrabiata.jpg",
    },
    {
        "id": 15,
        "name": "Pasta Pesto",
        "price": 11.00,
        "description": "mit Basilikum, Pinienkernen, Parmesan",
        "amount": 0,
        "image": "./assets/img/pasta_pesto.jpg",
    },
    {
        "id": 16,
        "name": "Salat Caprese",
        "price": 9.00,
        "description": "mit Tomaten, Mozzarella, Basilikum",
        "amount": 0,
        "image": "./assets/img/salat_caprese.jpg",
    },
    {
        "id": 17,
        "name": "Salat Caesar",
        "price": 10.00,
        "description": "mit Hähnchen, Parmesan, Croutons",
        "amount": 0,
        "image": "./assets/img/salat_caesar.jpg",
    },
    {
        "id": 18,
        "name": "Salat Nicoise",
        "price": 10.00,
        "description": "mit Thunfisch, Oliven, Ei, Bohnen",
        "amount": 0,
        "image": "./assets/img/salat_nicoise.jpg",
    },
    {
        "id": 19,
        "name": "Salat Waldorf",
        "price": 9.00,
        "description": "mit Äpfeln, Walnüssen, Sellerie",
        "amount": 0,
        "image": "./assets/img/salat_waldorf.jpg",
    },
    {
        "id": 20,
        "name": "Salat Griechisch",
        "price": 9.00,
        "description": "mit Oliven, Feta, Gurken, Tomaten",
        "amount": 0,
        "image": "./assets/img/salat_griechisch.jpg",
    },
    {
        "id": 21,
        "name": "Tiramisu",
        "price": 5.00,
        "description": "mit Mascarpone, Kaffee, Löffelbiskuits",
        "amount": 0,
        "image": "./assets/img/tiramisu.jpg",
    },
    {
        "id": 22,
        "name": "Panna Cotta",
        "price": 5.00,
        "description": "mit Sahne, Vanille, Erdbeersauce",
        "amount": 0,
        "image": "./assets/img/panna_cotta.jpg",
    },
    {
        "id": 23,
        "name": "Tarte Tatin",
        "price": 5.00,
        "description": "mit Äpfeln, Blätterteig, Vanilleeis",
        "amount": 0,
        "image": "./assets/img/tarte_tatin.jpg",
    },
    {
        "id": 24,
        "name": "Crème Brûlée",
        "price": 5.00,
        "description": "mit Eigelb, Zucker, Vanille",
        "amount": 0,
        "image": "./assets/img/creme_brulee.jpg",
    },
    {
        "id": 25,
        "name": "Mousse au Chocolat",
        "price": 5.00,
        "description": "mit Schokolade, Eigelb, Sahne",
        "amount": 0,
        "image": "./assets/img/mousse_au_chocolat.jpg",
    },
    {
        "id": 26,
        "name": "Cola",
        "price": 3.00,
        "description": "mit Zucker, Koffein, Kohlensäure",
        "amount": 0,
        "image": "./assets/img/cola.jpg",
    },
    {
        "id": 27,
        "name": "Fanta",
        "price": 3.00,
        "description": "mit Zucker, Orangensaft, Kohlensäure",
        "amount": 0,
        "image": "./assets/img/fanta.jpg",
    },
    {
        "id": 28,
        "name": "Sprite",
        "price": 3.00,
        "description": "mit Zucker, Zitronensaft, Kohlensäure",
        "amount": 0,
        "image": "./assets/img/sprite.jpg",
    },
    {
        "id": 29,
        "name": "Apfelsaft",
        "price": 3.00,
        "description": "mit Zucker, Apfelsaft, Kohlensäure",
        "amount": 0,
        "image": "./assets/img/apfelsaft.jpg",
    },
    {
        "id": 30,
        "name": "Orangensaft",
        "price": 3.00,
        "description": "mit Zucker, Orangensaft, Kohlensäure",
        "amount": 0,
        "image": "./assets/img/orangensaft.jpg",
    }   
]