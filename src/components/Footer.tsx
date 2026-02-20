import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-zinc-500 text-sm leading-relaxed mt-4">
              Funilaria, Pintura, Polimento e Martelinho de Ouro.
              A empresa que renova seu carro com qualidade e confiança.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com/goncalvespinturasautomotivas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Início</a></li>
              <li><a href="#about" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Serviços</a></li>
              <li><a href="#gallery" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Galeria</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Funilaria e Pintura</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Martelinho de Ouro</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Polimento</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Restauração</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contatos</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>(11) 99445-5781</li>
              <li>Av. São Paulo, 479</li>
              <li>Santo André - SP</li>
              <li>@goncalvespinturasautomotivas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Gonçalves Pinturas Automotivas. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs">Termos de Uso</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
