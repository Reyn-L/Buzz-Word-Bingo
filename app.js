/*jshint esversion: 6*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let wordbuzz= {};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index.html');
});


app.get('/buzzwords', (req, res) => {
  console.log(res.body);
});

app.post('/buzzword', (req, res) => {
  res.send(req.body);
  console.log(res.body);

});

app.put('/buzzword', (req, res) => {

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