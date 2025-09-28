// App.jsx

import './App.scss'
import Home from './pages/Home/Home.jsx'
import Catalogo from './pages/Catalogo/Catalogo.jsx'
import { 
  BrowserRouter, 
  Route, 
  Routes, 
  useLocation 
} from 'react-router-dom' 

import { useEffect } from 'react'

function AppContent() {

  const location = useLocation();

  useEffect(() => {
    const overflowClass = 'overflow-hidden-home'; 
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      document.body.classList.add(overflowClass);
    } else {
      document.body.classList.remove(overflowClass);
    }

    return () => {
      document.body.classList.remove(overflowClass);
    };
  

  }, [location.pathname]); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
    </Routes>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent /> 
    </BrowserRouter>
  );
}

export default App