console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Robert'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 7));
console.log(addNumbers(21, 89));

// 4. Function to multiply three numbers & return the result
function multiplyThree(first, second, third) {
  return first * second * third;
}

console.log(multiplyThree(3, 5, 6));
console.log(multiplyThree(3, 7, 9));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }

}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(1));

console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  //if else statements make sure that array is not empty 
  if (array.length > 0) {
    return array[(array.length - 1)];
  }

  else {
    return undefined;
  }
}
let array2 = [];
console.log(getLast(array2));
let array = [2, 3, 3, 45, 5]
console.log(getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

  for (let x = 0; x < array.length - 1; x++) {

    if (array[x] == value) {
      return true;
      break;
    }

  }

  return false;

}

let samp = [3, 4, 5, 6, 7];
console.log(find(2, samp));
console.log(find(3, samp));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //comparison changes both letters to uppercase 
  //changes the string to Array and picks the first index 
  if (letter.toUpperCase() == (Array.from(string)[0]).toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isFirstLetter('a', 'Aardvard'));
console.log(isFirstLetter('Z', 'Aardvard'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;

  //standard for loop which iterates over every item in Array
  for (let i = 0; i < array.length; i++) {
    sum += array[i];

  }


  return sum;
}

console.log(sumAll(samp))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//javascript is a smart language it can resize an Array once declared


function allPositive(array) {
  let countero = 0; //declare array to return and index
  let arrayneg = [];//within function to limit its scope
  for (let i = 0; i < array.length; i++) {
    //checks if an array element is greater than zero before adding to new Array 
    if (array[i] > 0) {
      arrayneg[countero] = array[i];
      countero++; //seperate index to track new Array
    }
  }
  return arrayneg;
}
let allneg = [-3, -4, -5, -6, -7];
let somepos = [-3, 3, -4, -5, , 2, -6, -7];
console.log(allPositive(allneg));
console.log(allPositive(somepos));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes a number as an argument, 
//increments the number by +1 and returns the result

function addOne(int) {
  //returns the int and adds one 
  return int + 1;
}

console.log(addOne(1));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
