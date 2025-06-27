import React from 'react';

const Timeline = () => {
    return (
        <section className="bg-gray-50 text-gray-800 dark:bg-black">
            <div className="container max-auto py-28 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#4BAF47]">
                            <h3 className="text-3xl font-semibold dark:text-white">HobbyHub Journey</h3>
                            <span className="text-sm font-bold tracking-wider uppercase text-gray-600 dark:text-white dark:text-white">How passion became a platform</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#4BAF47]">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#4BAF47]">
                                <h3 className="text-xl font-semibold tracking-wide dark:text-white">Idea Sparked</h3>
                                <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-white">Jan 2022</time>
                                <p className="mt-3 dark:text-white">
                                    It all began with a simple idea — to connect people with shared passions. From painting and pottery to coding and cosplay, we imagined a space for all hobbies under one roof.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#4BAF47]">
                                <h3 className="text-xl font-semibold tracking-wide dark:text-white">Community Building</h3>
                                <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-white">Oct 2022</time>
                                <p className="mt-3 dark:text-white">
                                    Through workshops, forums, and hobby-specific groups, HobbyHub became a thriving community of creatives and curious minds sharing their journeys and tips.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#4BAF47]">
                                <h3 className="text-xl font-semibold tracking-wide dark:text-white">Platform Expansion</h3>
                                <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-white">Apr 2024</time>
                                <p className="mt-3 dark:text-white">
                                    Today, HobbyHub offers curated content, tools, online classes, and a digital marketplace — empowering hobbyists to grow, learn, and even earn from what they love doing most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;