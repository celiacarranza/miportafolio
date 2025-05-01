// components/Sidebar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  EnvelopeIcon,
  Bars3Icon, // Icono de hamburguesa
  XMarkIcon, // Icono de cerrar
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-[#C26DBC] text-white"
      : "hover:bg-gray-100 hover:text-[#C26DBC]";
  };

  return (
    <>
      {/* Icono de hamburguesa para móviles */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 bg-[#C26DBC] text-white rounded-md p-2 z-50 md:hidden"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Barra lateral principal (oculta en móviles, visible en pantallas medianas y grandes) */}
      <aside
        className={`fixed top-0 left-0 h-screen w-60 bg-[#FAF3E0] shadow-md py-8 px-6 flex flex-col z-40 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-8 flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <nav className="flex-1 flex flex-col justify-start space-y-2">
          <Link
            to="/"
            className={`flex items-center py-2 px-4 text-gray-700 font-medium rounded-md ${isActive("/")}`}
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Inicio
          </Link>
          <Link
            to="/sobre-mi"
            className={`flex items-center py-2 px-4 text-gray-700 font-medium rounded-md ${isActive(
              "/sobre-mi"
            )}`}
          >
            <UserIcon className="h-5 w-5 mr-2" />
            Sobre mí
          </Link>
          <Link
            to="/proyectos"
            className={`flex items-center py-2 px-4 text-gray-700 font-medium rounded-md ${isActive(
              "/proyectos"
            )}`}
          >
            <FolderIcon className="h-5 w-5 mr-2" />
            Proyectos
          </Link>
          <Link
            to="/contacto"
            className={`flex items-center py-2 px-4 text-gray-700 font-medium rounded-md ${isActive(
              "/contacto"
            )}`}
          >
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            Contacto
          </Link>
        </nav>
        <div className="mt-auto text-sm text-gray-500">
          © {new Date().getFullYear()} Celia Carranza
        </div>
      </aside>

      {/* Overlay oscuro para el menú móvil */}
      {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 md:hidden" onClick={toggleMenu} />}
    </>
  );
};

export default Sidebar;