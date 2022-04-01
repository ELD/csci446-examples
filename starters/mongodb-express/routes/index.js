import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ message: "Hello, world!" });
});

export { router as indexRouter };
