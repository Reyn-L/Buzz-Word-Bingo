/*jshint esversion: 6*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let word = { buzzwords: [] };
let pass = {success: true};
let fail = {success:false};
let urlencodedParser = bodyParser.urlencoded({extended:false});
let jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/buzzwords', (req, res) => {
  res.json(word);
});

app.post('/buzzword', urlencodedParser, (req, res) => {
  if(!req.body.buzzword) {
    res.status(404).send('Not Found');
  } else {
    res.send(pass);
    word.buzzwords.push(req.body.buzzword);
  }
});

// app.put('/buzzword', (req, res) => {

// });

// app.delete('/buzzword', (req, res) => {

// });

// app.post('/reset', (req, res) => {

// });


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('help', host, port);
});