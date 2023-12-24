import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Scrolltop from './components/Scrolltop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scrolltop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
