import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Dashboard from './pages/Dashboard.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Dashboard /> */}
    </Router>
  </React.StrictMode>
);
