// Modificate the functions for use async/await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startPizza() {
    await delay(1000);
    console.log("Pizza is cooking...");
}

async function addsauceTomatoAndCheese() {
    await delay(1000);
    console.log("Added the sauce and cheese");
}

async function addToppings() {
    await delay(1000);
    console.log("Added the pizza toppings");
}

async function cookPizza() {
    await delay(1000);
    console.log("Pizza is cooked");
}


async function pizzaReady() {
    await delay(1000);
    console.log("Pizza is ready");
}

async function makePizza() {
    await startPizza();
    await addsauceTomatoAndCheese();
    await addToppings();
    await cookPizza();
    await pizzaReady();
}

// Begin to Make pizza

makePizza();