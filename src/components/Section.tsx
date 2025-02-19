import { GRADIENTS, COMMON_CLASSES } from '@/constants/styles';
import Badge from './Badge';

interface SectionProps {
  id: string;
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  hasGradientBg?: boolean;
  children: React.ReactNode;
}

export default function Section({ id, badge, title, subtitle, hasGradientBg, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-4 ${hasGradientBg ? GRADIENTS.BG_SECTION : ''}`}
    >
      <div className="max-w-[1200px] mx-auto">
        {(badge || title || subtitle) && (
          <div className="text-center mb-32">
            {badge && <Badge>{badge}</Badge>}
            
            {typeof title === 'string' ? (
              <div className={COMMON_CLASSES.sectionTitle}>
                {title}
                {subtitle && (
                  <span className={COMMON_CLASSES.sectionSubtitle}>
                    {subtitle}
                  </span>
                )}
              </div>
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