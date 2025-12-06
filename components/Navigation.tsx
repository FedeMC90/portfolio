'use client';

import { motion } from 'framer-motion';

/**
 * Componente Navigation - Barra de navegación con botones
 * Permite navegar entre las diferentes secciones de la página
 * @param activeSection - Sección actualmente activa
 * @param onSectionChange - Función callback para cambiar de sección
 */

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

// Array con las secciones disponibles
const sections = [
  { id: 'experiencia', label: 'Experiencia Laboral' },
  { id: 'estudios', label: 'Estudios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-10 w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {sections.map((section, index) => (
            <motion.li
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <motion.button
                onClick={() => onSectionChange(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
