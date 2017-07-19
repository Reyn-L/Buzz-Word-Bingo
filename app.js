/*jshint esversion: 6*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let word = { buzzwords: [] };

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index.html');
  console.log(res.body);
});


app.get('/buzzwords', (req, res) => {
  res.json(word);
  console.log(res.url);
});

app.post('/buzzword/points', (req, res, next) => {
  //res.send(req.body);
  console.log(req.body.buzzword);
  next();

});

app.put('/buzzword', (req, res, next) => {

});

app.delete('/buzzword', (req, res) => {

});

app.post('/reset', (req, res) => {

});


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('help', host, port);
});