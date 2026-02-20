import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// A mix of "Real Process" (workshop vibes) and "High-End Results" (showroom vibes)
const images = [
  {
    src: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2000&auto=format&fit=crop',
    category: 'Preparação',
    title: 'Mascaramento Técnico',
    description: 'Proteção total das áreas que não serão pintadas.'
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2300&auto=format&fit=crop',
    category: 'Resultado Final',
    title: 'Espelhamento Premium',
    description: 'Acabamento vitrificado com proteção cerâmica.'
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop',
    category: 'Pintura em Estufa',
    title: 'Aplicação de Verniz',
    description: 'Ambiente controlado livre de poeira e impurezas.'
  },
  {
    src: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2300&auto=format&fit=crop',
    category: 'Restauração',
    title: 'Clássicos',
    description: 'Devolvendo a originalidade para veículos de coleção.'
  },
  {
    src: 'https://images.unsplash.com/photo-1632823471565-1ec2a1ad4015?q=80&w=2000&auto=format&fit=crop',
    category: 'Funilaria',
    title: 'Recuperação Estrutural',
    description: 'Alinhamento técnico e correção de lataria.'
  },
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop',
    category: 'Detalhamento',
    title: 'Acabamento de Motor',
    description: 'Limpeza e proteção de componentes internos.'
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Portfólio Real</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Do processo ao resultado</h3>
            <p className="text-zinc-400 mt-4">
              Confira a qualidade do nosso trabalho, desde a preparação minuciosa até o brilho final.
            </p>
          </div>
          <a href="#contact" className="text-zinc-400 hover:text-white flex items-center gap-2 group transition-colors">
            Ver todos os projetos
            <span className="block w-8 h-px bg-zinc-600 group-hover:w-12 group-hover:bg-white transition-all" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-zinc-900 border border-white/5"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">{image.category}</span>
                <h4 className="text-white text-xl font-bold mb-1">{image.title}</h4>
                <p className="text-zinc-400 text-sm line-clamp-2">{image.description}</p>
                
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl bg-zinc-900"
            />
            <div className="mt-4 text-center">
              <span className="text-red-500 text-sm font-bold uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-white text-2xl font-bold mt-1">{selectedImage.title}</h3>
              <p className="text-zinc-400 mt-2">{selectedImage.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
