
import Card2 from "../ui/Card2";

export default function Getintouch() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-200">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center mb-6 md:mb-8">
                        Get In <span className="bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed px-4">
                        Don't hesitate to contact us using the form below. You can also email us or even come by to 
                        meet. Our direct messages are open on all social platforms!
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Send us a Message Card - Full Height */}
                    <Card2 >
                        <div className="flex items-center mb-4 md:mb-6">
                            <div className="w-6 h-6 md:w-8 md:h-8 mr-3">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">Send us a Message</h3>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <input 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                                    type="text" 
                                    placeholder="Your Full Name ..." 
                                    required 
                                />
                            </div>
                            <div>
                                <input 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                                    type="email" 
                                    placeholder="youremail@gmail.com ..." 
                                    required 
                                />
                            </div>
                            <div>
                                <textarea 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" 
                                    rows="4" 
                                    placeholder="Tell us about your interest in joining NextTech ..." 
                                    required
                                ></textarea>
                            </div>
                            <button 
                                className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center font-medium" 
                                type="submit"
                            >
                                Send Message 
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </Card2>

                    {/* Right Column - Stack of 3 cards */}
                    <div className="space-y-4 md:space-y-6">
                        {/* Email Us Card */}
                        <Card2 >
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="w-5 h-5 md:w-6 md:h-6 mr-3">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold">Email Us</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Reach out to us directly via email for any inquiries or support.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <a href="mailto:nextechsquad@gmail.com" className="text-red-500 font-medium hover:underline">
                                    nextechsquad@gmail.com
                                </a>
                            </div>
                        </Card2>

                        {/* Join Our Community Card */}
                        <Card2>
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Join Our Community</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                                Ready to become an active member in our future events? Fill out our membership form and start your journey with Nextech today!
                            </p>
                            <button className="w-full bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium text-sm md:text-base">
                                Fill Membership Form
                            </button>
                        </Card2>

                        {/* Download Our App Card */}
                        <Card2 >
                            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Download Our App</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                                Get our mobile app for a new experimental experience and enjoy seamless browsing!
                            </p>
                            <button className="w-full bg-gray-400 text-gray-700 px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-500 hover:text-white transition-colors duration-200 font-medium text-sm md:text-base">
                                Download App
                            </button>
                        </Card2>
                    </div>
                </div>
            </div>
        </section>
    );
}