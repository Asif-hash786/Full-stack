// Prototype

// let arr = [1, 2, 3];
// arr.sayHello = () => {
//   console.log("Hello im array");
// };
// console.log(arr);
// arr.sayHello();
// arr.push(2);
// console.log(arr);
// console.log(arr.__proto__);
// arr.__proto__.push=(n)=>{
//   console.log("Pushing number: ",n);
// };
// arr.push(5);
// console.log(arr);

// Factory function

// function personMaker(name,age){
//   const person={
//     name : name,
//     age : age,
//     talk(){
//       console.log(`Hi my name is ${this.name}`);
//     },
//   };
//   return person;
// }
// let p1=personMaker("adam",25); // copy
// let p2=personMaker("eve",75); //copy
// console.log(p1);
// console.log(p2);

// Constructor :-> Doesn't return anything and start with capital letter

// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   console.log(this); // before writing below code it will print window because this refer 
//   // to window function.
//   //after creating p1 and initializing new ,basically new created a new object and this refer
//   //to p1 object ..
//   // if we can't write new it will show window function
// }

// Person.prototype.talk=function(){
//   console.log(`Hi my name is ${this.name}`);
// }
// let p1= new Person("adam",25);
// console.log(p1.talk()); 

// Classes

// class Person{
//   constructor(name ,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
//   }
//   talk(){
//     console.log(`Hi My name is ${this.name}`);
//   }
// }
// let p1=new Person("Asif",19);
// let p2=new Person("soham",20);

// Inheritance

// class Person{
//   constructor(name,age){
//     console.log("Person class constructor");
//     this.name=name;
//     this.age=age;
//   }
//   talk(){
//     console.log(`My name is ${this.name}`);
//   }
// }

// class Student extends Person{
//   constructor(name,age,marks){
//     console.log("Student class constructor")
//     super(name,age); 
//     this.marks=marks;
//   }
// }
// class Teacher extends Person{
//   constructor(name,age,subject){
//     console.log("Teacher class constructor");
//     super(name,age);
//     this.subject=subject;
//   }
// }

class Mammel{ //base or parent
  constructor(name){
    this.name=name;
    this.type="Warm-Blood";
  }
  eat(){
    console.log("Im Eating");
  }
}
class Dog extends Mammel{ //child
  constructor(name){
    super(name);
  }
  bark(){
    console.log("Woff...");
  }
}
class Cat extends Mammel{ //child
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...");
  }
}