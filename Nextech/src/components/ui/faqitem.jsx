import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqItem({ value, question, answer }) {
  return (
    <AccordionItem
      value={value}
      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 px-2 md:px-4 my-2 md:my-3"
    >
      <AccordionTrigger className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium text-gray-800 dark:text-gray-200 hover:text-[#D44E50] dark:hover:text-[#D44E50] transition-colors py-3 md:py-4 text-left leading-tight">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base md:text-lg lg:text-xl xl:text-xl text-gray-600 dark:text-gray-400 pb-3 md:pb-4 leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
