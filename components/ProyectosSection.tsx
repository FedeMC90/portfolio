'use client';

import { motion } from 'framer-motion';

/**
 * Componente ProyectosSection - Sección de proyectos
 * Muestra los proyectos destacados del usuario
 */

// Datos de ejemplo de proyectos
const proyectos = [
  {
    id: 1,
    nombre: 'E-Commerce Platform',
    descripcion: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel de administración.',
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    url: '#',
  },
  {
    id: 2,
    nombre: 'Task Manager App',
    descripcion: 'Aplicación de gestión de tareas con funcionalidad de arrastrar y soltar, notificaciones y colaboración en equipo.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    url: '#',
  },
  {
    id: 3,
    nombre: 'Portfolio Personal',
    descripcion: 'Portafolio web SPA con animaciones suaves y diseño responsive.',
    tecnologias: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    url: '#',
  },
];

export default function ProyectosSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Proyectos Destacados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={proyecto.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{proyecto.nombre}</h3>
            <p className="text-gray-700 mb-4">{proyecto.descripcion}</p>
            
            {/* Tecnologías utilizadas */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.tecnologias.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Botón para ver proyecto */}
            <a
              href={proyecto.url}
              className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Ver Proyecto
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
