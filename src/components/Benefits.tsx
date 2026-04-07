import { Palette, MessageCircle, Zap, HeartHandshake, Clock, Target } from 'lucide-react';

const benefits = [
  {
    icon: Palette,
    title: 'Diseño personalizado',
    description: 'Cada proyecto es único, adaptado a tu marca y objetivos específicos.',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: MessageCircle,
    title: 'Integración con WhatsApp',
    description: 'Conecta directamente con tus clientes donde ya están conversando.',
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    icon: Zap,
    title: 'Automatización real',
    description: 'Ahorra tiempo con procesos que funcionan solos, 24/7.',
    gradient: 'from-yellow-500 to-orange-400'
  },
  {
    icon: HeartHandshake,
    title: 'Soporte cercano',
    description: 'Siempre disponibles para ayudarte cuando lo necesites.',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    icon: Clock,
    title: 'Implementación rápida',
    description: 'Tu proyecto listo en semanas, no meses.',
    gradient: 'from-cyan-500 to-teal-400'
  },
  {
    icon: Target,
    title: 'Enfocado en ventas',
    description: 'Todo lo que hacemos está diseñado para generar resultados.',
    gradient: 'from-red-500 to-pink-400'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-purple-400 text-sm font-semibold">¿Por qué elegirnos?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Beneficios que
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              marcan la diferencia
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="text-white" size={32} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
