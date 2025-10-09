import ApplicationForm from "../ui/applicationForm";

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
                    {/* Placeholder member cards */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                        <div key={member} className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-[#D44E50] to-[#544142] rounded-full mx-auto mb-4"></div>
                            <h3 className="text-lg font-semibold text-[#313131] mb-1">
                                Member {member}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                                Software Developer
                            </p>
                            <div className="flex justify-center space-x-3">
                                <button className="text-[#D44E50] hover:text-[#b03d3f] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                                    </svg>
                                </button>
                                <button className="text-[#D44E50] hover:text-[#b03d3f] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ApplicationForm />
        </div>
    );
}
