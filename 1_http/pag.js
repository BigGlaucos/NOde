const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.get("/alunos", (req, res) => {
  res.send("Página de alunos");
});


app.get("/contatos", (req, res) => {
  res.send("Página de contatos");
});


app.listen(4000, () => { console.log("Servidor iniciado na porta 4000");
});
