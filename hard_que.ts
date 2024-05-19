// 1. Function that returns the number of times a character appears in a string
function countCharacterOccurrences(str: string, char: string): number {
    return str.split(char).length - 1;
}

//  usage:
const exampleString = "hello world";
const exampleChar = "l";
console.log(countCharacterOccurrences(exampleString, exampleChar)); // 3

//###########################################################

// 2. Function to log only the tasks that are not yet completed
interface Task {
    task: string;
    completed: boolean;
}

function logIncompleteTasks(tasks: Task[]): void {
    tasks.forEach(task => {
        if (!task.completed) {
            console.log(task.task);
        }
    });
}

// usage:
const todoList: Task[] = [
    { task: "Do laundry", completed: false },
    { task: "Write report", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Clean room", completed: true }
];

logIncompleteTasks(todoList); // Logs "Do laundry" and "Buy groceries"

//#######################################################

// 3. Function that takes an array of integers and sorts them from smallest to largest
function sortArray(numbers: number[]): number[] {
    return numbers.sort((a, b) => a - b);
}

// usage:
const numbersToSort = [5, 3, 8, 1, 2];
console.log(sortArray(numbersToSort)); // [1, 2, 3, 5, 8]

//#########################################################

// 4. Program that logs every element of an array in reverse order without using .reverse()
function logArrayInReverse<T>(array: T[]): void {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//  usage:
const arrayToReverseLog = [1, 2, 3, 4, 5];
logArrayInReverse(arrayToReverseLog); // Logs 5, 4, 3, 2, 1

//########################################################

// 5. Script that simulates a basic calculator
function basicCalculator(operand1: number, operand2: number, operator: string): number | string {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand2 !== 0 ? operand1 / operand2 : "Error: Division by zero";
        default:
            return "Error: Invalid operator";
    }
}

// usage:
const operand1 = 10;
const operand2 = 5;
const operator = '+';
console.log(basicCalculator(operand1, operand2, operator)); // 15
