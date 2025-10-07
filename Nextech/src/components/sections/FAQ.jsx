import { FaqAccordion } from "../ui/faqcordion"




const faqs = [
  {
    question: "What types of activities or events does Nextech IT club will organize?",
    answer:" Our IT club organizes a variety of activities and events such as coding workshops, hackathons, tech talks with industry professionals, and collaborative project development."
    },
      {
    question: "Is your IT club open to everyone, or only students from specific subjects?",
    answer:" Our IT club is open to all students, regardless of their major or background. We welcome anyone with an interest in technology and a desire to learn and collaborate."
    },
      {
    question: "How often does your IT club meet, and what is the typical format of your meetings?",
    answer:" Our IT club typically meets bi-weekly, with meetings consisting of a mix of presentations, workshops, and collaborative project work. We also organize special events and hackathons periodically."
    },
      {
    question: "What opportunities does your IT club offer for skill development and learning?",
    answer:" Our IT club offers a range of opportunities for skill development, including coding workshops, guest lectures from industry professionals, and hands-on project work. Members can also participate in hackathons and collaborative coding sessions to enhance their skills."
    },
      {
    question: "Are there leadership opportunities available within your IT club?",
    answer:" Yes, our IT club offers various leadership opportunities, including roles such as event coordinator, project lead, and workshop facilitator. Members interested in taking on leadership roles can apply during our annual elections or express their interest to the current leadership team."
    },
      {
    question: "How does your IT club engage with the broader tech community?",
    answer:" Our IT club actively engages with the broader tech community by collaborating with local tech companies, inviting guest speakers from the industry, and participating in community tech events. We also encourage our members to network and connect with professionals in the field."
    },



]
        

export default function FaqSection() {
  return (
    <section className="py-16 bg-[#F9F2ED]">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
               