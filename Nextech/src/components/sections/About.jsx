

import Card from "../ui/card"
import code from "../../assets/arrow-separate.svg"
import shell from "../../assets/code-sample.svg"
import people from "../../assets/peoples.svg"
export default function About() {
  return (
    <section id="about" className="py-30 bg-gray-200">
      <div className="container mx-auto px-8">
        <h2 className="text-6xl font-semibold text-center mb-12">About Our {" "} <span className="bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent">
    Club
  </span></h2>
        <div className="max-w-6xl mx-auto text-center text-gray-700">
          <p className="mb-6 text-2xl">
            Our IT club organizes a variety of activities and events such as coding workshops, hackathons, tech talks with industry professionals, and collaborative project development.
            </p>
          
        </div>
        </div>
        <div className="container mx-auto px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card icon={code} title="Coding Workshops" description="Hands-on sessions to learn new programming languages and frameworks." />
            <Card icon={shell} title="Hackathons" description="Collaborative events to build innovative solutions in a short time." />
            <Card icon={people} title="Tech Talks" description="Engaging talks from industry experts on the latest tech trends." />
        </div>
    </section>
    )
}