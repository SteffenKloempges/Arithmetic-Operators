//Aufgabenstellung 1

let x = 20
let y = 30
let z = 10

console.log(Number(x) + Number(y))
console.log(Number(y) - Number(x))
console.log(Number(x) - Number(y))
console.log(Number(x) * Number(y))
console.log(Number(x) / Number(y))
console.log((Number(x) / Number(y)) / Number(z))

let resultOne = (Number(x) / Number(y)) / Number(z)

//Aufgabenstellung 2

let a = 15
let b = 9
let c = 20

console.log(a % b)
console.log((Number(a) + Number(b)) * Number(c))

console.log("------")

var resultTwo = (Number(a) + Number(b)) * Number(c)
console.log(resultTwo)

console.log('------')

console.log(Number(resultOne) % Number(resultTwo))