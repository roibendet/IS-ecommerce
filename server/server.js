const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const os = require('os');


app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}));
app.use(bodyParser.json());


// DB settings
const level = require('level');
const db = level('./server/db', {valueEncoding: 'json'});





app.post('/userData', function (req, res) {

  let customer = req.body.firstName + '-' + req.body.lastName;
  db.put(customer, req.body);
  db.get(customer, function (err, userData) {
    console.info(err);
    console.info('this',userData);
    response.push(Object.assign({}, userData));
  });
  res.send('ok');
});


let response = [];


// iterate keys in data base
const valuestream = db.createValueStream();
db.createReadStream({keys: false, values: true})
  .on('data', function (data) {
    response.push(Object.assign({}, data));
  });



app.get('/backOffice', function (req, res) {

  // iterate keys in data base
  const keystream = db.createKeyStream();
  keystream.on('data', function (data) {
    // console.info('key = ', data);
  });

  res.send(JSON.stringify(response))
});


const path = require('path');

app.get('/dist/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/bundle.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));


app.listen(port);
console.log('Magic happens on port ' + port);