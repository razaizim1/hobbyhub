import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { loading, userInfo, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className='w-full m-auto text-center flex justify-center items-center min-h-screen'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <header className="bg-[#4BAF47] sticky top-0 z-50">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 mr-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl font-bold bg-[#4BAF47]">
                            HH
                        </div>
                        <Link to="/" className="text-xl font-semibold transition-colors duration-300">
                            <span className="text-white">hobby</span>
                            <span className="text-gray-800 dark:text-white">Hub</span>
                        </Link>
                    </div>

                    {/* Mobile dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 stroke-current text-black dark:text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/allgroups">All Groups</NavLink></li>
                            <li><NavLink to="/mygroups">My Groups</NavLink></li>
                            <li><NavLink to="/creategroup">Create Group</NavLink></li>
                            {userInfo && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='dark:text-white'><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className='dark:text-white'><NavLink to="/allgroups">All Groups</NavLink></li>
                        <li className='dark:text-white'><NavLink to="/mygroups">My Groups</NavLink></li>
                        <li className='dark:text-white'><NavLink to="/creategroup">Create Group</NavLink></li>
                        {userInfo && <li className='dark:text-white'><NavLink to="/dashboard">Dashboard</NavLink></li>}
                    </ul>
                </div>

                <div className="navbar-end flex items-center space-x-2">
                    {/* Theme toggle button */}
                    <button onClick={toggleTheme} className="btn btn-ghost text-xl">
                        {isDark ? '🌞' : '🌙'}
                    </button>

                    {userInfo ? (
                        <>
                            <NavLink onClick={handleLogout} className="btn mr-2">Logout</NavLink>
                            <img
                                className="h-11 w-11 rounded-full lg:group hover:cursor-pointer"
                                src={userInfo.photoURL}
                                alt=""
                                title={userInfo.displayName}
                            />
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-black text-white text-sm rounded-md p-1 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
                                {userInfo.displayName}
                            </div>
                        </>
                    ) : (
                        <>
                            <NavLink to="/registration" className="btn mr-4">Registration</NavLink>
                            <NavLink to='/login' className="btn">Login</NavLink>
                        </>
                    )}
                </div>
            </div>
        </header>

    );
};

export default Navbar;