import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';
import About from './components/about/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);