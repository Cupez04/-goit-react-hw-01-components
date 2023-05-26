import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'
import './index.css';

// Archivos JSON
import friends from './data/friends-list';
import user from './data/profile';
import statistics from './data/statistics-list';
import transaction from './data/transactions-list'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data = {{friends, user, statistics, transaction}}/>
  </React.StrictMode>
);
