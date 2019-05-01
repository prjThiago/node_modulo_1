const express = require("express"),
  app = express(),
  nunjucks = require("nunjucks"),
  users = ["Thiago Morais", "Hugo Tostes", "Dario Silva"];

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.listen(3000);
