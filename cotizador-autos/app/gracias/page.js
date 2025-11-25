import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function GraciasPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        
        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold text-green-700 mb-2">
          ¡Gracias por utilizar nuestros servicios!
        </h1>

        <p className="text-gray-700 text-lg">
          Su cotización será enviada a su correo electrónico.
        </p>
      </div>
    </div>
  );
}
