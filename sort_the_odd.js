// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])

function sortArray(arr) {
    //get an arr of odds
    let odds = arr.filter(el => el%2 !== 0)
    //sort the arr
    odds.sort((a,b)=>a-b)
 
    //loop over arr and replace with the next ordered odd element if it's odd
    let ind = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            arr[i] = odds[ind]
            ind+=1
        }
    }
    return arr
}

console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))