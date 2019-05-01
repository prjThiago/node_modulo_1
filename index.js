const express = require("express"),
  app = express(),
  nunjucks = require("nunjucks");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { name: "Thiago" });
});

app.listen(3000);
