//This method

// const student={
//   name:"asif",
//   age:21,
//   eng:89,
//   math:90,
//   phy:98,
//   getAvg(){
//     console.log(this);
//     let avg=(this.eng + this.math + this.phy)/3; //this function will access the inside student;
//     console.log(`${this.name} got avg marks = #${avg}`);
//   }
// }


//Try and Catch;

// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//   console.log(a);
// } catch(error){
//   console.log("caught an error");
//   console.log(error);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

//Arrow function

// const sum = (a, b) => {
//   console.log(a + b);
// };
// const cube = (n) => {
//   console.log(n*n*n);
// }

//arrow function implicit return;

// const mul=(a,b) => (
//   a * b
// );

//Set timeout

// console.log("Hi there");    //print my channel after a 4s;
// setTimeout( () => {
//   console.log("my channel");
// },4000);
// console.log("welcome to");

//set interval

// console.log("Hi there");     //print my channel after a 4s but repeatadly;
// setInterval( () => {
//   console.log("my channel");
// },4000);
// console.log("welcome to");

// console.log("Hi there");     //print my channel after a 4s but repeatadly and is has its own id;
// let id=setInterval( () => {
//   console.log("my channel");
// },4000);
// console.log("welcome to");    //if we want to stop the id just write in console clearInterval(id);
// console.log(id);

//this in arrow function;

// const student={
//   name:"asif",
//   marks:89,
//   prop:this, // global scope
//   getName: function(){
//     console.log(this); // student object
//     return this.name;
//   },

//   getMarks:() => {
//     console.log(this); //parent's scope => student => window
//     return this.marks;
//   },

//   getInfo1:function(){
//     setTimeout( () =>{
//       console.log(this); //student object
//     } ,2000);
//   },
//   getInfo2:function(){
//     setTimeout( function() { //parent's scope =>student=>window
//       console.log(this);
//     },2000);
//   },
// };

// Array Method

//forEach

// let arr=[1,2,3,4,5];
// arr.forEach(function(el){
//   console.log(el);
// });

// arr.forEach((el) =>{
//   console.log(el);
// });

// let arr=[
//   {
//     name:"asif",
//     marks:89,
//   },
//   {
//     name:"rohit",
//     marks:56,
//   },
// ];
// arr.forEach(function(student){
//   console.log(student.marks);
// });


//Map

// let num=[1,2,3,4];

// let double=num.map((el)=>{
//   return el*2;
// });

//Filter 

// let arr=[1,2,3,4,5,6,7,8,9];

// let even=arr.filter((num) =>{ //only true element gives
//   return num%2==0; // Even->true , Odd->False;
// });


// Every

// let arr=[1,2,3,4];   // true->if all true else false
// let num =arr.every((el)=>{
//   return el%2==0;
// });

// let arr2=[2,4];
// let num2 =arr2.every((el)=>{
//   return el%2==0;
// });

//Reduce or recurssion

// let arr=[1,2,3,4];
// let sum=arr.reduce((res,el)=>{  //first it will take element (el) then add res+el->0+1->1=res then
//   return res+el;                //1,el->1,2->3=res,3,el->3,3->9=res
// });

// let arr=[5,1,8,7,9,10];
// let result=arr.reduce((max,el) =>{
//   if(el<max){
//     return el;
//   } else{
//     return max;
//   }
// });

// Default Parameter

// function sum(a,b=5){
//   return a+b;
// }

//Spread

// let arr=[1,2,3,4,5]; // Spread the array or string 
// let res=Math.min(...arr);
// console.log(res);

// let str="Asif";
// console.log(...str);

//spread with array literals

// let arr=[1,5,8,9,6];
// let newarr=[...arr];
// console.log(newarr);

// let str="hello";  // spread indivisual character
// let newstr=[...str];
// console.log(newstr);

// spread with object literas

// let data={
//   email:"ironman@gmail.com",
//   password:"abcd",
// };

// let datacopy={...data,id:5};
// console.log(datacopy);

// let arr=[1,2,3,4]; //array->index;
// let obj={...arr};  //obj->key,val but in this case in key it will print index of an array
// console.log(obj);

//Destructuring array

// let names=["tony","thor","steven","steve"];
// let [winner,runnerup,...others]= names; //rest concept
// console.log(winner,runnerup,...others);

//Destructuring object

// const student={
//   name:"karan",
//   age:14,
//   class:9,
//   subjects:["hindi","english","math","science"],
//   username:"@karan",
//   password:"abcd",
// };

// let {user,password}=student;
// console.log(user,password);

hh
pp