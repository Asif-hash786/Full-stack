const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Standard Get response ! welcome ${user}`);
});
app.post("/register", (req, res) => {
  // console.log(req.body);
  let { user, password } = req.body;
  res.send(`Standard Post response ! welcome ${user}`);
});
app.listen(port, () => {
  console.log(`listining to port ${port}`);
});