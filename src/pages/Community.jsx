import React, { useState } from 'react';
import { MessageSquare, Users, TrendingUp, Search, PlusCircle, Heart, Share2, MoreHorizontal } from 'lucide-react';
import NewDiscussionModal from '../components/NewDiscussionModal';

const Community = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const discussions = [
        {
            id: 1,
            user: {
                name: "Alex Johnson",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                badge: "Moderator"
            },
            title: "What's your go-to tech stack for 2026?",
            excerpt: "I've been experimenting with a few new frameworks lately and I'm curious what everyone else is using for production apps this year.",
            tags: ["Web Dev", "Tech Stack"],
            likes: 45,
            replies: 12,
            time: "2h ago"
        },
        {
            id: 2,
            user: {
                name: "Sarah Lee",
                avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            title: "Understanding Zero Trust Architecture in simple terms",
            excerpt: "Writing a blog post about Zero Trust and looking for some good analogies. How do you explain it to non-tech stakeholders?",
            tags: ["Cybersecurity", "Zero Trust"],
            likes: 38,
            replies: 8,
            time: "4h ago"
        },
        {
            id: 3,
            user: {
                name: "Mike Chen",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                badge: "Pro"
            },
            title: "Best resources for learning Rust?",
            excerpt: "I'm finally taking the plunge into Rust. Any recommendations for interactive courses or projects for beginners?",
            tags: ["Rust", "Learning"],
            likes: 27,
            replies: 15,
            time: "6h ago"
        }
    ];

    const topics = [
        { name: "Web Development", count: 124 },
        { name: "Cybersecurity", count: 85 },
        { name: "Cloud Computing", count: 62 },
        { name: "Machine Learning", count: 54 },
        { name: "Career Advice", count: 47 }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Community</h1>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Join the discussion, share knowledge, and connect with developers.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <button className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                            <Search className="h-5 w-5 mr-2 text-slate-400" />
                            <span>Search</span>
                        </button>
                        <button
                            className="flex items-center px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg shadow-md transition-all hover:-translate-y-0.5"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <PlusCircle className="h-5 w-5 mr-2" />
                            <span>New Discussion</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Feed */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Filters */}
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                            <button className="px-4 py-2 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium whitespace-nowrap">
                                All Discussions
                            </button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                                Popular
                            </button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                                Recent
                            </button>
                            <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                                Solved
                            </button>
                        </div>

                        {/* Discussion Cards */}
                        {discussions.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img className="h-10 w-10 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700" src={item.user.avatar} alt={item.user.name} />
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.user.name}</h3>
                                                {item.user.badge && (
                                                    <span className="px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-bold">
                                                        {item.user.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-slate-500">{item.time}</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {item.excerpt}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex space-x-6">
                                        <button className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                            <Heart className="h-5 w-5" />
                                            <span className="text-sm font-medium">{item.likes}</span>
                                        </button>
                                        <button className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                            <MessageSquare className="h-5 w-5" />
                                            <span className="text-sm font-medium">{item.replies} Replies</span>
                                        </button>
                                    </div>
                                    <button className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Popular Topics */}
                        <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <TrendingUp className="h-5 w-5 text-brand-500" />
                                <h3 className="font-bold text-slate-900 dark:text-white">Popular Topics</h3>
                            </div>
                            <div className="space-y-3">
                                {topics.map((topic, idx) => (
                                    <div key={idx} className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-slate-600 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors bg-trasnparent">{topic.name}</span>
                                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs rounded-full group-hover:bg-brand-50 dark:group-hover:bg-brand-900 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                            {topic.count}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Contributors */}
                        <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <Users className="h-5 w-5 text-brand-500" />
                                <h3 className="font-bold text-slate-900 dark:text-white">Top Contributors</h3>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="relative">
                                            <img className="h-10 w-10 rounded-full object-cover" src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} alt="User" />
                                            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-dark-card rounded-full p-0.5">
                                                <div className="bg-green-500 h-2.5 w-2.5 rounded-full border border-white dark:border-dark-card"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">DevUser_{i}</p>
                                            <p className="text-xs text-brand-500">1.2k pts</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2 text-sm text-center text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-medium border border-brand-200 dark:border-brand-800/50 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors">
                                View Leaderboard
                            </button>
                        </div>

                        {/* Newsletter/Promo */}
                        <div className="bg-gradient-to-br from-brand-600 to-purple-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Weekly Digest</h3>
                                <p className="text-brand-100 text-sm mb-4">Get the best discussions delivered to your inbox every Monday.</p>
                                <button className="w-full py-2 bg-white text-brand-600 font-bold rounded-lg hover:bg-brand-50 transition-colors shadow-sm">
                                    Subscribe
                                </button>
                            </div>
                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-purple-400 opacity-20 rounded-full blur-xl"></div>
                        </div>

                    </div>
                </div>
            </div>

            <NewDiscussionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Community;
