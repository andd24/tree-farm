import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { TreeFarm } from "./components/treeFarm"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TreeFarm />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();