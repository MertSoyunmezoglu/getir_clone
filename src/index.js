import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 

  <BrowserRouter>
  <App />
  </BrowserRouter>
 

);

// If you want to start measuring performance in your app, pass a function
