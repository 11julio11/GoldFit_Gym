import React from 'react';

const whatsappNumber = '3027677393'; // Ejemplo, reemplaza por tu número real
const message = '¡Hola! Quiero más información sobre GoldFit Gym.';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-black border-4 border-yellow-400 hover:bg-yellow-400 hover:border-yellow-500 text-white hover:text-black rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-300"
      aria-label="Chatea por WhatsApp"
      title="Chatea por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.85-.51-5.48-1.48l-.39-.23-4.65 1.22 1.24-4.52-.25-.4A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
