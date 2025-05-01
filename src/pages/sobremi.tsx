import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../pages/sidebar';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SobreMi: React.FC = () => {
  const textos = [
    `¡Hola! Soy Celia Carranza, una apasionada de la creatividad, la comunicación digital y el diseño web.`,
    `Hoy trabajo como Community Manager y futura Ingeniera en Sistemas, ayudando a marcas y emprendimientos a encontrar su voz online, a través de estrategias auténticas y contenido visual creativo.`,
    `¿Por qué hago lo que hago? Porque creo profundamente en el poder de las buenas historias. Me inspira ver cómo una idea puede transformarse en comunidad, en conexión, en crecimiento.`,
    `Mi diferencial es la energía, el compromiso y el amor por cada detalle. No hago “por hacer”: me involucro como si cada proyecto fuera mío.`,
    `¿Te gustaría trabajar conmigo? ✨ ¡Será un placer crear algo increíble juntos!`,
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-zinc-200 px-8 py-16 relative">
      <Sidebar />
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[#C26DBC] mb-12 tracking-wider"
      >
        Sobre mí
      </motion.h1>

      <div className="max-w-3xl text-[#555] space-y-8 text-lg font-light">
        {textos.map((texto, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={
              i === 0
                ? 'font-semibold text-[#C26DBC] text-xl'
                : i === 1
                ? 'font-semibold text-indigo-500'
                : i === 3
                ? 'italic'
                : i === 4
                ? 'mt-10 text-xl font-semibold text-[#F97B22]'
                : 'leading-relaxed'
            }
          >
            {texto}
          </motion.p>
        ))}
      </div>

      {/* BOTÓN CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <Link to="/contacto">
          <button className="mt-12 bg-[#C26DBC] text-white px-8 py-3 rounded-full hover:bg-[#B05EA9] transition-transform hover:scale-105 shadow-lg">
            Hablemos ✉️
          </button>
        </Link>
      </motion.div>

      {/* Imagen o ilustración futura */}
      {/* 
      <div className="absolute top-16 right-16 hidden md:block">
        <img src="/ruta/a/tu/imagen.png" alt="Celia" className="w-64 rounded-xl shadow-lg" />
      </div> 
      */}
    </section>
  );
};

export default SobreMi;
