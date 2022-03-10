import express from "express";

/* GET users listing. */
export default express.Router().get("/", function (req, res, next) {
  res.send("respond with a resource");
});
