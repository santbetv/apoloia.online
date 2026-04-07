import { MessageSquare, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0F] pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">Tecnología que impulsa negocios</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Convierte tu negocio en una máquina de ventas
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                con tecnología inteligente
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Creamos páginas web, automatizamos tu atención con chatbots y gestionamos tu publicidad para que consigas más clientes sin complicarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/3146593910"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Hablar por WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Ver servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">+15</div>
                <div className="text-sm text-gray-400">Negocios transformados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-400">Atención automatizada</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">+40%</div>
                <div className="text-sm text-gray-400">Más conversiones</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 space-y-4">
              <div className="animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Ventas del mes</span>
                      <span className="text-green-400 text-sm">+32%</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">$24,850</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20" style={{ animationDelay: '0.95s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-semibold block mb-2">Chat Bot Activo</span>
                    <p className="text-gray-400 text-sm mb-3">12 conversaciones activas</p>
                    <div className="space-y-2">
                      <div className="bg-white/5 rounded-lg px-3 py-2 text-sm text-gray-300">
                        "¿Tienen disponibilidad mañana?"
                      </div>
                      <div className="bg-blue-500/20 rounded-lg px-3 py-2 text-sm text-white ml-8">
                        "¡Sí! Te muestro los horarios..."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20" style={{ animationDelay: '1.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-white font-semibold block mb-2">Reservas de hoy</span>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-2xl font-bold text-white">8</div>
                      <span className="text-sm text-gray-400">agendadas automáticamente</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-8 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full" />
                      <div className="w-2 h-12 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full" />
                      <div className="w-2 h-10 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full" />
                      <div className="w-2 h-14 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full" />
                      <div className="w-2 h-9 bg-gradient-to-t from-purple-500 to-pink-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
