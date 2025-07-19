"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          David Gao
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Developer & Clash of Clans Enthusiast
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Clash of Clans Section - Dynamic and Sophisticated */}
        <section className="mb-16 relative">
          <div 
            className="relative overflow-hidden rounded-2xl border-2 border-[#6c8192] shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              background: `linear-gradient(45deg, 
                #370e48 0%, 
                #1e3f56 25%, 
                #6c8192 50%, 
                #370e48 75%, 
                #1e3f56 100%)`,
              backgroundSize: '400% 400%',
              animation: isHovering ? 'gradientShift 3s ease infinite' : 'none'
            }}
          >
            {/* Dynamic Geometric Patterns */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-[#6c8192]/40"
                  style={{
                    width: `${100 + i * 20}px`,
                    height: `${100 + i * 20}px`,
                    left: `${i * 12}%`,
                    top: `${i * 8}%`,
                    animation: `geometricRotate ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
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
                    background: `radial-gradient(circle, rgba(108, 129, 146, 0.8) 0%, rgba(55, 14, 72, 0.4) 70%, transparent 100%)`,
                    animation: `energyFloat ${6 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                    filter: 'blur(1px)'
                  }}
                />
              ))}
            </div>

            {/* Brownian Motion Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#6c8192] rounded-full opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `brownianMotion ${8 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            {/* Additional Purple Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#370e48] rounded-full opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `brownianMotion ${6 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
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
                background: `radial-gradient(circle, rgba(108, 129, 146, 0.4) 0%, transparent 70%)`,
                transform: isHovering ? 'scale(1.8)' : 'scale(1)',
                opacity: isHovering ? 1 : 0.2
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  Clash of Clans Base
                </h2>
              </div>

              {/* Base Image with Dynamic Effects */}
              <div className="relative max-w-4xl mx-auto">
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `conic-gradient(from ${mousePosition.x}deg, #6c8192, #370e48, #1e3f56, #6c8192)`,
                    opacity: isHovering ? 0.4 : 0.15,
                    transition: 'opacity 0.5s ease'
                  }}
                />
                <div className="relative bg-gradient-to-br from-[#1e3f56] to-[#370e48] p-4 rounded-xl border border-[#6c8192]/50">
                  <Image
                    src="/coc_base.PNG"
                    alt="David's Clash of Clans Town Hall 15 Base"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Physical Button */}
              <div className="text-center mt-8">
                <button 
                  className={`relative overflow-hidden bg-gradient-to-r from-[#370e48] to-[#1e3f56] text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg border-2 border-[#6c8192]/50 ${
                    buttonPressed ? 'transform translate-y-2 shadow-inner' : 'transform translate-y-0 hover:translate-y-[-2px] hover:shadow-xl'
                  }`}
                  onMouseDown={() => setButtonPressed(true)}
                  onMouseUp={() => setButtonPressed(false)}
                  onMouseLeave={() => setButtonPressed(false)}
                  style={{
                    animation: isHovering ? 'buttonPulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite' : 'none'
                  }}
                >
                  <span className="relative z-10">Join My Clan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6c8192]/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6c8192]/10 to-transparent rounded-lg" />
                </button>
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
      <footer className="text-center py-8 mt-16">
        <p className="text-gray-400">
          © 2024 David Gao. Built with Next.js and Clash of Clans passion.
        </p>
      </footer>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes geometricRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes energyFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-30px) scale(1.2); 
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-15px) scale(0.8); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-45px) scale(1.1); 
            opacity: 0.7;
          }
        }
        
        @keyframes brownianMotion {
          0%, 100% { 
            transform: translate(0px, 0px) rotate(0deg); 
            opacity: 0.7;
          }
          25% { 
            transform: translate(20px, -15px) rotate(90deg); 
            opacity: 0.9;
          }
          50% { 
            transform: translate(-10px, 25px) rotate(180deg); 
            opacity: 0.5;
          }
          75% { 
            transform: translate(15px, -5px) rotate(270deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes buttonPulse {
          0%, 100% { 
            transform: scale(1) translateY(0); 
            box-shadow: 0 10px 25px rgba(108, 129, 146, 0.3);
          }
          50% { 
            transform: scale(1.02) translateY(-1px); 
            box-shadow: 0 15px 35px rgba(108, 129, 146, 0.5);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
