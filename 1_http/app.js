const { response } = require("express");
const express = require ("express");
const {randomUUID} = require ("crypto");
const app = express();
app.get("/", (req,res) =>{
    return res.send("Criando minha primeira rota usando o framework express");
});

 const produtos = [];
app.post("/produtos",(req,res)=>{

 const {name, price, description} = request.body
   
 const produto = {
    id:randomUUID(),
    name,
    price,
    description
   }
});
app.listen(3001,() => console.log(`Servidor rodando na porta 3001`));



