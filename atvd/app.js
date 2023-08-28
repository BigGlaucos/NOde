const express = require ("express");
const { randomUUID} = require("crypto");
const {response} = require("express");
const {request} = require ("http");
const app = express();

PORT = 5000;

app.use(express.json());


const users = [];

app.post("/users", (req,res)=>{
     const {name,publi,} = req.body

        const user = {
            id:randomUUID,
            name:name,
            publi:publi
        }

        users.push(user);

        return res.status(201).json(users);
})

app.get("/users" , (req,res)=>{
    return res.json(users);
})


app.get("/users/:publi", (req, res) => {
  const { id } = req.params;

  const post = users.find((user) => user.id === id);

  return res.json(publi);
});


app.listen(PORT, ()=> console.log(`Servidor on-line porta: ${PORT}`));

