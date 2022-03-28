import express from "express";

/* GET home page. */
export default express.Router().get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
