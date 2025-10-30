"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Code2, Gamepad2, Github, Linkedin, Instagram, Sword, MapPin, Calendar, Menu, X, Sparkles, Rocket, Coffee, Palette, Target, Zap, Shield, Trophy, Crown, Star, ChevronRight, Terminal, Briefcase, GraduationCap, Heart, Activity, Layers } from "lucide-react";
import contentData from "../data/content.json";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageHoverPosition, setImageHoverPosition] = useState({ x: 50, y: 50 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  // Sidebar button spacing configuration - easily adjustable
  const sidebarConfig = {
    // Spacing between buttons (you can adjust these values)
    buttonSpacing: {
      mobile: '0.75rem',    // 12px on mobile
      tablet: '1rem',       // 16px on tablet  
      desktop: '1.25rem',   // 20px on desktop
      // Or use viewport-based for automatic responsiveness
      responsive: 'clamp(0.75rem, 2.5vh, 1.5rem)'
    },
    // Container padding (space from top/bottom edges)
    containerPadding: {
      mobile: '1rem',
      tablet: '1.5rem', 
      desktop: '2rem',
      responsive: 'clamp(1rem, 4vh, 2.5rem)'
    },
    // Use responsive values by default (set to false to use manual breakpoints)
    useResponsive: true
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger load animations
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isImageHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Apply smooth clamping with buffer zones to prevent edge spasming
    const buffer = 5; // 5% buffer zone
    const smoothX = Math.max(buffer, Math.min(100 - buffer, x));
    const smoothY = Math.max(buffer, Math.min(100 - buffer, y));
    
    // Use requestAnimationFrame to throttle updates and prevent rapid state changes
    requestAnimationFrame(() => {
      setImageHoverPosition({ x: smoothX, y: smoothY });
    });
  };

  // Array of icons for floating background elements
  const floatingIcons = [Crown, Shield, Trophy, Star, Zap, Target, Sparkles, Sword];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle professional background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-slate-50/20 to-indigo-50/30" />
        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51, 65, 85) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Sidebar toggle button - mobile only */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-white border border-slate-200 text-slate-700 p-3 rounded-lg shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-200"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar - Pixel-perfect professional design */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-slate-200/80 z-40 transition-all duration-300 ease-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isSidebarHovered ? 'w-56' : 'w-20'
        } lg:w-20 lg:hover:w-56`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div className="h-full flex flex-col py-8">
          {/* Sidebar Header */}
          <div className={`px-6 mb-6 transition-all duration-300 overflow-hidden ${isSidebarHovered ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0 lg:opacity-0 lg:max-h-0'}`}>
            <h2 className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">
              Connect
            </h2>
          </div>

          {/* Contact Links - Properly centered and spaced */}
          <nav className={`flex-1 flex flex-col justify-center px-4 gap-3 ${isSidebarHovered ? 'pt-0' : 'pt-8'}`}>
            <a
              href={contentData.sections.contact.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 text-slate-700 font-medium rounded-xl transition-all duration-200 ${
                isSidebarHovered
                  ? 'px-4 py-3 hover:bg-slate-50 justify-start'
                  : 'w-12 h-12 hover:bg-slate-50 justify-center mx-auto'
              }`}
              title="GitHub"
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium transition-all duration-300 ${
                isSidebarHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 lg:opacity-0 absolute pointer-events-none'
              }`}>
                GitHub
              </span>
            </a>

            <a
              href={contentData.sections.contact.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 text-slate-700 font-medium rounded-xl transition-all duration-200 ${
                isSidebarHovered
                  ? 'px-4 py-3 hover:bg-slate-50 justify-start'
                  : 'w-12 h-12 hover:bg-slate-50 justify-center mx-auto'
              }`}
              title="LinkedIn"
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium transition-all duration-300 ${
                isSidebarHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 lg:opacity-0 absolute pointer-events-none'
              }`}>
                LinkedIn
              </span>
            </a>

            <a
              href={contentData.sections.contact.links.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 text-slate-700 font-medium rounded-xl transition-all duration-200 ${
                isSidebarHovered
                  ? 'px-4 py-3 hover:bg-slate-50 justify-start'
                  : 'w-12 h-12 hover:bg-slate-50 justify-center mx-auto'
              }`}
              title="Instagram"
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="instagram-gradient" cx="30%" cy="110%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium transition-all duration-300 ${
                isSidebarHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 lg:opacity-0 absolute pointer-events-none'
              }`}>
                Instagram
              </span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content area - adjusted for sidebar */}
      <div className={`transition-all duration-300 ${isSidebarHovered ? 'lg:ml-56' : 'lg:ml-20'}`}>
        {/* Header - Balanced and clean */}
        <header className="text-center px-8 py-16 md:py-20 relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
              {contentData.header.name}
            </h1>
            <p className="text-slate-600 text-base font-normal max-w-xl mx-auto">
              {contentData.header.subtitle}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 md:px-8 pb-16 relative z-10 space-y-12">

          {/* Projects Section - Clean & Compact */}
          <section className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Projects
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
            </div>

            <div className="space-y-4">
              {contentData.sections.projects.items.map((project) => (
                <div key={project.id} className="group bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      {project.name}
                    </h3>
                    <div className="flex gap-3 flex-shrink-0">
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
                          Live Demo →
                        </a>
                      )}
                      {project.links.github && project.links.github !== "#" && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-600 hover:text-slate-700 transition-colors whitespace-nowrap">
                          GitHub →
                        </a>
                      )}
                      {project.links.amazon && project.links.amazon !== "#" && (
                        <a href={project.links.amazon} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-slate-600 hover:text-slate-700 transition-colors whitespace-nowrap">
                          Amazon →
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience & Skills - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Experience Section */}
            <section className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 h-full hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Experience
                  </h2>
                  <div className="w-12 h-1 bg-blue-600 rounded-full" />
                </div>

                <div className="space-y-6">
                  {contentData.sections.experience.jobs.map((job) => (
                    <div key={job.id} className="space-y-2">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-sm border border-slate-200/50">
                            <Image
                              src={`/${job.logo}.png`}
                              alt={`${job.company} logo`}
                              width={28}
                              height={28}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-slate-900 leading-tight">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-600 font-medium">
                            {job.company}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.duration}</span>
                          </div>
                        </div>
                      </div>

                      {job.bullets && (
                        <ul className="ml-13 space-y-1.5 text-sm text-slate-600 leading-relaxed list-disc list-outside">
                          {job.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 h-full hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                    Skills
                  </h2>
                  <div className="w-12 h-1 bg-blue-600 rounded-full" />
                </div>

                <div className="space-y-5">
                  {contentData.sections.skills.categories.map((category) => (
                    <div key={category.name}>
                      <h3 className="text-sm font-semibold text-slate-900 mb-3">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span key={item} className="px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-lg text-slate-700 text-xs font-medium hover:bg-slate-100 hover:border-slate-300/50 transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* About Me - Full Width */}
          <section className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 hover:shadow-md hover:border-slate-300/60 transition-all duration-300">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  About Me
                </h2>
                <div className="w-12 h-1 bg-blue-600 rounded-full" />
              </div>

              <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-line max-w-4xl">
                {contentData.sections.about.description}
              </p>
            </div>
          </section>

        </main>

        {/* Footer - Refined and minimal */}
        <footer className="text-center py-12 mt-12 relative z-10">
          <div className="max-w-6xl mx-auto px-8">
            <div className="border-t border-slate-200/60 pt-6">
              <p className="text-slate-500 text-sm">
                {contentData.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
}

