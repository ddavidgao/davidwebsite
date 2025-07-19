import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#370e48] via-[#1e3f56] to-[#370e48]">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          David Gao
        </h1>
        <p className="text-[#6c8192] text-lg md:text-xl">
          Developer & Clash of Clans Enthusiast
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Clash of Clans Section */}
        <section className="mb-16">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-[#6f9c45]/30 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🏰 Clash of Clans Base
              </h2>
              <p className="text-[#6c8192] text-lg max-w-2xl mx-auto">
                Check out my Town Hall 15 base design! This strategic layout combines 
                defensive power with aesthetic appeal, featuring the latest defenses 
                and a carefully planned resource protection system.
              </p>
            </div>

            {/* Base Image with Glowing Effect */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6f9c45]/20 via-[#370e48]/20 to-[#6f9c45]/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#1e3f56] to-[#370e48] p-4 rounded-xl border border-[#6f9c45]/50">
                <Image
                  src="/coc_base.PNG"
                  alt="David's Clash of Clans Town Hall 15 Base"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Base Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-[#1e3f56]/50 rounded-xl p-6 border border-[#6c8192]/30">
                <h3 className="text-[#6f9c45] font-bold text-xl mb-2">🏆 Town Hall</h3>
                <p className="text-white text-3xl font-bold">15</p>
                <p className="text-[#6c8192] text-sm">Maximum Level</p>
              </div>
              <div className="bg-[#1e3f56]/50 rounded-xl p-6 border border-[#6c8192]/30">
                <h3 className="text-[#6f9c45] font-bold text-xl mb-2">⚔️ Strategy</h3>
                <p className="text-white text-lg">Hybrid Defense</p>
                <p className="text-[#6c8192] text-sm">Anti-3 Star Layout</p>
              </div>
              <div className="bg-[#1e3f56]/50 rounded-xl p-6 border border-[#6c8192]/30">
                <h3 className="text-[#6f9c45] font-bold text-xl mb-2">🎯 Focus</h3>
                <p className="text-white text-lg">Resource Protection</p>
                <p className="text-[#6c8192] text-sm">War Performance</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-[#6f9c45] to-[#370e48] hover:from-[#370e48] hover:to-[#6f9c45] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join My Clan
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-[#6f9c45]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#6f9c45] font-bold text-xl mb-4">💻 Development</h3>
                <p className="text-[#6c8192] leading-relaxed">
                  I'm a passionate developer who loves creating innovative solutions. 
                  When I'm not coding, you'll find me strategizing in Clash of Clans 
                  or exploring new technologies.
                </p>
              </div>
              <div>
                <h3 className="text-[#6f9c45] font-bold text-xl mb-4">🎮 Gaming</h3>
                <p className="text-[#6c8192] leading-relaxed">
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
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-[#6f9c45]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Let's Connect
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-[#1e3f56] hover:bg-[#6f9c45] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                GitHub
              </a>
              <a href="#" className="bg-[#1e3f56] hover:bg-[#6f9c45] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                LinkedIn
              </a>
              <a href="#" className="bg-[#1e3f56] hover:bg-[#6f9c45] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Clash of Clans
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-16">
        <p className="text-[#6c8192]">
          © 2024 David Gao. Built with Next.js and Clash of Clans passion.
        </p>
      </footer>
    </div>
  );
}
