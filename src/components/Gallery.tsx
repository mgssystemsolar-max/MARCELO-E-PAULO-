import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

// Note: Replace these URLs with your actual local images in the public folder
const images = [
  {
    src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2000&auto=format&fit=crop',
    category: 'Pintura em Estufa',
    title: 'Acabamento Preto Fosco',
  },
  {
    src: 'https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2000&auto=format&fit=crop',
    category: 'Preparação',
    title: 'Mascaramento Técnico',
  },
  {
    src: 'https://images.unsplash.com/photo-1632823471565-1ec2a1ad4015?q=80&w=2000&auto=format&fit=crop',
    category: 'Funilaria',
    title: 'Recuperação de Portas',
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2300&auto=format&fit=crop',
    category: 'Polimento',
    title: 'Espelhamento de Teto',
  },
  {
    src: 'https://images.unsplash.com/photo-1486262715619-01b8c2297615?q=80&w=2000&auto=format&fit=crop',
    category: 'Pintura',
    title: 'Aplicação de Verniz',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2000&auto=format&fit=crop',
    category: 'Restauração',
    title: 'Veículos Batidos',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-3">Portfólio Real</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Nossos trabalhos na oficina</h3>
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
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-zinc-900"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1">{image.category}</span>
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
