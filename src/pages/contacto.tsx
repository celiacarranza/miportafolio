import React from 'react';
import Sidebar from './sidebar';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Contacto: React.FC = () => {
  const telefono = '+54 9 353 5624036';
  const email = 'carranzacelia@outlook.com';
  const linkWhatsApp = `https://wa.link/k000nz`;

  return (
    <section className="flex flex-col min-h-screen bg-zinc-300 px-6 py-12 md:px-8 md:py-16 md:ml-24">
      {/* Ajusté los paddings horizontales y verticales, y el margen izquierdo para pantallas medianas y grandes */}
      <Sidebar />
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 md:mb-8 text-[#C26DBC]">
        Contacto
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
        {/* Reduje el padding del contenedor en móviles */}
        <p className="mb-4 text-gray-700 text-center md:mb-6">¡No dudes en ponerte en contacto!</p>

        <div className="mb-3 md:mb-4">
          <div className="flex items-center">
            <FaPhone className="text-xl text-[#C26DBC] mr-3 md:mr-4" />
            <a href={`tel:${telefono}`} className="text-gray-700 hover:text-[#B05EA9] transition">
              {telefono}
            </a>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 z-50 transition-transform hover:scale-105"
            >
              <FaWhatsapp className="text-3xl md:text-4xl" />
            </a>
          </div>
        </div>

        <div className="mb-3 md:mb-4">
          <div className="flex items-center">
            <FaEnvelope className="text-xl text-[#C26DBC] mr-3 md:mr-4" />
            <a href={`mailto:${email}`} className="text-gray-700 hover:text-[#B05EA9] transition">
              {email}
            </a>
          </div>
        </div>

        {/* Aquí podrías agregar más información o un formulario */}
        <div className="mt-6 text-center md:mt-8">
          <p className="text-sm text-gray-500">¡Espero tu mensaje!</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;