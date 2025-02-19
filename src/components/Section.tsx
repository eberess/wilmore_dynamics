import { GRADIENTS, COMMON_CLASSES } from '@/constants/styles';
import Badge from './Badge';

interface SectionProps {
  id: string;
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  hasGradientBg?: boolean;
  children: React.ReactNode;
  className?: string;
  role?: string;
  "aria-label"?: string;
}

export default function Section({ id, badge, title, subtitle, hasGradientBg, children, className, role, "aria-label": ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 ${hasGradientBg ? GRADIENTS.BG_SECTION : ''} ${className || ''}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className="max-w-[1200px] mx-auto">
        {(badge || title || subtitle) && (
          <div className="text-center mb-16">
            {badge && <Badge>{badge}</Badge>}
            
            {typeof title === 'string' ? (
              <h2 className={`
                text-[2rem] sm:text-[2.5rem] md:text-[3rem]
                leading-[1.1]
                font-medium
                tracking-[-0.02em]
                text-gray-900 dark:text-white
                mb-4
              `}>
                {title}
                {subtitle && (
                  <span className="block mt-2 text-gray-600 dark:text-gray-300 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-normal">
                    {subtitle}
                  </span>
                )}
              </h2>
            ) : (
              title
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
} 