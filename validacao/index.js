var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session')
var flash = require('express-flash')
var cookieParser = require('cookie-parser')

var app = express();

app.set("view engine", 'ejs');

  
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.set('trust proxy', 1);

app.use(cookieParser('secret123'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get("/", (req, res) => {
   res.render('index');
});

app.post("/form", (req, res) => {
   const { email, nome, pontos } = req.body;



   res.send(email);
});

app.listen(3001, (req, res) => {
   console.log("Servidor rodando");
})