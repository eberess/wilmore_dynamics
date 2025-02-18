import { GRADIENTS, COMMON_CLASSES } from '@/constants/styles';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  hasGradientBg?: boolean;
  children: React.ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
};

const Section = ({ 
  id, 
  title, 
  subtitle, 
  badge, 
  hasGradientBg = false,
  className = '',
  children 
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={`relative py-24 md:py-32 px-4 ${hasGradientBg ? GRADIENTS.BG_SECTION : ''} ${className}`}
    >
      {hasGradientBg && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-[-5%] top-1/3 w-[600px] h-[600px] transform rotate-12">
            <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[40px] blur-2xl opacity-20`} />
          </div>
          <div className="absolute left-[-5%] bottom-1/3 w-[600px] h-[600px] transform -rotate-12">
            <div className={`w-full h-full ${GRADIENTS.BG_DECORATIVE} rounded-[40px] blur-2xl opacity-20`} />
          </div>
        </div>
      )}

      <div className={`${COMMON_CLASSES.sectionContainer} relative z-10`}>
        <div className={`${COMMON_CLASSES.sectionHeader} mb-16 md:mb-24`}>
          {badge && (
            <span className={COMMON_CLASSES.badge}>
              {badge}
            </span>
          )}
          <h2 className={COMMON_CLASSES.sectionTitle}>
            {title}
            {subtitle && (
              <span className={`${COMMON_CLASSES.gradientText} ml-2`}>
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