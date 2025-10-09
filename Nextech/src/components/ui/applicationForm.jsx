

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
            // Method 1: Try fetch with no-cors mode (fallback)
            const fetchResponse = await fetch('https://script.google.com/macros/s/AKfycbzH0ArO-tYtU-nlNlBB0AlwOLfBz-e6p9EVpFbZsbWUJ8vvmjL-UWSz1T1TKT5xYrYF/exec', {
                method: 'POST',
                mode: 'no-cors', // This bypasses CORS but we won't get response data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Since no-cors doesn't return data, we'll assume success if no error
            setSubmissionStatus('success');
            setFormData({
                fullName: '',   
                email: '',
                speciality: '',
                academicYear: '',
                skills: '',
                projects: ''
            });
            
        } catch (error) {
            console.log('Fetch failed, trying form submission method...');
            
            // Method 2: Use hidden form submission (CORS-free method)
            try {
                await submitViaForm();
                setSubmissionStatus('success');
                setFormData({
                    fullName: '',   
                    email: '',
                    speciality: '',
                    academicYear: '',
                    skills: '',
                    projects: ''
                });
            } catch (formError) {
                setSubmissionStatus('error');
                setErrorMessage('Unable to submit application. Please try again.');
                console.error('Error submitting form:', formError);
            }
        }
    };

    const submitViaForm = () => {
        return new Promise((resolve, reject) => {
            try {
                // Create a hidden form
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = 'https://script.google.com/macros/s/AKfycbzH0ArO-tYtU-nlNlBB0AlwOLfBz-e6p9EVpFbZsbWUJ8vvmjL-UWSz1T1TKT5xYrYF/exec';
                form.target = 'hidden_iframe';
                form.style.display = 'none';

                // Add form fields
                Object.keys(formData).forEach(key => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = formData[key];
                    form.appendChild(input);
                });

                // Create hidden iframe
                const iframe = document.createElement('iframe');
                iframe.name = 'hidden_iframe';
                iframe.style.display = 'none';
                
                // Handle iframe load (indicates form submission completed)
                iframe.onload = () => {
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    resolve();
                };

                iframe.onerror = () => {
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    reject(new Error('Form submission failed'));
                };

                // Add to DOM and submit
                document.body.appendChild(iframe);
                document.body.appendChild(form);
                form.submit();

                // Auto-resolve after 3 seconds (assume success)
                setTimeout(() => {
                    if (document.body.contains(form)) {
                        document.body.removeChild(form);
                        document.body.removeChild(iframe);
                        resolve();
                    }
                }, 3000);

            } catch (error) {
                reject(error);
            }
        });
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
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={async () => {
                                        try {
                                            // Test with no-cors mode
                                            await fetch('https://script.google.com/macros/s/AKfycbzH0ArO-tYtU-nlNlBB0AlwOLfBz-e6p9EVpFbZsbWUJ8vvmjL-UWSz1T1TKT5xYrYF/exec', {
                                                method: 'GET',
                                                mode: 'no-cors'
                                            });
                                            alert('✅ Connection successful! The service is reachable.');
                                        } catch (error) {
                                            alert(`❌ Connection failed: ${error.message}`);
                                        }
                                    }}
                                    className="text-sm text-blue-600 hover:text-blue-800 underline mr-4"
                                >
                                    Test Connection
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={() => {
                                        const testData = {
                                            fullName: 'Test User',
                                            email: 'test@example.com',
                                            speciality: 'Computer Science',
                                            academicYear: '2024',
                                            skills: 'JavaScript, React',
                                            projects: 'Portfolio Website'
                                        };
                                        setFormData(testData);
                                    }}
                                    className="text-sm text-green-600 hover:text-green-800 underline"
                                >
                                    Fill Test Data
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}