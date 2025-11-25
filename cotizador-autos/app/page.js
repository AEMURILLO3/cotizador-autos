"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl text-center">

        {/* Imagen superior */}
        <div className="flex justify-center mb-6">
          <Image
            src="/car.png"   // pon aquí tu imagen local: /public/car.png
            alt="Seguro Vehicular"
            width={100}
            height={100}
            className="opacity-90"
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-extrabold text-gray-800 mb-3">
          PLATAFORMA DE COTIZACIÓN DE SEGUROS
        </h1>

        <p className="text-gray-600 mb-8">
          Inicia sesión para acceder al sistema de cotización vehicular.
        </p>

        {/* Botón de login */}
        <button
          className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-md"
          onClick={() => signIn("google")}
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}

