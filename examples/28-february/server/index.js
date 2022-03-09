const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const file = path.join(__dirname, "index.html");
  res.sendFile(file);
});

app.get("/json", (req, res) => {
  res.status(200).json({ message: "hello, express" });
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
