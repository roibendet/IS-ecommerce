import React from 'react';
import ReactDOM from 'react-dom';
const normalize = require('normalize');
import './bootstrap.css';
import './app.css';
import Routes from '../client/components/routes/Routes';

ReactDOM.render(
  <Routes/>, document.querySelector('#root'));