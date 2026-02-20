import { motion } from 'motion/react';
import { ArrowLeft, Lock, Mail, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Logo from './Logo';

interface LoginProps {
  onBack: () => void;
}

export default function Login({ onBack }: LoginProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (isRegistering) {
      console.log('Register attempt:', { name, email, password });
    } else {
      console.log('Login attempt:', { email, password });
    }
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
      >
        <button
          onClick={onBack}
          className="absolute top-6 left-6 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>

        <div className="flex flex-col items-center justify-center mb-8 mt-6">
          <Logo size="lg" className="mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">
            {isRegistering ? 'Criar Conta' : 'Área do Cliente'}
          </h2>
          <p className="text-zinc-400 text-sm text-center">
            {isRegistering ? 'Preencha seus dados para começar' : 'Acesse para acompanhar seus serviços'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600"
                  placeholder="Seu nome"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600"
                placeholder="seu@email.com"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-300 ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl pl-11 pr-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all placeholder:text-zinc-600"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {!isRegistering && (
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <label className="flex items-center gap-2 cursor-pointer hover:text-zinc-300">
                <input type="checkbox" className="rounded border-zinc-700 bg-zinc-800 text-red-600 focus:ring-red-600/20" disabled={isLoading} />
                Lembrar de mim
              </label>
              <a href="#" className="hover:text-red-500 transition-colors">Recuperar Senha?</a>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processando...
              </>
            ) : (
              isRegistering ? 'Cadastrar' : 'Entrar'
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-500 text-sm">
            {isRegistering ? 'Já tem uma conta? ' : 'Ainda não tem conta? '}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-red-500 font-medium hover:text-red-400 transition-colors"
              disabled={isLoading}
            >
              {isRegistering ? 'Fazer Login' : 'Adicionar Novo'}
            </button>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
