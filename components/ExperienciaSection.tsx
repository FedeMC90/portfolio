'use client';

import { motion } from 'framer-motion';

/**
 * Componente ExperienciaSection - Sección de experiencia laboral
 * Muestra la trayectoria profesional del usuario
 */

// Datos de ejemplo de experiencia laboral
const experiencias = [
  {
    id: 1,
    cargo: 'Desarrollador Senior Full Stack',
    empresa: 'Tech Solutions',
    periodo: '2022 - Presente',
    descripcion: 'Desarrollo de aplicaciones web con React, Node.js y PostgreSQL. Liderazgo de equipo de desarrollo.',
  },
  {
    id: 2,
    cargo: 'Desarrollador Full Stack',
    empresa: 'Digital Innovation',
    periodo: '2020 - 2022',
    descripcion: 'Creación de soluciones web utilizando tecnologías modernas. Implementación de APIs RESTful.',
  },
  {
    id: 3,
    cargo: 'Desarrollador Junior',
    empresa: 'StartUp Code',
    periodo: '2018 - 2020',
    descripcion: 'Desarrollo frontend con React y mantenimiento de código legacy.',
  },
];

export default function ExperienciaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Experiencia Laboral
      </h2>
      
      <div className="space-y-6">
        {experiencias.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
          >
            <h3 className="text-xl font-bold text-gray-800">{exp.cargo}</h3>
            <p className="text-blue-600 font-medium mt-1">{exp.empresa}</p>
            <p className="text-gray-500 text-sm mt-1">{exp.periodo}</p>
            <p className="text-gray-700 mt-3">{exp.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
