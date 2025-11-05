// let jsonRes = '{"fact":"Approximaetlt 1/3 of cat owner think their pets are able to read their mind}';
// console.log(jsonRes);

// To parse a string data into js object


// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// To parse JS object data into JSON

// let student ={
//   name: "Asif",
//   marks : 95,
// };
// console.log(student);
// let json=JSON.stringify(student);
// console.log(json);


// fetch

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data)=>{
//     console.log("data1 = : ",data.fact);
//     return fetch (url);
//   })
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data2)=>{
//     console.log("data2 = : ",data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR-",err);
//   });

// using fetch with asynch-await

// let url = "https://catfact.ninja/fact";

// async function getFact(){
//   let res= await fetch(url); // without awit it will give undefined because maybe api takes time to response
//   console.log(res);
//   let data = await res.json();
//   console.log(data.fact);
// }

// async function getFact() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//   } catch(e){
//     console.log("Error-",e);
//   }
// }

// using axios

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//   } catch(e){
//     console.log("Error-",e);
//   }
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     return "No fact found";
//   }
// }

// let url="https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   let img = document.querySelector("#img");
//   img.setAttribute("src",link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url);
//     return res.data.message; 
//   } catch (e) {
//     return "No image found";
//   }
// }

// const url = "https://icanhazdadjoke.com/";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let joke = await getJoke();
//   let p = document.querySelector(".joke");
//   p.innerText = joke;
// });


// async function getJoke() {
//   try {
//     let config = { headers: { Accept: "application/json" } }; //to get data from html to json apllication form
//     let res = await axios.get(url, config);
//     return res.data.joke;
//   } catch (e) {
//     return "No jokes found";
//   }
// }

//  updating query string

// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   console.log(country);
//   let colArr = await getcolleges(country);
//   show(colArr);
// });

// function show(colArr) {
//   let list =document.querySelector("#list");
//   list.innerText="";
//   for (col of colArr) {
//     console.log(col.name); 
//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getcolleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (err) {
//     return [];
//   }
// }


