
import React from 'react';

const Header = () => {
  return (
    <header className="py-20 text-center relative overflow-hidden">
      <div className="mt-24 mb-8">
        <p className="text-white/80 text-xl mb-2">To Be Revealed ;)</p>
      </div>
      <div className="glitch-container">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 glitch-text text-white">
          hacksummit<span className="text-matrix-primary">()</span>
        </h1>
      </div>
      <p className="text-xl md:text-2xl mb-4 font-mono animate-float text-white/60">
        where <span className="text-matrix-primary">&lt;code/&gt;</span> meets <span className="text-matrix-primary">chaos</span>
      </p>
      {/* SEO-optimized hidden heading for search engines */}
      <div className="sr-only">
        <h2>hacksummit NY 2025 - The Premier Tech Event by Hack VC in Manhattan</h2>
        <p>Join hacksummit NY 2025 for a day of innovation, networking, and preparation for the Permissionless hackathon</p>
      </div>
    </header>
  );
};

export default Header;
