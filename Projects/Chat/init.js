const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "Asif",
    to: "neha",
    msg: "Send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "hulk",
    to: "sema",
    msg: "Hello how are you!!",
    created_at: new Date(),
  },
  {
    from: "peter",
    to: "eva",
    msg: "Good Morning",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "niraj",
    msg: "Today weather is good",
    created_at: new Date(),
  },
]

Chat.insertMany(allChats);
