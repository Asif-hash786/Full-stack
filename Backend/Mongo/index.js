const mongoose = require('mongoose');

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//   name: "eve",
//   email: "eve@gmail.com",
//   age: 40,
// });

// user2.save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// Insert multiple collection or data

// User.insertMany([
//   {name:"Tony",email:"tony@gmai.com",age:55},
//   {name:"eva",email:"eva@gmai.com",age:30},
//   {name:"evason",email:"evason@gmai.com",age:35},
// ]).then((res)=>{
//   console.log(res);
// });

// find

User.findOne({age:{$gte:40}})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});