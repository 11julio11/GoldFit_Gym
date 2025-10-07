import React from 'react';
import { imageUrls } from '../assets/images/imageUrls';
import { Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  const galleryItems = [
    {
      type: 'image',
      image: imageUrls.gallery.weights,
      title: "Zona de Pesas Libres",
      description: "Área completa con mancuernas y barras olímpicas"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      thumbnail: imageUrls.gallery.powerlifting,
      title: "Demo de Entrenamiento",
      description: "Mira cómo entrenan nuestros miembros"
    },
    {
      type: 'image',
      image: imageUrls.gallery.powerlifting,
      title: "Área de Powerlifting",
      description: "Plataformas especializadas para levantamiento"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/R2_Mn-qRKjA',
      thumbnail: imageUrls.gallery.cardio,
      title: "Rutina de Cardio HIIT",
      description: "Sesión completa de cardio de alta intensidad"
    },
    {
      type: 'image',
      image: imageUrls.gallery.cardio,
      title: "Zona de Cardio Premium",
      description: "Equipos de última generación con pantallas HD"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/76979871',
      thumbnail: imageUrls.gallery.spinning,
      title: "Clases en Vivo",
      description: "Experimenta nuestras clases grupales"
    },
    {
      type: 'image',
      image: imageUrls.gallery.crossfit,
      title: "Área de CrossFit",
      description: "Espacio amplio para entrenamientos funcionales"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: imageUrls.gallery.stretching,
      title: "Rutina de Estiramiento",
      description: "Técnicas de recuperación y flexibilidad"
    },
    {
      type: 'image',
      image: imageUrls.gallery.spinning,
      title: "Sala de Spinning",
      description: "Bicicletas premium con sistema de sonido envolvente"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/BaW_jenozKc',
      thumbnail: imageUrls.gallery.weights,
      title: "Tour Virtual",
      description: "Recorre nuestras instalaciones completas"
    },
    {
      type: 'image',
      image: imageUrls.gallery.stretching,
      title: "Zona de Estiramiento",
      description: "Área dedicada para calentamiento y recuperación"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      thumbnail: imageUrls.gallery.crossfit,
      title: "Entrenamiento Funcional",
      description: "Ejercicios para mejorar tu rendimiento diario"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUESTRAS INSTALACIONES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestras instalaciones de clase mundial y mira videos de entrenamientos reales. 
            Equipos de última generación para tu mejor experiencia fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => item.type === 'video' && item.video ? setSelectedVideo(item.video) : null}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-black fill-current" />
                    </div>
                  </div>
                )}
                
                {/* Type Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.type === 'video' ? '🎥 VIDEO' : '📸 FOTO'}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-lg font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  {item.type === 'video' ? 'Reproducir Video' : 'Ver Detalles'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  src={selectedVideo}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">¿Te gustó lo que viste? ¡Ven y experimenta GoldFit en persona!</p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
            🏃‍♂️ AGENDA TU TOUR GRATUITO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;