import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en estar listo mi proyecto?',
    answer: 'Depende del servicio. Una landing page puede estar lista en 1-2 semanas. Un sistema completo con chatbot y automatizaciones toma 3-4 semanas. Te damos un timeline claro desde el inicio.'
  },
  {
    question: '¿Incluye soporte después de la entrega?',
    answer: 'Sí, todos nuestros servicios incluyen soporte continuo. Estamos disponibles para resolver dudas, hacer ajustes y ayudarte a sacar el máximo provecho de tu inversión.'
  },
  {
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer: 'Absolutamente. Trabajamos de forma colaborativa y puedes solicitar ajustes durante todo el proceso. Queremos que quedes 100% satisfecho con el resultado final.'
  },
  {
    question: '¿Realmente funciona con WhatsApp?',
    answer: 'Sí, nuestros chatbots se integran directamente con WhatsApp Business API. Tus clientes pueden conversar, hacer preguntas y agendar citas desde WhatsApp de forma automática.'
  },
  {
    question: '¿El chatbot se adapta a mi tipo de negocio?',
    answer: 'Sí, cada chatbot es personalizado para tu negocio específico. Programamos las respuestas, flujos de conversación y funcionalidades según lo que necesites.'
  },
  {
    question: '¿Necesito conocimientos técnicos para usar el sistema?',
    answer: 'No. Diseñamos todo para que sea fácil de usar. Además, te capacitamos personalmente y te acompañamos hasta que te sientas 100% cómodo manejando tu sistema.'
  },
  {
    question: '¿Qué pasa si necesito agregar funciones nuevas más adelante?',
    answer: 'Podemos agregar funcionalidades en cualquier momento. Tu sistema crece contigo. Solo nos contactas y evaluamos cómo implementar lo que necesitas.'
  },
  {
    question: '¿Cuál es la inversión necesaria?',
    answer: 'Cada proyecto es único y el costo varía según tus necesidades. Contáctanos por WhatsApp para una cotización personalizada sin compromiso.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#0B0B0F] to-[#0F0F14] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <span className="text-cyan-400 text-sm font-semibold">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Resolvemos tus
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              dudas más comunes
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">¿Tienes otra pregunta?</p>
          <a
            href="https://wa.me/3146593910"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
