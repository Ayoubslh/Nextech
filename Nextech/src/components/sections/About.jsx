

import Card from "../ui/card"
import { IoCodeSharp } from "react-icons/io5";
import { FiTerminal } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-30 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-8 md:mb-12">
          About Our {" "} 
          <span className="bg-gradient-to-r to-[#D44E50] from-[#544142] bg-clip-text text-transparent">
            Club
          </span>
        </h2>
        <div className="max-w-6xl mx-auto text-center text-gray-700">
          <p className="mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
            Our IT club organizes a variety of activities and events such as coding workshops, hackathons, tech talks with industry professionals, and collaborative project development.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <Card icon={<IoCodeSharp color="#D44E50" className="w-8 h-8 md:w-12 md:h-12"/>} title="Coding Workshops" description="Hands-on sessions to learn new programming languages and frameworks." />
          <Card icon={<FiTerminal color="#D44E50" className="w-8 h-8 md:w-12 md:h-12"/>} title="Hackathons" description="Collaborative events to build innovative solutions in a short time." />
          <Card icon={<IoPeopleOutline color="#D44E50" className="w-8 h-8 md:w-12 md:h-12"/>} title="Tech Talks" description="Engaging talks from industry experts on the latest tech trends." />
        </div>
      </div>
    </section>
  )
}