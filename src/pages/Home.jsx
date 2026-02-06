import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-dark-bg pt-16 pb-20 lg:pt-24 lg:pb-28 transition-colors duration-300">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block">Explaining Tech &</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Cybersecurity Simply</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
                        Diving deep into code, security, and everything in between. Join the conversation and learn something new every day.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                        <Link to="/blog" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                            Read Blog
                        </Link>
                        <Link to="/community" className="flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 md:text-lg md:px-10 shadow-sm hover:shadow-md transition-all">
                            Join Community
                        </Link>
                    </div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-brand-200 dark:bg-brand-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
                    <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
                </div>
            </section>

            {/* Latest Articles */}
            <section className="bg-white dark:bg-dark-card py-16 sm:py-24 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Latest Articles</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
                            Fresh perspectives on the latest tech trends and security practices.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* Article Card 1 */}
                        <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cybersecurity" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                        Cybersecurity
                                    </p>
                                    <Link to="/blog/detail" className="block mt-2">
                                        <p className="text-xl font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                            Understanding Zero Trust Architecture
                                        </p>
                                        <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                                            Why the "never trust, always verify" model is becoming the standard for modern enterprise security.
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Harshit Patel
                                        </p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-25">Jan 25, 2026</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article Card 2 */}
                        <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Coding" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                        Development
                                    </p>
                                    <Link to="/blog/detail" className="block mt-2">
                                        <p className="text-xl font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                            Mastering Python Decorators
                                        </p>
                                        <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                                            A comprehensive guide to understanding and using decorators to write cleaner, more efficient Python code.
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Harshit Patel
                                        </p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-20">Jan 20, 2026</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>8 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article Card 3 */}
                        <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tech" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                                        Tech
                                    </p>
                                    <Link to="/blog/detail" className="block mt-2">
                                        <p className="text-xl font-semibold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                            The Future of AI Agents
                                        </p>
                                        <p className="mt-3 text-base text-slate-500 dark:text-slate-400">
                                            How autonomous agents are reshaping the landscape of software development and user interaction.
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">HP</div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            Harshit Patel
                                        </p>
                                        <div className="flex space-x-1 text-sm text-slate-500 dark:text-slate-400">
                                            <time dateTime="2026-01-15">Jan 15, 2026</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/blog" className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 flex items-center justify-center gap-2">
                            View all articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
