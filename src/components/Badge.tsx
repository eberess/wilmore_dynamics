type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span 
      className={`
        inline-flex
        items-center
        text-blue-600/90 dark:text-blue-400/90
        text-[11px]
        font-semibold
        tracking-[0.06em]
        uppercase
        px-2.5
        py-1
        rounded-[20px]
        bg-blue-50/60 backdrop-blur-sm
        dark:bg-blue-500/[0.08]
        border border-blue-100/40
        dark:border-blue-400/[0.06]
        mb-6
        animate-fade-in
        z-10
        shadow-sm
        transition-all
        duration-300
        hover:bg-blue-50/80
        dark:hover:bg-blue-500/[0.12]
        hover:scale-[1.02]
        ${className}
      `}
    >
      {children}
    </span>
  );
} 