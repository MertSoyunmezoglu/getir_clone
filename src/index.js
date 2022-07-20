import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import modal from 'store/modal';

const root = ReactDOM.createRoot(document.getElementById('root'), document.body.style = 'background: rgb(243 244 246);');
root.render( 
  <Provider store={store} modal={modal}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
