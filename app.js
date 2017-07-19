/*jshint esversion: 6*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let word = { buzzwords: [] };
let pass = {success: true};
let fail = {success:false};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/buzzwords', (req, res) => {
  res.json(word);
});

app.post('/buzzword', (req, res) => {
  if(!req.body.buzzword || isNaN(req.body.points)) {
    return res.send(fail);
  }

  let dupCheck = word.buzzwords.filter((buzzObj) => {
    return buzzObj.buzzword === req.body.buzzword;
  });

  if(dupCheck.length !== 0){
    return res.send(fail);
  }

  let points = Number(req.body.points);
  let buzzword = req.body.buzzword;
  word.buzzwords.push({buzzword, points, heard : false});
  return res.send(pass);

});

app.put('/buzzword', (req, res) => {

});

// app.delete('/buzzword', (req, res) => {

// });

// app.post('/reset', (req, res) => {

// });


const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('help', host, port);
});