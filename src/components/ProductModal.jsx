import React from 'react';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xl animate-in fade-in duration-200">
            {/* Modal Container */}
            <div className="glass-panel relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-xl flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[60] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Top Header (Inside Modal) */}
                <div className="px-8 py-6 border-b border-white/10 flex justify-between items-end bg-gradient-to-r from-background-dark/80 to-transparent">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded bg-[${product.statusColor}]/20 text-[${product.statusColor}] text-[10px] font-bold uppercase tracking-widest border border-[${product.statusColor}]/30`}>
                                {product.status}
                            </span>
                            {product.enterprise && (
                                <span className="text-accent-gold flex items-center gap-1 text-sm font-semibold">
                                    <span className="material-symbols-outlined text-sm">verified</span> Enterprise Grade
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">{product.title}</h1>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Hero Image Section */}
                    <div className="relative w-full h-80 md:h-[450px]">
                        <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(15,35,34,0.1), rgba(15,35,34,0.9)), url('${product.image}')` }}
                        ></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
                                {product.longDescription}
                            </p>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Specs and Details */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Metric Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {product.metrics.map((metric, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{metric.label}</p>
                                        <p className="text-2xl font-bold text-accent-gold">{metric.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Feature List */}
                            <section>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    Key Capabilities
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <div>
                                                <p className="font-medium text-white">{feature.title}</p>
                                                <p className="text-sm text-white/60">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Tech Stack Section */}
                            <section>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">terminal</span>
                                    Technical Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.techStack.map((tech, index) => (
                                        <span key={index} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column: CTA & Engagement */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="p-8 rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 sticky top-0">
                                <h4 className="text-lg font-bold text-white mb-4">Engagement Model</h4>
                                <p className="text-sm text-white/70 mb-6 leading-relaxed">
                                    We offer flexible integration paths ranging from licensed SaaS instances to custom on-premise deployments with full source-code access.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="material-symbols-outlined text-accent-gold text-lg">settings_suggest</span>
                                        <span>Custom UI/UX Branding</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="material-symbols-outlined text-accent-gold text-lg">security</span>
                                        <span>Military-grade Encryption</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-white/80">
                                        <span className="material-symbols-outlined text-accent-gold text-lg">support_agent</span>
                                        <span>24/7 Dedicated Support</span>
                                    </li>
                                </ul>
                                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                                    <span>Contact to Integrate</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <p className="text-center text-[10px] text-white/40 mt-4 uppercase tracking-[0.2em]">Estimated Setup: 2-4 Weeks</p>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="px-8 py-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30 uppercase tracking-[0.2em]">
                        <span>Semien Labs R&amp;D Division</span>
                        <span>Project ID: {product.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
