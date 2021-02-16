//display on the screen
/*
console.log('welocome to js fundamentals')
console.log(2)
console.log(2,2,3,8,5)
console.log("Text = " , 4)
console.log([1,2,3,4,5])
console.table([33,44,55,66])
*/

/* declare variables in JS*/

//3 ways [let , var , const]
/*
let x =10

//data types
let n = 'C'
let t = 3
let z = [12,3,4,5]

//CTRL + D
console.log(typeof n)
console.log(typeof t)
console.log(typeof z)
*/

//1. no constant
//2. redefining variable
//3. Scope of a var is global

// var x = 20
// var x = "Abdulahi";

// i = 90
// i = 88
//
// console.log(i)
// const z = 44
// const w =90
// if(z == 44){
//     const w = 99
//     console.log(w)
// } //scope
//
// console.log(w)

// Condition/Control Statements
//Simlar to JAVA
/*
    1. if
    2. Switch
    3. for
    4. do-while
    5. while
 */
//
// let numbers = [2,3,4,5,6,7]
// console.table(numbers)
// for (const number in numbers) {
//     console.log(number)
// }
//
// for (const number of numbers) {
//     console.log(number)
// }

//Functions
/*
function add(x, y) {
    return x + y
}

function multiply(x, y) {
    return x * y
}

function sub(x, y) {
    return x - y
}
let result = add(45,66)
console.log(`Result = ${result}`)
*/
//Function as first class citizens

function multiply(x, y) {return x * y}
function sub(x, y) {return x - y}

let display = function (x , y , anotherFunction){
    let result = anotherFunction(x,y)
    console.log(`Result = ${result}`)
}

display(20, 55, function(x, y) {return x + y})
display(44, 55, function(x, y) {return x / y})
display(44, 55, multiply)
display(44, 55, sub)

//Arrow Function


//Arrays and Methods
