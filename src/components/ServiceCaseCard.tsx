import { COLORS, COMMON_CLASSES } from '@/constants/styles';

type ServiceCaseProps = {
  title: string;
  description: string;
  metrics: string;
};

const ServiceCaseCard = ({ useCase }: { useCase: ServiceCaseProps }) => (
  <div className={COMMON_CLASSES.card}>
    <h3 className={COMMON_CLASSES.cardHover}>{useCase.title}</h3>
    <p className={`${COMMON_CLASSES.textContainer} mb-4`}>{useCase.description}</p>
    <div className="flex items-center gap-2">
      <span className={`text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] font-medium`}>
        {useCase.metrics}
      </span>
    </div>
  </div>
);

export default ServiceCaseCard; 