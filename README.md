# Mi Sitio Web

Sitio web personal moderno construido con **Next.js 16**, **React 19** y **Tailwind CSS**

## 📋 Requisitos

- Node.js 18+
- Yarn o npm

## 🛠️ Instalación

```bash
git clone <repositorio>
cd my-website
yarn install
```

## 💻 Desarrollo

Inicia el servidor de desarrollo:

```bash
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/              # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── [locale]/     # Rutas localizadas
├── components/       # Componentes reutilizables
├── i18n/            # Sistema de i18n
│   ├── config.ts    # Configuración
│   ├── server.ts    # Utilidades servidor
│   └── client.tsx   # Context + hooks
├── lib/             # Funciones utilitarias
├── navigation.ts    # Exports centralizados
└── types/           # Tipos TypeScript
```

## 🚀 Build & Despliegue

Crea una build optimizada:

```bash
yarn build
```

Inicia el servidor producción:

```bash
yarn start
```

## 📦 Dependencias Principales

- **Next.js 16.0.7** - Framework React
- **React 19.2.0** - Librería UI
- **Tailwind CSS 4** - Estilos
- **react-icons 5.5.0** - Iconos
- **TypeScript** - Type safety
