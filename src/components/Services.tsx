import { Globe, MessageSquare, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sitio Web Personal',
    description: 'Landing sencilla y personalizada para tu marca',
    features: [
      'Diseño único y profesional',
      'Optimizado para móviles',
      'Capacitación incluida',
      'Soporte continuo'
    ],
    gradient: 'from-blue-500 to-cyan-400',
    glowColor: 'blue-500'
  },
  {
    icon: Globe,
    title: 'Sitio Web Esencial',
    description: 'Página completa con todas las integraciones',
    features: [
      'Múltiples secciones',
      'Integración con redes',
      'Formularios de contacto',
      'SEO optimizado'
    ],
    gradient: 'from-cyan-500 to-teal-400',
    glowColor: 'cyan-500'
  },
  {
    icon: MessageSquare,
    title: 'Chat Bot',
    description: 'Automatización inteligente 24/7',
    features: [
      'Respuestas automáticas',
      'Agendamiento de citas',
      'Integración WhatsApp',
      'Analítica en tiempo real'
    ],
    gradient: 'from-purple-500 to-pink-400',
    glowColor: 'purple-500',
    featured: true
  },
  {
    icon: TrendingUp,
    title: 'Publicidad Digital',
    description: 'Campañas que atraen clientes reales',
    features: [
      'Google Ads',
      'Meta Ads (Facebook/Instagram)',
      'Optimización constante',
      'Reportes semanales'
    ],
    gradient: 'from-orange-500 to-red-400',
    glowColor: 'orange-500'
  },
  {
    icon: Sparkles,
    title: 'Daity Business',
    description: 'Sistema completo para gestionar tu negocio',
    features: [
      'Gestión de reservas',
      'Agenda inteligente',
      'Dashboard de métricas',
      'Crecimiento escalable'
    ],
    gradient: 'from-emerald-500 to-teal-400',
    glowColor: 'emerald-500',
    featured: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 text-sm font-semibold">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Soluciones que impulsan
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              tu crecimiento
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnología diseñada para negocios que quieren vender más y atender mejor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                service.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 right-8">
                  <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold shadow-lg`}>
                    Popular
                  </span>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg shadow-${service.glowColor}/50`}>
                <service.icon className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`text-${service.glowColor} flex-shrink-0 mt-0.5`} size={18} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/3146593910"
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold hover:shadow-xl hover:shadow-${service.glowColor}/50 transition-all duration-300`}
              >
                Quiero este servicio
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
