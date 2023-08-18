const http = require('http')
const fs = require('fs')
const url = require('url')

const PORT = 4000

const server = http.createServer((req, res)=>{
    const q = url.parse(req.url, true)
    const filaname = q.pathname.substring(1)
    // index.html
    // 0 . 1

    if(filename.includes('html')){
        if(fs.existsSync(filaname)){
            fs.readFile(filaname, function(err, data) {
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write(data);
                return res.end();
            });
        }
    } else {
        fs.readFile("404.html", (err, data) => {
            res.writeHead(404, {"Content-Type":"text/html"});
            res.rite(data);
            return res.end();
        });
    }
});

server.listen(PORT, ()=>{
    console.log('Servidor on '+PORT+ '')
})