import React from 'react';
import Sidebar from '../pages/sidebar';


const servicios = [
  {
    titulo: 'Gestión de redes sociales',
    descripcion: 'Estrategia de contenido, diseño de publicaciones, informes y gestión integral de Instagram/Facebook para marcas y emprendimientos.',
    icono: '📱',
  },
  {
    titulo: 'Diseño web',
    descripcion: 'Creación de sitios web modernos, responsivos y optimizados. Ideal para portfolios, emprendimientos o landing pages.',
    icono: '💻',
  },
  {
    titulo: 'Diseño gráfico',
    descripcion: 'Placas para redes, flyers, banners digitales y más. Enfocado en la identidad visual y coherencia de marca.',
    icono: '🎨',
  },
  {
    titulo: 'Comunicación digital',
    descripcion: 'Acompañamiento estratégico en la forma de comunicar en el mundo digital: tono de voz, storytelling y conexión con la audiencia.',
    icono: '🗣️',
  },
  {
    titulo: 'Desarrollo frontend',
    descripcion: 'Creación de interfaces con React, optimización de experiencia de usuario y diseño adaptable a dispositivos.',
    icono: '⚛️',
  },
];

const MisServicios: React.FC = () => {
  return (
    <section className="flex flex-col min-h-screen bg-zinc-100 px-8 py-16 ml-28">
      <Sidebar />
      <h1 className="text-4xl font-bold text-center mb-12 text-[#C26DBC]">Mis Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{servicio.icono}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{servicio.titulo}</h2>
            <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MisServicios;
