import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from '../src/store/store.js';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>,
);
