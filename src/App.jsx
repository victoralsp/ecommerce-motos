import { useState } from 'react'
import './App.scss'
import Home from './pages/Home/Home.jsx'
import Catalogo from './pages/Catalogo/Catalogo.jsx'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
