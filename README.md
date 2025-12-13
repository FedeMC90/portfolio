# Portfolio Personal - Federico MC

Portfolio web profesional desarrollado con Next.js, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✨ **SPA (Single Page Application)** - Navegación fluida sin recargas de página
- 🎨 **Diseño Moderno** - Interface limpia y profesional con Tailwind CSS
- 🎭 **Animaciones Suaves** - Transiciones elegantes con Framer Motion
- 📱 **Responsive** - Optimizado para todos los dispositivos
- ⚡ **Rendimiento** - Construido con Next.js 16 y TypeScript
- 🌐 **SEO Optimizado** - Metadata configurada para mejores resultados en buscadores

## 📋 Secciones

- **Experiencia Laboral** - Historial profesional detallado
- **Estudios** - Formación académica y certificaciones
- **Proyectos** - Proyectos destacados con tecnologías utilizadas
- **Contacto** - Información de contacto y formulario de mensaje

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/) - Framework de React
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework de estilos
- [Framer Motion 12](https://www.framer.com/motion/) - Librería de animaciones
- [TypeScript 5](https://www.typescriptlang.org/) - Tipado estático

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/FedeMC90/portfolio.git

# Entrar al directorio
cd portfolio

# Instalar dependencias
npm install
```

## 🚀 Uso

### Modo Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Construir para Producción

```bash
npm run build
```

### Ejecutar en Producción

```bash
npm start
```

### Ejecutar Linter

```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                      # Directorio de la aplicación Next.js
│   ├── layout.tsx           # Layout raíz con metadata
│   ├── page.tsx             # Página principal con lógica de navegación
│   ├── globals.css          # Estilos globales
│   └── favicon.ico          # Favicon
├── components/              # Componentes React
│   ├── Header.tsx          # Cabecera con foto y nombre
│   ├── Navigation.tsx      # Barra de navegación
│   ├── ExperienciaSection.tsx    # Sección de experiencia laboral
│   ├── EstudiosSection.tsx       # Sección de estudios
│   ├── ProyectosSection.tsx      # Sección de proyectos
│   └── ContactoSection.tsx       # Sección de contacto
├── public/                  # Archivos estáticos
│   └── images/             # Imágenes
│       └── profile.svg     # Foto de perfil
├── package.json            # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
└── next.config.ts        # Configuración de Next.js
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Header** (`components/Header.tsx`): Modifica el nombre y título
2. **Secciones**: Edita los datos de ejemplo en cada componente de sección
3. **Foto de Perfil**: Reemplaza `/public/images/profile.svg` con tu propia imagen
4. **Metadata**: Actualiza el título y descripción en `app/layout.tsx`

### Modificar Colores

Los colores se pueden cambiar directamente en los componentes usando las clases de Tailwind CSS:
- Azul primario: `bg-blue-600`, `text-blue-600`
- Morado: `bg-purple-600`, `text-purple-600`
- Verde: `bg-green-600`, `text-green-600`

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Federico Matias Ciociano**

- GitHub: [@FedeMC90](https://github.com/FedeMC90)

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!
