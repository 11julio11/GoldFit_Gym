import React from 'react';
import { imageUrls } from '../assets/images/imageUrls';
import { Play, Camera, Video } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

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
      type: 'video',
      video: 'https://www.youtube.com/embed/ScMzIvxBSi4',
      thumbnail: imageUrls.gallery.crossfit,
      title: "Entrenamiento CrossFit",
      description: "Mira una sesión completa de CrossFit en nuestras instalaciones"
    },
    {
      type: 'image',
      image: imageUrls.gallery.crossfit,
      title: "Área de CrossFit",
      description: "Espacio amplio para entrenamientos funcionales y CrossFit"
    },
    {
      type: 'video',
      video: 'https://www.youtube.com/embed/R2_Mn-qRKjA',
      thumbnail: imageUrls.gallery.spinning,
      title: "Clase de Spinning",
      description: "Experimenta nuestras energéticas clases de spinning"
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
      thumbnail: imageUrls.gallery.stretching,
      title: "Rutinas de Estiramiento",
      description: "Técnicas profesionales de recuperación y flexibilidad"
    },
    {
      type: 'image',
      image: imageUrls.gallery.stretching,
      title: "Zona de Estiramiento",
      description: "Área dedicada para calentamiento, estiramiento y recuperación"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 border border-gray-700 hover:border-yellow-500/50 cursor-pointer"
              onClick={() => item.type === 'video' && item.video ? setSelectedVideo(item.video) : null}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail || item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Icono de tipo de contenido */}
                <div className="absolute top-4 right-4 z-10">
                  {item.type === 'video' ? (
                    <div className="bg-red-600 rounded-full p-2 shadow-lg">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="bg-blue-600 rounded-full p-2 shadow-lg">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Botón de play para videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-400 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-10 h-10 text-black fill-current" />
                    </div>
                  </div>
                )}
                
                {/* Contenido superpuesto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  
                  {/* Badge de tipo */}
                  <div className="mt-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'video' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      {item.type === 'video' ? (
                        <>
                          <Video className="w-3 h-3 mr-1" />
                          VIDEO
                        </>
                      ) : (
                        <>
                          <Camera className="w-3 h-3 mr-1" />
                          FOTO
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de video */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-16 right-0 text-white hover:text-yellow-400 text-3xl font-bold transition-colors duration-300"
              >
                ✕
              </button>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  src={selectedVideo}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video de GoldFit Gym"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas de instalaciones */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Equipos Premium</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2,000m²</div>
            <div className="text-gray-300 text-sm">Área Total</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-300 text-sm">Zonas Especializadas</div>
          </div>
          <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Acceso Total</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te gustó lo que viste? <span className="text-yellow-400">¡Ven y experimenta GoldFit!</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Agenda tu tour gratuito y conoce personalmente nuestras increíbles instalaciones.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
              🏃‍♂️ AGENDA TU TOUR GRATUITO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;