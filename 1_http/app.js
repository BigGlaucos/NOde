const express = require ("express");
const {randomUUID} = require ("crypto");
const app = express();

app.use(express.json() );

 const produtos = [];
app.post("/produtos",(req,res)=>{

 const {name, price, description} = req.body
 
 const produto = {
     id:randomUUID(),
     name: name,
     price: price ,
     description : description
    }
    
    produtos.push(produto);

   return res.status(201).json(produtos);

});
app.listen(5000,() => console.log(`Servidor rodando na porta 5000`));



