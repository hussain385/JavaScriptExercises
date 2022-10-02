const pizzas = ["BBQ", "fajita", "pepperoni"];

pizzas.map((pizza) => {
    console.log(`I love ${pizza} pizza`);
});

console.log(
    `My favorite pizzas are ${pizzas.join(" pizza, ")} pizza`
);
