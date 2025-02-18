import { COMMON_CLASSES } from '@/constants/styles';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="border-b border-gray-200 dark:border-white/[0.1] py-8">
    <h3 className="text-xl font-medium mb-4">{question}</h3>
    <p className={COMMON_CLASSES.textContainer}>{answer}</p>
  </div>
);

export default FAQItem; 