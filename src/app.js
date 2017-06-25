import React from 'react';
import ReactDOM from 'react-dom';
import '../client/assets/Styles/Bootstrap.css';
import '../client/assets/Styles/_General.css'
import Routes from '../client/components/Routes/Routes';

ReactDOM.render(
  <Routes/>, document.querySelector('#root'));