import React from 'react';
import { Apple, Target, TrendingUp, Award, Clock, Users } from 'lucide-react';
import { imageUrls } from '../assets/images/imageUrls';
const Nutrition: React.FC = () => {
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
    <section id="alimentacion" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUTRICIÓN DEPORTIVA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La nutrición es el 70% de tus resultados. Nuestros planes personalizados 
            te ayudarán a alcanzar tus objetivos más rápido.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 text-center hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
            >
              <div className="text-yellow-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Nutrition Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nutritionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-center`}>
                <div className="text-white mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="text-white/90">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-lg">/{plan.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
                  COMENZAR PLAN
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿No estás seguro cuál plan es para ti?
          </h3>
          <p className="text-gray-300 mb-6">
            Agenda una consulta gratuita con nuestros nutricionistas y descubre 
            el plan perfecto para tus objetivos.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300">
            CONSULTA GRATUITA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;