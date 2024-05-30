/*
//  1 What are the results of these expressions? (answer first, then use console.log() to check)
console.log("" + 1 + 0);      // "10"
console.log("" - 1 + 0);      // -1
console.log(true + false);    // 1
console.log(!true);           // false
console.log(6 / "3");         // 2
console.log("2" * "3");       // 6
console.log(4 + 5 + "px");    // "9px"
console.log("$" + 4 + 5);     // "$45"
console.log("4" - 2);         // 2
console.log("4px" - 2);       // NaN (Not a Number)
console.log(" -9 " + 5);      // " -9 5"
console.log(" -9 " - 5);      // -14
console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN
console.log(undefined == null);  // true
console.log(undefined === null); // false
*/
// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
/*
let three = "3"; 
let four = "4"; 
let thirty = "30";

// 2 what is the value of the following expressions?

let addition = three + four;

console.log(addition);

let multiplication = three * four 

console.log(multiplication);


let division = three / four 

console.log(division);

let subtraction = three - four 
console.log(subtraction);

let lessThan1 = three < four 
console.log(lessThan1);

let lessThan2 = thirty < four
console.log(lessThan2)
*/

// the wrong answer is addition because JavaScript interprets the numbers "3" and "4" to be strings because the + sign is used as a cancatenation operator,
// with another operation JavaScript tries to change the string to number automatically

//the lessThan2 variable also contains a wrong answer. This is because when comparing strings, JavaScript first compares the first characters
//from the two strings. Since 3 is less than 4, JavaScript says that "30" is less than "4", and it ignores the 0 in "30"

// 3 Which of the following console.log messages will print? Why?
/*
if (0) console.log('#1 zero is true') // No Print
if ("0") console.log('#2 zero is true') // Print
if (null) console.log('null is true') // No Print
if (-1) console.log('negative is true') // Print
if (1) console.log('positive is true') // Print
*/
// The resason why the expressions are not printed, is bevause in JavaScripy
// the conditional structure like "IF" is vased on the conversion of boolean value,
// when the value is cosidered false JavaScript is not executed, but if it is true JavaScript execute the condition.


// 4

// Rewrite this if using the ternary/conditional operator '?'. 
// Test it with different values for a and b. What does the ‘+=’ do?


/*

let a = 2,
    b = 3;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? "less than 10" : "greater than 10";
console.log(result); // Corrected the typo here
*/


// 5

//Rewrite the following function using: 
// a) function expression syntax, and 
// b) arrow function syntax. Test each version to make sure they work the same.
/*
function getGreeting(name) {
  return "Hello " + name + "!";
}
console.log(return);
*/
// a) Function Expression Syntax

/*
const getGreeting = function(name) {
    return 'Hello ' + name + '!';
};

// testing function

console.log(getGreeting('Alice'));
console.log(getGreeting('Bob'));
*/
// b) Arrow Function Syntax

/*

const getGreeting = (name) => 'Hello ' + name + '!';

// Testing the function
console.log(getGreeting('Alice')); // Output: Hello Alice!
console.log(getGreeting('Bob'));   // Output: Hello Bob!

*/

// 6
/*
const westley = { name: 'Westley', numFingers: 5 };
const rugen = { name: 'Count Rugen', numFingers: 6 };

const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. ` ;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) =>
        person.numFingers === 6
            ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
            : "Nice to meet you."
}

// Testing objet method

inigo.greeting(westley);

*/

// 7

/*

const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow() {
        this.score++;
        return this;
    },

    basket() {
        this.score += 2;
        return this;
    },

    threePointer() {
        this.score += 3;
        return this;
    },

    foul() {
        this.fouls++;
        return this;
    },

    halfTime() {
        console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
        return this;
    },

    fullTime() {
        console.log(`Final score is ${this.score}. Fouls: ${this.fouls}`);
        return this;
    }
};

// Testing

basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime()
    .foul()
    .foul()
    .basket()
    .threePointer()
    .fullTime();
*/

// 8

// A
/*

function printCityProperties(city) {
    for (let key in city) {
        if (city.hasOwnProperty(key)) {
            console.log(`${key}: ${city[key]}`);
        }
    }
}

// testing the function with the Sydnet oject

const sydney = {
    name: `Sydney`,
    poulation: 5_121_000,
    state: `NSW`,
    founded: `26 January 1788`,
    timezone: `Australia/Sydney`
}

printCityProperties(sydney);

// B

const newYork = {
    name: `New York`,
    poulation: 8_550_405,
    state: `New York`,
    founded: `1624`,
    timezone: `America/New_York`
};

// Calling the function

printCityProperties(newYork);

*/
// 9

/*

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// Part A
let moreSports = teamSports; 
moreSports.push('Basketball');
moreSports.push('Football');

// Part B
let dog2 = dog1;
dog2 = 'Rex';

// Part C
let cat2 = cat1;
cat2.name = 'Whiskers';

// Part D
console.log('teamSports:', teamSports); 
console.log('dog1:', dog1); 
console.log('cat1:', cat1); 

// Part E

let independentSports = [...teamSports];
independentSports.push(`Baseball`);
independentSports.push(`Soccer`);

let independentCat = {...cat1};
independentCat.name = 'Snowball';

// testing independece

console.log(`independentSports`, independentSports );
console.log(`independentCat`, independentCat );
console.log(`Original teamSports`, teamSports);
console.log(`Original cat1`, cat1);

*/


// 10

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
        return this.age >= 18;
    };
}

// Creating two person objects
let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 16);

// Printing out the properties of each person object
console.log(`The person 1 Name = ${person1.name}, Age = ${person1.age}, Can Drive = ${person1.canDrive()}`);
console.log(`The person 2 Name = ${person2.name}, Age = ${person2.age}, Can Drive = ${person2.canDrive()}`);


class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 18;
  }
}

let person3 = new PersonClass(`Charlie`, 30);

console.log(`The person 3 Name = ${person3.name}, Age = ${person3.age}, Can Drive = ${person3.canDrive()}`);