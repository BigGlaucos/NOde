const http = require('http')
//console.log(http)
const PORT = 3000

//const server = http.createServer((req, res)=>{
//  res.write('Olá, Mundo!')
//  res.end()
//})


//PRATICANDO
//const server = http.createServer((req, res)=>{
//    if(req.url === '/home'){
 //       res.writeHead(200, {'Content-Type':'Text/plan'} )
  //      res.write('Página Home')
   //     res.end()

  //  }else if(req.url === '/sobre'){
  //      res.writeHead(200, {'Content-Type':'Text/plan'} )
   //     res.write('Página Sobre')
   //     res.end()

   // }else{
  //      res.writeHead(404, {'Content-Type':'Text/plan'} )
   //     res.write('Página não encontrado')
   //     res.end()
   // }
//})

//Retornando HTML
const server = http.createServer((req, res)=>{
  if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'Text/html'} )
         res.write('<h1>Página Home<h1>')
         res.write('<p>Esta é a Página Home<p>')
         res.end()
     
   }else if(req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'Text/html'} )
        res.write('<h1>Página Sobre<h1>')
        res.write('<p>Esta é a Página Sobre<p>')
        res.end()
        
   }else if(req.url === '/Contato'){
        res.writeHead(200, {'Content-Type':'Text/html'} )
        res.write('<h1>Página Contato<h1>')
        res.write('<p>Esta é a Página Contato<p>')
        res.end()
   
   }else{
        res.writeHead(404, {'Content-Type':'Text/html'} )
        res.write('<h1>Página não encontrada!<h1>')
        res.end()

    }
})


server.listen(PORT, ()=>{
   console.log(`Servidor rondando na porta ${PORT}`)
})