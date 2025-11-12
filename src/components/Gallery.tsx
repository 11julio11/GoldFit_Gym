import React from 'react';
import { imageUrls } from '../assets/images/imageUrls';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      type: 'image',
      image: imageUrls.gallery.weights,
      title: "Zona de Pesas Libres",
      description: "Área completa con mancuernas y barras olímpicas de última generación"
    },
    {
      type: 'image',
      image: imageUrls.gallery.powerlifting,
      title: "Área de Powerlifting",
      description: "Plataformas especializadas para levantamiento olímpico y powerlifting"
    },
    {
      type: 'image',
      image: imageUrls.gallery.cardio,
      title: "Zona de Cardio Premium",
      description: "Equipos de cardio con pantallas HD y entretenimiento integrado"
    },
    {
      type: 'image',
      image: imageUrls.gallery.crossfit,
      title: "Área de CrossFit",
      description: "Espacio amplio para entrenamientos funcionales y CrossFit"
    },
    {
      type: 'image',
      image: imageUrls.gallery.spinning,
      title: "Sala de Spinning",
      description: "Bicicletas premium con sistema de sonido envolvente"
    },
    {
      type: 'image',
      image: imageUrls.gallery.stretching,
      title: "Zona de Estiramiento",
      description: "Área dedicada para calentamiento, estiramiento y recuperación"
    },
    {
      type: 'image',
      image: imageUrls.gallery.weights,
      title: "Zona Funcional",
      description: "Equipamiento especializado para entrenamiento funcional"
    },
    {
      type: 'image',
      image: imageUrls.gallery.powerlifting,
      title: "Vestuarios Premium",
      description: "Vestuarios de lujo con amenities de primera calidad"
    },
    { 
      type: 'image',
      image: imageUrls.gallery.crossfit,
      title: "Área de Recuperación",
      description: "Zona especializada para recuperación post-entrenamiento"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUESTRAS INSTALACIONES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras instalaciones de clase mundial. Equipos de última generación, 
            espacios amplios y el ambiente perfecto para tu transformación fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 border border-gray-700 hover:border-yellow-500/50 w-full max-w-md mx-auto"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Icono de cámara para todas las imágenes */}
                {/* <div className="absolute top-4 right-4 z-10">
                  <div className="bg-blue-600 rounded-full p-1.5 md:p-2 shadow-lg">
                    <Camera className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                </div> */}
                
                {/* Contenido superpuesto */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas de instalaciones */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300 text-xs md:text-sm">Equipos Premium</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">2,000m²</div>
            <div className="text-gray-300 text-xs md:text-sm">Área Total</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-300 text-xs md:text-sm">Zonas Especializadas</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300 text-xs md:text-sm">Acceso Total</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-yellow-500/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              ¿Te gustó lo que viste? <span className="text-yellow-400">¡Ven y experimenta GoldFit!</span>
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-6 px-4">
              Agenda tu tour gratuito y conoce personalmente nuestras increíbles instalaciones.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
              🏃‍♂️ AGENDA TU TOUR GRATUITO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;