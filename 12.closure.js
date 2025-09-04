//* closure

// function add(a,b) {
//     console.log(a + b)
//     function  ab() {
//         console.log(a,b)
//     }
//     ab()
// }

// add(12,65)
// add(120, 60)



 
// GEC

// function counter() {
//     let count = 0

//     return function child() {
//         count += 1
//         console.log(count)
        
//     }
// }

// const count = counter() // create closure
// const count1 = counter() // create closure

// count()
// count()
// count()
// count()
// count()
// count() //6
// count1() // 1


function counter(inital_val = 0) {
    let count = inital_val

    return {
        increment: function() {
            count += 1
            console.log(count)
        },
         decrement: function() {
            count -= 1
            console.log(count)
         },
          reset: function() {
            count = 0
            console.log(count)
        }

    }
}

// closure
const counter1 = counter(10)
const counter2 = counter()

counter1.increment()
counter1.increment()
counter1.increment() //3
counter1.decrement() //2
counter1.reset()


// Account(acc_name,initial_amt)
// balance , acc_name
// deposit(amt) , withraw , bal_inq , get_detail



