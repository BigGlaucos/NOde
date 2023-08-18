const http = require ("http");
const { default: test } = require("node:test");
const { json } = require("stream/consumers");
const PORT = 4000;

    const server = http.createServer((req, res) => {
    const UrlInfo = require("url").parse(req.url, true);
       
    res.writeHead(200, {"Content-Type" : "application/json"});
      if (req.url === "/produtos") {
        res.end(JSON.stringify({frutas:["abacate","melancia","laranja","abacaxi" ,"banana"]}));
      }

      if(res.url === "/usuarios"){res.end(JSON.stringify({message:"Acessando a rota de usuaios"}))};
  

});

server.listen(PORT, () => {
  console.log(`Servidor rondando na porta ${PORT}`);
});


