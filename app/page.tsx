"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [rippleTime, setRippleTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (isHovering) {
        // Create ripple effect from mouse position
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setGradientPosition({ x, y });
        setRippleTime(Date.now());
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  // Gentle ripple animation when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        const time = Date.now() * 0.001; // Convert to seconds
        const x = 50 + Math.sin(time * 0.5) * 20 + Math.cos(time * 0.3) * 15;
        const y = 50 + Math.cos(time * 0.4) * 25 + Math.sin(time * 0.6) * 10;
        setGradientPosition({ x, y });
      }, 50); // Update every 50ms for smooth animation

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* ASCII Art Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#6c8192] font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `asciiFloat ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {['🏰', '⚔️', '🛡️', '⚡', '💎', '🏆', '🎯', '🔥'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6c8192 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Header */}
      <header className="text-center py-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          David Gao
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Developer & Clash of Clans Enthusiast
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Clash of Clans Section - Dynamic and Sophisticated */}
        <section className="mb-16 relative">
          <div 
            className="relative overflow-hidden rounded-2xl border-2 border-[#6c8192] shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              background: isHovering 
                ? `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
                    #370e48 0%, 
                    #370e48 20%, 
                    #1e3f56 40%, 
                    #6c8192 60%, 
                    #370e48 80%, 
                    #370e48 100%)`
                : `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, 
                    #370e48 0%, 
                    #370e48 30%, 
                    #1e3f56 60%, 
                    #370e48 100%)`,
              transition: isHovering ? 'none' : 'all 0.1s ease-out'
            }}
          >
            {/* Dynamic Geometric Patterns */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-[#370e48]/40"
                  style={{
                    width: `${100 + i * 20}px`,
                    height: `${100 + i * 20}px`,
                    left: `${i * 12}%`,
                    top: `${i * 8}%`,
                    animation: isHovering 
                      ? `rippleGeometric ${2 + Math.random() * 1}s ease-out infinite`
                      : `gentleFloat ${8 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                    transform: `rotate(${i * 45}deg)`
                  }}
                />
              ))}
            </div>

            {/* Floating Energy Orbs */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${20 + i * 8}px`,
                    height: `${20 + i * 8}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(55, 14, 72, 0.8) 0%, rgba(108, 129, 146, 0.4) 70%, transparent 100%)`,
                    animation: isHovering 
                      ? `rippleEnergy ${1.5 + Math.random() * 1}s ease-out infinite`
                      : `gentleEnergy ${6 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    filter: 'blur(1px)'
                  }}
                />
              ))}
            </div>

            {/* Brownian Motion Particles - Enhanced fluid motion when not hovering */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#370e48] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: isHovering 
                      ? `rippleParticle ${2 + Math.random() * 1}s ease-out infinite`
                      : `gentleParticle ${8 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: isHovering ? `${Math.random() * 1}s` : `${Math.random() * 2}s`,
                    opacity: isHovering ? 0.8 : 0.3
                  }}
                />
              ))}
            </div>

            {/* Additional Purple Particles - Enhanced fluid motion when not hovering */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#370e48] rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: isHovering 
                      ? `rippleParticle ${1.5 + Math.random() * 1}s ease-out infinite`
                      : `gentleParticle ${6 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: isHovering ? `${Math.random() * 0.5}s` : `${Math.random() * 1.5}s`,
                    opacity: isHovering ? 0.7 : 0.2
                  }}
                />
              ))}
            </div>

            {/* Mouse-following Glow Effect */}
            <div 
              className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-500 ease-out"
              style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192,
                background: `radial-gradient(circle, rgba(55, 14, 72, 0.4) 0%, transparent 70%)`,
                transform: isHovering ? 'scale(2)' : 'scale(1)',
                opacity: isHovering ? 1 : 0.1
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  Clash of Clans Base
                </h2>
              </div>

              {/* Base Image with Dynamic Effects - Perfectly Synchronized */}
              <div className="relative max-w-4xl mx-auto">
                <div 
                  className="absolute inset-0 rounded-xl transition-all duration-500"
                  style={{
                    background: `conic-gradient(from ${mousePosition.x}deg, #370e48, #370e48, #1e3f56, #6c8192, #370e48)`,
                    opacity: isHovering ? 0.4 : 0.15,
                    transform: isImageHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease'
                  }}
                />
                <div 
                  className="relative bg-gradient-to-br from-[#370e48] to-[#1e3f56] rounded-xl border border-[#370e48]/50"
                  style={{
                    padding: '1rem'
                  }}
                >
                  <Image
                    src="/coc_base.PNG"
                    alt="David's Clash of Clans Town Hall 15 Base"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-out"
                    style={{
                      transform: isImageHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-blue-400 font-bold text-xl mb-4">Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate developer who loves creating innovative solutions. 
                  When I'm not coding, you'll find me strategizing in Clash of Clans 
                  or exploring new technologies.
                </p>
              </div>
              <div>
                <h3 className="text-blue-400 font-bold text-xl mb-4">Gaming</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clash of Clans has been my go-to mobile game for years. I enjoy 
                  the strategic depth, base building, and the competitive clan wars. 
                  My base design reflects both functionality and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Let's Connect
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                GitHub
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                LinkedIn
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Clash of Clans
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 relative z-10">
        <p className="text-gray-400">
          © 2024 David Gao. Built with Next.js and Clash of Clans passion.
        </p>
      </footer>

      <style jsx>{`
        @keyframes rippleGeometric {
          0% { 
            transform: translate(0px, 0px) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translate(10px, -8px) rotate(90deg) scale(1.1); 
          }
          100% { 
            transform: translate(0px, 0px) rotate(180deg) scale(1); 
          }
        }
        
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translate(0px, 0px) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translate(0px, -15px) rotate(180deg) scale(1.05); 
          }
        }
        
        @keyframes rippleEnergy {
          0% { 
            transform: translate(0px, 0px) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translate(15px, -10px) scale(1.3); 
            opacity: 0.9;
          }
          100% { 
            transform: translate(0px, 0px) scale(1); 
            opacity: 0.6;
          }
        }
        
        @keyframes gentleEnergy {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-20px) scale(1.1); 
            opacity: 0.8;
          }
          66% { 
            transform: translateY(-10px) scale(0.9); 
            opacity: 0.5;
          }
        }
        
        @keyframes rippleParticle {
          0% { 
            transform: translate(0px, 0px) rotate(0deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translate(20px, -15px) rotate(90deg); 
            opacity: 1;
          }
          100% { 
            transform: translate(0px, 0px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes gentleParticle {
          0%, 100% { 
            transform: translate(0px, 0px) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translate(8px, -12px) scale(1.05); 
            opacity: 0.5;
          }
          50% { 
            transform: translate(-5px, -8px) scale(0.95); 
            opacity: 0.2;
          }
          75% { 
            transform: translate(10px, -15px) scale(1.02); 
            opacity: 0.4;
          }
        }
        
        @keyframes asciiFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}

