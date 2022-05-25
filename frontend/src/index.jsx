import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/style.css'
import './index.css';
import './main'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
