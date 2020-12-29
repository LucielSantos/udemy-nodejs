const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
  games: [
    {
      id: 23,
      title: 'Call of doty MW',
      year: 2019,
      price: 60,
    },
    {
      id: 65,
      title: 'Sea of thieves',
      year: 2018,
      price: 40,
    },
    {
      id: 2,
      title: 'Minecraft',
      year: 2012,
      price: 20,
    },
  ]
};

app.get('/games', (req, res) => {
  res.statusCode = 200;

  res.json(DB.games);
});

app.get('/game/:id', (req, res) => {
  const id = req.params.id;

  if(isNaN(id)){
    res.sendStatus(400);
  }else{
    const intId = parseInt(id);

    const game = DB.games.find(game => game.id === intId);

    if(game){
      res.statusCode = 200;
  
      res.json(game);
    }else{
      res.sendStatus(404);
    }
  }
});

app.post('/game', (req, res) => {
  const { title, price, year } = req.body;

  
})

app.listen(5000, () => {
  console.log('Success on init API')
});