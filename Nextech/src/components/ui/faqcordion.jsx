import { Accordion } from "@/components/ui/accordion";
import FaqItem from "./faqitem";

export function FaqAccordion({ faqs = [] }) {
  return (
    <div className="w-full bg-white rounded-lg md:rounded-2xl shadow-md p-4 md:p-6 lg:p-8">
      <Accordion type="single" collapsible className="w-full space-y-1 md:space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            value={`item-${index + 1}`}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </Accordion>
    </div>
  );
}
