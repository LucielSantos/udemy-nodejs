var http = require('http');

http.createServer(function (req, res){
  res.end('<h1> Hello World </h1> </br> <h3>HTTP<h3>')
}).listen(8181);

console.log('Servidor rodando')