import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './styles/common.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/valorantum">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
