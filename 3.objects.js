

// let bottle_name = ''
// let bottle_capacity  = '1000ml'

// let bottle = {
//     name: '',
//     capacity :'100ml',
//     colour:[]
// }

// object literal -> {}

// let person = {
//     name:'jhon Doe'
// }

// new keyword (object constructor)\

// let product = new Object()



let person = {
    name:'jhon Doe',
    password:'1234r',
    gender:''
}

// console.log(person.address.district)
// console.log(person['address']['district'])

//! adding properties
// person.name = 'abc'
// product.name = 'xyz'
person.email = 'johndoe@gmail.com'

//! reading/accessing values
//* dot notatiion
const person_name = person.email
// console.log(person.full name)
console.log(person.email)

//* brancket notation
console.log(person['name'])

let read_key = 'email'

// console.log(person.read_key) // undefined
console.log(person[read_key])


//! modify properties
person.name = 'abc'
console.log(person)

person['name'] = 'xyz'


console.log(person)



// delete

delete person.read_key

console.log(person)


console.log(person.hasOwnProperty('age'))

if(!person.hasOwnProperty('age')){
    person.age = 30
}

// 
console.log(person)


// 
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person)) //[ [name, xyz],[]]

const entries = Object.entries(person)

console.log(entries)
console.log(Object.fromEntries(entries))


const obj = {
    name:'xyz',
    greet:function(){
            console.log('good morning')
    }
}

obj.greet()