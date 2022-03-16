import express from "express";
import path from "path";
import { promises as fs } from "fs";
import { marked } from "marked";

const App = express();

// view engine setup
App.set("views", path.join(process.cwd(), "views"));
App.set("view engine", "ejs");

App.use(express.static(path.join(process.cwd(), "public")));

App.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

App.get("/:pageTitle", async function (req, res) {
  console.log(req.params);
  const fileContents = String(
    await fs.readFile(
      path.join(process.cwd(), `posts/${req.params.pageTitle}.md`)
    )
  );
  res.render("post", {
    page: {
      title: req.params.pageTitle,
      content: marked.parse(fileContents),
    },
  });
});

export default App;
