//Take an array of numbers and return the sum.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4];
console.log(sumArray(numbers))

//Take an array of numbers and return the average.

function averageArray(arr) {
    if (arr.length === 0) return 0; // Handle division by zero
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const average = [1, 2, 3, 4];
console.log(averageArray(average))

//Take an array of strings and return the longest string.

function longestString(arr) {
    let longest = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
const stringsArray = ["hello", "world", "and", "all", "who", "inhabit", "it"];


console.log(longestString(stringsArray));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function getWordsLengths(wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
         if (wordsArray[i].length > 5)  {
            console.log(wordsArray[i]);   
        }
    } 
}

const wordsArray = ["I", "am", "a", "chunky", "monkey", "from", "funky", "town"];


getWordsLengths(wordsArray); 

//Take a number, n, and print every number between 1 
//and n without using loops. Use recursion.
function countnumbers(n , limit) {
    if (n > limit) {
        return [];
    }
    const results = countnumbers(n + 1, limit);
    results.push (`${n}`);
    return results;
}
const output = countnumbers(1, 10).join('\n');
console.log(output);

