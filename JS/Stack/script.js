// Stack Basic -->>LIFO

// function hello(){
//   console.log(" Inside Hello");
// }

// function demo(){
//   console.log("Inside demo");
//   hello();
// }

// console.log("global");
// demo();
// console.log("Good bye");

// function one(){
//   return 1;
// }
// function two(){
//   return one() + one ();
// }
// function three(){
//   let ans= two() + one();
//   console.log(ans);
// }
// three();

// works in synchrous nature --> one by one

// let a=25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);

// works as a asynchrous nature --> maybe there is a delay in code
//Basically js works as a single thread means one time only one works can do but in that code there is a
//setTimeout function which delay the code for 2s since js is Single-thread so its give the code to browser
// because browser is built in c++/java which works as a multithread so that brower will wait for 2s but js 
// will execute other code and after 2s it will give the code to js and js will execute
//example-----


// setTimeout(()=>{
//   console.log("Hello Earth");
// },2000);

// console.log("Hello World");

// problem facing js while using asynchrous nature

//  1-->>Callback Hell
// callBack nesting--> callback hell

// let h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){ // nextcolorchange is a callback
//   setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColorChange) nextColorChange();
//   },delay);
// }

// changeColor("red","1000",()=>{
//   changeColor("blue",1000,()=>{
//     changeColor("pink",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("green",1000);
//       });
//     });
//   });
// });

// To prevent this we use promises,async,await;  

// setting up promises // promises are object;

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb("hello world", () => {
//   console.log("success: your data was saved");
//   savetoDb("hello world2", () => {
//     console.log("success2: your data2 was saved");
//     savetoDb("hello world3", () => {
//       console.log("success3: your data3 was saved");
//     }, () => {
//       console.log("failure3: weak connection");
//     });
//   }, () => {
//     console.log("failure2: weak2 connection");
//   });
// }, () => {
//   console.log("failure: weak connection");
// });

//Refactorimg of promises-->(1)->resolve->suceess callBack (2)->reject->failure callback

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success: data was saved");
//     } else {
//       reject("failure: weak connection");
//     }
//   });
// }

// since promises are object therefore they have two methods then() & catch();

// savetoDb("hello")  // savetoDb is basically a promise
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// Promise chaining

// savetoDb("hello")
//   .then(() => {
//     console.log("data1 saved.");
//     savetoDb("world")
//       .then(() => {
//         console.log("data2 saved.");
//       })
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// improved way to write this code

// savetoDb("hello")
//   .then(() => {
//     console.log("data1 saved.");
//     return savetoDb("world");
//   })
//   .then(() => {
//     console.log("data2 saved.");
//     return savetoDb("galaxy");
//   })
//   .then(() => {
//     console.log("data3 saved.");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// result-->resolve and error--->reject

// savetoDb("hello")
//   .then((result) => {
//     console.log("data1 saved.");
//     console.log("result of promise:",result);
//     return savetoDb("world");
//   })
//   .then((result) => {
//     console.log("data2 saved.");
//     console.log("result of promise:",result);
//     return savetoDb("galaxy");
//   })
//   .then((result) => {
//     console.log("data3 saved.");
//     console.log("result of promise:",result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise:",error);
//   });

// refactoring old code

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// changeColor("red",1000)
//  .then(()=>{
//   console.log("red color was completed");
//   return changeColor("blue",1000);
//  })
//  .then(()=>{
//   console.log("blue color was completed");
//   return changeColor("pink",1000);
//  })
//  .then(()=>{
//   console.log("pink color was completed");
//   return changeColor("yellow",1000);
//  })
//  .then(()=>{
//   console.log("yellow color was completed");
//   return changeColor("green",1000);
//  })
//  .then(()=>{
//   console.log("green color was completed");
//  });
 

// changeColor("red", "1000", () => {
//   changeColor("blue", 1000, () => {
//     changeColor("pink", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("green", 1000);
//       });
//     });
//   });
// });