function remove_dups(str) {
    //split the string
    let words = str.split(' ')
    //loop over string
    for(let i=0; i<words.length; i++){
        if(words[i] == words[i - 1]){
            words.splice(i, 1)
            i -= 1
        }
    }
    //compare curr to previous

    //remove if the same

    //join back and return
    return words.join(' ')
}

console.log(remove_dups("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))