interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      container: 'w-32 h-16',
      title: 'text-lg',
      subtitle: 'text-[0.5rem]',
    },
    md: {
      container: 'w-48 h-24',
      title: 'text-2xl',
      subtitle: 'text-[0.65rem]',
    },
    lg: {
      container: 'w-64 h-32',
      title: 'text-4xl',
      subtitle: 'text-xs',
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 group ${currentSize.container} ${className}`}>
      {/* Background Image mimicking the colorful car livery */}
      <img 
        src="https://images.unsplash.com/photo-1580273916550-e323be2ed5fa?q=80&w=1000&auto=format&fit=crop" 
        alt="Gonçalves Pinturas Automotivas" 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
        <h1 className={`font-black text-white tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-none ${currentSize.title}`}>
          GONÇALVES
        </h1>
        <div className="w-full h-0.5 bg-red-600/80 my-1 rounded-full shadow-sm" />
        <p className={`font-bold text-white uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-none ${currentSize.subtitle}`}>
          PINTURAS AUTOMOTIVAS
        </p>
      </div>
    </div>
  );
}
