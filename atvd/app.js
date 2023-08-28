const express = require("express");
const { randomUUID } = require("crypto");
const users = [];
const posts = []

const app = express();

PORT = 5000;

app.use(express.json());

app.post("/users", (req, res) => {
  const { name, post, like } = req.body;

  const user = {
    id: randomUUID(),
        name,
        email,
        password,
        posts: []
  };

  users.push(user);

  return res.status(201).json(user);
});

app.put("/users/:id", (req,res)=>{
    const {id} = req.params;
    const {name,email,password} = req.body;

    const user = users.find((u) => u.id ===id);

    if (!user){
        return res.status(404).json({error:"MISSING"})
    }
user.name = name;
user.email = email;
user.password = password;

return res.status(200).json(user)
});

app.get("/users", (req,res)=> {
    return res.status(200).users
});

app.get("/posts", (req, res) => {
  return res.status(200).posts;
});

app.post("/posts",(req,res)=>{
     const { title, content, authorId } = req.body;

     const post ={
        id:UUID(),
        title:title,
        content:content,
        authorId:authorId
     }
    posts.push(post);

    return res.status(200).json(post)
})

app.listen(PORT, () => console.log(`Servidor on-line porta: ${PORT}`));
