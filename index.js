const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}`);
});

app.get("/Login", (req, res) => {
  res.send("Login");
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Bem-vindo, ${req.params.name}`
  });
});

app.listen(3000);
