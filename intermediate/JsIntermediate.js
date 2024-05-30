// 1 Capital letter

function ucFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// console.log(ucFirstLetters("sydney")); 
// console.log(ucFirstLetters("hello world i'm studying javaScript")); 

// 2 Truncate

function truncate(str, max){
    if(str.length > max){
        return str.slice(0, max) + "...";
} else {
    return str;
}
}
//console.log(truncate("Hello world", 5));

function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
    
}

// console.log(truncate("This is a text so long and I will truncate", 10));

// Exercise 3 operation with arrays


const animals = [`Tiger`, `Giraffe`];

// a) adding two values at the end

animals.push(`Elephant`, `Lion`);

//console.log(animals);

// b) adding two values at the end

animals.unshift(`Cat`, `Dog`);
//console.log(animals);

// c) Sort the values alphabetically

animals.sort();
//console.log(animals);

// replace the middle value with a new value

function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}

replaceMiddleAnimal(`Zebra`);
//console.log(animals);

// Find the animals wich begin with a specefic letter

function findMatchingAnimals(beginsWith) {
    return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}

//console.log(findMatchingAnimals(`t`));

// Exercise 4 convert css properties to camelCase
// a
function camelCase(cssProp) {
  let result = ` `;
  let capitalizerNext = false;
  for (let char of cssProp) {
    if (char === `-`) {
      capitalizerNext = true;
    } else {
      result += capitalizerNext ? char.toUpperCase() : char;
      capitalizerNext = false;
    }
  }
  return result;
}

//console.log(camelCase("margin-left"));
//console.log(camelCase("background-image"));
//console.log(camelCase("display"));

// b

function camelCase(cssProp) {
    return cssProp.split('-')
    .map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);

    })

    .join('');
 
  }
  
//   console.log(camelCase("margin-left"));
//   console.log(camelCase("background-image"));
//   console.log(camelCase("display"));

  // Exercise 5 

  // Explanation

  // The code doesn't work vecause is wiited 'toFixed' for to concatenate the chains 

  // b)

  function currencyAdittion(float1, float2) {
    return Math.round((float1 + float2) * 100) /100;
  }

// console.log(currencyAdittion(0.1, 0.2));

// C)

function currencyOperation(float1, float2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = float1 + float2;
            break;
        case '-':
            result = float1 - float2;
            break;
        case '*':
            result = float1 * float2;
            break;
        case '/':
            result = float1 / float2;
        break;
        default:
            throw new Error('Unsopported operation');

    }

    return Math.round(result * 100) / 100;

}

// console.log(currencyOperation(0.1, 0.2, '+'));
// console.log(currencyOperation(0.1, 0.2, '/'));
// console.log(currencyOperation(0.1, 0.2, '*'));
// console.log(currencyOperation(0.1, 0.2, '-'));


function currencyOperation(float1, float2, operation, numDecimals = 2) {
  let factor = Math.pow(10, numDecimals);
  let result;

  switch (operation) {
    case "+":
      result = (float1 * factor + float2 * factor) / factor;
      break;
    case "-":
      result = (float1 * factor - float2 * factor) / factor;
      break;
    case "*":
        //This calculation is missing a "/ factor" so multiplication operations are bigger than they're meant to be
      result = float1 * factor * float2;
      break;
    case "/":
      result = (float1 * factor) / (float2 * factor);
      break;
    default:
      throw new Error("Unsopported operation");
  }

  return Math.round(result * factor) / factor;
}

// console.log(currencyOperation(0.1, 0.2, "+", 2));


// Exercise 6

function unique(duplecatesArray) {
    return [...new Set(duplecatesArray)];

}

const colours = ['red', 'green', 'blue', ' yellow', 'orange', 'red', 'blue', 'yellow'];
const testScore = [55, 84, 78, 63, 55, 32, 84, 91, 55, 43];

// console.log(unique(colours));
// console.log(unique(testScore));

// exercise 7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// A
// find by Id
function getBookTittle(bookID) {
    
    const book = books.find(book => book.id === bookID);

    return book ? book.title : null;
}

// console.log(getBookTittle(1)); 

// b get the books before 1950

function getOldBooks() {
    return books.filter(book => book.year < 1950)
}

// console.log(getOldBooks());

// adding a genre to the books

function addGenre() {
    return books.map(book => ({...book, genre: 'classic'}));

}

// console.log(addGenre());

// obtain tittles of books by author's initial letter

function getTitles(authorInitial) {
    return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}

// console.log(getTitles('G'));


// Exercise 8

const phoneBookABC = new Map();
phoneBookABC.set('Anabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

// a) Create phoneBookDEF
const phoneBookDEF = new Map();
phoneBookDEF.set('David', '0412312344');
phoneBookDEF.set('Edward', '0433221118');
phoneBookDEF.set('Fiona', '0455221183');

// b) Update Caroline's number
phoneBookABC.set('Caroline', '0455221199');

// c) Print the phone book
function printPhoneBook(contacts) {
    contacts.forEach((number, name) => {
        // console.log(`${name}: ${number}`);
    });
}

// printPhoneBook(phoneBookABC); // Uncomment to test

// d) Combine phone books
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// e) Print all names in combined phone book
phoneBook.forEach((number, name) => {
    // console.log(name);
});


// Exercise 9

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
}

// a) sum the Salaries

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);

}

// console.log(sumSalaries(salaries));

// b) get the highest salary

function getHighestSalary(salaries) {
    return Object.keys(salaries).reduce((highest, name) => 
        salaries[name] > salaries[highest] ? name : highest
    );
}

// console.log(getHighestSalary(salaries));


// Exercise 10 : Operating with dates:

const today = new Date();
console.log("Current time us " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");


// a) total of minutes than had paast

console.log(today.getHours() * 60 + today.getMinutes() + " minutes have passed so far today");

// b) toal of seconds have passed today

console.log(today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds() + " seconds have passed so far today");

// calculate the years old

//This function is slightly off. If today was 21st May 2024 and the birthday was 22nd May 2023, years would be 1, months would be 0, and days would be -1.
//The person has not turned 1 yet, and they can't be negative days old. We can fix this by making a few adjustments:
/*
function calculateAge(birthday) {
    const now = new Date();
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    if (days < 0) {
        //Days is negative, meaning we haven't reached an extra month old yet. We want to take away 1 from months to account for that
        months--
    }

    if (months < 0) {
        //Months is negative, meaning we haven't reached an extra year old yet. We want to take 1 away from years to account for that
        years--
    }

    days = days + 30 % 30 // makes the assumption that a month is 30 days long
    months = months + 12 % 12 // if months was -1, this would make it wrap back around to 11 months

    return `I'm ${years} years, ${months} months, and ${days} days old`;
}
*/
function calculateAge(birthday) {
    const now = new Date();
    const years = now.getFullYear() - birthDate.getFullYear();
    const months = now.getMonth() - birthDate.getMonth();
    const days = now.getDate() - birthDate.getDate();
    return `I'm ${years} years, ${months} months, and ${days} days old`;
}

const birthDate = new Date(1983, 5, 8);
console.log(calculateAge(birthDate));

// d Calculate dates between two dates

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 *60 *1000;
    const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
    return Math.round(diffDays);
}

const date1 = new Date('2004-01-01');
const date2 = new Date('2024-12-31');

console.log(daysInBetween(date1, date2));
