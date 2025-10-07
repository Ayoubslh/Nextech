import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqItem({ value, question, answer }) {
  return (
    <AccordionItem
      value={value}
      className="border-b border-gray-200 last:border-b-0 px-4"
    >
      <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-[#D44E50] transition-colors py-4">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 pb-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
