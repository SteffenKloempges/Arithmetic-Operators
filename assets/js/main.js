//Aufgabenstellung 1

let x = 20
let y = 30
let z = 10

console.log(x + y)
console.log(y - x)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log((Number(x) * Number(y)) / Number(z))

let resultOne = (Number(x) * Number(y)) / Number(z)

//Aufgabenstellung 2

let a = 15
let b = 9
let c = 20

console.log(a % b)
console.log((Number(a) + Number(b)) * Number(c))

console.log("------")
let resultTwo = (Number(a) + Number(b)) * Number(c)
console.log(resultTwo)
console.log('------')

// console.log(++a)
// console.log(--b)

let v = ++a
let m = --b
let resultThree = m - v

console.log(resultThree)

console.log(Number(resultOne) % Number(resultTwo))
