import React from 'react';
import { Award, Users, Clock, Target, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Años",
      subtitle: "De Experiencia"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "2,500+",
      subtitle: "Miembros Satisfechos"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "95%",
      subtitle: "Tasa de Éxito"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100%",
      subtitle: "Garantía"
    }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Excelencia",
      description: "Comprometidos con la más alta calidad en equipos, instalaciones y servicio."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad",
      description: "Creamos un ambiente inclusivo donde todos se sienten bienvenidos y motivados."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Resultados",
      description: "Nos enfocamos en ayudarte a alcanzar tus objetivos de forma efectiva y sostenible."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Compromiso",
      description: "Disponibles 24/7 para apoyarte en cada paso de tu transformación."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                SOBRE GOLDFIT GYM
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Desde 2009, GoldFit Gym ha sido el destino premium para quienes buscan 
              transformar su vida a través del fitness. Somos más que un gimnasio, 
              somos tu partner en el camino hacia la mejor versión de ti mismo.
            </p>
            <p className="text-gray-400 mb-8">
              Con instalaciones de clase mundial, equipos de última generación y un 
              equipo de profesionales altamente capacitados, hemos ayudado a miles 
              de personas a alcanzar sus objetivos fitness y superar sus límites.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-yellow-400 mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{achievement.title}</div>
                  <div className="text-sm text-gray-400">{achievement.subtitle}</div>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
              CONOCE MÁS
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="GoldFit Gym Interior"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl shadow-lg">
              <div className="text-black">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm font-medium">Acceso Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              NUESTROS <span className="text-yellow-400">VALORES</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Los principios que nos guían en nuestra misión de transformar vidas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;