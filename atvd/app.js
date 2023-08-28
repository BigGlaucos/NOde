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



app.listen(PORT, () => console.log(`Servidor on-line porta: ${PORT}`));
