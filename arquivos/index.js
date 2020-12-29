const fs = require('fs');

function modificarUsuario(nome, curso, categoria){
  fs.readFile('./usuario.json', 'utf-8', (error, dados) => {
    if(error){
      console.log('Erro ao ler o arquivo')
    }else{
      var conteudo = JSON.parse(dados);

      conteudo.nome = nome;
      conteudo.curso = curso;
      conteudo.categoria = categoria;

      fs.writeFile('./usuario.json', JSON.stringify(conteudo), (error) => {
        if(error){
          console.log('Erro ao escrever no arquivo')
        }
      })
    }
  })
}

modificarUsuario('Luciel Vitor', 'Formação ReactJS', 'ReactJS')