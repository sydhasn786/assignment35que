// 1. Log "Hello, World!" to the console
console.log("Hello, World!");

// 2. Create a variable `temperature` and assign it a value
let temperature: number = 15; // Example value, you can change it

// Log "It's cold!" if the temperature is below 20 degrees Celsius
if (temperature < 20) {
    console.log("It's cold!");
}

// 3. Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result
let totalApples: number = 10;
let applesGivenAway: number = 3;
let applesLeft: number = totalApples - applesGivenAway;

console.log(`Apples left: ${applesLeft}`);

// 4. Declare two variables, `firstName` and `lastName`, then create a third variable `fullName` that combines them. Log the result.
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;

console.log(`Full name: ${fullName}`);

// 5. Use a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let number1: number = 5;
let number2: number = 3;

if (number1 > number2) {
    console.log("Yes");
} else {
    console.log("No");
}
