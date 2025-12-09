const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
  res.send("Server working well");
});

let posts=[
  {
    id: "1a",
    username : "asif",
    content : "I love coding",
  },
  {
    id: "2a",
    username : "makutse",
    content : "Hard work is important to achieve success",
  },
  {
    id: "3a",
    username : "stan",
    content : "I got my first internship",
  },
];

app.get("/posts",(req,res)=>{
  res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
  let {username ,content}=req.body;
  posts.push({username , content});
  res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let post=posts.find((p)=>id===p.id);
  res.render("show.ejs",{post});
});
app.listen(port,()=>{
  console.log("Listening to port 8080");
});