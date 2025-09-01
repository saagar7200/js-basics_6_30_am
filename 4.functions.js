// * Function

// {}

//* syntax
// function funtion_name (){
// function body
// }

// function greet () {
//     console.log('Good morning')
// }

//? argument & parameter
//* with input
function greet(name) {
  console.log("Good morning", name);
}

greet("Alice"); // alice
greet("John"); // john

// *multiple inputs
// function add(a,b){
// let sum = a + b

// console.log(sum)

// }

// add ->

//* return type
// function add(a,b){
// let sum = a + b

// console.log(sum)

//     return  a + b
// }

//* Defult prameter
// function add(a, b = 0) {
// let sum = a + b

// console.log(sum)

//   return a + b;
// }

// const result = add(10);
// console.log('result',result)

// const sum = add(123, 2);
// console.log('sum',sum)

//* A. function declaration

// function funtion_name (){
// function body
// }
function sayHi(name = "Guest") {
  console.log("Hi", name);
}

sayHi("Ram");
sayHi();

//* B. function expression
let mult = function (a, b) {
  return a * b;
};
console.log(mult(20, 3));

//* arrow function
const square = (num) => {
  return num * num;
};

// const square2 =  num =>  num * num

console.log("suare", square(10));

//* callback function
const child = function (name) {
  console.log("child", name);
  return "returned from child";
};

const parent = function (callback) {
  console.log(callback);
  console.log("parent");
  callback("John");
};

parent(child);

parent(function (name) {
  console.log("anonymous");
  console.log(name);
});

parent((name) => {
  console.log("anonymous");
  console.log(name);
});

// find max of 3  numbers
// reverse string
// fibonci series // 0 , 1  , 1 , 2 ,3, 5 ,8

// hof (higher order function)

// add
const add = (a) => {
  const inner = (b) => {
    console.log("inner function", a + b);
  };
  return inner;
};

const add10 = add(10);

// add10(10);
// add10(15)

