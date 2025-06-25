import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700 dark:text-gray-600 dark:bg-black text-sm">
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                    {/* Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl font-bold bg-[#4BAF47]">
                            HH
                        </div>
                        <Link to="/" className="text-xl font-semibold transition-colors duration-300">
                            <span className="text-[#4BAF47]">hobby</span>
                            <span className="text-gray-800 dark:text-white">Hub</span>
                        </Link>
                    </div>


                    {/* Links */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-10">
                        <Link to="/terms" className="hover:text-[#4BAF47] transition dark:text-white">Terms of Use</Link>
                        <Link to="/privacy" className="hover:text-[#4BAF47] transition dark:text-white">Privacy Policy</Link>
                        <Link to="/contact" className="hover:text-[#4BAF47] transition dark:text-white">Contact Us</Link>
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4BAF47] transition dark:text-white">
                            Instagram
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4BAF47] transition dark:text-white">
                            Facebook
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4BAF47] transition dark:text-white">
                            Twitter
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-xs text-gray-500 dark:text-white">
                    © {new Date().getFullYear()} hobbyHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
