

//link it with sheets
//have full name , email , speciality and academic year in the same line , skills , and project is optional
import React, { useState } from 'react';

export default function ApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        speciality: '',
        academicYear: '',
        skills: '',
        projects: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'loading', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('loading');
        setErrorMessage('');
        
        try {
            // Add a small delay to prevent rapid submissions
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const response = await fetch('https://script.google.com/macros/s/AKfycbzH0ArO-tYtU-nlNlBB0AlwOLfBz-e6p9EVpFbZsbWUJ8vvmjL-UWSz1T1TKT5xYrYF/exec', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            
            if (response.ok && result.status === 'success') {
                setSubmissionStatus('success');
                setFormData({
                    fullName: '',   
                    email: '',
                    speciality: '',
                    academicYear: '',
                    skills: '',
                    projects: ''
                });
            } else {
                setSubmissionStatus('error');
                setErrorMessage(result.message || 'Failed to submit application');
            }
        } catch (error) {
            setSubmissionStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-3xl font-semibold text-center mb-8">Join NEXTECH</h2>
                
                {submissionStatus === 'loading' && (
                    <div className="bg-blue-100 text-blue-800 p-4 rounded mb-6 text-center flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting your application...
                    </div>
                )}
                
                {submissionStatus === 'success' && (
                    <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
                        <div className="flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Application submitted successfully! We'll get back to you soon.
                        </div>
                    </div>
                )}
                
                {submissionStatus === 'error' && (
                    <div className="bg-red-100 text-red-800 p-4 rounded mb-6 text-center">
                        <div className="flex items-center justify-center">
                            <svg className="h-5 w-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {errorMessage || 'There was an error submitting your application. Please try again.'}
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input  
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="speciality">Speciality</label>
                            <input
                                type="text"
                                id="speciality"
                                name="speciality"
                                value={formData.speciality}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="academicYear">Academic Year</label>
                            <input
                                type="text"
                                id="academicYear"
                                name="academicYear"
                                value={formData.academicYear}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="skills">Skills (comma separated)</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="projects">Projects (optional)</label>
                        <input
                            type="text"
                            id="projects"
                            name="projects"
                            value={formData.projects}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#D44E50]"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={submissionStatus === 'loading'}
                            className={`px-6 py-2 rounded transition-all duration-200 ${
                                submissionStatus === 'loading'
                                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                    : 'bg-[#D44E50] text-white hover:bg-[#b03d3f] hover:shadow-lg transform hover:scale-105'
                            }`}
                        >
                            {submissionStatus === 'loading' ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                        
                        {/* Test Connection Button - Remove in production */}
                        {process.env.NODE_ENV === 'development' && (
                            <button
                                type="button"
                                onClick={async () => {
                                    try {
                                        const response = await fetch('https://script.google.com/macros/s/AKfycbzn9vzRjFkts5h0A3ycJzlvNg_xKpvK5HPcdX7Jre7kpxw9WoP9xqRx3OHHlNSvRbH5/exec', {
                                            method: 'GET'
                                        });
                                        const result = await response.json();
                                        alert(`Connection test: ${result.message || 'Success'}`);
                                    } catch (error) {
                                        alert(`Connection test failed: ${error.message}`);
                                    }
                                }}
                                className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
                            >
                                Test Connection
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}