const url = require('https')
const PORT = 5000

const server = http.createServer((req, res) => {
    const urlInfo = required('url').parse(req.url, true);
    const name = urlInfo.query.name

    //res.statusCode ( 200,{'Content-Type':'Text/html'})
    res.setHeader('Content-Type', 'Text/html')

    if(!name){
        res.end('<h1>Preencha seu nome:</h1> <form method="GET"> <input text="text" name="name"/> <input type="submit" value="Enviar/> </form>')
    }else{
        res.end(`Seja bem vindo ${name}`)
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rondando na porta ${PORT}`)
 })
