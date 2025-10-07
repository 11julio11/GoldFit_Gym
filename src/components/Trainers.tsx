import React from 'react';
import { Award, Star, Calendar, Instagram, Facebook, Music } from 'lucide-react';
import { imageUrls } from '../assets/images/imageUrls';

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Carlos Mendoza",
      specialty: "Entrenamiento de Fuerza",
      experience: "8 años",
      certifications: ["NSCA-CPT", "ACSM", "Powerlifting Coach"],
      image: imageUrls.trainers.carlos,
      rating: 5,
      bio: "Más de 8 años desarrollando programas de entrenamiento de fuerza para atletas de alto rendimiento."
    },
    {
      name: "Ana García",
      specialty: "Fitness Funcional",
      experience: "6 años",
      certifications: ["NASM-CPT", "TRX Instructor", "Yoga Alliance"],
      image: imageUrls.trainers.ana,
      rating: 5,
      bio: "Especialista en entrenamiento funcional y bienestar integral con enfoque holístico."
    },
    {
      name: "Miguel Torres",
      specialty: "CrossFit & HIIT",
      experience: "10 años",
      certifications: ["CrossFit Level 3", "HIIT Specialist", "Olympic Lifting"],
      image: imageUrls.trainers.miguel,
      rating: 5,
      bio: "Campeón regional de CrossFit con más de 10 años formando atletas de élite."
    },
    {
      name: "Laura Martínez",
      specialty: "Nutrición Deportiva",
      experience: "7 años",
      certifications: ["Nutricionista Deportiva", "ISSN", "Metabolic Specialist"],
      image: imageUrls.trainers.laura,
      rating: 5,
      bio: "Nutricionista deportiva especializada en optimización del rendimiento atlético."
    }
  ];

  return (
    <section id="entrenadores" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUESTROS ENTRENADORES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a nuestro equipo de profesionales certificados, listos para 
            guiarte hacia tus objetivos fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                {/* Header con nombre y rating */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(trainer.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Especialidad */}
                <p className="text-yellow-400 font-medium mb-2">{trainer.specialty}</p>
                
                {/* Experiencia */}
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {trainer.experience} de experiencia
                </div>

                {/* Certificaciones */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-white">Certificaciones:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de agendar */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 mb-4">
                  Agendar Sesión
                </button>

                {/* REDES SOCIALES */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm mb-3 text-center">Sígueme en:</p>
                  <div className="flex justify-center space-x-4">
                    {/* Instagram */}
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      title="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    
                    {/* Facebook */}
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      title="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    
                    {/* TikTok */}
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-black border-2 border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      title="TikTok"
                    >
                      <Music className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;