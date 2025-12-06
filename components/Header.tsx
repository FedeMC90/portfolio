'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Componente Header - Encabezado de la página
 * Contiene la foto de perfil y el nombre del usuario
 * Utiliza framer-motion para animaciones suaves
 */
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:flex-row md:gap-8">
        {/* Foto de perfil con animación */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl"
        >
          <Image
            src="/images/profile.svg"
            alt="Foto de perfil"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        {/* Nombre y título */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Federico MC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-blue-100 mt-1"
          >
            Desarrollador Full Stack
          </motion.p>
        </div>
      </div>
    </motion.header>
  );
}
