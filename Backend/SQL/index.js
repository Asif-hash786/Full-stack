// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
let port = 8080;

app.set("View engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log("app listining on port 8080");
});

app.get("/", (req, res) => {
  let q = `SELECT Count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["Count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count2 = result;
      res.render("user.ejs", { count2 });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});
app.get("/user/:id/edit", (req, res) => {
  let = { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("Wrong password");
      } else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");   
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Auth_app',
  password: 'asif',
});

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }
// // Inserting new data

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // 100 fake user data
// }

// try {
//   connection.query(q,[data], (err, res) => {
//     if (err) throw err;
//     console.log(res);
//     // console.log(res.length);
//     // console.log(res[0]);
//     // console.log(res[1]);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end(); // to close connection

