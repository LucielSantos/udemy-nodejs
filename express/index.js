const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send('Bem vindo à home')
})

app.get('/blog/:artigo?', function(req, res){
  var artigo = req.params.artigo

  if(artigo){
    res.send('Artigo ' + artigo)
  }else{
    res.send('Bem vindo ao blog')
  }
})

app.get('/canal/youtube', function(req, res){
  var canal = req.query['canal']

  if(canal){
    res.send('Bem vindo ao canal ' + canal)
  }else{
    res.send('Nenhum canal fornecido')
  }
}) 

app.get('/ola/:nome/:empresa', function(req, res){
  var nome = req.params.nome
  var empresa = req.params.empresa

  res.send('Oi ' + nome + ' do ' + empresa)
})

app.listen(4000, function(error){
  if(error){
    console.log('Erro!')
  }else{
    console.log('Servidor iniciado!')
  }
})