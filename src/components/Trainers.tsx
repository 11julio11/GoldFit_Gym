import React from 'react';
import { Award, Star, Calendar } from 'lucide-react';
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
      description: "Especialista en desarrollo muscular y técnicas de powerlifting avanzadas."
    },
    {
      name: "Ana García",
      specialty: "Fitness Funcional",
      experience: "6 años",
      certifications: ["NASM-CPT", "TRX Instructor", "Yoga Alliance"],
      image: imageUrls.trainers.ana,
      rating: 5,
      description: "Experta en entrenamiento funcional y bienestar integral."
    },
    {
      name: "Miguel Torres",
      specialty: "CrossFit & HIIT",
      experience: "10 años",
      certifications: ["CrossFit Level 3", "HIIT Specialist", "Olympic Lifting"],
      image: imageUrls.trainers.miguel,
      rating: 5,
      description: "Campeón regional de CrossFit con experiencia en entrenamiento de alto rendimiento."
    },
    {
      name: "Laura Martínez",
      specialty: "Nutrición Deportiva",
      experience: "7 años",
      certifications: ["Nutricionista Deportiva", "ISSN", "Metabolic Specialist"],
      image: imageUrls.trainers.laura,
      rating: 5,
      description: "Especialista en planes nutricionales personalizados para atletas."
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
              className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{trainer.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-yellow-400 font-medium mb-2">{trainer.specialty}</p>
                <p className="text-gray-300 text-sm mb-4">{trainer.description}</p>
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {trainer.experience} de experiencia
                </div>

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

                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                  Agendar Sesión
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;