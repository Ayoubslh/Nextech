import React from "react";

export default function MemberCard({ member }) {
  // Dynamic color for position
  const getPositionColor = (position) => {
    const p = position.toLowerCase();
    if (p === "president") return "text-yellow-600";
    if (p === "vice president") return "text-yellow-500";
    if (p.includes('leader')) return "text-red-500";
    return "text-gray-900";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02] duration-200 w-full h-[400px] sm:h-[440px] md:h-[480px] flex flex-col">
      {/* Profile Image - Responsive height */}
      <div className="relative h-40 sm:h-44 md:h-48 flex-shrink-0">
        <img
          src={member.profileImag}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content - Flex grow to fill remaining space */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Name - Fixed height area */}
        <div className="h-7 sm:h-8 flex items-center mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
            {member.name}
          </h3>
        </div>

        {/* Position - Fixed height area */}
        <div className="h-5 sm:h-6 flex items-center mb-1">
          <p
            className={`text-sm font-semibold truncate ${getPositionColor(
              member.position
            )}`}
          >
            {member.position}
          </p>
        </div>

        {/* Specialty - Fixed height area */}
        <div className="h-5 flex items-center mb-1">
          <p className="text-xs sm:text-sm text-gray-700 truncate">
            <span className="font-medium">Specialty:</span>{" "}
            <span className="text-gray-600">{member.specialty}</span>
          </p>
        </div>

        {/* Academic Year - Fixed height area */}
        <div className="h-5 flex items-center mb-3">
          <p className="text-xs sm:text-sm text-gray-700 truncate">
            <span className="font-medium">Year:</span>{" "}
            <span className="text-gray-600">{member.year}</span>
          </p>
        </div>

        {/* Technology Tags - Fixed height area */}
        <div className="h-12 sm:h-16 mb-3 overflow-hidden">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {member.technologies.slice(0, 6).map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-[10px] sm:text-xs px-1.5 sm:px-2 py-1 rounded font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media Icons - Push to bottom */}
        <div className="flex gap-1 sm:gap-3 ">
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0A66C2] rounded flex items-center justify-center hover:bg-[#084a8f] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
