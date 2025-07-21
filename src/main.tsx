import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import InstagramRedirect from './pages/InstagramRedirect';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/instagram" element={<InstagramRedirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
