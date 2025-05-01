import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";

export default function Home() {
  return (
    <div className="min-h-screen h-full flex bg-zinc-200 font-sans px-8">
      <div className="flex-1 flex flex-col items-start justify-center ml-10">
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 mb-12 rounded-full shadow-md"
        />

        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-playfair font-bold"
          >
            Celia Carranza
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-[#C26DBC] mb-6 font-serif"
          >
            Portafolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-lg text-[#555] mb-10 max-w-xl"
          >
            Convirtiendo ideas en realidad con{" "}
            <span className="text-[#F97B22] font-semibold">
              toda la energía
            </span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 mt-6"
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
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-left text-gray-400 text-sm py-4 mt-12"
        >
          Hecho con 💖 por Celia Carranza | 2025
        </motion.footer>
      </div>

      <div className="w-1/5 absolute top-0 right-0 h-full">
        <img
          src={fondo}
          alt="Fondo decorativo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
