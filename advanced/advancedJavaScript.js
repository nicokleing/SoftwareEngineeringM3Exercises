// Task 1: Creating and Testing Counter Functions
// a) Create a Second Counter and Test Independence

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();
// counter1();
// counter1();



// let counter2 = makeCounter();
// counter2();
// counter2();


// b) Modify makeCounter to Start from a Specified Number

// function makeCounter(startFrom) {
//     let currentCount = startFrom;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;
//     }
// }

// let counter1 = makeCounter(2);
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();

// let counter2 = makeCounter(15);
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();
// counter2();


// c) Modify makeCounter to Specify Increment Value


// function makeCounter(startFrom, Incrementby) {
//     let currentCount = startFrom;
//     return function() {
//         currentCount += Incrementby;
//         console.log(currentCount);
//         return currentCount;
//     };
// }

// let counter1 = makeCounter(5, 2);
// counter1();
// counter1();

// let counter2 = makeCounter(10, 3);
// counter2();
// counter2();

// Task 2: Delay Message Function
// a) Order of Printing

// a) Order of Printing
// The order of printing will be:

// #4: Not delayed at all
// #3: Delayed by 0ms
// #2: Delayed by 20ms
// #1: Delayed by 100ms



// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`);
// };

// setTimeout(delayMsg, 1000, '#1: Delayed by 1 second');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all');



// // c) Add a Fifth Test with a Large Delay

// setTimeout(delayMsg, 10000, '#5: Delayd by 10 seconds');

// // d) Use clearTimeout to Prevent the Fifth Test from Printing

// const timeoutId = setTimeout(delayMsg, 10000, '#5: Delayed by 10000ms');
// clearTimeout(timeoutId);


// Task 3: Debouncing

// a) Create debounce Decorator

// function debounce(func, ms = 1000) {
//     let timeout;
//     return function(...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), ms);
//     };
// }

// function printMe() {
//     console.log('Printing debounced message');
// }

// printMe = debounce(printMe);

// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// c) Allow printMe to Take an Argument msg

// function debounce(func, ms = 1000) {
//     let timeout;
//     return function(...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, args), ms);
//     };
// }


// function printMe(msg) {
//     console.log(`printing debounced message: ${msg}`);
// }

// printMe = debounce(printMe);

// setTimeout(() => printMe('Message 1'), 100);
// setTimeout(() => printMe('Message 2'), 200);
// setTimeout(() => printMe('Message 3'), 300);



// Task 4: Fibonacci Sequence
// a) printFibonacci Using setInterval


// function printFibonacci() {
//     let [a, b] = [0, 1];
//     setInterval(() => {
//         console.log(a);
//         [a, b] = [b, a + b];
//     }, 1000);
// }

// printFibonacci();


// b) printFibonacciTimeouts Using Nested setTimeout


// function printFibonacciTimeouts() {
//     let [a, b] = [0, 1];
//     function printNext() {
//         console.log(a);
//         [a, b] = [b, a + b];
//         setTimeout(printNext, 1000);
//     }
//     printNext();
// }

// printFibonacciTimeouts();

// c) Extend Function to Accept limit Argument

// function printFibonacciTimeouts(limit) {
//     let [a, b] = [0, 1];
//     let count = 0;
//     function printNext() {
//         if (count >= limit) return;
//         console.log(a);
//         [a, b] = [b, a + b];
//         count++;
//         setTimeout(printNext, 1000);
// }
// printNext();
// }

// printFibonacciTimeouts(10);

// Task 5: Fixing setTimeout in car Object

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
// car.description(); //works setTimeout(car.description, 200); //fails



// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };

// car.description(); 

// setTimeout(function () {
//   car.description();
// }, 200); 

// Guarda una referencia a this en una variable, luego úsala dentro de una función.


// Task 6: Adding delay Method to All Functions
// a) Add delay Method

// Function.prototype.delay = function(ms) {
//     let func = this;
//     return function(...args) {
//         setTimeout(() => func.apply(this, args), ms);
//     };
// };

// function multiply(a, b) {
//     console.log(a * b);
// }

// multiply.delay(500)(5, 5); 


// b) Use apply to Improve Solution

// Function.prototype.delay = function(ms) {
//     let func = this;
//     return function(...args) {
//         setTimeout(() => func.apply(this, args), ms);
//     };
// };

// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
// }

// multiply.delay(500)(2, 3, 4, 5); 


// Task 7: Custom toString Method
// a) Define Custom toString for Person

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.toString = function() {
//     return `Person: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
// };

// // b) Test with two people
// const person1 = new Person('James Brown', 73, 'male');
// const person2 = new Person('Anna Smith', 29, 'female');
// console.log(person1.toString()); 
// console.log(person2.toString()); 


// c) Create Student Constructor

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.toString = function() {
//     return `Person: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
// };

// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;
// }


// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.toString = function() {
//     return `Student: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
// };


// const student1 = new Student('Mark Johnson', 22, 'male', '2022');
// const student2 = new Student('Lisa White', 21, 'female', '2023');
// console.log(student1.toString()); 
// console.log(student2.toString()); 

// Task 8: Digital Clock
// a) PrecisionClock Class

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), this.precision);
    }
}

const myClock = new PrecisionClock('my clock:', 500);
myClock.start();



// b) AlarmClock Class


class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        let currentTime = `${hours}:${mins}`;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
        if (currentTime === this.wakeupTime) {
            console.log('Wake Up!');
            this.stop();
        }
    }
}

const myAlarmClock = new AlarmClock('my alarm:', '07:00');
myAlarmClock.start();


// Task 9: Promise-Based randomDelay
// a) Create randomDelay

function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000;
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

randomDelay().then((delay) => console.log(`There appears to have been a delay of ${delay}ms.`))
    .catch((delay) => console.log(`There was a failure with a delay of ${delay}ms.`));


    // Task 10: Fetch URL Data
    // a) Rewrite Using async/await

    import fetch from 'node-fetch';

    async function fetchURLData(url) {
        try {
            let response = await fetch(url);
            if (response.status === 200) {
                let data = await response.json();
                return data;
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            throw error;
        }
    }
    
    // b) Test with valid and invalid URLs
    fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => console.log(data))
        .catch(error => console.error(error.message));
    
    fetchURLData('https://jsonplaceholder.typicode.com/invalidurl')
        .then(data => console.log(data))
        .catch(error => console.error(error.message));

        
        
        // c) Extend to Accept Array of URLs

        async function fetchMultipleURLs(urls) {
            try {
                const fetchPromises = urls.map(url => fetch(url).then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error(`Request failed with status ${response.status}`);
                    }
                }));
                const results = await Promise.all(fetchPromises);
                return results;
            } catch (error) {
                throw error;
            }
        }
        
        const urls = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/invalidurl'
        ];
        
        fetchMultipleURLs(urls)
            .then(results => console.log(results))
            .catch(error => console.error(error.message));
        