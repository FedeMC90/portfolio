'use client';

import { motion } from 'framer-motion';

/**
 * Componente EstudiosSection - Sección de formación académica
 * Muestra los estudios y certificaciones del usuario
 */

// Datos de ejemplo de estudios
const estudios = [
  {
    id: 1,
    titulo: 'Ingeniería en Sistemas',
    institucion: 'Universidad Tecnológica Nacional',
    periodo: '2014 - 2019',
    descripcion: 'Especialización en desarrollo de software y arquitectura de sistemas.',
  },
  {
    id: 2,
    titulo: 'Certificación React Advanced',
    institucion: 'Platzi',
    periodo: '2021',
    descripcion: 'Curso avanzado de React con hooks, context y patrones de diseño.',
  },
  {
    id: 3,
    titulo: 'Full Stack Developer Bootcamp',
    institucion: 'Udemy',
    periodo: '2020',
    descripcion: 'Bootcamp intensivo de desarrollo web full stack con MERN stack.',
  },
];

export default function EstudiosSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Formación Académica
      </h2>
      
      <div className="space-y-6">
        {estudios.map((estudio, index) => (
          <motion.div
            key={estudio.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600"
          >
            <h3 className="text-xl font-bold text-gray-800">{estudio.titulo}</h3>
            <p className="text-purple-600 font-medium mt-1">{estudio.institucion}</p>
            <p className="text-gray-500 text-sm mt-1">{estudio.periodo}</p>
            <p className="text-gray-700 mt-3">{estudio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
