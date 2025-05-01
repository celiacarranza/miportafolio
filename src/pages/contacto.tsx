// src/pages/Contacto.tsx
import React from 'react';
import Sidebar from './sidebar'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa'; 
import { FaWhatsapp } from 'react-icons/fa';

const Contacto: React.FC = () => {
  const telefono = '+54 9 353 5624036'; 
  const email = 'carranzacelia@outlook.com'; 
  const mensajeWhatsApp = encodeURIComponent('¡Hola! Me gustaría contactarlos desde mi portafolio.'); // Mensaje opcional
  const linkWhatsApp = `https://wa.link/k000nz`;

  return (
    <section className="flex flex-col min-h-screen bg-zinc-300 px-8 py-16 ml-24">
      <Sidebar /> 
      <h1 className="text-6xl font-bold text-center mb-8 text-[#C26DBC]">Contacto</h1>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8">
        <p className="mb-6 text-gray-700 text-center">¡No dudes en ponerte en contacto!</p>

        <div className="mb-4">
          <div className="flex items-center">
            <FaPhone className="text-xl text-[#C26DBC] mr-4" />
            <a href={`tel:${telefono}`} className="text-gray-700 hover:text-[#B05EA9] transition">
              {telefono}
            </a>

            <a
        href={linkWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 z-50 transition-transform hover:scale-105"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <FaEnvelope className="text-xl text-[#C26DBC] mr-4" />
            <a href={`mailto:${email}`} className="text-gray-700 hover:text-[#B05EA9] transition text-4x1">
              {email}
            </a>
          </div>
        </div>

        {/* Aquí podrías agregar más información o un formulario */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">¡Espero tu mensaje!</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;