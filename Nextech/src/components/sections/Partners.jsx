import Card from "../ui/card";

import dasc from "../../assets/dasc.svg";
import ntic from "../../assets/ntic.svg";
import uc2 from "../../assets/uc2.svg";

export default function Partners() {
  return (
    <section id="partners" className="py-12 md:py-20 lg:py-30 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-8 md:mb-12">
          Our {" "} 
          <span className="bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent">
            Partners
          </span>
        </h2>
        <div className="max-w-6xl mx-auto text-center text-gray-700">
          <p className="mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
            We collaborate with leading institutions and organizations to provide the best learning and networking opportunities for our members.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card icon={dasc} title="DASC" description="Digital Arts and Sciences Club - Fostering creativity and innovation in digital arts and technology." />
          <Card icon={ntic} title="NTIC" description="Network and Telecommunications Interest Club - Exploring the world of networking and telecommunications." />
          <Card icon={uc2} title="UC2" description="University Coding Community - A hub for coding enthusiasts to learn, share, and grow together." />
        </div>
      </div>
    </section>
  )
}