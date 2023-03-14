// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(arr) {
    //make a copy of the arr
    let arr2 = [...arr]
    //sort the array
    arr2.sort((a,b) => a-b)
    //get the middle value [1]
    let middle = arr2[1]
    //get the index of that value in the original array
    return arr.indexOf(middle)
}

console.log(gimme([2, 3, 1]))
console.log(gimme([5, 10, 14]))