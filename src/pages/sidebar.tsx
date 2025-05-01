// components/Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "bg-[#C26DBC] text-white"
      : "hover:bg-gray-100 hover:text-[#C26DBC]";
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-[#FAF3E0] shadow-md py-8 px-6 flex flex-col">
      <div className="mb-8 flex justify-center items-center">
        {" "}
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 rounded-full shadow-md"
        />
      </div>
      <nav className="flex-1 flex flex-col justify-start space-y-2">
        <Link
          to="/"
          className={`flex items-center py-2 px-4 text-gray-700 font-medium rounded-md ${isActive(
            "/"
          )}`}
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
  );
};

export default Sidebar;
