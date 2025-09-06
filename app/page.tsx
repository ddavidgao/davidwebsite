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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/10 to-blue-950/20 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
          }}
        />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-float-slow" />
      </div>
      {/* Sidebar toggle button - mobile only */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-white/10 backdrop-blur-xl border border-white/20 text-white p-3 rounded-2xl shadow-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border-r border-white/20 shadow-2xl z-40 transition-all duration-500 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isSidebarHovered ? 'w-72' : 'w-20'
        } lg:w-20 lg:hover:w-72`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <div className="p-4 h-full overflow-hidden flex flex-col">
          {/* Sidebar Header - only show when expanded */}
          <div className={`mb-6 transition-all duration-500 ${isSidebarHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 lg:opacity-0'}`}>
            <h2 className="text-sm font-medium text-white/70 mb-2 tracking-wider uppercase">
              Connect
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
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
              className={`group relative flex items-center bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl transition-all duration-500 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 h-14 overflow-hidden ${
                isSidebarHovered ? 'py-3 px-5 justify-start mx-3 w-[calc(100%-1.5rem)]' : 'w-14 justify-center'
              }`}
              title="GitHub"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Github className={`w-5 h-5 group-hover:text-purple-300 transition-all duration-300 flex-shrink-0 z-10 ${isSidebarHovered ? '' : 'absolute'} group-hover:rotate-12`} />
              <span className={`ml-3 transition-all duration-500 whitespace-nowrap text-sm font-medium overflow-hidden z-10 ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-4 max-w-0 lg:opacity-0 lg:-translate-x-4'
              }`}>
                {contentData.sections.contact.links.github.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl transition-all duration-500 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-14 overflow-hidden ${
                isSidebarHovered ? 'py-3 px-5 justify-start mx-3 w-[calc(100%-1.5rem)]' : 'w-14 justify-center'
              }`}
              title="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Linkedin className={`w-5 h-5 group-hover:text-cyan-300 transition-all duration-300 flex-shrink-0 z-10 ${isSidebarHovered ? '' : 'absolute'} group-hover:rotate-12`} />
              <span className={`ml-3 transition-all duration-500 whitespace-nowrap text-sm font-medium overflow-hidden z-10 ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-4 max-w-0 lg:opacity-0 lg:-translate-x-4'
              }`}>
                {contentData.sections.contact.links.linkedin.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white font-medium rounded-2xl transition-all duration-500 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 h-14 overflow-hidden ${
                isSidebarHovered ? 'py-3 px-5 justify-start mx-3 w-[calc(100%-1.5rem)]' : 'w-14 justify-center'
              }`}
              title="Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Instagram className={`w-5 h-5 group-hover:text-pink-300 transition-all duration-300 flex-shrink-0 z-10 ${isSidebarHovered ? '' : 'absolute'} group-hover:rotate-12`} />
              <span className={`ml-3 transition-all duration-500 whitespace-nowrap text-sm font-medium overflow-hidden z-10 ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-4 max-w-0 lg:opacity-0 lg:-translate-x-4'
              }`}>
                {contentData.sections.contact.links.instagram.text}
              </span>
            </a>

            <a 
              href={contentData.sections.contact.links.clashOfClans.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center bg-gradient-to-r from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30 text-white font-medium rounded-2xl transition-all duration-500 border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 h-14 overflow-hidden ${
                isSidebarHovered ? 'py-3 px-5 justify-start mx-3 w-[calc(100%-1.5rem)]' : 'w-14 justify-center'
              }`}
              title="Clash of Clans"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/clash_clans.svg"
                alt="Clash of Clans"
                width={20}
                height={20}
                className={`w-5 h-5 transition-all duration-300 flex-shrink-0 z-10 ${isSidebarHovered ? '' : 'absolute'} group-hover:brightness-125 group-hover:rotate-12`}
              />
              <span className={`ml-3 transition-all duration-500 whitespace-nowrap text-sm font-medium overflow-hidden z-10 ${
                isSidebarHovered ? 'opacity-100 translate-x-0 max-w-xs' : 'opacity-0 -translate-x-4 max-w-0 lg:opacity-0 lg:-translate-x-4'
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
      <div className={`transition-all duration-500 ${isSidebarHovered ? 'lg:ml-72' : 'lg:ml-20'}`}>
        {/* Dynamic floating icons with parallax */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const IconComponent = floatingIcons[Math.floor(Math.random() * floatingIcons.length)];
            return (
              <div
                key={i}
                className="absolute text-white/20 transition-transform duration-700"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `translate(${Math.sin(scrollY * 0.001 + i) * 20}px, ${Math.cos(scrollY * 0.001 + i) * 20}px)`,
                  animation: `float-${i % 3} ${20 + Math.random() * 10}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <IconComponent className="w-6 h-6 drop-shadow-lg" />
              </div>
            );
          })}
        </div>

        {/* Modern animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }} />
        </div>

        {/* Header with entrance animation */}
        <header className="text-center py-20 relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 tracking-tight animate-gradient">
              {contentData.header.name}
            </h1>
            <p className="text-white/80 text-xl md:text-2xl font-light tracking-wide">
              {contentData.header.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-blue-400 rounded-full" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-pink-400 rounded-full" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          {/* Two Column Layout with stagger animation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Experience Section - Left Column */}
            <section className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Glassmorphism card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-xl" />
              <div className="relative z-10 p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {contentData.sections.experience.title}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
                </div>
                
                <div className="space-y-4">
                  {contentData.sections.experience.jobs.map((job, index) => (
                    <div 
                      key={job.id} 
                      className="group relative"
                      onMouseEnter={() => setHoveredJob(job.id)}
                      onMouseLeave={() => setHoveredJob(null)}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Modern accent line with glow */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-500 group-hover:w-1 group-hover:shadow-lg group-hover:shadow-purple-500/50" />
                      
                      <div className="flex items-start gap-4 p-4 pl-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden border border-white/10 hover:border-white/20 hover:shadow-2xl hover:scale-[1.02] hover:translate-x-2">
                        {/* Dynamic background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Company Logo with animation */}
                        <div className="relative flex-shrink-0 z-10">
                          <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                            <Image
                              src={`/${job.logo}.png`}
                              alt={`${job.company} logo`}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Job Content with better typography */}
                        <div className="flex-1 min-w-0 relative z-10">
                          <div className="flex flex-col gap-1 mb-2">
                            <h3 className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                              <Calendar className="w-3 h-3" />
                              <span>{job.duration} · {job.length}</span>
                            </div>
                          </div>
                          
                          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-sm font-medium">
                            {job.company} · {job.type}
                          </p>
                          
                          {job.description && (
                            <p className="text-white/60 group-hover:text-white/80 text-sm leading-relaxed mt-2 transition-all duration-300">
                              {job.description}
                            </p>
                          )}
                        </div>
                        
                        {/* Hover indicator */}
                        <ChevronRight className={`w-4 h-4 text-white/40 transition-all duration-300 ${hoveredJob === job.id ? 'translate-x-1 text-white/60' : ''}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Right Content Area */}
            <section className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Glassmorphism card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-orange-500/10 rounded-3xl" />
              
              {/* Decorative floating cat with parallax */}
              <div 
                className="absolute -top-12 right-8 z-20 transition-transform duration-700"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop&crop=face" 
                    alt="Cute cat" 
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                    Meow! 🐱
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 p-8">

                {/* About Section with modern styling */}
                <div className="mt-16">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {contentData.sections.about.title}
                      </h2>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400 rounded-full" />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
                    <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Code2 className="w-24 h-24 text-white" />
                      </div>
                      <p className="text-white/90 leading-relaxed text-base md:text-lg whitespace-pre-line font-light tracking-wide relative z-10">
                        {contentData.sections.about.description}
                      </p>
                      
                      {/* Decorative elements */}
                      <div className="flex gap-4 mt-6">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Terminal className="w-4 h-4" />
                          <span>Developer</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <GraduationCap className="w-4 h-4" />
                          <span>Student</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Activity className="w-4 h-4" />
                          <span>Creator</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Clash of Clans Section - Epic gaming showcase */}
          <section className={`mb-24 relative transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 hover:border-white/30 transition-all duration-700">
              {/* Animated gradient border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 animate-gradient-x" />
              
              {/* Gaming-inspired background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-12">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Sword className="w-8 h-8 text-orange-400 animate-bounce" />
                    <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 tracking-tight animate-gradient">
                      {contentData.sections.clashOfClans.title}
                    </h2>
                    <Shield className="w-8 h-8 text-red-400 animate-bounce delay-100" />
                  </div>
                  <p className="text-white/60 text-lg">Town Hall 15 · Legend League</p>
                </div>

                {/* Base Image with epic zoom effect */}
                <div className="relative max-w-6xl mx-auto group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-500 backdrop-blur-sm">
                    {/* Interactive zoom area */}
                    <div 
                      className="relative cursor-crosshair overflow-hidden rounded-2xl"
                      onMouseMove={handleImageMouseMove}
                      onMouseEnter={() => setIsImageHovered(true)}
                      onMouseLeave={() => setIsImageHovered(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                      <div 
                        className="relative transition-all duration-300"
                        style={{
                          transform: isImageHovered 
                            ? `scale(2) translate(${(50 - imageHoverPosition.x) * 0.5}%, ${(50 - imageHoverPosition.y) * 0.5}%)` 
                            : 'scale(1) translate(0%, 0%)',
                          transformOrigin: 'center center'
                        }}
                      >
                        <Image
                          src={contentData.sections.clashOfClans.image.src}
                          alt={contentData.sections.clashOfClans.image.alt}
                          width={1000}
                          height={750}
                          className="w-full h-auto rounded-2xl shadow-2xl"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* Interactive hover hints */}
                    <div className={`absolute bottom-8 left-8 right-8 flex justify-between items-center transition-all duration-500 ${isImageHovered ? 'opacity-0 translate-y-2' : 'opacity-100'}`}>
                      <div className="bg-white/10 backdrop-blur-md text-white text-sm px-5 py-3 rounded-full border border-white/20 font-medium flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        {contentData.sections.clashOfClans.image.hoverText}
                      </div>
                      <div className="flex gap-2">
                        <Trophy className="w-6 h-6 text-yellow-400 animate-pulse" />
                        <Crown className="w-6 h-6 text-orange-400 animate-pulse delay-100" />
                        <Star className="w-6 h-6 text-red-400 animate-pulse delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer with style */}
        <footer className="text-center py-16 mt-24 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
            <Layers className="w-5 h-5 text-white/40" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
          <p className="text-white/50 font-light tracking-wider text-lg">
            {contentData.footer.copyright}
          </p>
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

