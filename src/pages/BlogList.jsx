import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogList = () => {
    return (
        <div className="bg-gray-50 dark:bg-dark-bg min-h-screen py-12 sm:py-16 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Blog</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
                        Thoughts, tutorials, and insights on the world of technology.
                    </p>
                </div>

                {/* Filter/Search Placeholder */}
                <div className="mt-8 flex justify-center">
                    <div className="relative max-w-lg w-full">
                        <input
                            type="text"
                            className="block w-full rounded-full border-gray-300 dark:border-slate-700 pl-12 pr-4 py-3 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm bg-white dark:bg-slate-800 dark:text-white"
                            placeholder="Search articles..."
                        />
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-brand-100 text-brand-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Cybersecurity</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        Understanding Zero Trust Architecture
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        Why the "never trust, always verify" model is becoming the standard for modern enterprise security. We explore the core principles and implementation strategies.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-25">Jan 25</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Development</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        Mastering Python Decorators
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        A comprehensive guide to understanding and using decorators to write cleaner, more efficient Python code. From basic functions to class-based decorators.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-20">Jan 20</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: AI */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">AI</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        The Future of AI Agents
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        How autonomous agents are reshaping the landscape of software development and user interaction.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-15">Jan 15</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Networking */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Networking</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        TCP vs UDP: A Deep Dive
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        Understanding the fundamental differences between these two protocols and when to use each.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-10">Jan 10</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Career */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Career</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        Breaking into Tech in 2026
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        Tips and advice for new graduates and career switchers looking to land their first role in the tech industry.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-05">Jan 05</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Linux */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ring-1 ring-slate-900/5 dark:ring-transparent">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Linux</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                        Essential Linux Commands
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 dark:text-slate-400 line-clamp-3">
                                        A cheat sheet of the most important Linux commands every developer should know.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">Harshit</p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-01">Jan 01</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700">
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="h-5 w-5" />
                        </a>
                        <a href="#" aria-current="page" className="z-10 bg-brand-50 dark:bg-brand-900/20 border-brand-500 text-brand-600 dark:text-brand-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            1
                        </a>
                        <a href="#" className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            2
                        </a>
                        <a href="#" className="bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            3
                        </a>
                        <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700">
                            <span className="sr-only">Next</span>
                            <ChevronRight className="h-5 w-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
