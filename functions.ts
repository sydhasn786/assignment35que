// 1. Function to calculate the product of all elements in an array of numbers
function calculateProduct(numbers: number[]): number {
    return numbers.reduce((product, number) => product * number, 1);
}

//  usage:
const numbers1 = [1, 2, 3, 4];
console.log(calculateProduct(numbers1)); // 24

//###############################

// 2. Function to filter strings longer than n characters
function filterByLength(strings: string[], n: number): string[] {
    return strings.filter(str => str.length > n);
}

// usage:
const strings = ["hello", "world", "typescript", "js", "code"];
console.log(filterByLength(strings, 4)); // ["hello", "world", "typescript"]

//################################

// 3. Function to find and log all duplicates in an array
function findDuplicates<T>(array: T[]): T[] {
    const duplicates: T[] = [];
    const seen: Set<T> = new Set();
    const addedToDuplicates: Set<T> = new Set();

    for (const item of array) {
        if (seen.has(item) && !addedToDuplicates.has(item)) {
            duplicates.push(item);
            addedToDuplicates.add(item);
        }
        seen.add(item);
    }

    return duplicates;
}

//  usage:
const arrayWithDuplicates = [1, 2, 3, 1, 4, 2, 5];
console.log(findDuplicates(arrayWithDuplicates)); // [1, 2]


//################################


// 4. Function to increment each element in an array of integers by one
function incrementAll(numbers: number[]): number[] {
    return numbers.map(number => number + 1);
}

// usage:
const numbers2 = [1, 2, 3];
console.log(incrementAll(numbers2)); // [2, 3, 4]

//################################################

// 5. Function to count how many times a specific element appears in an array
function countOccurrences<T>(array: T[], element: T): number {
    return array.filter(item => item === element).length;
}

//  usage:
const arrayForCounting = [1, 2, 2, 3, 3, 3, 4];
console.log(countOccurrences(arrayForCounting, 3)); // 3

//################################################

// 6. Function to check if an array is sorted in ascending order
function isSorted<T>(array: T[]): boolean {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

//  usage:
const sortedArray = [1, 2, 3, 4];
const unsortedArray = [3, 2, 1];
console.log(isSorted(sortedArray)); // true
console.log(isSorted(unsortedArray)); // false

//########################################################

// 7. Function to format array of names into a string separated by commas and "and"
function formatNames(names: string[]): string {
    if (names.length <= 1) return names.join('');
    return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}

//  usage:
const namesArray = ["Alice", "Bob", "Charlie"];
console.log(formatNames(namesArray)); // "Alice, Bob and Charlie"

//#######################################################

// 8. Function to convert array of Fahrenheit temperatures to Celsius
function convertFahrenheitToCelsius(fahrenheitTemps: number[]): number[] {
    return fahrenheitTemps.map(temp => (temp - 32) * 5 / 9);
}

// usage:
const fahrenheitTemps = [32, 68, 100];
console.log(convertFahrenheitToCelsius(fahrenheitTemps)); // [0, 20, 37.777...]

//#######################################################

// 9. Function to calculate the min, max, and average of an array of numbers
function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
    return { min, max, average };
}

// usage:
const numbers3 = [10, 20, 30, 40, 50];
console.log(minMaxAverage(numbers3)); // { min: 10, max: 50, average: 30 }

//#######################################################

// 10. Function to swap two specified indices in an array
function swapElements<T>(array: T[], index1: number, index2: number): T[] {
    const newArray = array.slice();
    const temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
}

// usage:
const arrayToSwap = [1, 2, 3, 4, 5];
console.log(swapElements(arrayToSwap, 1, 3)); // [1, 4, 3, 2, 5]
