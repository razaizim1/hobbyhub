import React from 'react';

const About = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                            About <span className="text-[#4BAF47]">HobbyHub</span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            HobbyHub is a vibrant online community where creativity, passion, and people come together.
                            Whether you're into painting, coding, gardening, or gaming — there's a group for you. 
                            Our mission is to connect like-minded individuals and help them grow together through shared interests.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Built with love by a team of hobbyists, we aim to make exploring and creating new hobbies fun and accessible for everyone.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                            alt="Team working together"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>

                {/* Team */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Meet Our Team</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { name: "Alice", role: "Frontend Developer" },
                            { name: "Bob", role: "Backend Developer" },
                            { name: "Carol", role: "UI/UX Designer" },
                        ].map((member, index) => (
                            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center shadow">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#4BAF47] text-white flex items-center justify-center text-xl font-bold">
                                    {member.name[0]}
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{member.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;