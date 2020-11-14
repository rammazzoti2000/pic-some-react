import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './context/Context';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root'),
);
