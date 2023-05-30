const express = require("express");
const app = express();

// app.get("/", (req, res) => console.log(req.query));

app.get("/person", (req, res) => {
  console.log(req.query);
  return res.json({
    message: "heyyy",
    name: req.query.name,
    age: req.query.age,
  });
});

app.listen(3000, () => console.log("server is running "));
