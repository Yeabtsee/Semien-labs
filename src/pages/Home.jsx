import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/images/bg.jpg" alt="Future City Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-background-dark/40 bg-gradient-to-r from-background-dark/95 via-background-dark/70 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Now in Beta: Quantum Stream v2
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
                            Semien Labs — Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-gold">future</span>, one experiment at a time
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                            Architecting high-performance infrastructure and research tools for the next generation of digital builders. Precision-engineered solutions for complex data ecosystems.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                                Start Experimenting <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <button className="border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                                View Research
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square glass-card rounded-3xl p-4 rotate-0 shadow-2xl shadow-primary/5 border-primary/10 overflow-hidden">
                            <div className="w-full h-full rounded-2xl bg-slate-900 bg-cover bg-center" data-alt="Abstract 3D isometric data lattice illustration" style={{backgroundImage: "url('../../public/assets/images/semienlabs.png')"}}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                            </div>
                        </div>
                        {/* Floating Element */}
                        {/* <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl border-accent-gold/20 flex items-center gap-4">
                            <div className="size-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                                <span className="material-symbols-outlined">analytics</span>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-medium">Lattice Throughput</div>
                                <div className="text-xl font-bold">14.2 GB/s</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Value Band (Feature Section) */}
            <section className="py-24 bg-background-dark/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Core Capabilities</h2>
                        <p className="text-slate-400 max-w-2xl">Blending scientific precision with digital innovation to build the future of technology.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* R&D Card */}
                        <div className="glass-card p-8 rounded-2xl group hover:border-primary/40 transition-all">
                            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">science</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">R&amp;D</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">Rapid prototyping and deep tech exploration to stay ahead of the curve. We turn "what if" into "what is".</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer">
                                Learn more <span className="material-symbols-outlined text-sm">trending_flat</span>
                            </div>
                        </div>
                        {/* Productization Card */}
                        <div className="glass-card p-8 rounded-2xl group hover:border-accent-gold/40 transition-all">
                            <div className="size-14 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Productization</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">Turning theoretical models into scalable, market-ready digital tools. Engineering for millions from day one.</p>
                            <div className="flex items-center gap-2 text-accent-gold font-bold text-sm cursor-pointer">
                                Learn more <span className="material-symbols-outlined text-sm">trending_flat</span>
                            </div>
                        </div>
                        {/* Consulting Card */}
                        <div className="glass-card p-8 rounded-2xl group hover:border-primary/40 transition-all">
                            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">architecture</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Consulting</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">Strategic technical guidance for navigating complex systems and infrastructure architecture.</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer">
                                Learn more <span className="material-symbols-outlined text-sm">trending_flat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Carousel Section */}
            <section className="py-24 border-t border-slate-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Internal Lab Projects</h2>
                        <p className="text-slate-400">Sneak peak at the experiments running in our labs.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="size-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
                <div className="flex overflow-x-auto gap-8 px-6 pb-8 snap-x no-scrollbar">
                    {/* Project 1 */}
                    <div className="min-w-[500px] snap-start">
                        <div className="aspect-video rounded-xl bg-slate-800 mb-6 bg-cover bg-center overflow-hidden border border-slate-700" data-alt="Heg Awaqi AI" style={{backgroundImage: "url('../../assets/images/HegAwaqi.png')"}}></div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">Heg Awaqi AI</h4>
                            <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-bold uppercase">Stable</span>
                        </div>
                        <p className="text-slate-400 text-sm">Legal AI assistant for lawyers and legal professionals.</p>
                    </div>
                    {/* Project 2 */}
                    <div className="min-w-[400px] snap-start">
                        <div className="aspect-video rounded-xl bg-slate-800 mb-6 bg-cover bg-center overflow-hidden border border-slate-700" data-alt="Compass-UI design system components" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNbAQ0MGrtuWEAD-9FKsEzgf8gGkJVKp4OnWotcuesOObPvCAi7oIEktkI_QkX3nZVJ4xV75TL8OkCzQgcQxh4NvBKdbhLqPEF6xPKhuejGmRjz5T7As5Cd0rRspy2aqq9NH9Fkcnjn2HMDU4T_QCiAd5eSJuAOvohK12BHD4ry8YeiHsGCX8ovJ8OYWYO1Tf0Sbhy3dAShVrE3HGVweJlyLt_1iQ3aAP5yqsx9X1j0C_zwtqbPVNwqF4upqb9XCE53NqSPwXmMDz4')"}}></div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">Compass-UI</h4>
                            <span className="text-xs px-2 py-1 rounded bg-accent-gold/10 text-accent-gold font-bold uppercase">v2.0</span>
                        </div>
                        <p className="text-slate-400 text-sm">The core design language for visualizing complex technical systems.</p>
                    </div>
                    {/* Project 3 */}
                    <div className="min-w-[400px] snap-start">
                        <div className="aspect-video rounded-xl bg-slate-800 mb-6 bg-cover bg-center overflow-hidden border border-slate-700" data-alt="Real-time analytical data stream visualization" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChfR-goLG_Fe4QFe2ov-kiJw5kJm8bMbvq0AE8qeYK8BU1mw_lHoy55s9eP6Xir6juwZWPIEje6uFoHKHucjSJhkyDsGIFTiMeZFHVfj9WRhIR0UjuoVwgwdYLyWuHmJgPbWsGo9Nnwyq9dmcHOQl0urbexVuLDffJ2t7swjjS6Nn4I_ruFWKp3hLiWTvpGKvy0H9vee-jUG6ceZG3NiEbHyQAiC-Ineqs3AhjaW3HVaxkfbDvascR3YLcubjpxtBxA4e9dFZn8IbM')"}}></div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">Quantum-Stream</h4>
                            <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300 font-bold uppercase">Lab Only</span>
                        </div>
                        <p className="text-slate-400 text-sm">Next-gen analytical processing engine for asynchronous data ingestion.</p>
                    </div>
                </div>
            </section>
            {/* Trust Metrics Band */}
            <section className="py-16 bg-slate-900/50 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-black text-primary mb-2">50+</div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Experiments</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-primary mb-2">10M+</div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">End Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-primary mb-2">24/7</div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Uptime Record</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-primary mb-2">0.4ms</div>
                        <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">P99 Latency</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
