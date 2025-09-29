import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Dumbbell, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
  Target,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  PlayCircle,
  Download,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import About from './components/About';
import Nutrition from './components/Nutrition';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'entrenadores', 'galeria', 'nosotros', 'alimentacion', 'planes', 'comentarios', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'entrenadores', label: 'Entrenadores' },
    { id: 'galeria', label: 'Galería' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'alimentacion', label: 'Alimentación' },
    { id: 'planes', label: 'Planes' },
    { id: 'comentarios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                GoldFit Gym
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/25'
                        : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 border border-transparent hover:border-yellow-500/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors duration-200 border border-transparent hover:border-yellow-500/30"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 border-t border-yellow-500/30">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                      : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 border border-transparent hover:border-yellow-500/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Forja Tu <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Leyenda Dorada</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Entrena con equipos de élite, entrenadores campeones y una comunidad de guerreros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('planes')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/25"
            >
              <Zap className="h-5 w-5" />
              Únete a la Elite
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Ver Programas
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">5000+</div>
              <div className="text-gray-400 text-sm">Miembros Elite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-400 text-sm">Entrenadores Pro</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Acceso Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Años de Gloria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Programas de <span className="text-yellow-500">Elite</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Servicios premium diseñados para transformar tu cuerpo y mente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Entrenamiento Personal VIP',
                description: 'Sesiones exclusivas con campeones certificados',
                image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <Users className="h-8 w-8 text-yellow-500" />,
                features: ['Plan personalizado', 'Seguimiento 24/7', 'Nutrición incluida']
              },
              {
                title: 'Clases Grupales Premium',
                description: 'CrossFit, HIIT, Yoga, Spinning de alto rendimiento',
                image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <Calendar className="h-8 w-8 text-yellow-500" />,
                features: ['Clases ilimitadas', 'Instructores elite', 'Equipos premium']
              },
              {
                title: 'Zona de Fuerza Dorada',
                description: 'Equipos de competición para máximo rendimiento',
                image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <Dumbbell className="h-8 w-8 text-yellow-500" />,
                features: ['Equipos profesionales', 'Zona VIP', 'Asesoría técnica']
              },
              {
                title: 'Cardio de Competición',
                description: 'Tecnología cardiovascular de última generación',
                image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <Heart className="h-8 w-8 text-yellow-500" />,
                features: ['Máquinas inteligentes', 'Monitoreo cardíaco', 'Programas adaptativos']
              },
              {
                title: 'Nutrición de Campeones',
                description: 'Planes alimenticios de atletas profesionales',
                image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <Shield className="h-8 w-8 text-yellow-500" />,
                features: ['Nutricionista personal', 'Suplementación', 'Seguimiento médico']
              },
              {
                title: 'Entrenamiento Funcional',
                description: 'Movimientos naturales para rendimiento real',
                image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=800',
                icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
                features: ['Movimiento natural', 'Prevención lesiones', 'Rendimiento deportivo']
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/50"
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
                    <div className="bg-black/60 p-3 rounded-full border border-yellow-500/30">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="entrenadores" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entrenadores <span className="text-yellow-500">Campeones</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conoce a nuestro equipo de atletas profesionales y entrenadores certificados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Carlos "El Titán" Mendoza',
                specialty: 'Powerlifting & Fuerza',
                experience: '8 años de experiencia',
                image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
                certifications: ['NASM-CPT', 'Powerlifting Coach', 'Campeón Nacional'],
                achievements: 'Record Nacional Deadlift'
              },
              {
                name: 'Ana "Warrior" García',
                specialty: 'Yoga & Mindfulness',
                experience: '6 años de experiencia',
                image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
                certifications: ['RYT-500', 'Pilates Master', 'Meditation Coach'],
                achievements: 'Instructora Internacional'
              },
              {
                name: 'Miguel "Beast" Torres',
                specialty: 'CrossFit & Funcional',
                experience: '10 años de experiencia',
                image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
                certifications: ['CrossFit L3', 'Olympic Lifting', 'Functional Movement'],
                achievements: 'Ex-Atleta Olímpico'
              },
              {
                name: 'Laura "Nutrition Queen" Ruiz',
                specialty: 'Nutrición de Elite',
                experience: '5 años de experiencia',
                image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400',
                certifications: ['PhD Nutrición', 'Sports Nutrition', 'Metabolic Specialist'],
                achievements: 'Nutricionista Olímpica'
              }
            ].map((trainer, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/50"
              >
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${trainer.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      PRO
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-yellow-400">{trainer.name}</h3>
                  <p className="text-yellow-500 font-medium mb-1">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm mb-2">{trainer.experience}</p>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2 mb-3">
                    <p className="text-yellow-400 text-xs font-medium">
                      🏆 {trainer.achievements}
                    </p>
                  </div>
                  <div className="space-y-1">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span 
                        key={certIndex}
                        className="inline-block bg-gray-700 border border-yellow-500/30 text-yellow-300 text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Galería de <span className="text-yellow-500">Entrenamientos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Descubre nuestros equipos de élite y zonas de entrenamiento especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Zona de Pesas Libres',
                description: 'Equipos profesionales de fuerza'
              },
              {
                image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Área de Powerlifting',
                description: 'Plataformas de competición'
              },
              {
                image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Cardio Premium',
                description: 'Máquinas de última generación'
              },
              {
                image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Entrenamiento Personal',
                description: 'Sesiones individualizadas'
              },
              {
                image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Clases Grupales',
                description: 'Entrenamientos en equipo'
              },
              {
                image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Entrenamiento Funcional',
                description: 'Movimientos naturales'
              },
              {
                image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Zona CrossFit',
                description: 'Box de alta intensidad'
              },
              {
                image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Área de Stretching',
                description: 'Recuperación y flexibilidad'
              },
              {
                image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
                exercise: 'Zona de Combate',
                description: 'Artes marciales y boxeo'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.exercise}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-yellow-400 text-lg font-bold mb-2">{item.exercise}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    <div className="mt-3 flex items-center text-yellow-500">
                      <Dumbbell className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium">ZONA PREMIUM</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-500 text-black p-2 rounded-full">
                    <PlayCircle className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Award className="h-12 w-12 text-yellow-500 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre <span className="text-yellow-500">GoldFit Gym</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Con más de una década forjando campeones, GoldFit Gym se ha convertido en el templo 
                dorado del fitness de élite. Nuestro legado está construido sobre la excelencia, 
                la dedicación y la transformación de vidas ordinarias en leyendas extraordinarias.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">5000+</div>
                  <div className="text-gray-400">Guerreros Activos</div>
                </div>
                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
                  <div className="text-gray-400">Entrenadores Elite</div>
                </div>
                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
                  <div className="text-gray-400">Acceso Dorado</div>
                </div>
                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-4 rounded-lg border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">10+</div>
                  <div className="text-gray-400">Años de Gloria</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Descargar App
                </button>
                <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  Tour Virtual
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gimnasio interior"
                className="rounded-xl shadow-2xl border border-yellow-500/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Años de Excelencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="alimentacion" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nutrición de <span className="text-yellow-500">Campeones</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Alimentación científica diseñada para maximizar tu rendimiento y transformación
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Planes Nutricionales de Elite</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg border border-yellow-500/20">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-yellow-400">Evaluación Biométrica Completa</h4>
                    <p className="text-gray-400">Análisis de composición corporal con tecnología DEXA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg border border-yellow-500/20">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-yellow-400">Planes Personalizados de Campeón</h4>
                    <p className="text-gray-400">Menús adaptados por nutricionistas deportivos certificados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg border border-yellow-500/20">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-yellow-400">Seguimiento Inteligente 24/7</h4>
                    <p className="text-gray-400">App exclusiva con IA para ajustes en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-800/50 p-4 rounded-lg border border-yellow-500/20">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1 text-yellow-400">Suplementación Premium</h4>
                    <p className="text-gray-400">Productos de grado farmacéutico y timing perfecto</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Alimentación de campeones"
                className="rounded-xl shadow-2xl border border-yellow-500/30"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                PREMIUM NUTRITION
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Definición Extrema',
                description: 'Protocolo de corte profesional',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Déficit calculado científicamente', 'Preservación muscular máxima', 'Metabolismo acelerado'],
                price: '$199/mes'
              },
              {
                title: 'Masa Muscular Elite',
                description: 'Protocolo de volumen limpio',
                image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Superávit optimizado', 'Síntesis proteica máxima', 'Ganancia muscular pura'],
                price: '$249/mes'
              },
              {
                title: 'Rendimiento Olímpico',
                description: 'Nutrición para atletas de élite',
                image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
                features: ['Periodización nutricional', 'Recuperación acelerada', 'Performance máximo'],
                price: '$299/mes'
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/50"
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${plan.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{plan.title}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="text-2xl font-bold text-yellow-500 mb-4">{plan.price}</div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                    Comenzar Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="planes" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Membresías <span className="text-yellow-500">Doradas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Elige tu nivel de elite y comienza tu transformación hacia la grandeza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Guerrero',
                price: '$49',
                period: '/mes',
                features: [
                  'Acceso completo 24/7',
                  'Todas las zonas de entrenamiento',
                  'Vestidores premium con sauna',
                  'App móvil con seguimiento',
                  'Clases grupales básicas'
                ],
                popular: false,
                color: 'from-gray-700 to-gray-800'
              },
              {
                name: 'Campeón',
                price: '$89',
                period: '/mes',
                features: [
                  'Todo lo del plan Guerrero',
                  'Clases grupales premium ilimitadas',
                  '4 sesiones de entrenamiento personal',
                  'Plan nutricional personalizado',
                  'Zona VIP con equipos exclusivos',
                  'Estacionamiento premium'
                ],
                popular: true,
                color: 'from-yellow-400 to-yellow-600'
              },
              {
                name: 'Leyenda',
                price: '$149',
                period: '/mes',
                features: [
                  'Todo lo del plan Campeón',
                  'Entrenamiento personal ilimitado',
                  'Nutricionista personal dedicado',
                  'Masajes deportivos incluidos',
                  'Acceso a eventos exclusivos',
                  'Concierge fitness personal',
                  'Suplementación premium incluida'
                ],
                popular: false,
                color: 'from-yellow-500 to-yellow-700'
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-xl p-8 shadow-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-yellow-500 bg-gradient-to-b from-yellow-500/10 to-black scale-110' 
                    : 'border-yellow-500/30 bg-gradient-to-b from-gray-800 to-gray-900 hover:border-yellow-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🏆 MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black shadow-lg shadow-yellow-500/25'
                    : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-yellow-500 hover:to-yellow-600 text-white hover:text-black border border-yellow-500/30 hover:border-yellow-500'
                }`}>
                  {plan.popular ? 'COMENZAR AHORA' : 'ELEGIR PLAN'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="comentarios" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <MessageCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimonios de <span className="text-yellow-500">Leyendas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Historias reales de transformación y conquista en GoldFit Gym
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'María "Phoenix" González',
                role: 'Guerrera desde 2022',
                image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'GoldFit no solo cambió mi cuerpo, transformó mi alma. Los entrenadores son verdaderos maestros y las instalaciones son de otro nivel. Perdí 18kg y gané una nueva vida.',
                achievement: 'Perdió 18kg en 5 meses',
                badge: 'TRANSFORMACIÓN EXTREMA'
              },
              {
                name: 'Roberto "Iron" Silva',
                role: 'Campeón desde 2021',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'Este lugar es el Olimpo del fitness. Carlos me ayudó a romper todos mis límites. Ahora compito a nivel nacional y todo comenzó aquí en GoldFit.',
                achievement: 'Ganó 12kg de músculo puro',
                badge: 'ATLETA COMPETITIVO'
              },
              {
                name: 'Ana "Zen" Martínez',
                role: 'Leyenda desde 2023',
                image: 'https://images.pexels.com/photos/3768901/pexels-photo-3768901.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'Las clases con Ana García son mágicas. He encontrado el equilibrio perfecto entre fuerza física y paz mental. GoldFit es mi santuario dorado.',
                achievement: 'Flexibilidad mejorada 60%',
                badge: 'MAESTRÍA MENTAL'
              },
              {
                name: 'Diego "Comeback" Ramírez',
                role: 'Guerrero desde 2020',
                image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'Después de mi lesión pensé que todo había terminado. El equipo de GoldFit me devolvió la esperanza y ahora soy más fuerte que nunca. Son verdaderos magos.',
                achievement: 'Recuperación total + 20% más fuerte',
                badge: 'COMEBACK KING'
              },
              {
                name: 'Carmen "Goddess" López',
                role: 'Campeona desde 2022',
                image: 'https://images.pexels.com/photos/3768908/pexels-photo-3768908.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'Laura diseñó el plan nutricional perfecto para mí. La transformación fue tan increíble que ahora soy modelo fitness. GoldFit hizo realidad mis sueños.',
                achievement: 'Modelo fitness profesional',
                badge: 'DREAM ACHIEVED'
              },
              {
                name: 'Javier "Beast Mode" Morales',
                role: 'Leyenda desde 2021',
                image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
                rating: 5,
                comment: 'CrossFit con Miguel es pura adrenalina y resultados. Mi resistencia se multiplicó por 10 y mi mentalidad cambió para siempre. Esto es más que un gym, es una hermandad.',
                achievement: 'Resistencia aumentada 300%',
                badge: 'ENDURANCE MASTER'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/50"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-500"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-yellow-400">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg p-3 mb-3">
                  <p className="text-yellow-400 text-sm font-bold">
                    🏆 {testimonial.achievement}
                  </p>
                </div>
                <div className="text-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {testimonial.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Phone className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Únete a la <span className="text-yellow-500">Elite</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ¿Listo para comenzar tu transformación? Contáctanos y da el primer paso hacia la grandeza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-yellow-400">Ubicación Elite</h4>
                    <p className="text-gray-400">Av. Champions 123, Distrito Dorado</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-yellow-400">Línea Directa</h4>
                    <p className="text-gray-400">+1 (555) GOLD-FIT</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-yellow-400">Email Elite</h4>
                    <p className="text-gray-400">elite@goldfitgym.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-gray-900/50 p-4 rounded-lg border border-yellow-500/20">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-yellow-400">Horarios de Gloria</h4>
                    <div className="text-gray-400">
                      <p>Lun - Vie: 5:00 AM - 12:00 AM</p>
                      <p>Sáb - Dom: 24 HORAS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-yellow-400 mb-4">Síguenos en Redes</h4>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Comienza Tu Transformación</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-gray-900 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-900 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full bg-gray-900 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
                <select className="w-full bg-gray-900 border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors duration-300">
                  <option value="">Selecciona tu objetivo</option>
                  <option value="perdida-peso">Pérdida de peso</option>
                  <option value="ganancia-muscular">Ganancia muscular</option>
                  <option value="definicion">Definición</option>
                  <option value="rendimiento">Rendimiento deportivo</option>
                  <option value="bienestar">Bienestar general</option>
                </select>
                <textarea
                  placeholder="Cuéntanos sobre tus objetivos y experiencia previa..."
                  rows={4}
                  className="w-full bg-gray-900 border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25"
                >
                  Comenzar Mi Transformación
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-black py-12 border-t border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-8 w-8 text-yellow-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  GoldFit Gym
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Forjando leyendas doradas desde 2014. Tu transformación comienza aquí.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-yellow-500 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <Facebook className="h-5 w-5 text-yellow-500 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
                <Twitter className="h-5 w-5 text-yellow-500 hover:text-yellow-400 cursor-pointer transition-colors duration-300" />
              </div>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Servicios Elite</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">Entrenamiento Personal</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">Clases Grupales</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">Nutrición Deportiva</li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">Planes Premium</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Horarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes - Viernes: 5:00 AM - 12:00 AM</li>
                <li>Sábados: 24 HORAS</li>
                <li>Domingos: 24 HORAS</li>
                <li className="text-yellow-500 font-medium">¡Acceso VIP 24/7!</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Av. Champions 123</li>
                <li>📞 +1 (555) GOLD-FIT</li>
                <li>✉️ elite@goldfitgym.com</li>
                <li>🌐 www.goldfitgym.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-500/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 GoldFit Gym. Todos los derechos reservados. Forjando leyendas desde 2014.
            </p>
          </div>
        </div>
      </footer>

      <Header />
      <Hero />
      <Services />
      <Trainers />
      <Gallery />
      <About />
      <Nutrition />
      <Plans />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;