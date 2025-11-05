import React from 'react';
import { Apple, Target, TrendingUp, Award, Clock, Users } from 'lucide-react';

const Nutrition: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nutritionPlans = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pérdida de Peso",
      description: "Plan nutricional diseñado para quemar grasa de forma saludable y sostenible.",
      features: ["Déficit calórico controlado", "Comidas balanceadas", "Seguimiento semanal"],
      price: "$89",
      duration: "mensual",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ganancia Muscular",
      description: "Maximiza tu crecimiento muscular con una nutrición específica y efectiva.",
      features: ["Alto contenido proteico", "Timing de nutrientes", "Suplementación guiada"],
      price: "$99",
      duration: "mensual",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rendimiento Deportivo",
      description: "Optimiza tu performance con nutrición especializada para atletas.",
      features: ["Periodización nutricional", "Hidratación avanzada", "Recuperación acelerada"],
      price: "$129",
      duration: "mensual",
      color: "from-blue-400 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Planes Personalizados",
      description: "Cada plan se adapta a tus necesidades, objetivos y preferencias alimentarias."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Seguimiento Continuo",
      description: "Monitoreo constante y ajustes según tu progreso y resultados."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Asesoría Profesional",
      description: "Nutricionistas certificados te acompañan en todo el proceso."
    }
  ];

  return (
    <section id="alimentacion" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUTRICIÓN DEPORTIVA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            La nutrición es el 70% de tus resultados. Nuestros planes personalizados 
            te ayudarán a alcanzar tus objetivos más rápido.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4 md:p-6 text-center hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="text-yellow-400 mb-3 md:mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Nutrition Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {nutritionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${plan.color} p-4 md:p-6 text-center`}>
                <div className="text-white mb-3 md:mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-white/90">
                  <span className="text-2xl md:text-3xl font-bold">{plan.price}</span>
                  <span className="text-base md:text-lg">/{plan.duration}</span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{plan.description}</p>
                
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm md:text-base text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Comenzar Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            ¿No estás seguro cuál plan es para ti?
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 px-4">
            Agenda una consulta gratuita con nuestros nutricionistas y descubre 
            el plan perfecto para tus objetivos.
          </p>
          <button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONSULTA GRATUITA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;