'use client';

interface TransitionStepProps {
  number: string;
  title: string;
  description: string;
  icon: () => React.ReactElement;
  color: string;
}

export function TransitionStep({ number, title, description, icon: Icon, color }: TransitionStepProps) {
  return (
    <div className="group relative">
      {/* Numéro en arrière-plan */}
      <span className={`text-8xl font-bold text-${color}-500/[0.03] absolute -top-8 -left-2 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6 select-none`}>
        {number}
      </span>

      {/* Contenu */}
      <div className="relative p-8">
        {/* Icône avec animation */}
        <div className={`w-16 h-16 rounded-2xl bg-${color}-500/[0.08] flex items-center justify-center mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-${color}-500/[0.12]`}>
          <div className="transform transition-transform duration-500 group-hover:-rotate-3">
            <Icon />
          </div>
        </div>
        
        {/* Texte */}
        <h3 className={`text-2xl font-medium mb-4 transition-all duration-300 group-hover:text-${color}-500 group-hover:translate-x-1`}>
          {title}
        </h3>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:translate-x-1">
          {description}
        </p>
      </div>
    </div>
  );
} 