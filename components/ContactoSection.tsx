'use client';

import { motion } from 'framer-motion';

/**
 * Componente ContactoSection - Sección de contacto
 * Muestra información de contacto y redes sociales
 */

// Datos de contacto
const contactInfo = {
  email: 'federicomc90@example.com',
  telefono: '+54 11 1234-5678',
  ubicacion: 'Buenos Aires, Argentina',
  redesSociales: [
    { nombre: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { nombre: 'GitHub', url: 'https://github.com/FedeMC90', icon: '💻' },
    { nombre: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  ],
};

export default function ContactoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 py-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Contacto
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Información de Contacto
          </h3>
          
          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
            
            {/* Teléfono */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="text-gray-800">{contactInfo.telefono}</p>
              </div>
            </div>
            
            {/* Ubicación */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="text-gray-800">{contactInfo.ubicacion}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Redes Sociales
          </h3>
          
          <div className="space-y-3">
            {contactInfo.redesSociales.map((red, index) => (
              <motion.a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl">{red.icon}</span>
                <span className="text-gray-800 font-medium">{red.nombre}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Formulario de contacto (opcional) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white rounded-lg shadow-md p-6 mt-8"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Envíame un mensaje
        </h3>
        
        <form className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          
          {/* Mensaje */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
          
          {/* Botón de envío */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
