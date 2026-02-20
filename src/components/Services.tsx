import { motion } from 'motion/react';
import { Paintbrush, Hammer, Sparkles, Car, Wrench, Droplets } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Funilaria e Pintura',
    description: 'Recuperação completa de carros batidos. Desamassamos e pintamos com precisão original de fábrica.',
  },
  {
    icon: Hammer,
    title: 'Martelinho de Ouro',
    description: 'Técnica artesanal para remover amassados sem danificar a pintura original. Ideal para pequenos reparos.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura em Estufa',
    description: 'Cabine de pintura profissional que garante acabamento perfeito, sem poeira e com secagem rápida.',
  },
  {
    icon: Sparkles,
    title: 'Polimento Cristalizado',
    description: 'Remove riscos superficiais e manchas, devolvendo o brilho intenso e protegendo o verniz.',
  },
  {
    icon: Car,
    title: 'Restauração',
    description: 'Renovamos veículos antigos ou desgastados pelo tempo. Deixamos seu carro novo de novo.',
  },
  {
    icon: Droplets,
    title: 'Estética Automotiva',
    description: 'Higienização interna, vitrificação e cuidados detalhados para valorizar seu patrimônio.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Funilaria, Pintura e Restauração</h3>
          <p className="text-zinc-400 text-lg">
            Especialistas em recuperar carros batidos e renovar a aparência do seu veículo.
            Trabalhamos com Marcelo e Paulo para garantir a melhor qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-red-500/30 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
