import { motion } from 'motion/react';
import { CheckCircle2, Award, Wrench, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1938&auto=format&fit=crop"
                alt="Restauração de Clássicos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  <Star className="text-yellow-500 fill-yellow-500" size={20} />
                </div>
                <p className="text-white font-medium text-lg">"O cuidado com meu Opala 74 foi impressionante. Ficou melhor que zero km."</p>
                <p className="text-zinc-400 text-sm mt-2">- Roberto S., Colecionador</p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-red-600 p-6 rounded-2xl shadow-xl z-20 hidden md:block transform rotate-3 border-4 border-zinc-950">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-bold text-white leading-none">15</span>
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider mt-1">Anos de<br/>Experiência</span>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-zinc-800 rounded-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-500 text-sm font-medium mb-6">
              <Award size={16} />
              <span>Especialistas em Restauração</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Devolvemos a alma do seu <span className="text-red-500">veículo antigo</span>.
            </h3>
            
            <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Não é apenas uma reforma, é um resgate histórico. Com mais de 15 anos de mercado, a Gonçalves Pinturas se especializou na arte de restaurar veículos antigos e clássicos.
            </p>
            
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Entendemos que cada carro tem uma história. Nossa equipe combina técnicas tradicionais de funilaria artesanal com a mais moderna tecnologia de pintura para garantir fidelidade original e durabilidade extrema.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Funilaria Artesanal',
                'Pintura Original de Época',
                'Cromagem e Detalhes',
                'Tapeçaria Personalizada',
                'Elétrica Vintage',
                'Busca de Peças Raras'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                  <Wrench className="text-red-500 w-4 h-4 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Additional Testimonial */}
            <div className="mb-8 p-6 bg-zinc-900 border border-white/5 rounded-2xl relative">
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-4 text-sm">
                "Levei meu Fusca 68 para uma pintura completa e o resultado superou todas as expectativas. O brilho e o acabamento são de outro mundo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">André L.</p>
                  <p className="text-zinc-500 text-xs">Proprietário de Clássico</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Quero restaurar meu carro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
