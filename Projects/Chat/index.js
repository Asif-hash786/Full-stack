const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes

app.get("/", (req, res) => {
  res.send("Get is working");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat.save()
    .then((res) => {
      console.log(res);
    })
    .then((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// Edit Route

app.get("/chats/:id/edit",(req,res)=>{
  res.render("edit.ejs");
});

const port = 8080;
app.listen(port, () => {
  console.log("app is listining on port 8080");
});