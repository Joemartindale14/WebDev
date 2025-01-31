const express = require("express");

//express app
const app = express();

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Hello World" });
});

//listen for requests
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
