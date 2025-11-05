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