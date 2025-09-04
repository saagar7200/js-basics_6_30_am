// //! Scope
// // accessibility or visibility of variables

// // global scope
// let golbal_let = "global let";
// const golbal_const = "global const";
// var golbal_var = "global var";

// console.log(golbal_let, golbal_const, golbal_var);
// // function scope
// function scope() {
//   let function_let = "function let";
//   const function_const = "function const";
//   var function_var = "function var";

//   console.log("------function-----");

//   console.log(golbal_let, golbal_const, golbal_var);
//   console.log(function_let, function_const, function_var);
// }

// scope();
// //   console.log(function_let); //ReferenceError: function_let is not defined
// // console.log(function_var) //ReferenceError: function_let is not defined

// // block scope {}
// if (true) {
//   let block_let = "block let";
//   const block_const = "block const";
//   var block_var = "block var";
//   console.log("------block-----");
//   //   console.log(golbal_let, golbal_const, golbal_var);
//   console.log(block_let, block_const, block_var);
// }

// // console.log(block_let) //ReferenceError: block_let is not defined
// // console.log(block_var)

// function scope2() {
//   // console.log('scope 2', function_let);
//   let x = 40;
//   if (true) {
//     let x = 30;
//     if (true) {
//       let y = 899;
//     }

//     // console.log(y);
//   }
// //   console.log(x);
// }
// // scope2();
// let a = 20

// function func1() {
//     let a = 10;

//     const func2 = () => {
//       let a =300
//   };
//   func2();
//   console.log(a);
// }

// func1();

// lexical scope

// function lexical_scope() {
//   let x = "parent let";

//   function child() {
//     let y = "child let";

//     console.log(y);
//     console.log(x);
//   }
//   console.log(y);
//   child();
// }

// lexical_scope();

// scope chaining

// let y = "child let";

// function lexical_scope() {
//   let x = "parent let";
// //   let y = "y";

//   function child() {
//     console.log(y);
//     console.log(x);
//   }
//   child();
// }

// lexical_scope();

// module scope


