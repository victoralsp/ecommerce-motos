// App.jsx

import './App.scss'
import Home from './pages/Home/Home.jsx'
import Catalogo from './pages/Catalogo/Catalogo.jsx'

// 1. CORREÇÃO: Importar TUDO que será usado
import { 
  BrowserRouter, // <-- GARANTIDO QUE ESTÁ AQUI
  Route, 
  Routes, 
  useLocation 
} from 'react-router-dom' 

import { useEffect } from 'react'


// Componente que lida com a lógica de rota e overflow.
// Ele precisa estar DENTRO do BrowserRouter.
function AppContent() {
  
  // 2. CORREÇÃO: Chamar useLocation() como uma função
  const location = useLocation();

  useEffect(() => {
    // A classe definida globalmente (ex: no App.scss ou index.scss)
    const overflowClass = 'overflow-hidden-home'; 
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      document.body.classList.add(overflowClass);
    } else {
      document.body.classList.remove(overflowClass);
    }

    // Limpeza: remove a classe ao sair da Home
    return () => {
      document.body.classList.remove(overflowClass);
    };
  
  // Roda o efeito a cada mudança de rota
  }, [location.pathname]); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
    </Routes>
  );
}


// O App agora é apenas um invólucro para fornecer o contexto de roteamento
function App() {
  return (
    <BrowserRouter>
      {/* O AppContent pode usar useLocation/useEffect porque está dentro do contexto */}
      <AppContent /> 
    </BrowserRouter>
  );
}

export default App