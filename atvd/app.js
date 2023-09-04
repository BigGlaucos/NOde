const express = require("express");
const { randomUUID } = require("crypto");
const users = [];
const posts = []

const app = express();

PORT = 5000;

app.use(express.json());

app.post("/users", (req, res) => {
    const { name, email, password } = req.body;

    const user = {
        id: randomUUID(),
        name:name,
        email:email,
        password:password,
        posts: []
    };

    users.push(user);

    return res.status(201).json(user);
});

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "MISSING" })
    }
    user.name = name;
    user.email = email;
    user.password = password;

    return res.status(200).json(users)
});

app.get("/users", (req, res) => {
    return res.status(200).users
});

app.get("/posts", (req, res) => {
    return res.status(200).posts;
});

app.post("/posts", (req, res) => {
    const { title, content, authorId } = req.body;

    const post = {
      id: randomUUID(),
      title: title,
      content: content,
      authorId: authorId,
    };
    posts.push(post);

    return res.status(200).json(post)
});

app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { Title, Content } = req.body;

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "MISSING" });
    }

    post.title = title;
    post.content = content;

    return res.status(200).json(post);
});

app.get("users/:userID/posts", (req, res) => {

    const { userID } = req.params;

    const posts = posts.filter((p) => p.authorId === userID);

    return res.status(200).json(posts)
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    const index = users.findIndex((u) => u.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "MISSING" });
    }

    user.splice(index, 1);

    return res.status(200).json({ message: "User Deleted 🟢 " })
});

app.delete("/post/:id", (req, res) => {
    const { id } = req.params;

    const index = posts.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "MISSING" });
    }

    posts.splice(index, 1);

    return res.status(200).json({ message: "Post Deleted 🟢 " });
});

app.listen(PORT, () => console.log(`Servidor on-line porta: ${PORT}`));