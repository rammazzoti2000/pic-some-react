import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { CreateContextProvider } from './context/CreateContextProvider';

ReactDOM.render(
  <CreateContextProvider>
    <Router>
      <App />
    </Router>
  </CreateContextProvider>,
  document.getElementById('root'),
);
