const express = require("express");
const app = express();

let port =3000;
app.listen(port ,()=>{
  console.log(`app listening on port ${port}`);
});

// app.use((req,res)=>{
//   // console.log(req);
//   console.log("request received");
//   let code="<h1>Hello</h1><ul><li>Apple</li><li>Orange</li></ul>"
//   res.send(code);
// });

app.get("/",(req,res)=>{
  res.send("You are in root path");
});
// app.get("/apple",(req,res)=>{
//   res.send("You connected apple path");
// });
// app.get("/orange",(req,res)=>{
//   res.send("You connected orange path");
// });
// app.get(/.*/,(req,res)=>{
//   res.send("This path does not exist");
// });
// app.post("/",(req,res)=>{
//   res.send("You connected root path of post");
// });

// app.get("/:username/:id",(req,res)=>{  // creating parameter for username id
//   let {username,id}=req.params;
//   let htmlStr=`<h1>Welcome to the page of @${username}</h1>`;
//   res.send(htmlStr);
// });

app.get("/search",(req,res)=>{
  let {q} =req.query;
  res.send(`<h1>Search result for query: ${q}</h1>`);
});