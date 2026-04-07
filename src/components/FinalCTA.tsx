import { MessageSquare, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-semibold">El momento es ahora</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Empieza hoy a transformar
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              tu negocio con tecnología que sí funciona
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            No esperes más para automatizar, vender más y atender mejor. Hablemos y diseñemos juntos la solución perfecta para tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://wa.me/3146593910"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 text-white font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageSquare size={24} />
              Hablar por WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/3146593910"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar size={24} />
              Agendar asesoría
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                Sin compromiso
              </div>
              <p className="text-gray-400">Conversamos y vemos qué necesitas</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2">
                Cotización gratis
              </div>
              <p className="text-gray-400">Te damos un presupuesto claro</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mb-2">
                Resultados reales
              </div>
              <p className="text-gray-400">Tecnología que impulsa ventas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
