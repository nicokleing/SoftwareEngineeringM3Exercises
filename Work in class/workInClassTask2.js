// Task 2: doing the async functions using setTimeout


function startPizza() {
    setTimeout(() => {
        console.log("Started preparing pizza mmm ñami...");
        makeBase();
    }, 2000);
}



const makeBase = function() {
    setTimeout(() => {
        console.log("Make the base");
        addsauceTomatoAndCheese();
}, 3000);
};



const addsauceTomatoAndCheese = () => {
    setTimeout(() => {
        console.log("Add sauce tomato and cheese");
        addToppings();
}, 1000);
};



function addToppings() {
    setTimeout(() => {
        console.log("Add toppings");
    cookPizza();
}, 1000);
}


const cookPizza = function() {
    setTimeout(() => {
        console.log("Cooking the pizza");
        pizzaReady();
        }, 4000);
}

const pizzaReady = () => {
    setTimeout(() => {
        console.log("The pizza is ready");
    }, 1000);
};

// For starting the process

startPizza();