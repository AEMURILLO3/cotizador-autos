"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={() => signIn("google")}
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
}
