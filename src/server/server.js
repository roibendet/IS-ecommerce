const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
let response = [];

// DB settings
const level = require('level');
const db = level('./src/server/db', {valueEncoding: 'json'});

// Email settings
const nodemailer = require('nodemailer');


app.use(bodyParser.json());

app.post('/userData', function (req, res) {

  let customer = req.body.firstName + '-' + req.body.lastName;
  db.put(customer, req.body);
  db.get(customer, function (err, userData) {
    console.info('this', userData);
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ironsourceroibendet@gmail.com',
      pass: 'pda8m6fx'
    }
  });

  const mailOptions = {
    from: 'Iron Source Test',
    to: `${req.body.email}`,
    subject: `${req.body.firstName.toUpperCase()} ${req.body.lastName.toUpperCase()}  Thank you for your purchase`,
    text: 'Hire Me!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
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

app.get('/dist/bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../../dist/bundle.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../../index.html')));

app.listen(port);
console.log('open in the browser at http://localhost:3000');
