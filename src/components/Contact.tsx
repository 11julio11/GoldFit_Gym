import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      details: ["Av. Fitness 123", "Ciudad Dorada, CD 12345"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      details: ["+1 (555) GOLD-FIT", "+1 (555) 465-3348"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@goldfitgym.com", "elite@goldfitgym.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      details: ["Lun - Vie: 5:00 AM - 12:00 AM", "Sáb - Dom: 24 HORAS"]
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              CONTÁCTANOS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para comenzar tu transformación? Contáctanos y da el primer paso hacia la grandeza
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Información de Contacto</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-yellow-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="font-bold text-yellow-400 mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">Comienza Tu Transformación</h3>
            
            {state.succeeded && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                <p className="text-green-400 font-medium">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre Completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                <select
                  name="objective"
                  value={formData.objective}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Selecciona tu objetivo</option>
                  <option value="perdida-peso">Pérdida de Peso</option>
                  <option value="ganancia-muscular">Ganancia Muscular</option>
                  <option value="tonificacion">Tonificación</option>
                  <option value="rendimiento">Rendimiento Deportivo</option>
                  <option value="rehabilitacion">Rehabilitación</option>
                </select>
                <ValidationError prefix="Objective" field="objective" errors={state.errors} />
              </div>
              
              <textarea
                name="message"
                placeholder="Cuéntanos sobre tus objetivos y experiencia previa..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-900/50 border border-yellow-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25"
              >
                <Send className="h-5 w-5" />
                {state.submitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
              </button>
              <ValidationError errors={state.errors} />
            </form>
          </div>
        </div>

        {/* Mapa o información adicional */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🎯 PRIMERA CLASE GRATUITA
          </h3>
          <p className="text-gray-300 mb-6">
            Ven y conoce nuestras instalaciones. Tu primera clase es completamente gratis, 
            sin compromisos. Descubre por qué somos el gimnasio #1 de la ciudad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-yellow-400 text-2xl font-bold">100%</div>
              <div className="text-gray-400">Satisfacción Garantizada</div>
            </div>
            <div>
              <div className="text-yellow-400 text-2xl font-bold">24/7</div>
              <div className="text-gray-400">Soporte Disponible</div>
            </div>
            <div>
              <div className="text-yellow-400 text-2xl font-bold">0$</div>
              <div className="text-gray-400">Primera Clase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;