import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './assets/data/store'
import 'font-awesome/css/font-awesome.css';
import './assets/styles/msmStyles.css';
import './assets/styles/portfolioStyles.css';
import './assets/styles/toolboxStyles.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
