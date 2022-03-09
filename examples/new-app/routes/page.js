const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  const data = {
    page: {
      title: "My page title",
      header: "Page Header",
      articles: [
        "article 1",
        "article 2",
        "article 3",
        "article 4",
        "article 5",
      ],
    },
  };
  res.render("page", data);
});

router.get("/other", function (req, res) {
  const data = {
    page: {
      title: "My page title",
      header: "Page Header",
      articles: ["article 4", "article 5", "article 6"],
    },
  };
  res.render("page", data);
});

module.exports = router;
