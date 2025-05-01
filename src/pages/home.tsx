import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen h-full flex flex-col md:flex-row bg-zinc-200 font-sans px-6 md:px-8">
      {/* Contenedor principal con flex-col para móviles y flex-row para escritorio */}

      {/* Columna del texto e imagen del logo */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center md:ml-10 py-12 md:py-0">
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 mb-8 rounded-full shadow-md md:w-48 md:h-48 md:mb-12"
          // Reduje el tamaño inicial en móviles
        />

        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold mb-4 md:text-7xl"
            // Reduje el tamaño de la fuente en móviles y añadí un margen inferior
          >
            Celia Carranza
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#C26DBC] mb-4 font-serif"
            // Reduje el tamaño de la fuente en móviles y añadí un margen inferior
          >
            Portafolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base text-[#555] mb-8 max-w-xl text-center md:text-left"
            // Añadí centrado de texto en móviles y un margen inferior
          >
            Convirtiendo ideas en realidad con{" "}
            <span className="text-[#F97B22] font-semibold">toda la energía</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            // Centré los botones en móviles y cambié a row en pantallas pequeñas
          >
            <Link to="/sobre-mi">
              <button className="bg-[#C26DBC] text-white py-3 px-8 rounded-full hover:bg-[#B05EA9] shadow-lg hover:scale-105 transition-all duration-300 font-quicksand">
                Sobre mí
              </button>
            </Link>
            <Link to="/proyectos">
              <button className="bg-[#C26DBC] text-white py-3 px-8 rounded-full hover:bg-[#B05EA9] shadow-lg hover:scale-105 transition-all duration-300 font-quicksand">
                Proyectos
              </button>
            </Link>
            <Link to="/contacto">
              <button className="bg-[#C26DBC] text-white py-3 px-8 rounded-full hover:bg-[#B05EA9] shadow-lg hover:scale-105 transition-all duration-300 font-quicksand">
                Contacto
              </button>
            </Link>
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-center md:text-left text-gray-400 text-sm py-4 mt-8"
            // Centré el texto del footer en móviles y añadí un margen superior
          >
            Hecho con 💖 por Celia Carranza | 2025
          </motion.footer>
        </div>
      </div>

      {/* Columna de la imagen de fondo (oculta en móviles) */}
      <div className="md:w-1/2 lg:w-1/3 h-screen overflow-hidden relative md:block hidden">
        <img
          src={fondo}
          alt="Fondo decorativo"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  );
}