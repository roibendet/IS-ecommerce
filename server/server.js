const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const os = require('os');
let response = [];

// DB settings
const level = require('level');
const db = level('./server/db', {valueEncoding: 'json'});

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}));
app.use(bodyParser.json());

app.post('/userData', function (req, res) {

  let customer = req.body.firstName + '-' + req.body.lastName;
  db.put(customer, req.body);
  db.get(customer, function (err, userData) {
    console.info('this', userData);
  });
  res.send('ok');
});



app.get('/backOffice', function (req, res) {

  db.createReadStream({keys: false, values: true})
    .on('data', function (data) {
      response.push(Object.assign({}, data));
    });
  if (response.length > 0) {
    res.send(JSON.stringify(response));
  }
  if (response.length === 0) {
    res.send('noData');
  }
  response = []
});


const path = require('path');

app.get('/dist/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/bundle.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

app.listen(port);
console.log('Magic happens on port ' + port);
