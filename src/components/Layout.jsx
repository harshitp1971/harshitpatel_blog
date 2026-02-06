import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Twitter, Moon, Sun } from 'lucide-react';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Theme State
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <div className="bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-dark-text antialiased min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white transition-colors duration-300">

            {/* Navbar */}
            <header className="fixed w-full top-0 z-50 transition-all duration-300 glass dark:glass-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white hover:text-brand-600 transition-colors">
                                harshitpatel<span className="text-brand-500">.</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Home</Link>
                            <Link to="/blog" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Blog</Link>
                            <Link to="/community" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Community</Link>
                        </nav>

                        {/* Auth Buttons & Theme Toggle */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                            </button>
                            <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">Login</Link>
                            <Link to="/signup" className="px-4 py-2 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                Join Community
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                            </button>
                            <button
                                type="button"
                                className="text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden glass dark:glass-dark border-t border-slate-200 dark:border-slate-800">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Home</Link>
                            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Blog</Link>
                            <Link to="/community" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Community</Link>
                            <div className="border-t border-slate-200 dark:border-slate-800 my-2"></div>
                            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 hover:bg-slate-50 dark:hover:bg-slate-800">Login</Link>
                            <Link to="/signup" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800">Join Community</Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-16">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-dark-card border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">harshitpatel<span className="text-brand-500">.</span></h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Explaining technology, cybersecurity, and coding through clean, minimalistic design.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                <li><Link to="/blog" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Latest Posts</Link></li>
                                <li><Link to="/community" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Community</Link></li>
                                <li><Link to="/profile" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">My Profile</Link></li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <Github className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-sm">
                        &copy; 2026 harshitpatel. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
