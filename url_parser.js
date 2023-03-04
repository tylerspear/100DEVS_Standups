function url_parser(url) {
    url = url.replace('https://', '') //remove http://, https://, and www. occurrences
    url = url.replace('http://', '')
    url = url.replace('www.', '')
    url = url.split('.') //split the string on the `.com`
    return url[0] //return everything prior to .com
}

console.log(url_parser("http://github.com/carbonfive/raygun"))
console.log(url_parser("http://www.zombie-bites.com"))
console.log(url_parser("https://www.cnet.com"))