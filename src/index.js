import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu.js';
import Sobre from './components/sobre.js';
import Skills from './components/skills.js';
import Experiencia from './components/experiencia.js';
import Formacao from './components/formacao.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Sobre />
    <App />
    <Skills />
    <Experiencia />
    <Formacao />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
