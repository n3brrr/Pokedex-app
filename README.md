<div align="center">

# ⚡ PokéDex Portfolio

**Explorador moderno de Pokémon con Next.js 15 y PokéAPI**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat&logo=tailwindcss)
![PokéAPI](https://img.shields.io/badge/API-PokéAPI-EF5350?style=flat)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

[🚀 Demo en Vivo](#) • [🐛 Reportar Bug](https://github.com/TU_USUARIO/pokedex-portfolio/issues) • [📖 Docs](https://pokeapi.co/docs/v2)

</div>

---

## ⚡ Resumen

Aplicación web moderna que consume la PokéAPI para mostrar información detallada de los 1025 Pokémon existentes. Incluye sistema de búsqueda, filtros por tipo, rutas dinámicas y diseño responsive optimizado para portfolio profesional[web:104][web:111].

### ✨ Características

- 🎯 **Datos en tiempo real** - Integración completa con PokéAPI v2
- 🔍 **Búsqueda inteligente** - Encuentra Pokémon por nombre o ID
- 🏷️ **Filtros por tipo** - Filtra por los 18 tipos elementales
- 📱 **Diseño responsive** - Mobile-first con Tailwind CSS
- ⚡ **Server Components** - Renderizado optimizado con Next.js 15
- 🎨 **UI moderna** - Interfaz limpia y profesional
- 🔗 **Rutas dinámicas** - Vista detallada para cada Pokémon

### 🛠️ Stack Tecnológico

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PokéAPI](https://img.shields.io/badge/PokéAPI-v2-EF5350?style=for-the-badge)

---

## 🚀 Instalación

### Prerequisitos

- Node.js 18.17 o superior
- npm, pnpm o yarn

### Setup Rápido

Clonar repositorio
git clone https://github.com/TU_USUARIO/pokedex-portfolio.git

Navegar al directorio
cd pokedex-portfolio

Instalar dependencias
npm install

Ejecutar en desarrollo
npm run dev

```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

Crear build optimizado
npm run build

Ejecutar build
npm start

```

---

## 💻 Uso

La aplicación se navega de forma intuitiva:

- **Página principal**: Lista de Pokémon con scroll infinito
- **Búsqueda**: Escribe nombre o número en la barra superior
- **Filtros**: Selecciona tipos desde el menú lateral
- **Detalle**: Haz clic en cualquier Pokémon para ver stats completas

---

## 📁 Estructura del Proyecto
```
pokedex-portfolio/
├── app/ # App Router de Next.js
│ ├── page.tsx # Página principal (lista)
│ ├── layout.tsx # Layout global
│ └── pokemon/
│ └── [id]/
│ └── page.tsx # Página de detalle dinámico
├── components/ # Componentes reutilizables
│ ├── PokemonCard.tsx
│ ├── SearchBar.tsx
│ └── TypeFilter.tsx
├── services/ # Lógica de API
│ └── pokemon.ts # Funciones para PokéAPI
├── types/ # Tipos TypeScript
│ └── pokemon.ts
├── hooks/ # Custom hooks
│ └── usePokemon.ts
├── public/ # Assets estáticos
└── README.md

```

---

## 🔄 Arquitectura

**Flujo de datos:**

1. **Server Component** (app/page.tsx) hace fetch inicial a PokéAPI
2. **Service Layer** (services/pokemon.ts) gestiona todas las peticiones HTTP
3. **Componentes de presentación** reciben datos tipados vía props
4. **Rutas dinámicas** generan páginas estáticas en build time (SSG)

**Patrón Container/Presentational aplicado para separación de responsabilidades**[web:63][web:104].

---

## 🎨 Características Técnicas Destacadas

- ✅ TypeScript estricto para type safety
- ✅ Server Components por defecto (mejor performance)
- ✅ Generación estática de rutas con `generateStaticParams`
- ✅ CSS utility-first con Tailwind CSS
- ✅ Componentes modulares y reutilizables
- ✅ Import alias `@/*` para imports limpios
- ✅ ESLint configurado para código consistente

---

## 🌐 API Reference

Este proyecto consume **PokéAPI v2**:

- **Base URL**: `https://pokeapi.co/api/v2`
- **Endpoints principales**:
  - `/pokemon` - Lista de Pokémon
  - `/pokemon/{id}` - Detalle individual
  - `/type/{id}` - Pokémon por tipo

**Sin autenticación requerida** - 100% gratuita[web:83].

---

## 📄 Licencia

MIT License - ver [LICENSE](./LICENSE)

---

## 👤 Autor

**TU_NOMBRE** - [@n3brrr](https://github.com/n3brrr)

💼 LinkedIn: [Ruben Torres](https://www.linkedin.com/in/rubentorresdev/)

---

<div align="center">

⭐ **Si este proyecto te fue útil, considera dejar una estrella**

![GitHub Stars](https://img.shields.io/github/stars/TU_USUARIO/pokedex-portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/TU_USUARIO/pokedex-portfolio?style=social)

</div>
