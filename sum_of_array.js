// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

//array of ints and strings which contain numberic values

//return the sum of all these ints as an integer

//sumMix([9, 3, '7', '3']) -> 22
//sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) -> 42
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) -> 41

//O(n) solution
// function sumMix(arr) {
//     let sum = 0
//     //loop over array
//     for(let i=0; i<arr.length; i++) {
//         sum += Number(arr[i])
//     }

//     return sum
//     //check the type, is it a number

//     //if not, convert to a Number using the Number() function

//     //sum the values of the array
// }

//still O(n), but a more clean code solution
const sumMix = (arr) => {
    let sum = arr.reduce((curr, acc) => Number(curr) + Number(acc), 0)
    return sum
}


console.log(sumMix([9, 3, '7', '3']), '22')
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), '42')
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), '41')