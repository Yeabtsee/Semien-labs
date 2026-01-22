import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
            {/* Hero Section */}
            <section className="pt-16 pb-12">
                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-slate-900 dark:text-white text-5xl lg:text-6xl font-black leading-tight tracking-tight">Let’s Build the Future Together</h1>
                    <p className="text-slate-600 dark:text-[#8dceca] text-lg lg:text-xl font-normal max-w-lg">Inquiry &amp; Collaboration for R&amp;D and Product Design. Reach out and start your next breakthrough.</p>
                </div>
            </section>
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: The Form */}
                <div className="lg:col-span-7">
                    <div className="glassmorphism p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined text-8xl">rocket_launch</span>
                        </div>
                        <h3 className="text-white text-2xl font-bold mb-6">Project Inquiry</h3>
                        <p className="text-[#8dceca] mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium">Full Name</label>
                                    <input className="w-full bg-[#173634] border border-[#2e6b67] rounded-lg px-4 py-3.5 text-white placeholder:text-[#528d89] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium">Business Email</label>
                                    <input className="w-full bg-[#173634] border border-[#2e6b67] rounded-lg px-4 py-3.5 text-white placeholder:text-[#528d89] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" type="email"/>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium">Company</label>
                                    <input className="w-full bg-[#173634] border border-[#2e6b67] rounded-lg px-4 py-3.5 text-white placeholder:text-[#528d89] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Acme Corp" type="text"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-medium">Interest Area</label>
                                    <select className="w-full bg-[#173634] border border-[#2e6b67] rounded-lg px-4 py-3.5 text-white appearance-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                        <option value="">Select an option</option>
                                        <option value="rd">Research &amp; Development</option>
                                        <option value="product">Product Design</option>
                                        <option value="consulting">Tech Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-medium">Project Details</label>
                                <textarea className="w-full bg-[#173634] border border-[#2e6b67] rounded-lg px-4 py-3.5 text-white placeholder:text-[#528d89] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project or inquiry..." rows="4"></textarea>
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2" type="submit">
                                <span>Submit Inquiry</span>
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </div>
                </div>
                {/* Right Column: Contact Details */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-6">
                        <h4 className="text-slate-900 dark:text-white text-xl font-bold">Studio Details</h4>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Physical Address</p>
                                <p className="text-slate-600 dark:text-[#8dceca]">
                                    101 Tech Plaza, Silicon Valley<br/>California, CA 94025
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Direct Email</p>
                                <p className="text-slate-600 dark:text-[#8dceca] hover:text-primary transition-colors">
                                    <a href="mailto:hello@semienlabs.com">hello@semienlabs.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <span className="material-symbols-outlined">schedule</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Availability</p>
                                <p className="text-slate-600 dark:text-[#8dceca]">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                            </div>
                        </div>
                    </div>
                    {/* Card Element */}
                    <div className="p-1 rounded-xl bg-gradient-to-br from-primary/40 to-transparent">
                        <div className="bg-background-light dark:bg-[#173634] p-6 rounded-lg shadow-lg">
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg mb-4" data-alt="Office interior with modern technology setup" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNDB4C8qYiQC3Pkhbgt7DBz9Jb88VMSjsSV1oWw4Ls8d9pjEp07le8unVRUJge1AGgyZvzaYYAUHARZdaXiD19FJWmQwGQP5v3GN6SrHoUmLn9Na09HqJJARO-4vuHneAgOfNrWtBLxHblWY-3s4uvW0iZ7e1lG_7iw4g9y7RpjWMWz-ABFmBtLUXrORRAOfY27Udpt2LBPZ_9U9PqJ0nmKLi1tzTU8-5rnsXrBMzVqKXmgXCJCXiHtO45MJnRM3eikuOuJZMzv9mm")'}}></div>
                            <h5 className="text-slate-900 dark:text-white font-bold mb-2">Visit Our Workshop</h5>
                            <p className="text-slate-600 dark:text-[#8dceca] text-sm">Experience the R&amp;D process firsthand. We host monthly open house sessions for partners.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto pt-24">
                <div className="text-center mb-12">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600 dark:text-[#8dceca]">Quick answers to common questions about working with us.</p>
                </div>
                <div className="space-y-4">
                    <div className="border border-slate-200 dark:border-[#2e6b67] rounded-xl overflow-hidden bg-white/5">
                        <button className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors group">
                            <span className="font-bold text-slate-900 dark:text-white">How do you handle Intellectual Property?</span>
                            <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">expand_more</span>
                        </button>
                    </div>
                    <div className="border border-slate-200 dark:border-[#2e6b67] rounded-xl overflow-hidden bg-white/5">
                        <button className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors group">
                            <span className="font-bold text-slate-900 dark:text-white">What is your typical project timeline?</span>
                            <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">expand_more</span>
                        </button>
                    </div>
                    <div className="border border-slate-200 dark:border-[#2e6b67] rounded-xl overflow-hidden bg-white/5">
                        <button className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors group">
                            <span className="font-bold text-slate-900 dark:text-white">Do you offer equity-based partnerships?</span>
                            <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">expand_more</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
