import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xldpkdjz");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    
    // Limpiar formulario si se envió exitosamente
    if (state.succeeded) {
      setFormData({ name: '', email: '', phone: '', objective: '', message: '' });
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      details: ["Av. Fitness 123", "Ciudad Deportiva", "CP 12345"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@goldfitgym.com", "ventas@goldfitgym.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      details: ["Lun - Vie: 5:00 - 23:00", "Sáb - Dom: 6:00 - 22:00"]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4">
            Contáctanos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            ¿Listo para transformar tu vida? Ponte en contacto con nosotros y comienza tu journey fitness hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-900 p-4 md:p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black mr-3 md:mr-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm md:text-base text-gray-300">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="bg-gray-900 p-4 md:p-6 rounded-xl border border-yellow-500/20">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Síguenos en redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 md:p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Promoción */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 md:p-6 rounded-xl text-black">
              <h3 className="text-lg md:text-xl font-bold mb-2">🎉 ¡Primera Clase GRATIS!</h3>
              <p className="text-sm md:text-base font-medium">
                Agenda tu primera sesión sin costo y descubre por qué somos el mejor gimnasio de la ciudad.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-yellow-500/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

            {state.succeeded && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <p className="text-green-400">¡Mensaje enviado exitosamente! Te contactaremos pronto.</p>
              </div>
            )}

            {Array.isArray(state.errors) && state.errors.length > 0 && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <p className="text-red-400">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors disabled:opacity-50"
                    placeholder="#"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors disabled:opacity-50"
                    placeholder="+1 (555) 123-4567"
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="objective" className="block text-sm font-medium text-gray-300 mb-2">
                    Objetivo principal
                  </label>
                  <select
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors disabled:opacity-50"
                  >
                    <option value="">Selecciona un objetivo</option>
                    <option value="perder-peso">Perder peso</option>
                    <option value="ganar-musculo">Ganar músculo</option>
                    <option value="mantenerse-en-forma">Mantenerse en forma</option>
                    <option value="entrenamiento-funcional">Entrenamiento funcional</option>
                    <option value="rehabilitacion">Rehabilitación</option>
                    <option value="competencia">Preparación para competencia</option>
                  </select>
                  <ValidationError 
                    prefix="Objective" 
                    field="objective"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Cuéntanos sobre tus objetivos, experiencia previa, horarios preferidos, etc."
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 md:py-4 px-6 rounded-lg text-sm md:text-base hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {state.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 md:h-5 w-4 md:w-5 border-b-2 border-black mr-3"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;