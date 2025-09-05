//
// const person1 = {
//   name: "alice",
//   email: "alice@gmail.com",
//   password: "123456",
// };

const person2 = {
  name: "ram",
  email: "ram@gmail.com",
  password: "123456",
  getName: () => {},
};

//* class

// class class_name{
//     constructor() {

//     }
// }

class Person {
  name;
  email;
  #password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  #getName() {
    return this.name;
  }

  changeName(name) {
    this.name = name;
  }

  getPassword() {
    return this.#password;
  }
}

const person = new Person("Hari", "hari@gmail.com", "123456");
const person3 = new Person("gita", "gita@gmail.com", "123456");

// console.log(person)
// console.log(person3)
// // console.log(person.getName())
// person.changeName('harry')
// // console.log(person.getName())
// console.log('pass', person.getPassword())
// console.log('pass',person3.getPassword())

// inheritnce
class Student extends Person {
  constructor(name, email, password, grade, faculty) {
    super(name, email, password);
    this.grade = grade;
    this.faculty = faculty;
  }
}

const student = new Student("hari", "hari@gmail.com", "123456", "BE", "BCT");

console.log(student);
console.log(student.getPassword());

// static
class Calculator {
  static add(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(12, 45));

// abstraction
class MakeCofee {
  constructor() {}
  start() {
      // turn on machine
      this.#turn_on_machine()
      this.#add_cofee()
      this.#add_sugar()
      console.log('cofee is ready')
  }

    #turn_on_machine() {
      console.log('turning on machine')
  }

    #add_cofee() {
      console.log('adding cofee')
  }

    #add_sugar() {
      console.log('adding sugar')
      
  }
}

const make_cofee = new MakeCofee()
make_cofee.start()