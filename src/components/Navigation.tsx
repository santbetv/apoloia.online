import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-xl font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Apoloia
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white transition-colors">
              Beneficios
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </button>
            <a
              href="https://wa.me/3146593910"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Contactar
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Beneficios
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              FAQ
            </button>
            <a
              href="https://wa.me/3146593910"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
