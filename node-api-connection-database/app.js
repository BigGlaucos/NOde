const express = require("express");
const mysql2 = require("mysql2");
const app = express();
const path = require("path")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")

const PORT = 3000;

app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars')

const connection = mysql2.createPool({
  host: "localhost",
  user: "aluno_medio",
  password: "@lunoSenai23.",
  database: "loja",
});

connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } else {
    console.log("Conexão ao banco de dados estabelecida.");
  }
});

app.post("/cadastrar", (req, res) => {
  const { nome, description, price } = req.body;
  
  const sql = `INSERT INTO products (nome, description, price) VALUES ('${nome}', '${description}', '${price}')`;

  connection.query(sql, [nome, description, price], (error, results) => {
    if (error) {
      console.error("Erro ao inserir produto:", error);
      res.status(500).json({ error: "Erro ao inserir produto." });
    } else {
      console.log("Produto inserido com sucesso.");
      res.status(200).json({ message: "Produto inserido com sucesso." });
    }
  });
});

app.get("/", (req, res) => {
   res.render('formulario');
});

app.get("/produtos", (req, res) => {
  return res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const produto = produtos.find((produto) => produto.id === id);

  return res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const produto = produtos.findIndex((produto) => produto.id === id);

  produtos.splice(produto, 1);

  return res.json(produto);
});

app.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const produtoIndex = produtos.findIndex((produto) => produto.id === id);

  produtos[produtoIndex] = {
    ...produtos[produtoIndex],
    name,
    price,
    description,
  };
  return res.json({ message: "Produto Atualizado" });
});

app.listen(PORT, () => console.log(`Servidor está online 🟢 rodando na porta: ${PORT}`));
