// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//take in a string

//return a string, opposite caps/lowercase, reversed by word

function transformer(str) {
    //convert to an arr, split the string on each character
    let words = str.split('')

    //map over each character, convert to upper/lower
    wordsTransformed = words.map((el) => {
        if(el == el.toUpperCase()){
            return el.toLowerCase()
        } else {
            return el.toUpperCase()
        }
    })
    //join the array back together
    return wordsTransformed.join('')
}

console.log(transformer("iNPuT ArraY"))