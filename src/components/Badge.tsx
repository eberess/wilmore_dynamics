type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span 
      className={`
        inline-block 
        text-blue-600 dark:text-blue-400 
        text-xs
        font-medium 
        tracking-wider
        uppercase
        px-3 
        py-1.5
        rounded-full 
        bg-blue-50/80 backdrop-blur-sm
        dark:bg-blue-500/10
        border border-blue-100/80
        dark:border-blue-400/20
        mb-6 
        animate-fade-in
        z-10
        ${className}
      `}
    >
      {children}
    </span>
  );
} 