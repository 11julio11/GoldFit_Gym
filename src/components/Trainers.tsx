import React from 'react';
import { Award, Star, Calendar, Instagram, Facebook, Music, MapPin, Trophy, Target } from 'lucide-react';
import { imageUrls } from '../assets/images/imageUrls';

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Carlos Mendoza",
      nickname: "El Titán",
      specialty: "Entrenamiento de Fuerza & Powerlifting",
      experience: "8 años",
      certifications: ["NSCA-CPT", "ACSM", "Powerlifting Coach"],
      achievements: ["Record Nacional Deadlift", "Campeón Nacional"],
      image: imageUrls.trainers.carlos,
      rating: 5,
      bio: "Especialista en desarrollo de fuerza máxima y técnicas de powerlifting. Ha entrenado a más de 200 atletas.",
      location: "Zona Premium",
      isPro: true,
      socialMedia: {
        instagram: "https://instagram.com/carlostitangym",
        facebook: "https://facebook.com/carlos.mendoza.gym",
        tiktok: "https://tiktok.com/@carlostitangym"
      }
    },
    {
      name: "Ana García",
      nickname: "La Guerrera",
      specialty: "Fitness Funcional & CrossFit",
      experience: "6 años",
      certifications: ["NASM-CPT", "CrossFit Level 2", "TRX Instructor"],
      achievements: ["Atleta del Año 2023", "Top 10 Regional CrossFit"],
      image: imageUrls.trainers.ana,
      rating: 5,
      bio: "Experta en entrenamiento funcional y preparación atlética. Enfoque en movimientos naturales del cuerpo.",
      location: "Área CrossFit",
      isPro: true,
      socialMedia: {
        instagram: "https://instagram.com/anaguerrerafit",
        facebook: "https://facebook.com/ana.garcia.fitness",
        tiktok: "https://tiktok.com/@anaguerrerafit"
      }
    },
    {
      name: "Miguel Torres",
      nickname: "Iron Mike",
      specialty: "HIIT & Acondicionamiento",
      experience: "10 años",
      certifications: ["CrossFit Level 3", "HIIT Specialist", "Olympic Lifting"],
      achievements: ["Entrenador del Año", "Certificación Internacional"],
      image: imageUrls.trainers.miguel,
      rating: 5,
      bio: "Campeón regional de CrossFit con más de 10 años formando atletas de élite y transformando vidas.",
      location: "Zona HIIT",
      isPro: true,
      socialMedia: {
        instagram: "https://instagram.com/ironmikegym",
        facebook: "https://facebook.com/miguel.torres.trainer",
        tiktok: "https://tiktok.com/@ironmikegym"
      }
    },
    {
      name: "Laura Martínez",
      nickname: "Fit Guru",
      specialty: "Nutrición Deportiva & Wellness",
      experience: "7 años",
      certifications: ["Nutricionista Deportiva", "ISSN", "Metabolic Specialist"],
      achievements: ["Mejor Nutricionista 2023", "Especialista Certificada"],
      image: imageUrls.trainers.laura,
      rating: 5,
      bio: "Nutricionista deportiva especializada en optimización del rendimiento atlético y composición corporal.",
      location: "Consulta Nutricional",
      isPro: false,
      socialMedia: {
        instagram: "https://instagram.com/laurafitguru",
        facebook: "https://facebook.com/laura.martinez.nutrition",
        tiktok: "https://tiktok.com/@laurafitguru"
      }
    }
  ];

  return (
    <section id="entrenadores" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUESTROS ENTRENADORES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a nuestro equipo de profesionales certificados, listos para 
            guiarte hacia tus objetivos fitness con experiencia y pasión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group border border-gray-700 hover:border-yellow-500/50"
            >
              {/* Badge PRO */}
              {trainer.isPro && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  PRO
                </div>
              )}

              {/* Imagen del entrenador */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Overlay social eliminado: las redes estarán en la parte inferior de la tarjeta */}

                {/* Ubicación */}
                <div className="absolute bottom-4 left-4 flex items-center text-white text-sm z-20">
                  <MapPin className="w-4 h-4 mr-1 text-yellow-400" />
                  {trainer.location}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                {/* Nombre y nickname */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-yellow-400 font-medium text-lg">"{trainer.nickname}"</p>
                  <p className="text-gray-300 text-sm">{trainer.specialty}</p>
                </div>

                {/* Rating y experiencia */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(trainer.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {trainer.experience}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {trainer.bio}
                </p>

                {/* Logros destacados */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-white">Logros:</span>
                  </div>
                  <div className="space-y-1">
                    {trainer.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-1">
                        <span className="text-yellow-400 text-xs font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificaciones */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-white">Certificaciones:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de agendar */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 mb-4">
                  Agendar Sesión
                </button>

                {/* REDES SOCIALES - SIEMPRE VISIBLES */}
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm mb-3 text-center font-medium">Sígueme en:</p>
                  <div className="flex justify-center space-x-4">
                    {/* Instagram */}
                    {trainer.socialMedia?.instagram && (
                      <a
                        href={trainer.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        title={`Instagram de ${trainer.name}`}
                        aria-label={`Instagram de ${trainer.name}`}
                      >
                        <Instagram className="h-6 w-6 text-white" />
                      </a>
                    )}

                    {/* Facebook */}
                    {trainer.socialMedia?.facebook && (
                      <a
                        href={trainer.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        title={`Facebook de ${trainer.name}`}
                        aria-label={`Facebook de ${trainer.name}`}
                      >
                        <Facebook className="h-6 w-6 text-white" />
                      </a>
                    )}

                    {/* TikTok */}
                    {trainer.socialMedia?.tiktok && (
                      <a
                        href={trainer.socialMedia.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                        title={`TikTok de ${trainer.name}`}
                        aria-label={`TikTok de ${trainer.name}`}
                      >
                        <Music className="h-6 w-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para entrenar con los <span className="text-yellow-400">mejores?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nuestros entrenadores certificados están listos para ayudarte a alcanzar tus objetivos. 
              Agenda tu primera sesión y descubre la diferencia de entrenar con profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
                <Target className="w-5 h-5 inline mr-2" />
                AGENDAR SESIÓN GRATUITA
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                VER HORARIOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;