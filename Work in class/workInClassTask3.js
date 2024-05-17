// Modificate the Asinc functions for use promises

function startPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Start of preparing the pizza...");
        resolve();
    }, 1000);
});
}

const makeBase = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Make the base of the pizza...");
            resolve();
}, 1000);
});
};



const addsauceTomatoAndCheese = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Added a new souce tomato and cheese");
            resolve();
    }, 1000);
});
};


const addToppings = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Added the toppings");
            resolve();
    }, 1000);
    });
};


const cookPizza = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cooking the pizza...");
            resolve();
        }, 1000);
});
};


const pizzaReady = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Pizza is ready");
            resolve();
    }, 1000);
});
};

// Chain the promises

startPizza()
.then(makeBase)
.then(addsauceTomatoAndCheese)
.then(addToppings)
.then(cookPizza)
.then(pizzaReady);




