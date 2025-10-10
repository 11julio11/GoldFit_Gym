import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Nutrition from './components/Nutrition';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Gallery />
      <Nutrition />
      <Plans />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;