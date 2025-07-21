"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Code2, Gamepad2, Github, Linkedin, Instagram, Sword, MapPin, Calendar, Menu, X, Sparkles, Rocket, Coffee, Palette, Target, Zap, Shield, Trophy, Crown, Star } from "lucide-react";
import contentData from "../data/content.json";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageHoverPosition, setImageHoverPosition] = useState({ x: 50, y: 50 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Sidebar toggle button - mobile only */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 text-white p-3 rounded-xl shadow-lg hover:bg-slate-700/80 transition-all duration-300"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-slate-800/95 backdrop-blur-md border-r border-slate-600/30 shadow-2xl z-40 transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isSidebarHovered ? 'w-64' : 'w-20'
        } lg:w-20 lg:hover:w-64`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div className="p-4 h-full overflow-hidden flex flex-col">
          {/* Sidebar Header - only show when expanded */}
          <div className={`mb-4 transition-all duration-300 ${isSidebarHovered ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}>
            <h2 className="text-xs font-sans text-slate-400 mb-1 tracking-normal whitespace-nowrap font-medium">
              connect
            </h2>
            <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"></div>
          </div>

          {/* Contact Links */}
          <div 
            className={`flex-1 flex flex-col justify-center items-center ${
              sidebarConfig.useResponsive 
                ? '' 
                : 'gap-3 sm:gap-4 md:gap-5 py-4 sm:py-6 md:py-8'
            }`}
            style={sidebarConfig.useResponsive ? {
              gap: sidebarConfig.buttonSpacing.responsive,
              paddingTop: sidebarConfig.containerPadding.responsive,
              paddingBottom: sidebarConfig.containerPadding.responsive
            } : undefined}
          >
            <a 
              href={contentData.sections.contact.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600/40 hover:border-gray-400/60 hover:-translate-y-1 h-12 ${
                isSidebarHovered ? 'py-3 px-4 justify-start mx-2 w-full' : 'w-12 justify-center'
              }`}
              title="GitHub"
            >
              <Github className={`w-5 h-5 group-hover:text-purple-300 transition-colors duration-300 flex-shrink-0 ${isSidebarHovered ? '' : 'absolute'}`} />
              <span className={`ml-3 transition-all duration-300 whitespace-nowrap text-sm overflow-hidden ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-2 max-w-0 lg:opacity-0 lg:-translate-x-2'
              }`}>
                {contentData.sections.contact.links.github.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 border border-blue-700/50 hover:border-blue-400/70 hover:-translate-y-1 h-12 ${
                isSidebarHovered ? 'py-3 px-4 justify-start mx-2 w-full' : 'w-12 justify-center'
              }`}
              title="LinkedIn"
            >
              <Linkedin className={`w-5 h-5 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 ${isSidebarHovered ? '' : 'absolute'}`} />
              <span className={`ml-3 transition-all duration-300 whitespace-nowrap text-sm overflow-hidden ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-2 max-w-0 lg:opacity-0 lg:-translate-x-2'
              }`}>
                {contentData.sections.contact.links.linkedin.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center text-white font-semibold rounded-lg transition-all duration-300 border border-pink-700/50 hover:border-pink-400/70 hover:-translate-y-1 h-12 ${
                isSidebarHovered ? 'py-3 px-4 justify-start mx-2 w-full' : 'w-12 justify-center'
              }`}
              style={{
                backgroundColor: '#d62976',
                borderColor: '#d62976'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d62976';
                e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #d62976 0%, rgba(230, 230, 250, 0.3) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d62976';
                e.currentTarget.style.backgroundImage = 'none';
              }}
              title="Instagram"
            >
              <Instagram className={`w-5 h-5 group-hover:text-pink-300 transition-colors duration-300 flex-shrink-0 ${isSidebarHovered ? '' : 'absolute'}`} />
              <span className={`ml-3 transition-all duration-300 whitespace-nowrap text-sm overflow-hidden ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-2 max-w-0 lg:opacity-0 lg:-translate-x-2'
              }`}>
                {contentData.sections.contact.links.instagram.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.clashOfClans.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center text-white font-semibold rounded-lg transition-all duration-300 border border-red-700/50 hover:border-red-400/70 hover:-translate-y-1 h-12 ${
                isSidebarHovered ? 'py-3 px-4 justify-start mx-2 w-full' : 'w-12 justify-center'
              }`}
              style={{
                backgroundColor: '#C42B23'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A01818';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C42B23';
              }}
              title="Clash of Clans"
            >
              <Image
                src="/clash_clans.svg"
                alt="Clash of Clans"
                width={20}
                height={20}
                className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${isSidebarHovered ? '' : 'absolute'} group-hover:brightness-125 group-hover:hue-rotate-15`}
              />
              <span className={`ml-3 transition-all duration-300 whitespace-nowrap text-sm overflow-hidden ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-2 max-w-0 lg:opacity-0 lg:-translate-x-2'
              }`}>
                {contentData.sections.contact.links.clashOfClans.text}
              </span>
            </a>
          </div>
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
      <div className={`transition-all duration-300 ${isSidebarHovered ? 'lg:ml-64' : 'lg:ml-20'}`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const IconComponent = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
            return (
              <div
                key={i}
                className="absolute text-slate-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `gentleFloat ${15 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <IconComponent className="w-4 h-4" />
              </div>
            );
          })}
        </div>

        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Header */}
        <header className="text-center py-12 relative z-10">
          <h1 className="text-5xl md:text-7xl font-display text-white mb-3 tracking-tight">
            {contentData.header.name}
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl font-medium">
            {contentData.header.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Experience Section - Left Column */}
            <section className="relative">
              {/* Left side background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-800/10 to-purple-950/20 rounded-xl -m-3"></div>
              <div className="relative z-10 scale-75 origin-left">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl font-display text-white mb-1 tracking-tight">
                    {contentData.sections.experience.title}
                  </h2>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                </div>
                
                <div className="space-y-2">
                  {contentData.sections.experience.jobs.map((job, index) => (
                    <div key={job.id} className="group relative">
                      {/* Accent line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-600 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-500 rounded-full shadow-sm shadow-blue-500/20"></div>
                      
                      <div className="flex items-start gap-3 p-2 pl-4 rounded-md hover:bg-blue-950/20 transition-all duration-300 group relative overflow-hidden border border-transparent hover:border-blue-900/30">
                        {/* Subtle background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md"></div>
                        
                        {/* Company Logo */}
                        <div className="relative flex-shrink-0 z-10">
                          <div className="w-8 h-8 bg-white/95 rounded-sm flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                            <Image
                              src={`/${job.logo}.png`}
                              alt={`${job.company} logo`}
                              width={24}
                              height={24}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Job Content */}
                        <div className="flex-1 min-w-0 relative z-10">
                          <div className="flex flex-col gap-0.5 mb-0.5">
                            <h3 className="text-sm font-semibold text-white group-hover:text-blue-100 transition-colors duration-300">
                              {job.title}
                            </h3>
                            <div className="text-xs text-slate-300 group-hover:text-blue-200 transition-colors duration-300 font-medium">
                              {job.duration} · {job.length}
                            </div>
                          </div>
                          
                          <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 text-xs">
                            {job.company} · {job.type}
                          </p>
                          
                          {job.description && (
                            <p className="text-slate-200 group-hover:text-slate-100 text-xs leading-relaxed mt-1 transition-colors duration-300">
                              {job.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Right Content Area */}
            <section className="relative">
              {/* Right side background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/15 via-slate-800/10 to-orange-950/15 rounded-xl -m-3"></div>
              
              {/* Subtle cat image in top right - positioned relative to section */}
              <div className="absolute -top-8 right-8 z-20">
                <div className="w-32 h-32 rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-opacity duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop&crop=face" 
                    alt="Cute cat" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="relative z-10">

                {/* About Section */}
                <div className="mt-50">
                  <div className="mb-3 scale-75 origin-left">
                    <h2 className="text-lg md:text-xl font-display text-white mb-1 tracking-tight">
                      {contentData.sections.about.title}
                    </h2>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-orange-500"></div>
                  </div>
                  
                  <div>
                    <div className="p-6 md:p-8 rounded-lg bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-slate-600/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-purple-500/5"></div>
                      <div className="relative">
                        <p className="text-slate-100 leading-loose text-base md:text-lg whitespace-pre-line font-normal tracking-wide">
                          {contentData.sections.about.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Clash of Clans Section - Professional with gaming touches */}
          <section className="mb-20 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-md border border-slate-600/30">
              {/* Subtle accent decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-10">
                <div className="text-center mb-10">
                  <h2 
                    className="text-4xl md:text-6xl text-white mb-4 drop-shadow-lg tracking-tight"
                    style={{ fontFamily: 'ClashBold, Arial, sans-serif', fontWeight: 'bold' }}
                  >
                    {contentData.sections.clashOfClans.title}
                  </h2>
                </div>

                {/* Base Image with clean zoom effect */}
                <div className="relative max-w-5xl mx-auto">
                  <div className="relative bg-slate-700/40 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:bg-slate-700/60 border border-slate-500/20">
                    {/* Stable mouse tracking overlay */}
                    <div 
                      className="relative cursor-crosshair"
                      onMouseMove={handleImageMouseMove}
                      onMouseEnter={() => setIsImageHovered(true)}
                      onMouseLeave={() => setIsImageHovered(false)}
                    >
                      <div 
                        className="relative"
                        style={{
                          transform: isImageHovered 
                            ? `scale(1.8) translate(${(50 - imageHoverPosition.x) * 0.6}%, ${(50 - imageHoverPosition.y) * 0.6}%)` 
                            : 'scale(1) translate(0%, 0%)',
                          transformOrigin: 'center center',
                          transition: isImageHovered ? 'transform 0.15s ease-out' : 'transform 0.3s ease-out'
                        }}
                      >
                        <Image
                          src={contentData.sections.clashOfClans.image.src}
                          alt={contentData.sections.clashOfClans.image.alt}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-xl shadow-2xl"
                          priority
                        />
                      </div>
                    </div>
                    {/* Hover instruction */}
                    {!isImageHovered && (
                      <div className="absolute bottom-6 right-6 bg-slate-800/80 text-slate-200 text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/30 font-medium">
                        {contentData.sections.clashOfClans.image.hoverText}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-12 mt-20 relative z-10">
          <p className="text-slate-400 font-medium tracking-wide text-lg">
            {contentData.footer.copyright}
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}

