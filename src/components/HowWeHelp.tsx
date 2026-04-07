import { Search, Pencil, Rocket, GraduationCap, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Entendemos tu negocio',
    description: 'Analizamos tus necesidades, objetivos y audiencia para crear la estrategia perfecta.',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Pencil,
    title: 'Diseñamos la solución',
    description: 'Creamos un plan personalizado con las herramientas tecnológicas que necesitas.',
    gradient: 'from-cyan-500 to-teal-400'
  },
  {
    icon: Rocket,
    title: 'Implementamos todo',
    description: 'Desarrollamos y configuramos cada detalle para que todo funcione perfectamente.',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    icon: GraduationCap,
    title: 'Te capacitamos',
    description: 'Te enseñamos a usar todas las funciones para que aproveches al máximo la tecnología.',
    gradient: 'from-orange-500 to-red-400'
  },
  {
    icon: HeartHandshake,
    title: 'Te acompañamos',
    description: 'Soporte continuo y mejoras constantes para que sigas creciendo sin límites.',
    gradient: 'from-emerald-500 to-teal-400'
  }
];

export default function HowWeHelp() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0B0F] to-[#0F0F14] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-semibold">Nuestro Proceso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cómo te ayudamos
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              a crecer paso a paso
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`inline-block ${index % 2 === 0 ? 'lg:float-right' : 'lg:float-left'} max-w-md`}>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                      <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-[#0B0B0F]`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
