import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2, MessageSquare } from 'lucide-react';

const Profile = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Profile Header Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    {/* Cover Image */}
                    <div className="h-32 bg-gradient-to-r from-brand-400 to-brand-600"></div>

                    <div className="relative px-6 pb-6">
                        {/* Avatar */}
                        <div className="absolute -top-16 left-6">
                            <div className="h-32 w-32 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Profile" className="h-full w-full object-cover" />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end pt-4 mb-4 sm:mb-0">
                            <Link to="/chat" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Go to Chat
                            </Link>
                        </div>

                        {/* User Info */}
                        <div className="mt-16 sm:mt-8">
                            <h1 className="text-3xl font-bold text-slate-900">Harshit Patel</h1>
                            <p className="text-slate-500 font-medium">@harshitpatel</p>

                            <p className="mt-4 text-slate-600 max-w-2xl">
                                Cybersecurity enthusiast, full-stack developer, and lifelong learner. Passionate about breaking things to make them stronger. Building cool stuff with Python and JavaScript.
                            </p>

                            {/* Stats */}
                            <div className="mt-6 flex items-center space-x-6">
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-slate-900">12</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Posts</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-slate-900">1.2k</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Followers</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-slate-900">450</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wide">Following</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User's Posts Section */}
                <h2 className="mt-12 text-2xl font-bold text-slate-900 mb-6">Latest Posts</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-100 ring-1 ring-slate-900/5">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-brand-100 text-brand-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Cybersecurity</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">
                                        Understanding Zero Trust Architecture
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 line-clamp-3">
                                        Why the "never trust, always verify" model is becoming the standard for modern enterprise security.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex text-sm text-slate-500 space-x-2">
                                    <span>Jan 25, 2026</span>
                                    <span>&middot;</span>
                                    <span>5 min read</span>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-slate-400 hover:text-brand-600">
                                        <span className="sr-only">Edit</span>
                                        <Edit2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-100 ring-1 ring-slate-900/5">
                        <div className="flex-shrink-0 relative">
                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                            <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Development</div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <Link to="/blog/detail" className="block mt-2">
                                    <p className="text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">
                                        Mastering Python Decorators
                                    </p>
                                    <p className="mt-3 text-base text-slate-500 line-clamp-3">
                                        A comprehensive guide to understanding and using decorators to write cleaner, more efficient Python code.
                                    </p>
                                </Link>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex text-sm text-slate-500 space-x-2">
                                    <span>Jan 20, 2026</span>
                                    <span>&middot;</span>
                                    <span>8 min read</span>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-slate-400 hover:text-brand-600">
                                        <span className="sr-only">Edit</span>
                                        <Edit2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
