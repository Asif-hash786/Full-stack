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
// find -> findOne -> findById


// User.findById("693e93d08031b2a5f7f7f59f")
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// update->updateOne->updateMany

// User.findByIdAndUpdate("693e93d08031b2a5f7f7f59d",
//   { age: 20, name: "Asif", email: "asif@gmail.com" }, { new: true })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// Delete--->deleteOne-->deleteMany-->findByIdAndDelete-->

// User.findOneAndDelete( {name:"evason"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
