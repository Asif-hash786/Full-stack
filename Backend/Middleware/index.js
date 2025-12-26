const express = require("express");
const app = express();
const ExpressError=require("./ExpressError");


// app.use((req,res,next)=>{
//   console.log("Hi im 1st middleware");
//    next();
// });

// app.use((req,res,next)=>{
//   console.log("Hi im 2nd middleware");
//    next();
// });

// logger -- > morgan

// app.use((req,res,next)=>{
//   req.responseTime=new Date(Date.now()).toString(); 
//   console.log(req.method,req.path,req.hostname,req.responseTime);
//   next();
// });

// API token as a quert string

// app.get("/api",(req,res,next)=>{
//   let {token} = req.query;
//   if(token === "giveaccess"){
//     next();
//   }
//   throw new ExpressError(401,"Access Denied");
// });

// app.get("/api",(req,res)=>{
//   res.send("Data");
// });

// Multiple Middleware

// let checkToken = ((req,res,next)=>{
//   let {token} = req.query;
//   if(token === "giveaccess"){
//     return next();
//   }
//   res.send("Access Denied");
// });

// let checkUser = ((req,res,next)=>{
//   let {user} = req.query;
//   if(user === "asif"){
//     return next();
//   }
//   res.send("Access Denied");
// });
// let checkAge = ((req,res,next)=>{
//   let {age} = req.query;
//   if(age >= 18){
//     return next();
//   }
//   res.send("Access Denied");
// });

// app.get("/api",checkToken,checkUser,checkAge,(req,res)=>{
//   res.send("Data");
// });

// Error handler

// basicall middleware work between after server receives the request and before response to the client

// app.use("/err",(req,res)=>{
//   abcd==abcd;
// });

// app.use((err,req,res,next)=>{
//   let {status=500, message}= err;
//   res.status(status).send(message);
// });

// app.use((err,req,res,next)=>{
//   console.log("Error 1 middleware");
//   res.send(err) // Trigger express error handler
// }); 

// app.use((err,req,res,next)=>{
//   console.log("Error 2 middleware");
//   next(err); // Trigger express error handler
// });

app.get("/admin",(req,res)=>{
  throw new ExpressError(403,"Access Denied");
});

app.get("/",(req,res)=>{
  res.send("Root is working");
});


app.listen(8080,()=>{
  console.log("Port is listening on 8080");
});