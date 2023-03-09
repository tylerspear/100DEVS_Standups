// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function duplicateEncoder(str) {
    const map = {}
    let encode = ''

    for(let letter of str.toLowerCase()) {
        if(map.hasOwnProperty(letter)) {
            map[letter] += 1
        } else {
            map[letter] = 1
        }
    }

    for(let letter of str.toLowerCase()) {
        if(map[letter] > 1){
            encode += ')'
        } else {
            encode += '('
        }
    }

    return encode
}

console.log(duplicateEncoder("din"))
console.log(duplicateEncoder("Success"))
console.log(duplicateEncoder("(( @"))
