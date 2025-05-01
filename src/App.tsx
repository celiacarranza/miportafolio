// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SobreMi from './pages/sobremi';
import Proyectos from './pages/proyectos';
import MisServicios from './pages/misservicios';
import Contacto from './pages/contacto';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-white"> {/* Contenedor principal con Flexbox */}
        <div className="flex-1 overflow-y-auto"> {/* Contenedor para el contenido principal */}
          <main className="p-4"> {/* Añade un padding general al contenido */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<SobreMi />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/misservicios" element={<MisServicios />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}