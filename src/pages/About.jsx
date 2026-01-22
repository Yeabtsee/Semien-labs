import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              Our Mission
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tighter text-white">
              Decoding the <span className="text-primary">Future</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              A professional, modern technology R&amp;D and product studio
              dedicated to the evolution of ideas into deployable realities. We
              bridge the gap between speculative science and market-ready
              engineering.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-primary text-white font-bold h-12 px-8 rounded-lg">
                Read Narrative
              </button>
              <button className="text-white font-bold h-12 px-8 rounded-lg border border-white/20 hover:bg-white/5 transition-all">
                Whitepaper
              </button>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden glass-panel p-2">
            <div
              className="w-full h-full rounded-lg bg-cover bg-center"
              data-alt="Abstract visualization of digital neural networks and molecular structures"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, rgba(0,178,167,0.2), rgba(15,35,34,0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYqXZRTFC_F_bLmu3zgdGSyzZCUf-r-9HKSYZfUGdTlhMAosY24J4gwTIEFftF0_TotCWoRRLrmuZqI5EK50ZqkV5vSSf54E7KFxGMeQp4Mw3SCUuTa4E8fVzo6cIuAmkKVewiLlJY6JvRtAA0gxgiMkbxSDEgGPwK4Mc_pXYnBZDWVYl4AwgO6YlV-AXggTwo9mZqyK8kQRTiJH3KmtX-A5RRpVu2pdhjhA7x4rj_JqJr9B6Dxp7U6O3c1I-hTAJUpcgT4zY-YPeq')",
              }}
            ></div>
            <div className="absolute bottom-8 left-8 p-4 glass-panel rounded-lg border border-white/20">
              <p className="text-xs font-mono text-primary uppercase tracking-widest">
                Lab Status
              </p>
              <p className="text-sm font-bold text-white">
                Active Operations • 24/7 Monitoring
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            The Evolution Path
          </h2>
          <p className="text-slate-400">
            Our systematic approach from raw theory to global deployment.
          </p>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-1 md:text-right">
                <div className="glass-panel p-6 rounded-xl border-r-4 border-r-primary">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Research Phase
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Foundations in AI and Material Science. We explore the
                    boundaries of what is possible, focusing on fundamental
                    breakthroughs in neural architecture and synthetic
                    compounds.
                  </p>
                </div>
              </div>
              <div className="z-10 size-12 rounded-full bg-primary border-4 border-background-dark flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,178,167,0.5)]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
              <div className="flex-1 text-left">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-primary">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Prototype Phase
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Early-stage hardware and internal software tools. Rapid
                    iteration loops where theories become tactile. 3D printing,
                    circuit fabrication, and beta testing environments.
                  </p>
                </div>
              </div>
              <div className="z-10 size-12 rounded-full bg-slate-700 border-4 border-background-dark flex items-center justify-center text-white">
                <span className="material-symbols-outlined">build</span>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-1 md:text-right">
                <div className="glass-panel p-6 rounded-xl border-r-4 border-r-primary/30">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Deployables Phase
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Current market-ready products and spin-offs. Scale,
                    stability, and security. We harden our prototypes for
                    real-world usage and industrial integration.
                  </p>
                </div>
              </div>
              <div className="z-10 size-12 rounded-full bg-slate-700 border-4 border-background-dark flex items-center justify-center text-white">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      {/* People Section */}
      <section className="space-y-12">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              People of Semien
            </h2>
            <p className="text-slate-400">
              The multidisciplinary team behind the science.
            </p>
          </div>
          <div className="text-sm font-mono text-primary">
            N = 12 STAFF_FILES
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          <div className="glass-panel p-6 rounded-lg border border-white/10 group hover:border-primary/50 transition-all">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  data-alt="Stylized robotic avatar for a lead architect"
                  src="../../public/assets/images/Yeab.jpg"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  Yeabtsega Tesfaye
                </h4>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Lead Architect
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm italic text-slate-400 leading-relaxed font-light">
                "Research Note: Building bridges between bits and atoms. The
                latency in neural feedback is our next hurdle."
              </p>
            </div>
          </div>
          {/* Team Member Card */}
          <div className="glass-panel p-6 rounded-lg border border-white/10 group hover:border-primary/50 transition-all">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  data-alt="Stylized robotic avatar for a systems designer"
                  src="../../public/assets/images/samuel.jpg"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  Samuel Kendie
                </h4>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Systems Designer
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm italic text-slate-400 leading-relaxed font-light">
                "Note: Simplicity is the ultimate sophistication in
                high-throughput data visualization models."
              </p>
            </div>
          </div>
          {/* Team Member Card */}
          <div className="glass-panel p-6 rounded-lg border border-white/10 group hover:border-primary/50 transition-all">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  data-alt="Stylized robotic avatar for a material scientist"
                  src="../../public/assets/images/selam.jpg"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  Selamawit Elias
                </h4>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Material Scientist
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm italic text-slate-400 leading-relaxed font-light">
                "Lab Memo: Carbon nanotubes are showing unexpected
                superconductivity at room-temp in the new vacuum chamber."
              </p>
            </div>
          </div>
          {/* Team Member Card */}
          <div className="glass-panel p-6 rounded-lg border border-white/10 group hover:border-primary/50 transition-all">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
                <img
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  data-alt="Stylized robotic avatar for an AI safety lead"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKD_KOVD5CH7PgFzWrUQIyqpUvLtv2BkA4-ip99u20FPV7f4AM-n3YLZhl8rfEGCHbhwFxz1yLjE7yphVzwPxoAJXDfCOU0jL6eqmzew7CRno2rnjy_3ijWHkN0PEThPgiDMjnnpX-Uam5uZQER6uA74fXgnf2YQY4Fu8vF9chqG9veXdGTA0tlocSFJdO1hCb7Z6MWumI4dFSnUstjJsT5WlqK8ZuGtBHVDyIlCbBJpsQLsKfqZpoY5Zlli4KqnxHg0rFCjUmwtBV"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                  Yishak Baraki
                </h4>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Legal Expert
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm italic text-slate-400 leading-relaxed font-light">
                "Critical Note: Alignment is not a feature, it is the
                foundation. We are auditing the core heuristic daily."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Careers Callout */}
      <section className="glass-panel p-12 rounded-2xl border border-primary/20 relative overflow-hidden text-center space-y-8">
        <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white tracking-tight">
            Collaborate with the Lab
          </h2>
          <p className="text-slate-400">
            We are always looking for visionary thinkers in Engineering, Design,
            and Applied Science. Join us in defining the next era of
            technological evolution.
          </p>
          <div className="pt-4">
            <button className="bg-primary text-white font-bold h-14 px-10 rounded-lg hover:shadow-[0_0_30px_rgba(0,178,167,0.4)] transition-all">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
