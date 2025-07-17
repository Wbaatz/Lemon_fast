import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
