// 1. Function calculateArea that takes the radius of a circle as an input and returns the area of the circle
function calculateArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}

let radius: number = 5;
console.log(`The area of the circle is: ${calculateArea(radius)}`);
//###################################################################

// 2. Loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//###################################################################

// 3. Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let temperatures: number[] = [15, 22, 30, 10, 18];
let highestTemperature: number = Math.max(...temperatures);

console.log(`The highest temperature is: ${highestTemperature}`);

// 4. Script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
// Note: `prompt` is not available in Node.js environments, but works in browsers.
let age: number = parseInt(prompt("Enter your age:") || "0", 10);

if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
//#################################################################

// 5. Function that takes an array of numbers and returns the count of positive numbers in the array
function countPositiveNumbers(numbers: number[]): number {
    return numbers.filter(num => num > 0).length;
}

// use
let numberArray: number[] = [-10, 5, 6, -2, 3, -1];
console.log(`The count of positive numbers is: ${countPositiveNumbers(numberArray)}`);
