import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <div>
              <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Fale Conosco</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Orçamento via WhatsApp</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Envie fotos do seu veículo para uma avaliação prévia ou venha nos visitar.
                Atendemos carros batidos, restaurações e estética automotiva.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="https://wa.me/5511994455781" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg shadow-green-900/20 group"
                >
                  <WhatsAppIcon />
                  <div className="text-left">
                    <p className="text-xs font-bold text-green-900 uppercase tracking-wider">Falar com</p>
                    <p className="font-bold text-lg leading-none">Marcelo</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/5511954229204" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-lg shadow-green-900/20 group"
                >
                  <WhatsAppIcon />
                  <div className="text-left">
                    <p className="text-xs font-bold text-green-900 uppercase tracking-wider">Falar com</p>
                    <p className="font-bold text-lg leading-none">Paulo</p>
                  </div>
                </a>
              </div>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-red-500">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Instagram</h4>
                    <a 
                      href="https://instagram.com/goncalvespinturasautomotivas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      @goncalvespinturasautomotivas
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-red-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Localização</h4>
                    <p className="text-zinc-400">Av. São Paulo, 479 - Cidade São Jorge</p>
                    <p className="text-zinc-500 text-sm mt-1">Santo André - SP, 09111-410</p>
                    <p className="text-zinc-500 text-sm mt-1">Segunda a Sexta, 08:00 às 17:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-grow min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-zinc-800">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Av.+São+Paulo,+479+-+Cidade+São+Jorge,+Santo+André+-+SP,+09111-410&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Google Maps"
                className="absolute inset-0 w-full h-full filter grayscale-[50%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-8 rounded-3xl border border-white/5 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-zinc-300">Serviço de Interesse</label>
                <select
                  id="service"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="funilaria">Funilaria (Carro Batido)</option>
                  <option value="pintura">Pintura Completa</option>
                  <option value="martelinho">Martelinho de Ouro</option>
                  <option value="polimento">Polimento Técnico</option>
                  <option value="restauracao">Restauração</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                  placeholder="Descreva o problema do veículo..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
