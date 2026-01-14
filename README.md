# Mi Sitio Web

Sitio web personal moderno construido con **Next.js 16**, **React 19** y **Tailwind CSS**, con soporte multiidioma (Español/Inglés) y modo oscuro.

## 🚀 Características

- ✅ **Internacionalización (i18n)** - Español e Inglés
- ✅ **Modo Oscuro** - Soporte completo
- ✅ **Diseño Responsivo** - Mobile-first
- ✅ **Renderizado Estático** - SSG prerendering
- ✅ **Selector de Idioma** - Botón flotante inteligente
- ✅ **TypeScript** - Type-safe en todo el código
- ✅ **Accesible** - WCAG AAA compliant

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

## 🌍 Sistema i18n

El proyecto implementa un sistema de internacionalización personalizado sin dependencias externas:

### Archivos de Traducción

```
messages/
├── es.json    # Español
└── en.json    # Inglés
```

### Uso en Servidor

```tsx
import { getMessages } from '@/navigation';

export default async function Page({ params }) {
  const messages = await getMessages(params.locale);
  return <h1>{messages.hero.title}</h1>;
}
```

### Uso en Cliente

```tsx
'use client';
import { useI18n } from '@/navigation';

export default function Component() {
  const { t } = useI18n();
  return <h1>{t('hero.title')}</h1>;
}
```

### Añadir Nuevo Idioma

1. Crea `messages/[locale].json` con las traducciones
2. Actualiza `LOCALES` en `src/i18n/config.ts`

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

## 🔧 Configuración Importante

### Locales (src/i18n/config.ts)

```typescript
export const LOCALES = ['es', 'en'];
export const DEFAULT_LOCALE = 'es';
```

### Rutas Dinámicas

El proyecto usa `[locale]` como segmento dinámico. Las rutas se generan automáticamente como SSG:

- `/es` - Página en español
- `/en` - Página en inglés

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

## 🎨 Componentes Destacados

### LocalSwitcher

Selector de idioma flotante con dropdown inteligente que se posiciona automáticamente según el espacio disponible.

### Temas

- **Light** - Tema claro por defecto
- **Dark** - Tema oscuro activable

## 📄 Licencia

MIT
