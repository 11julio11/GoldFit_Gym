import React from 'react';
import { Star, Award, TrendingUp, Target } from 'lucide-react';
import { imageUrls } from '../assets/images/imageUrls';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      age: 28,
      achievement: "Perdió 15kg en 4 meses",
      image: imageUrls.testimonials.maria,
      rating: 5,
      comment: "GoldFit cambió mi vida completamente. Los entrenadores son increíbles y las instalaciones son de primera clase. Nunca pensé que podría lograr tanto en tan poco tiempo.",
      badge: "Transformación del Año",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      name: "Carlos Ruiz",
      age: 35,
      achievement: "Ganó 8kg de músculo",
      image: imageUrls.testimonials.carlos,
      rating: 5,
      comment: "Después de años entrenando en otros gimnasios, encontré en GoldFit el lugar perfecto. El equipo es excepcional y los resultados hablan por sí solos.",
      badge: "Miembro VIP",
      icon: <Award className="w-5 h-5" />
    },
    {
      name: "Ana Martínez",
      age: 42,
      achievement: "Completó su primer maratón",
      image: imageUrls.testimonials.ana,
      rating: 5,
      comment: "A los 42 años logré correr mi primer maratón gracias al programa de entrenamiento personalizado. El apoyo del equipo fue fundamental para alcanzar mi meta.",
      badge: "Atleta del Mes",
      icon: <Target className="w-5 h-5" />
    },
    {
      name: "Roberto Silva",
      age: 29,
      achievement: "Mejoró su fuerza en 40%",
      image: imageUrls.testimonials.roberto,
      rating: 5,
      comment: "La zona de powerlifting es impresionante. He mejorado todos mis levantamientos significativamente. Los entrenadores realmente saben lo que hacen.",
      badge: "Powerlifter Elite",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              HISTORIAS DE ÉXITO
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce las increíbles transformaciones de nuestros miembros. 
            Sus logros son nuestra mayor motivación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-1">
                    {testimonial.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{testimonial.age} años</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg px-3 py-1 inline-flex items-center space-x-2 mb-3">
                    <span className="text-yellow-400 text-sm font-medium">{testimonial.badge}</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-300 mb-4 italic">
                "{testimonial.comment}"
              </blockquote>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <div className="text-yellow-400 font-bold text-sm mb-1">LOGRO DESTACADO:</div>
                <div className="text-white font-medium">{testimonial.achievement}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              RESULTADOS QUE <span className="text-yellow-400">HABLAN</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Alcanzan sus objetivos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300 text-sm">Calificación promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">2,500+</div>
              <div className="text-gray-300 text-sm">Transformaciones exitosas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Recomiendan GoldFit</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">¿Listo para escribir tu propia historia de éxito?</p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/25">
            COMIENZA TU TRANSFORMACIÓN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;