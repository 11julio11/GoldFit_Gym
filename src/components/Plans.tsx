import React from 'react';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Plans: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "BÁSICO",
      price: 49,
      duration: "mes",
      description: "Perfecto para comenzar tu transformación",
      features: [
        "Acceso al gimnasio",
        "Área de cardio",
        "Vestuarios premium",
        "Wifi gratuito",
        "Estacionamiento"
      ],
      icon: <Zap className="w-6 md:w-8 h-6 md:h-8" />,
      popular: false,
      color: "border-gray-600"
    },
    {
      name: "PREMIUM",
      price: 89,
      duration: "mes",
      description: "La opción más popular para resultados serios",
      features: [
        "Todo lo del plan Básico",
        "Clases grupales ilimitadas",
        "Área de pesas completa",
        "Sauna y vapor",
        "1 sesión de entrenamiento personal",
        "Plan nutricional básico"
      ],
      icon: <Star className="w-6 md:w-8 h-6 md:h-8" />,
      popular: true,
      color: "border-yellow-500"
    },
    {
      name: "ELITE",
      price: 149,
      duration: "mes",
      description: "La experiencia completa de lujo y resultados",
      features: [
        "Todo lo del plan Premium",
        "Entrenamiento personal ilimitado",
        "Nutricionista personal",
        "Acceso 24/7",
        "Toallas premium",
        "Bebidas deportivas incluidas",
        "Zona VIP exclusiva"
      ],
      icon: <Crown className="w-6 md:w-8 h-6 md:h-8" />,
      popular: false,
      color: "border-yellow-400"
    }
  ];

  return (
    <section id="planes" className="py-12 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              PLANES DE MEMBRESÍA
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Elige el plan que mejor se adapte a tus objetivos y estilo de vida. 
            Todos incluyen acceso a nuestras instalaciones de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm border-2 ${plan.color} rounded-xl overflow-hidden hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group ${
                plan.popular ? 'transform scale-105 lg:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-center py-2 font-bold text-xs md:text-sm">
                  MÁS POPULAR
                </div>
              )}
              
              <div className={`p-4 md:p-6 lg:p-8 ${plan.popular ? 'pt-8 md:pt-12' : ''}`}>
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-yellow-400 mb-3 md:mb-4 flex justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 px-2">{plan.description}</p>
                  <div className="text-white">
                    <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                    <span className="text-base md:text-lg text-gray-400">/{plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm md:text-base text-gray-300">
                      <Check className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 md:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105'
                      : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}
                >
                  {plan.popular ? 'COMENZAR AHORA' : 'ELEGIR PLAN'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              🎯 GARANTÍA DE SATISFACCIÓN
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 px-4">
              Si no estás completamente satisfecho en los primeros 30 días, 
              te devolvemos el 100% de tu dinero. Sin preguntas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
              <div className="bg-black/30 rounded-lg p-3 md:p-4">
                <div className="text-yellow-400 text-xl md:text-2xl font-bold">30 días</div>
                <div className="text-gray-400 text-sm md:text-base">Garantía total</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 md:p-4">
                <div className="text-yellow-400 text-xl md:text-2xl font-bold">0%</div>
                <div className="text-gray-400 text-sm md:text-base">Cuota de inscripción</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 md:p-4">
                <div className="text-yellow-400 text-xl md:text-2xl font-bold">24/7</div>
                <div className="text-gray-400 text-sm md:text-base">Soporte disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;