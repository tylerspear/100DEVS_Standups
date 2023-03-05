// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

function repeats(arr) {
    let singles = 0
    for(let i = 0; i<arr.length; i++) {
        if(arr.lastIndexOf(arr[i]) == arr.indexOf(arr[i])) {
            singles += arr[i]
        }
    }
    return singles
}

console.log(repeats([4,5,7,5,4,8]))
console.log(repeats([9, 10, 19, 13, 19, 13]))
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]))
console.log(repeats([5, 10, 19, 13, 10, 13]))