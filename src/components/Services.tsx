import React from 'react';
import { Dumbbell, Heart, Users, Zap, Target, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Entrenamiento de Fuerza",
      description: "Equipos de última generación para desarrollar tu máximo potencial muscular.",
      features: ["Pesas libres", "Máquinas especializadas", "Zona de powerlifting"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardio Avanzado",
      description: "Mejora tu resistencia cardiovascular con tecnología de punta.",
      features: ["Caminadoras inteligentes", "Bicicletas virtuales", "Elípticas premium"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Clases Grupales",
      description: "Entrena en comunidad con nuestras clases dinámicas y motivadoras.",
      features: ["Spinning", "CrossFit", "Yoga", "Zumba"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrenamiento Funcional",
      description: "Desarrolla fuerza, agilidad y coordinación para la vida real.",
      features: ["TRX", "Kettlebells", "Battle ropes", "Plyometrics"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Entrenamiento Personal",
      description: "Sesiones individualizadas con entrenadores certificados.",
      features: ["Plan personalizado", "Seguimiento detallado", "Resultados garantizados"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Programas Especializados",
      description: "Programas específicos para diferentes objetivos y niveles.",
      features: ["Pérdida de peso", "Ganancia muscular", "Rehabilitación"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUESTROS SERVICIOS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre todo lo que GoldFit Gym tiene para ofrecerte. Servicios premium 
            diseñados para llevarte al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;