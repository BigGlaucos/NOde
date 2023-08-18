const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Página inicial");
});

app.listen(PORT, () => {
  console.log(`Servidor ONLINE 🟢 PORT: ${PORT}`);
});
