// 1. Function that returns an array of words starting with the letter 'a'
function filterWordsStartingWithA(words: string[]): string[] {
    return words.filter(word => word.startsWith('a') || word.startsWith('A'));
}

// usage:
const words = ["apple", "banana", "avocado", "cherry", "apricot"];
console.log(filterWordsStartingWithA(words)); // ["apple", "avocado", "apricot"]

//###################################################################


// 2. Script that logs the second to last element of an array named fruits
const fruits: string[] = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]); // "cherry"

//###################################################################

// 3. Function that returns a new array with each number squared
function squareNumbers(numbers: number[]): number[] {
    return numbers.map(number => number * number);
}

// usage:
const numbers = [1, 2, 3, 4, 5];
console.log(squareNumbers(numbers)); // [1, 4, 9, 16, 25]

//###################################################################
// 4. Function that reverses the elements of an array without using .reverse()
function reverseArray<T>(array: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

//  usage:
const arrayToReverse = [1, 2, 3, 4, 5];
console.log(reverseArray(arrayToReverse)); // [5, 4, 3, 2, 1]

//####################################################################

// 5. Function that logs the number of times the score exceeded the maximum and fell below the minimum
function logScoreExtremes(scores: number[]): void {
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxExceedCount = 0;
    let minBelowCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxExceedCount++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            minBelowCount++;
        }
    }

    console.log(`Number of times exceeded maximum score: ${maxExceedCount}`);
    console.log(`Number of times fell below minimum score: ${minBelowCount}`);
}

// usage:
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
logScoreExtremes(scores); // Logs the counts
//##############################################################

// 6. Function that removes all falsey values from an array
function removeFalseyValues(array: any[]): any[] {
    return array.filter(Boolean);
}

// usage:
const mixedArray = [0, "hello", false, null, 42, "", undefined, NaN, "world"];
console.log(removeFalseyValues(mixedArray)); // ["hello", 42, "world"]

// 7. Script that concatenates two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = array1.concat(array2);

console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

//###################################################################

// 8. Function that calculates the sum of all elements in an array that are either even or odd, based on a parameter
function sumOfElements(numbers: number[], type: 'even' | 'odd'): number {
    return numbers
        .filter(number => (type === 'even' ? number % 2 === 0 : number % 2 !== 0))
        .reduce((sum, number) => sum + number, 0);
}

//  usage:
const nums = [1, 2, 3, 4, 5, 6];
console.log(sumOfElements(nums, 'even')); // 12
console.log(sumOfElements(nums, 'odd')); // 9

// 9. Function that checks whether an element exists in an array
function findElementIndex<T>(array: T[], element: T): number {
    return array.indexOf(element);
}

//  usage:
const elements = ["apple", "banana", "cherry"];
console.log(findElementIndex(elements, "banana")); // 1
console.log(findElementIndex(elements, "grape")); // -1

// 10. Function to find and return the smallest number in an array of integers
function findSmallestNumber(numbers: number[]): number {
    return Math.min(...numbers);
}

//  usage:
const numbersArray = [10, 5, 20, 4, 5, 2, 25, 1];
console.log(findSmallestNumber(numbersArray)); // 1
