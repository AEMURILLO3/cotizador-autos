# Plataforma de Cotización de Seguros Vehiculares

Este proyecto es una **aplicación web desarrollada con Next.js 14 (App Router)** para permitir a los usuarios autenticarse mediante **Google SSO (NextAuth)** y acceder a una plataforma donde pueden generar una **cotización de seguro vehicular** mediante un formulario.

El proyecto está desplegado en **Vercel**.

---

## Tecnologías utilizadas

- **Next.js 14 (App Router)**
- **TailwindCSS**
- **shadcn/ui** (componentes reutilizables)
- **NextAuth.js** (autenticación con Google)
- **React Hooks**
- **Vercel Deployment**

---

## Funcionalidades principales

### Autenticación con Google (SSO)
El usuario inicia sesión mediante Google utilizando **NextAuth.js**.  
El sistema incluye:
- Flujo OAuth 2.0
- Callback URL configurado en Google Cloud
- Variables de entorno seguras en Vercel
- Redirección automática después del login

---

Formulario de Cotización

Una vez autenticado, el usuario accede a un formulario con los siguientes campos:

Marca

Modelo

Año

Tipo de cobertura

Tipo de vehículo

Zona del país

Valor comercial

El formulario está construido con componentes de shadcn/ui, TailwindCSS y React.

🛠 Instalación en entorno local
Clonar el repositorio
git clone https://github.com/AEMURILLO3/cotizador-autos.git
cd cotizador-autos

Instalar dependencias
npm install

Configurar variables de entorno

Crear un archivo:

.env.local


con:

GOOGLE_CLIENT_ID=tu-id
GOOGLE_CLIENT_SECRET=tu-secret
NEXTAUTH_SECRET=clave-segura-generada
NEXTAUTH_URL=http://localhost:3000

Levantar el servidor
npm run dev

Deploy en Vercel
Variables de entorno usadas en producción
NEXTAUTH_URL=https://cotizador-autos111.vercel.app
NEXTAUTH_SECRET=xxxx
GOOGLE_CLIENT_ID=xxxx
GOOGLE_CLIENT_SECRET=xxxx

Configuración importante en Vercel

Settings → Git → Always Use Production URL → ON

Esto evita que NextAuth use URLs de preview y cause errores redirect_uri_mismatch.

Configuración en Google Cloud

En Google Cloud Console → APIs & Services → Credentials:

Authorized JavaScript origins
https://cotizador-autos111.vercel.app

Authorized redirect URIs
https://cotizador-autos111.vercel.app/api/auth/callback/google

Estructura principal del proyecto
src/
 ├─ app/
 │   ├─ page.js (Landing)
 │   ├─ cotizar/page.js (formulario)
 │   └─ api/auth/[...nextauth]/route.js
 ├─ components/ui (componentes de shadcn/ui)
 └─ styles/globals.css

Estado actual del proyecto

✔ Autenticación Google funcionando
✔ Formulario operativo
✔ Landing page estilizada
✔ Deploy funcional en Vercel


Autor

Andrés Murillo

Proyecto desarrollado como parte de aprendizaje en:

Next.js

Integración con Google SSO

Arquitectura de aplicaciones web