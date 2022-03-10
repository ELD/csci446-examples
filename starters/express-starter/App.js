import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import Index from "./routes/Index.js";
import Users from "./routes/Users.js";

const App = express();

// view engine setup
App.set("views", path.join(path.resolve(), "views"));
App.set("view engine", "ejs");

App.use(logger("dev"));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use(express.static(path.join(path.resolve(), "public")));

App.use("/", Index);
App.use("/users", Users);

// catch 404 and forward to error handler
App.use(function (req, res, next) {
  next(createError(404));
});

// error handler
App.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default App;
