'use client';

interface MetricCardProps {
  number: string;
  label: string;
}

export function MetricCard({ number, label }: MetricCardProps) {
  return (
    <div className="text-center p-8">
      <div className="text-4xl font-bold text-[#1a73e8] dark:text-[#8ab4f8] mb-2">
        {number}
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
} 