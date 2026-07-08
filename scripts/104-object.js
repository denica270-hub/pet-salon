let name = "frenanda";
let lastname = "murillo";
let age = 34;

let name2 = "walter";
let lastname2= "white";
let age2 = 8;

//Literal Object

let student1= {
    name: "fernanda",
   date: "05/31/1992",
   studentNumber: 1234
};

console.log(student1);

//1. Access a Vallue ->.
student1.name
console.log("Hello, my name is", student1.name);

//Interpolation
console.log(`Hello,my name is ${student1.name} and my number is ${student1.studentNumber}. `);

let car = {
    brand:"toyota",
    model: "crowa",
    year: 2020
};

console.log(car);
console.log(" I drive a ", car.brand);
console.log(`My car is a ${car.brand}, ${car.model} from ${car.year}`);

//2. update a value -> =
student1.name = "Maira Fernanda";
console.log(student1.name);

student1.studentNumber = 567;
console.log(student1.studentNumber);

// === Object Constructor===//

function Person(name, lastname, age){
    this.name= valueName;
    this.lastname= valueLastname;
    this.age= valueAge;
}
 // creating an object with the constructor
let person3 = new Person("fred","murr",34);





