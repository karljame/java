let kroon = 1
const eur = 15.6466

console.log(Math.round(kroon / eur * 100) / 100)

//raadius

let rad = 5
let area = Math.PI * Math.pow(rad, 2)
let perimeter = 2 * Math.PI * rad
console.log(area)
console.log(perimeter )


// 3 ÜL

let numString = 2
let op = (parseInt(numString) + parseInt(numString + numString) + parseInt(numString + numString + numString))
const answer = (numString + '+' + (numString + numString) + '+' + (numString + numString + numString) + '=' + op)
console.log(answer)
