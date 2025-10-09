import ApplicationForm from "../ui/applicationForm";
import MemberCard from "../ui/membercards";
import { members } from "@/assets/data/member";

export default function Members() {
    return (
        <div className="bg-gray-200 min-h-screen font-inter pt-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center py-20">
                   <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-8 md:mb-12">
                        Meet Our <span className="bg-gradient-to-r to-[#D44E50] from-[#544142] bg-clip-text text-transparent">Squad</span>
                    </h2>
                   <p className="mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                       Talented individuals driving innovation and excellence
                    </p>
                </div>

             <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
  {members.map((member) => (
    <MemberCard key={member.name} member={member} />
  ))}
</div>
            </div>

              <div className="text-center py-10">
                   <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-8 md:mb-12">
                        Join The <span className="bg-gradient-to-r to-[#D44E50] from-[#544142] bg-clip-text text-transparent">Squad</span>
                    </h2>
                   <p className="mb-6 text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                       Ready to be part of something amazing? Fill out the form below and let's build the future together.
                    </p>
                </div>
            <ApplicationForm  />
        </div>
    );
}
