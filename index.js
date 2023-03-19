import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Main from './main';
import NavBar from './components/nav-bar';
import App from './App';
import reportWebVitals from './reportWebVitals';

let createE = React.createElement;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  createE('div', {},
  React.createElement(NavBar, {}, null),
  React.createElement(Main, {id:'mainLogin'}, null)
  )
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
