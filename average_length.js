// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(arr) {
    let total = 0
    //loop over each arr element
    for(let i=0; i<arr.length; i++){
        total += arr[i].length
    }
    //get the length and add to a total var

    //average = total / arr.length
    let average = Math.round(total / arr.length)
    console.log(average)
    //create new arr
    let arr2 = []
    //loop over original, get the [0] from each 
    for(let i=0; i<arr.length; i++){
        let str = arr[i][0].repeat(average)
        arr2.push(str)
    }
    //multiply n times

    //push to new array

    return arr2
}

console.log(averageLength(['aa', 'bb', 'ddd', 'eee']))
