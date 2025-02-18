'use client';

interface AppCardProps {
  name: string;
  description: string;
  longDescription: string;
  category: string;
  logo: string;
  gradient: string;
  url: string;
}

export function AppCard({ name, description, longDescription, category, logo, gradient }: AppCardProps) {
  return (
    <a 
      href={`/open-source/apps?app=${name.toLowerCase()}`}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/[0.02] border border-gray-200/40 dark:border-white/[0.03] p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-500/5"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-10">
          <img 
            src={logo}
            alt={name}
            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <span className="text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-3 group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            {longDescription}
          </p>
        </div>
      </div>
    </a>
  );
} 