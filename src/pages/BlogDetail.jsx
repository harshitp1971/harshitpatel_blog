import React from 'react';
import { User, Calendar, Clock, Edit2 } from 'lucide-react';

const BlogDetail = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            {/* Article Header */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Cybersecurity" />
                <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 w-full">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-bold tracking-wider uppercase mb-4">Cybersecurity</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Understanding Zero Trust Architecture
                        </h1>

                        <div className="flex items-center justify-center space-x-6 text-slate-300 text-sm sm:text-base">
                            <div className="flex items-center">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold border-2 border-white/20">HP</div>
                                <span className="ml-3 font-medium text-white">Harshit Patel</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Jan 25, 2026
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                5 min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 bg-white rounded-t-3xl sm:rounded-t-none sm:bg-transparent pt-12 sm:pt-16">
                {/* Article Content */}
                <article className="prose prose-lg prose-slate mx-auto">
                    <p className="lead text-xl text-slate-600 mb-8">
                        The traditional perimeter-based security model is dead. In an era of cloud computing, remote work, and sophisticated threats, "trust but verify" is no longer enough. Enter <strong>Zero Trust</strong>.
                    </p>

                    <p>
                        Zero Trust is not a single product or technology; it's a security framework based on the principle that no user or application should be trusted by default, regardless of whether they are inside or outside the network perimeter.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Core Principles of Zero Trust</h2>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li><strong>Verify Explicitly:</strong> Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.</li>
                        <li><strong>Use Least Privileged Access:</strong> Limit user access with just-in-time and just-enough-access (JIT/JEA), risk-based adaptive policies, and data protection to secure both data and productivity.</li>
                        <li><strong>Assume Breach:</strong> Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why It Matters Now</h2>
                    <p>
                        With the rise of BYOD (Bring Your Own Device) and IoT, the attack surface has expanded exponentially. Attackers are no longer just trying to break through the firewall; they are targeting identities. Once inside, they move laterally to find high-value assets. Zero Trust stops this lateral movement.
                    </p>

                    <blockquote>
                        <p className="text-slate-800 font-medium italic border-l-4 border-brand-500 pl-4 py-2 bg-slate-50 my-8">
                            "Zero Trust is a journey, not a destination. It requires a shift in mindset as much as a shift in technology."
                        </p>
                    </blockquote>

                    <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Implementing Zero Trust</h2>
                    <p>
                        Start by identifying your protect surface—the critical data, applications, assets, and services (DAAS) that are most valuable. Then, map the transaction flows and architect a Zero Trust network specifically for that protect surface.
                    </p>

                    <p>
                        Finally, create your Zero Trust policy: who can access what, when, where, why, and how? And continuously monitor and maintain the network.
                    </p>
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors">#security</a>
                        <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors">#zerotrust</a>
                        <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors">#enterprise</a>
                        <a href="#" className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors">#infosec</a>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-16 pt-10 border-t border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Comments (3)</h3>

                    {/* Comment Form */}
                    <div className="bg-slate-50 p-6 rounded-xl mb-12">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Leave a comment</h4>
                        <form action="#" className="space-y-4">
                            <div>
                                <label htmlFor="comment" className="sr-only">Comment</label>
                                <textarea id="comment" rows="4" className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-3" placeholder="Join the discussion..."></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                    Post Comment
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Comment List */}
                    <div className="space-y-8">
                        {/* Comment 1 */}
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 1" />
                            </div>
                            <div className="flex-1">
                                <div className="bg-white">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-bold text-slate-900">Alex Johnson</h4>
                                        <span className="text-xs text-slate-500">2 hours ago</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        This is a great explanation! I've been hearing about Zero Trust everywhere but this really breaks it down simply. do you have any recommendations for tools to start with?
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comment 2 */}
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2" />
                            </div>
                            <div className="flex-1">
                                <div className="bg-white">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-bold text-slate-900">Sarah Lee</h4>
                                        <span className="text-xs text-slate-500">5 hours ago</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        "Assume breach" is the hardest mindset shift for legacy IT teams. Thanks for highlighting that.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comment 3 */}
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">MK</div>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-sm font-bold text-slate-900">Mike K.</h4>
                                        <span className="text-xs text-slate-500">1 day ago</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-600">
                                        Nice article Harshit. Looking forward to the next one on Cloud Security!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
