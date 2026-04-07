import { MessageSquare, Calendar, BarChart3, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function Featured() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0B0F] to-[#0F0F14] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
              Soluciones Premium
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tecnología que trabaja
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              mientras tú creces
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg shadow-purple-500/50">
                <MessageSquare className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Chat Bot Inteligente</h3>
                <p className="text-purple-400">Automatiza tu atención 24/7</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-2xl p-6 mb-6 border border-white/5">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-lg rounded-tl-none p-3">
                      <p className="text-gray-300 text-sm">Hola, ¿tienen disponibilidad para mañana a las 3pm?</p>
                      <span className="text-gray-500 text-xs">14:23</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg rounded-tr-none p-3 ml-10">
                      <p className="text-white text-sm">¡Hola! Sí, tengo disponibilidad mañana a las 3pm. ¿Te gustaría reservar?</p>
                      <span className="text-purple-100 text-xs">14:23</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-lg rounded-tl-none p-3">
                      <p className="text-gray-300 text-sm">Sí, perfecto. Para 2 personas.</p>
                      <span className="text-gray-500 text-xs">14:24</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg rounded-tr-none p-3 ml-10">
                      <p className="text-white text-sm">✅ ¡Reserva confirmada! Te espero mañana a las 3pm.</p>
                      <span className="text-purple-100 text-xs">14:24</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-purple-400" size={20} />
                  <span className="text-white font-semibold">24/7</span>
                </div>
                <p className="text-gray-400 text-sm">Atención continua</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-purple-400" size={20} />
                  <span className="text-white font-semibold">95%</span>
                </div>
                <p className="text-gray-400 text-sm">Satisfacción</p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <Calendar className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Daity Business</h3>
                <p className="text-emerald-400">Sistema completo de gestión</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-2xl p-6 mb-6 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Dashboard en Vivo</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-sm">Activo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/20">
                  <BarChart3 className="text-blue-400 mb-2" size={24} />
                  <div className="text-2xl font-bold text-white mb-1">248</div>
                  <p className="text-gray-400 text-sm">Reservas del mes</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/20">
                  <Users className="text-emerald-400 mb-2" size={24} />
                  <div className="text-2xl font-bold text-white mb-1">892</div>
                  <p className="text-gray-400 text-sm">Clientes totales</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-white text-sm font-medium">María García</p>
                      <p className="text-gray-400 text-xs">Hoy 15:00</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs">Confirmada</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div>
                      <p className="text-white text-sm font-medium">Juan Pérez</p>
                      <p className="text-gray-400 text-xs">Hoy 17:30</p>
                    </div>
                  </div>
                  <span className="text-yellow-400 text-xs">Pendiente</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-white text-sm font-medium">Ana López</p>
                      <p className="text-gray-400 text-xs">Mañana 10:00</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs">Confirmada</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-emerald-400" size={20} />
                  <span className="text-white font-semibold">Auto</span>
                </div>
                <p className="text-gray-400 text-sm">Reservas automáticas</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="text-emerald-400" size={20} />
                  <span className="text-white font-semibold">+40%</span>
                </div>
                <p className="text-gray-400 text-sm">Más eficiencia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/3146593910"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
          >
            <MessageSquare size={20} />
            Quiero estas soluciones
          </a>
        </div>
      </div>
    </section>
  );
}
