import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Car Paint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">Marcelo & Paulo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            A empresa que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">renova</span> seu carro.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed"
          >
            Especialistas em Funilaria, Pintura, Polimento e Martelinho de Ouro.
            Recuperamos carros batidos e restauramos a beleza original do seu veículo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-lg shadow-red-600/20 group"
            >
              Orçamento via WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-all border border-white/10 backdrop-blur-sm"
            >
              Ver Antes e Depois
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent" />
      </motion.div>
    </section>
  );
}
