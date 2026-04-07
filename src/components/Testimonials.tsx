import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    business: 'Estudio de Belleza',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Desde que implementamos el chatbot, mis reservas aumentaron un 40%. Ahora atiendo clientes incluso cuando estoy ocupada.',
    rating: 5,
    result: '+40% en reservas'
  },
  {
    name: 'Carlos Ramírez',
    business: 'Restaurante La Esquina',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'La página web nos trajo clientes nuevos desde el primer mes. El sistema de reservas funciona perfecto y ahorra mucho tiempo.',
    rating: 5,
    result: '+60 clientes nuevos'
  },
  {
    name: 'Ana Martínez',
    business: 'Consultorio Dental',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Daity Business transformó mi consultorio. Ahora gestiono todas las citas desde mi celular y mis pacientes pueden agendar 24/7.',
    rating: 5,
    result: 'Agenda llena'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
            <span className="text-yellow-400 text-sm font-semibold">Historias de Éxito</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Negocios que ya
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              están creciendo
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Resultados reales de emprendedores como tú
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <Quote className="text-yellow-500/30 mb-4" size={40} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30"
                />
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.business}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                  <span className="text-yellow-400 font-semibold text-sm">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
