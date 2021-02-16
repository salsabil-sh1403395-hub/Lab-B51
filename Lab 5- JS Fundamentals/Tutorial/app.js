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
/*
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
*/
//Arrow Function

// function type1(){console.log('One single like')}
// () => console.log('One single like')
//
// function type11(){return 20*40}
// () => 20*40
//
// function type2(x){console.log(x)}
// x => console.log(x)
//
// function type22(x){return x*99}
// x => x * 99
//
// function type2(x,y){ return x+y}
// (x,y) =>  x+y
//
//
// (x , y)=>{
//     let result = x+y
//     return result
// }
/*
function multiply(x, y) {
    return x * y
}

function sub(x, y) {
    return x - y
}

let display = function (x, y, anotherFunction) {
    let result = anotherFunction(x, y)
    console.log(`Result = ${result}`)
}
display(20, 55, (x, y) => x + y)
display(44, 55, (x, y) => x / y)
display(44, 55, (x, y) => x * y)
display(44, 55, (x, y) => x - y)
*/

//Array
let names = ["Muram First", "Asma Second", "Amna Third", "Alnoud Fourth", "Joud Firth"]
let result = names.join(" - ")
console.log(result)

//Arrays and Methods

//Add element to the end
names.push("Sharefa")
console.log('After push', names)

//Add element to the beginning
names.unshift("Sumayya")
console.log('After unshift', names)

//Remove element from the end

names.pop()
console.log('After popping', names)

//Remove element to the beginning
names.shift()
console.log('After Shifting', names)

//remove element from specific location
names.splice(3, 1)
console.log('After Shifting', names)

//sort elements
names.sort()
console.log('After Sorting', names)


names.sort().reverse()
console.log('After Sorting', names)


//multiple elementes
let namesStartWithA = names.filter(x => x.length < 10)
console.log('After Filtering', namesStartWithA)

//find one element that meets
let oneElement = names.find(x => x.length < 10)
console.log('After finding', oneElement)
//map

let mappedArray = names.map(x => `${x} : ${x.length}`)
console.log('After mapping', mappedArray)

// reduce

function reduce(prev, current) {
    if (prev.length > current.length)
        return prev
    else
        return current


}

let longestName = names.reduce((prev, current) => prev.length >= current.length ? prev : current)
console.log(longestName)
//flatten

let countries = [['Qatar', ['France', 'Sweden'], 'Kuwait'], 'Germany', 'Italy']
console.log(countries)
console.log(countries.flat(2))


let numbers = [11, 21, 13, 4 ,111 ,1134]



// (x, y) => x - y)

numbers.splice(1, 0, 89)

console.log('wrong way to sort number ' , numbers.sort())
console.log('proper way' , numbers.sort((x, y) => y - x))

//array destructuring [extracting elements from the array]

let [first , second , ...rest] = numbers
console.log(first )
console.log(second )
console.log(rest)
