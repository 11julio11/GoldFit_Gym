import React from 'react';
import { Play, Award, Users, Clock } from 'lucide-react';
import { imageUrls } from '../assets/images/imageUrls';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${imageUrls.hero.background}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              FORJA TU
            </span>
            <br />
            <span className="text-white">LEYENDA DORADA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforma tu cuerpo y mente en el gimnasio más exclusivo de la ciudad. 
            Equipos de última generación y entrenadores certificados te esperan.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">2,500+</div>
            <div className="text-sm text-gray-300">Miembros Activos</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">15+</div>
            <div className="text-sm text-gray-300">Años Experiencia</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">24/7</div>
            <div className="text-sm text-gray-300">Acceso Total</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Play className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">500+</div>
            <div className="text-sm text-gray-300">Clases Virtuales</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
            ÚNETE AHORA
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
            TOUR VIRTUAL
          </button>
        </div>

        {/* App Download */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Descarga nuestra app móvil</p>
          <button className="bg-black/50 border border-yellow-500/30 text-white px-6 py-3 rounded-lg hover:bg-yellow-500/10 transition-all duration-300">
            📱 Descargar App
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;