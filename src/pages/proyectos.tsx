import React from "react";
import proyecto1 from "../assets/usados.jpg";
import proyecto2 from "../assets/fray.jpg";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const proyectos = [
  {
    titulo: "Gestión de redes - Usados VM",
    descripcion:
      "Desarrollo de identidad visual y contenido estratégico para una concesionaria de vehículos. Organización del feed, diseño de placas informativas y enfoque en la cercanía con el cliente.",
    imagen: proyecto1,
  },
  {
    titulo: "Gestión de redes - Club Fray Nicasio Gutiérrez",
    descripcion:
      "Creación de contenido visual, historias destacadas y cobertura de eventos deportivos para el club local 'La Peste Verde'. Diseño alineado a los valores del club y su comunidad.",
    imagen: proyecto2,
  },
];

const Proyectos: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-zinc-200 px-4 py-10 md:ml-24">
      {/* Añadí md:ml-24 para el margen izquierdo en pantallas medianas y grandes */}
      <Sidebar />
      <h1 className="text-4xl md:text-5xl font-bold text-[#C26DBC] text-center mb-8 md:mb-10">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
        {/* Por defecto grid-cols-1 para móviles */}
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-48 object-cover rounded-xl mb-4"
              // Reduje la altura inicial de la imagen en móviles
            />
            <h2 className="text-xl md:text-2xl font-semibold text-[#C26DBC] mb-2">
              {proyecto.titulo}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {proyecto.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Botón abajo */}
      <div className="mt-8 text-center">
        <Link to="/misservicios">
          <button className="bg-[#C26DBC] text-white px-8 py-3 rounded-full hover:bg-[#B05EA9] transition-transform hover:scale-105 shadow-lg font-quicksand">
            Ver Mis Servicios 💼
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Proyectos;