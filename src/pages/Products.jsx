import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';

const PRODUCTS_DATA = [
    {
        id: "HEG-AI-PRO",
        title: "Heg Awaqi AI",
        version: "v1.0",
        status: "Stable",
        statusColor: "#00b2a7", // Primary
        enterprise: true,
        image: "/assets/images/HegAwaqi.png",
        shortDescription: "Legal AI assistant for the public and law professionals.",
        longDescription: "An advanced legal AI assistant designed to democratize legal access for the public while providing powerful research and drafting tools for law professionals.",
        metrics: [
            { label: "Accuracy", value: "99.8%" },
            { label: "Jurisdictions", value: "15+" },
            { label: "Response", value: "< 1s" }
        ],
        features: [
            { title: "Legal Research", description: "Instant citation and case law retrieval." },
            { title: "Document Drafting", description: "Automated contract and brief generation." },
            { title: "Public Access", description: "Simplified legal explanations for everyday queries." },
            { title: "Compliance Check", description: "Real-time regulatory analysis." }
        ],
        techStack: ["Python", "TensorFlow", "NLP", "React", "FastAPI"]
    },
    {
        id: "LAB-AI-SL",
        title: "Synth Layer",
        version: "v0.9",
        status: "Beta",
        statusColor: "#d4af37", // Gold
        enterprise: false,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbHGP6FXObZxVHys24JVPvPukDFZ8d2WPxigvFwEgFIFi3btIC_CFLYFTKP0s5x8dvp4gWDVbSuKxXSVbKtGdOX-G9EqiWFwdZRJe0PKBu7rcPqunHf-oMSRZ1D8I0VylzT68ErbppwXJhzy0bUlv7LVtauHREuZjLRkeE_4bimq3vKnmusKyDZYieQN9zFLAWZlP09gC04ioPdwKt3dIOaAFZC6KcjwsAoIXde8vWt5Lk8SMuRIFA3YEW1swWAPQqUQm9cdxMeT5y",
        shortDescription: "AI-driven orchestration for managing complex research workloads across multiple nodes.",
        longDescription: "Autonomous workload manager that uses reinforcement learning to optimize research cluster efficiency and prevent resource contention.",
        metrics: [
            { label: "Optimization", value: "+40%" },
            { label: "Node Support", value: "500+" },
            { label: "AI Model", value: "Transformer" }
        ],
        features: [
            { title: "Self-Healing", description: "Automatically detects and restarts failed experiment nodes." },
            { title: "Predictive Scheduling", description: "Forecasts resource needs based on historical usage patterns." },
            { title: "Container Native", description: "Seamless integration with Docker and Podman." },
            { title: "Audit Trail", description: "Immutable logs of all orchestration decisions." }
        ],
        techStack: ["Python", "PyTorch", "Go", "Docker", "Redis", "FastAPI"]
    },
    {
        id: "RL-VIS-01",
        title: "Research Lattice",
        version: "v2.0",
        status: "Alpha",
        statusColor: "#00b2a7", // Primary
        enterprise: true,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWYr7_sVfm-Olepx7e8KJxhm577mG6QDwdDrCk0qyB9MomAQGU9FyT6cRfhJyNj4uJVyGuxUkspv_1reg5_VwZlI8aTo4yhaXwRgu4wNblfaeLDEH7F4hLTW7EhZclf_H-WuwjaIOlCE-2AugjWE_r1aDnzdVenkpWKgilFevgqqAi5AxacAY-fcAPBAR6sSdtCv7Qab22P-qZf6R4OpVPvU7v3l9KFLjXL3DzeuM-iAdBU-qM8nUHeN50sATCb6RXZ7ezFoXir6rV",
        shortDescription: "A visual topology tool for exploring large-scale system inter-dependencies in real-time.",
        longDescription: "Immersive 3D visualization environment for mapping complex system dependencies, network traffic, and data flows.",
        metrics: [
            { label: "FPS", value: "120+" },
            { label: "Nodes", value: "10k+" },
            { label: "Render", value: "WebGL 2" }
        ],
        features: [
            { title: "Force-Directed Graph", description: "Physics-based layout for intuitive structural understanding." },
            { title: "Real-time Drilldown", description: "Click any node to inspect live state and metrics." },
            { title: "Time Travel", description: "Replay system state from any point in the recorded history." },
            { title: "VR Ready", description: "Experimental support for WebXR visualization." }
        ],
        techStack: ["Three.js", "WebGL", "React", "D3.js", "WebSocket", "Node.js"]
    },
    {
        id: "VP-OBS-10",
        title: "Vector Pulse",
        version: "v1.0",
        status: "Stable",
        statusColor: "#00b2a7",
        enterprise: true,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcc_n3Hx4MuK4I-R1Mzu3qaYsVSKNErtO7YHYUQjiTNeDdBH9FMYaFTruI3VopVWFvEaDnAR0yXcmp0a-Ool5IkqnXgiMXDJWq6qPGmc8TCL9pEjfh534BroDj5E6vmJJudUa6wNrMKrOPVa8PPDr0q6ZlG9FwH9mTTK5KNNeAcMyiHynPWqMoRoJCi9UKhBJhCTJaabBXVaoDRGHIAqVWsCn4SK2RTD4kSCuz-FLsdDp87z8iuDlN40i-G9wJD-Mx1GR1xGy-emRU",
        shortDescription: "Automated observability and alerting for high-performance computing clusters.",
        longDescription: "Zero-configuration monitoring for HPC clusters with anomaly detection derived from chaos engineering principles.",
        metrics: [
            { label: "Resolution", value: "1s" },
            { label: "Retention", value: "90 Days" },
            { label: "Alerts", value: "< 2s" }
        ],
        features: [
            { title: "Anomaly Detection", description: "ML-based identification of unusual system behavior." },
            { title: "Distributed Tracing", description: "Full request context across microservices." },
            { title: "Log Aggregation", description: "Centralized logging with structured query support." },
            { title: "Custom Dashboards", description: "Drag-and-drop builder for visualizing key metrics." }
        ],
        techStack: ["Go", "Elasticsearch", "Grafana", "OpenTelemetry", "Kafka"]
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="relative min-h-screen">
             {/* Research Lattice Background Motif */}
            <div className="fixed inset-0 research-lattice pointer-events-none z-0"></div>
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none z-0"></div>

            <div className="relative z-10 w-full pt-12">
                 <div className="max-w-[1200px] mx-auto w-full px-4 lg:px-20">
                    <div className="flex flex-col gap-4 mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold tracking-widest uppercase">R&amp;D Ecosystem</span>
                        </div>
                        <h1 className="text-white text-5xl font-black leading-tight tracking-tight">Product Catalog <span className="text-primary">&amp;</span> Sandbox</h1>
                        <p className="text-teal-200/70 text-lg max-w-2xl font-light">Explore our suite of high-performance technical tools and live interactive prototypes designed for the next generation of digital infrastructure.</p>
                    </div>
                    
                    {/* Chips / Filter Row Component */}
                    <div className="flex gap-3 pb-8 flex-wrap">
                        <button className="flex h-9 items-center justify-center rounded-full bg-primary px-6 text-white text-sm font-semibold shadow-lg shadow-primary/20">
                            All Systems
                        </button>
                        <button className="flex h-9 items-center justify-center rounded-full bg-white/5 border border-teal-800/50 hover:border-primary/50 px-6 text-teal-100 text-sm font-medium transition-all">
                            Platform
                        </button>
                        <button className="flex h-9 items-center justify-center rounded-full bg-white/5 border border-teal-800/50 hover:border-primary/50 px-6 text-teal-100 text-sm font-medium transition-all">
                            Tools
                        </button>
                        <button className="flex h-9 items-center justify-center rounded-full bg-white/5 border border-teal-800/50 hover:border-primary/50 px-6 text-teal-100 text-sm font-medium transition-all">
                            Integrations
                        </button>
                        <button className="flex h-9 items-center justify-center rounded-full bg-white/5 border border-teal-800/50 hover:border-primary/50 px-6 text-teal-100 text-sm font-medium transition-all">
                            Research
                        </button>
                    </div>

                    {/* Featured Sandbox Card (Static) */}
                    <div className="mb-12 @container">
                        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row shadow-2xl glass-card overflow-hidden group">
                            {/* Interactive Sandbox Preview Element */}
                            {/* Featured Image */}
                            <div className="w-full @xl:w-1/2 min-h-[300px] relative overflow-hidden flex items-center justify-center bg-black/40">
                                <img src="/assets/images/Hegawaqi_animated.gif" alt="Heg Awaqi AI Interface" className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex w-full grow flex-col items-stretch justify-center gap-4 p-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-gold text-xs font-bold tracking-widest uppercase">Featured Product</p>
                                    <span className="text-teal-500/50 text-xs font-mono">HEG-AI-PRO</span>
                                </div>
                                <h2 className="text-white text-3xl font-bold tracking-tight">Heg Awaqi AI</h2>
                                <div className="space-y-4">
                                    <p className="text-teal-100/70 text-base leading-relaxed">Legal AI assistant for the public and law professionals. Empowering users with instant legal clarity and professionals with advanced drafting and research capabilities.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 rounded bg-teal-900/30 text-teal-400 text-[10px] font-bold uppercase border border-teal-800/50">Legal Tech</span>
                                        <span className="px-2 py-1 rounded bg-teal-900/30 text-teal-400 text-[10px] font-bold uppercase border border-teal-800/50">AI Assistant</span>
                                        <span className="px-2 py-1 rounded bg-teal-900/30 text-teal-400 text-[10px] font-bold uppercase border border-teal-800/50">Automation</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="inline-flex items-center gap-2 h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20">
                                        <span>Access AI</span>
                                        <span className="material-symbols-outlined text-sm">smart_toy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product ImageGrid - Dynamic */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {PRODUCTS_DATA.map((product) => (
                            <div 
                                key={product.id} 
                                className="flex flex-col glass-card rounded-xl overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="w-full aspect-video relative">
                                    <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url('${product.image}')`}}></div>
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-background-dark/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-teal-400 uppercase border border-teal-800/50">{product.version}</span>
                                        <span className={`bg-[${product.statusColor}]/20 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white uppercase`}>{product.status}</span>
                                    </div>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="px-4 py-2 bg-black/60 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">View Details</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                                    <p className="text-teal-200/60 text-sm leading-normal mb-6">{product.shortDescription}</p>
                                    <div className="mt-auto flex items-center justify-between gap-4">
                                        <button className="flex-1 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-teal-800/50 group-hover:bg-primary group-hover:border-primary group-hover:text-white text-teal-100 text-xs font-bold transition-all">
                                            View Specs
                                        </button>
                                        <button className="w-10 h-9 flex items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/40 text-primary transition-all">
                                            <span className="material-symbols-outlined text-xl">open_in_new</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
    );
};

export default Products;
