//* behaviour of js  moving vaiables or function declaration part to the top of the scope


// 1. memory creation phase (execution context)
// 
// 2. execution phase

// memory
//var   x : undefined
// let y :<value_not_available> => 20
// greet:() {
    // console.log('Good morning')
// }

// ! var
console.log(x) // undefined

var x = 10

console.log(x) // 10


//! function declaration

greet() //Good morning


function greet() {
    console.log('Good morning')
}

greet()  // Good morning


//! let 
// * hoisted but is in TDZ (Temporal dead Zone)
// console.log(y)
let y 


y = 20
console.log(y)



// let z = 30

// ! const
// * hoisted but is in TDZ (Temporal dead Zone)
// console.log(z)

const z = 200

console.log(z)



//* function expression
console.log(func1)

// func1() //typeError

var func1 = function () {
    console.log('var function')
}

func1()

// let const
// func2() ReferenceError: Cannot access 'func1' before initialization

let func2 = function () {
    console.log('var function')
}

func2()

// error
// 1. ReferenceError
// 2. TypeError
// 3. SyntaxError
