import { GRADIENTS, COMMON_CLASSES } from '@/constants/styles';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  hasGradientBg?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ 
  id, 
  title, 
  subtitle, 
  badge, 
  hasGradientBg = false, 
  children 
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={`py-24 md:py-32 px-4 ${hasGradientBg ? GRADIENTS.BG_SECTION : ''}`}
    >
      <div className={COMMON_CLASSES.sectionContainer}>
        <div className={COMMON_CLASSES.sectionHeader}>
          {badge && (
            <span className={COMMON_CLASSES.badge}>
              {badge}
            </span>
          )}
          <h2 className={COMMON_CLASSES.sectionTitle}>
            {title}
            {subtitle && (
              <span className={COMMON_CLASSES.gradientText}>
                {subtitle}
              </span>
            )}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section; 