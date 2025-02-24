'use client';

type ScrollIconProps = {
  targetId: string;
};

export default function ScrollIcon({ targetId }: ScrollIconProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
      <button 
        onClick={handleClick}
        className="
          group
          flex flex-col items-center
          text-gray-400/60 dark:text-gray-500/60
          hover:text-gray-900 dark:hover:text-white
          transition-all duration-300
        "
        aria-label="Défiler vers le formulaire de contact"
      >
        <div className="relative w-5 h-8 border-2 border-current rounded-full mb-2 overflow-hidden">
          <div className="
            absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1
            bg-current rounded-full
            animate-[scroll_1.5s_ease-in-out_infinite]
          "/>
        </div>
        <span className="
          text-xs tracking-wider uppercase
          opacity-60 group-hover:opacity-100
          transition-opacity duration-300
        ">
          Scroll
        </span>
      </button>
    </div>
  );
} 