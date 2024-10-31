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

/*--------------------Part 2--------------------*/ 

/* provided data */
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // 1. Sort by age
  const sortedByAge = people.sort((a, b) => Number(a.age) - Number(b.age));
  console.log("Sorted by Age:", sortedByAge);
  
  // 2. Filter to remove entries with age > 50
  const filteredByAge = people.filter(person => Number(person.age) <= 50);
  console.log("Filtered by Age (<= 50):", filteredByAge);
  
  // 3. Map to change occupation to job and increment age by 1
  const mappedPeople = people.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1
  }));
  console.log("Mapped Array:", mappedPeople);
  
  // 4. Reduce to calculate sum of ages
  const sumOfAges = people.reduce((sum, person) => sum + Number(person.age), 0);
  console.log("Sum of Ages:", sumOfAges);
  
  // 5. Calculate average age
  const averageAge = sumOfAges / people.length;
  console.log("Average Age:", averageAge);
  
