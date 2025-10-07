import Card from "../ui/card";

import dasc from "../../assets/dasc.svg";
import ntic from "../../assets/ntic.svg";
import uc2 from "../../assets/uc2.svg";

export default function Partners() {
  return (
    <section id="partners" className="py-30 bg-gray-200">
        <div className="container mx-auto px-8">
            <h2 className="text-6xl font-semibold text-center mb-12">Our {" "} <span className="bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent">
    Partners
  </span></h2>
        <div className="max-w-6xl mx-auto text-center text-gray-700">
            <p className="mb-6 text-2xl">
            We collaborate with leading institutions and organizations to provide the best learning and networking opportunities for our members. </p>

        </div>
        </div>
        <div className="container mx-auto px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card icon={dasc} title="DASC" description="Digital Arts and Sciences Club - Fostering creativity and innovation in digital arts and technology." />
            <Card icon={ntic} title="NTIC" description="Network and Telecommunications Interest Club - Exploring the world of networking and telecommunications." />
            <Card icon={uc2} title="UC2" description="University Coding Community - A hub for coding enthusiasts to learn, share, and grow together." />
        </div>
    </section>
  )
}