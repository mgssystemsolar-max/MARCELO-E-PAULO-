interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizes = {
    sm: {
      container: 'h-10 px-3',
      title: 'text-lg',
      subtitle: 'text-[0.5rem]',
      gap: 'gap-0.5',
    },
    md: {
      container: 'h-14 px-4',
      title: 'text-2xl',
      subtitle: 'text-[0.65rem]',
      gap: 'gap-1',
    },
    lg: {
      container: 'h-24 px-8',
      title: 'text-5xl',
      subtitle: 'text-sm',
      gap: 'gap-2',
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={`relative flex flex-col items-center justify-center font-sans select-none ${currentSize.container} ${className}`}>
      {/* Main Brand Name with "Speed" effect */}
      <h1 className={`font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 drop-shadow-sm ${currentSize.title} leading-none transform -skew-x-6`}>
        GONÇALVES
      </h1>
      
      {/* Decorative Line with Racing Colors */}
      <div className={`w-full h-1 bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 rounded-full my-0.5 shadow-sm ${size === 'lg' ? 'h-1.5' : 'h-0.5'}`} />
      
      {/* Subtitle */}
      <p className={`font-bold text-zinc-400 uppercase tracking-[0.2em] ${currentSize.subtitle} leading-none`}>
        Pinturas Automotivas
      </p>
    </div>
  );
}
