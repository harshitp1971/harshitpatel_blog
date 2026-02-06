import React from 'react';
import { X, MessageSquare, Tag, Type } from 'lucide-react';

const NewDiscussionModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 bg-slate-500/75 dark:bg-slate-900/80 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                {/* Modal Positioning */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                {/* Modal Content */}
                <div className="relative inline-block align-bottom bg-white dark:bg-dark-card rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-slate-200 dark:border-slate-700">

                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2" id="modal-title">
                            <MessageSquare className="h-5 w-5 text-brand-500" />
                            Start a New Discussion
                        </h3>
                        <button
                            type="button"
                            className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 focus:outline-none transition-colors"
                            onClick={onClose}
                        >
                            <span className="sr-only">Close</span>
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Form */}
                    <form className="px-6 py-6 space-y-4">
                        {/* Title Input */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Discussion Title
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Type className="h-4 w-4 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    id="title"
                                    className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg py-2.5 transition-colors"
                                    placeholder="What's on your mind?"
                                />
                            </div>
                        </div>

                        {/* Category Select */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Category
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Tag className="h-4 w-4 text-slate-400" />
                                </div>
                                <select
                                    id="category"
                                    className="focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 sm:text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg py-2.5 transition-colors"
                                >
                                    <option>General Discussion</option>
                                    <option>Web Development</option>
                                    <option>Cybersecurity</option>
                                    <option>Career Advice</option>
                                    <option>Showcase</option>
                                </select>
                            </div>
                        </div>

                        {/* Content Textarea */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows="4"
                                className="shadow-sm focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg p-3 transition-colors"
                                placeholder="Share your thoughts, ask questions, or spark a debate..."
                            ></textarea>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex flex-row-reverse gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                        >
                            Post Discussion
                        </button>
                        <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm px-4 py-2 bg-white dark:bg-slate-800 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDiscussionModal;
