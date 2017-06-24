import React from 'react';
import ReactDOM from 'react-dom';
// var css = require('./app.css');
// import '../node_modules/normalize/'
const normalize = require('normalize');
import './bootstrap.css';
import './app.css';
import Routes from '../client/components/Routes/routes';

ReactDOM.render(
  <Routes/>, document.querySelector('#root'));