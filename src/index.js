import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/functionBased/TodoContainer.js';
import './components/functionBased/App.css';


ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);