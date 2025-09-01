//* loops

// * while
// let i = 10;
// while (i < 10) {
//   console.log(i);

//   i++
// }

//* do-while
// do{

// }while(condition)

// let count = 10
// do{
//     console.log(count)
//     count++
// }while(count < 10)


//* for

// for(intialization; condition; increment ){
//   body
// }


// for(let i = 1 ; i< 10 ; i++){
//     console.log(i)
// }


let user = {
    name:'abc',
    email:'abc@gmail.com',
    password:'123456',
}

let numbers = [1,2,3,45,67]

// for in 
// for(let key in user){
//     console.log(key, user[key])
// }

// for (key in numbers){
//     console.log(key)
// }


//* for of
// for(value of numbers){
//     console.log(value)
// }

// for(value of "numbers"){
//     console.log(value)
// }

//! TypeError: user is not iterable
// for(value of user){
//     console.log(value)
// }


//* control transer statements / key words

//* return

// break 
for(let i = 1 ; i< 10 ; i++){
    if(i === 6){
        break;      
    }
    // console.log(i)
}

// continue
for(let i = 1 ; i< 10 ; i++){
    if(i === 6){
        continue;      
    }
    // console.log(i)
}

// print odd numbers
for(let i=1 ; i <10 ; i++){

    let is_even = i % 2 === 0
    if(is_even){
        continue
    }

    console.log(i)
}


for(let i=1 ; i <10 ; i++){

    let is_odd = i % 2 !== 0
    if(is_odd){
        continue
    }

    console.log(i)
}



