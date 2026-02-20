import { motion } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.location.href = '#'}>
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLoginClick}
              className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <User size={18} />
              Login
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors text-sm"
            >
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-zinc-900 border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLoginClick();
                }}
                className="flex items-center gap-2 w-full px-3 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                <User size={18} />
                Área do Cliente
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
