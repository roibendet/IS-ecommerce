const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const os = require('os');
const level = require('level');


app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}));
app.use(bodyParser.json());


app.post('/userData', function (req, res) {
  const db = level('./server/db', {valueEncoding: 'json'});
  db.put('userData', req.body);
  db.get('userData', function (err, userData) {
    console.info(userData);
  });
  res.send('ok');
});


const path = require('path');

app.get('/dist/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/bundle.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));


app.listen(port);
console.log('Magic happens on port ' + port);