import { motion } from 'motion/react';
import { ClipboardList, Hammer, Paintbrush, Sparkles, CheckCircle, Search } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Avaliação',
    description: 'Análise detalhada dos danos e orçamento transparente.',
  },
  {
    icon: Hammer,
    title: 'Funilaria',
    description: 'Desmontagem e recuperação da estrutura original.',
  },
  {
    icon: ClipboardList,
    title: 'Preparação',
    description: 'Lixamento técnico e aplicação de primer de alta aderência.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura',
    description: 'Aplicação de tinta e verniz em cabine pressurizada.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento',
    description: 'Polimento técnico e montagem final das peças.',
  },
  {
    icon: CheckCircle,
    title: 'Entrega',
    description: 'Veículo limpo, revisado e pronto para rodar.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Nosso Processo</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Como recuperamos seu veículo</h3>
          <p className="text-zinc-400 text-lg">
            Seguimos um rigoroso padrão de qualidade em cada etapa para garantir que o resultado final seja impecável.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-red-500 group-hover:bg-zinc-800 transition-all duration-300 shadow-lg relative">
                  <step.icon className="w-7 h-7 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <div className="absolute -bottom-3 bg-zinc-950 px-2 text-xs font-bold text-zinc-500 border border-zinc-800 rounded-full">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
