// An ordered sequence of numbers from 1 to N is given. 
//One number might have deleted from it, then the remaining numbers were mixed. 
//Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
// [1,2,3,4,5], [1,2,3,4]

function findDeletedNumber(arr, arr2) {
    //if the 2 arrs are equal in length, return 0
    if(arr.length == arr2.length) {
        return 0
    }
    
    //sort the 2nd arr
    arr2.sort((a,b) => a-b)

    //iterate through arr1
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr2[i]){
            return arr[i]
        }
    }

    //compare each element to arr2

}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))
console.log(findDeletedNumber([1,2,3,4,5], [1,2,3,4]))