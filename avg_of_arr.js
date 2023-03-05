function getAverage(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr)
    return Math.floor(sum / arr.length)
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))