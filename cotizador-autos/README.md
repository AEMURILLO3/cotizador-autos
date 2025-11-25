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

