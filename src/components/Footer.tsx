import { MessageSquare, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Apoloia
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Tecnología que impulsa negocios. Hacemos que tu empresa venda más, atienda mejor y crezca sin complicarse.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <Instagram size={20} className="text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <Facebook size={20} className="text-gray-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <Linkedin size={20} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitio Web Personal
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sitio Web Esencial
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chat Bot
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Publicidad Digital
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Daity Business
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageSquare className="text-green-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/3146593910"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    +57 (314) 6593910
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:rizzoli56@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    rizzoli56@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Ubicación</p>
                  <p className="text-white">Atención en toda Latinoamérica</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Apoloia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
