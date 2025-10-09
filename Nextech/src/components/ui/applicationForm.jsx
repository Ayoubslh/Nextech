

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
    const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzn9vzRjFkts5h0A3ycJzlvNg_xKpvK5HPcdX7Jre7kpxw9WoP9xqRx3OHHlNSvRbH5/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmissionStatus('success');
                setFormData({
                    fullName: '',   
                    email: '',
                    speciality: '',
                    academicYear: '',
                    skills: '',
                    projects: ''
                });
            }
            else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-3xl font-semibold text-center mb-8">Join NEXTECH</h2>
                {submissionStatus === 'success' && (
                    <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
                        Application submitted successfully!
                    </div>
                )}
                {submissionStatus === 'error' && (
                    <div className="bg-red-100 text-red-800 p-4 rounded mb-6 text-center">
                        There was an error submitting your application. Please try again.
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
                            className="bg-[#D44E50] text-white px-6 py-2 rounded hover:bg-[#b03d3f] transition-colors"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}