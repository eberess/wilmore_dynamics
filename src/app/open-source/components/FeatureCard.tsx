'use client';

import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: () => React.ReactElement;
  color: string;
}

export function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Background avec animation subtile */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`} />
      
      {/* Contenu */}
      <div className="relative p-10">
        {/* Icône avec animation */}
        <div className={`w-16 h-16 rounded-2xl bg-${color}-500/[0.08] flex items-center justify-center mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-${color}-500/[0.12]`}>
          <div className="transform transition-transform duration-500 group-hover:-rotate-3">
            <Icon />
          </div>
        </div>
        
        {/* Texte */}
        <h3 className="text-2xl font-medium mb-4 transition-all duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:translate-x-1">
          {description}
        </p>
      </div>
    </div>
  );
} 