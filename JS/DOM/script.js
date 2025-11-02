
// alert("Something is wrong");
// console.error("This is an error msg");
// console.warn("This is warning");

// let firstName= prompt("Enter your name");
// let msg="Welcome " +firstName+" !";
// alert(msg);

// Strings Methods

// let name="   hello   ";
// let res= name.trim();
// console.log(name);
// console.log(res);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let name2="iLoveCoding";
// let res2=name2.indexOf("C");
// console.log(res2);
// console.log(name2.repeat(2));

// let name3="  Hello My name is SRK  ";
// let res3=name3.toUpperCase().trim();
// console.log(res3);
// console.log(name3.slice(2,7));
// console.log(name3.slice(7));
// console.log(name3.slice(-5)); //name3.length-2 25-5=20;
// console.log(name3.replace("SRK","Asif"));
// console.log(name3.replace("H","X"));

//Arrays Methods

// let arr=[1,2,3,4];
// console.log(arr);
// console.log(arr[0]);

// let arr2=["Apple","Banana","Grapes"];
// console.log(arr2);
// console.log(arr2[0][0]); // first one for index and second one for inside index;

// console.log(arr2.push("orange")); //it will add the orange in last index
// console.log(arr2.push("Lichi")); 
// console.log(arr2.pop()); //it will delete the last index element
// console.log(arr2.unshift("gauava")); // it will add the element in starting index
// console.log(arr2.unshift("watermelon"));
// console.log(arr2.shift("watermelon")); //it will delete the starting index of the element

// let primary=["Apple","Banana","Grapes"];
// let secondary=["lichi","Gauava","Water-Melon"];
// console.log(primary.concat(secondary)); // it will add the array
// console.log(primary.reverse()); // reverse the array
// console.log(primary.slice(2,3)); //copies a portion of array;
// console.log(secondary.slice(-2));
// console.log(secondary.slice(secondary.length-1));
// console.log(primary.slice(primary.length))


// let cars=["xuv","maruti","audi","bmw"];
// console.log(cars);
// console.log(cars.splice(0,1));
// console.log(cars.splice(0,0,"Bugati","ferrari"));

// let chars=['a','d','b','c'];
// console.log(chars.sort());
// let num=[5,8,9,6,1,2]; // it will only sort character and strings elements
// console.log(num.sort());

//OBJECTS

// const post={
//   username:"asif-01",
//   content:"This is my #firstpost",
//   likes:55,
//   reposts:55,
//   tags:["@mahesh","@india"]
// };
// console.log(post);
// console.log(post.username);
// console.log(post.likes=85);
// console.log(post.gender="male");
// console.log(delete post.content);

//MATH

// let random=Math.floor(Math.random()  * 100)+1;
// console.log(random);

// function concat(str){
//   let result="";
//   for(let i=0;i<str.length;i++){
//     result+=str[i];
//   }
//   return result;
// }
// let str=["my","name","is","nobara"];
// console.log(concat(str));

//This Keyword;




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