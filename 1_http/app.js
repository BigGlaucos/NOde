const express = require("express");
const { randomUUID } = require("crypto");
const { response } = require("express");
const app = express();

app.use(express.json());

const produtos = [];
app.post("/produtos", (req, res) => {
    const { name, price, description } = req.body;

    const produto = {
        id: randomUUID(),
        name: name,
        price: price,
        description: description,
    };

    produtos.push(produto);

    return res.status(201).json(produtos);
});

app.get("/produtos", (req, res) => {
    return res.json(produtos);
}); 

app.get("/produtos/:id",(req,res)=>{
    const { id } = req.params

    const produto = produtos.find((produto)=> produto.id === id);

     return res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const produto = produtos.findIndex((produto) => produto.id === id);

  produtos.splice(produto,1);

  return res.json(produto);
   

});

app.listen(5000, () => console.log(`Servidor rodando na porta 5000`));
