// let btn =document.querySelector("button");
// let btns=document.querySelectorAll("button");

// for(btn of btns){
//   // btn.onclick=sayHello;
//   // btn.onmouseenter=function(){
//   //   console.log("You Entered a button");
//   // };
//   btn.addEventListener("dblclick", function(){
//     console.log("You doubled clicked me");
//   });
// }
// btn.onclick =function(){
//   console.log("button was clicked");
// }

// function sayHello(){
//   alert("Hello!!");
// } 

// btn.onclick=sayHello;


// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//   let h3=document.querySelector("h3");
//   let randomColor=getRandomcolor();
//   h3.innerText=randomColor;
//   let div=document.querySelector("div");
//   div.style.backgroundColor=randomColor;
//   console.log("color updated");
// });                             

// function getRandomcolor(){
//   let red=Math.floor(Math.random() * 255)+1;
//   let green=Math.floor(Math.random() * 255)+1;
//   let blue=Math.floor(Math.random() * 255)+1;
//   let color =`rgb(${red},${green},${blue})`;
//   return color;
// }

// This in EventListener

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");

// function changeColor(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="green";
// }

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);

// Keyboard Event

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(){
//   console.log("key was pressed");
// })

// form event

// let form=document.querySelector("form"); // new page
// form.addEventListener("submit",function(){
//   console.log("Form was registerd");
// });

// let form=document.querySelector("form");  // if dont want to go new page
// form.addEventListener("submit",function(event){
//   event.preventDefault();
//   // console.log("Form was registerd");
//   alert("form was submitted");
// });

// Extracting form data;;

// let form=document.querySelector("form"); 
// form.addEventListener("submit",function(event){
//   event.preventDefault();
//   let inp=document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);
// });

// Extracting multiple Data

// let form=document.querySelector("form"); 
// form.addEventListener("submit",function(event){
//   event.preventDefault(); 


//   // first method

//   // let user=document.querySelector("#user");
//   // let pass=document.querySelector("#pass");

//   // second method --> frequently used

//   let user=this.elements[0];
//   let pass=this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);
// });

// More events in form

// let uesr=document.querySelector("#user");

// uesr.addEventListener("change", function(){
//   console.log("changed event");
//   console.log("final value =", this.value);
// });

// uesr.addEventListener("input", function(){
//   console.log("input event");
//   console.log("final value =", this.value);
// });

// let h2=document.querySelector("h2");
// let inp=document.querySelector("#user");

// inp.addEventListener("input",function(){
//   console.log(inp.value);
//    const filteredValue = inp.value.replace(/[^a-zA-Z\s]/g, "");
//       h2.innerText = filteredValue;
// });

// Event bubbling

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(event){ // there ia a nested bubbling thats why its repeat to stop this we use stopPropagation();
//   console.log("div was clicked");
//   event.stopPropagation();
// });
// ul.addEventListener("click",function(event){
//   console.log("ul was clicked");
//   event.stopPropagation();
// });

// for(li of lis){
//   li.addEventListener("click",function(event){
//   console.log("li was clicked");
//   event.stopPropagation();
// });
// }