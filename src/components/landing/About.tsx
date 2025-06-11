
import React from 'react';
import { Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="max-w-2xl mx-auto space-y-12 bg-white/5 p-12 rounded-xl backdrop-blur-sm border border-matrix-primary/20 shadow-2xl shadow-matrix-primary/10 relative overflow-hidden hover:animate-power-up transition-all duration-300">
      <h2 className="text-2xl font-bold flex items-center justify-center gap-3 text-white">
        <Brain className="w-6 h-6" /> <span>A 1 Day Ideation Summit</span>
      </h2>
      <div className="space-y-8 text-lg text-white/80">
        <p className="text-left">Hackathons are broken. Too many devs show up with vibes, not vision—and walk away with no prizes, no grants, and no VC $$. We're fixing that.</p>
        
        <p className="text-left font-bold">Here's the play:</p>
        
        <p className="text-left flex items-start gap-2">
          <span className="text-matrix-primary">💥</span> 
          <span>VCs and founders spill alpha on what they're bullish or bearish on across key categories.</span>
        </p>
        
        <p className="text-left flex items-start gap-2">
          <span className="text-matrix-primary">🔧</span> 
          <span>We spitball ideas live with hackers. Get forbidden, pre-hackathon idea validation straight from the source.</span>
        </p>
        
        <p className="text-left flex items-start gap-2">
          <span className="text-matrix-primary">📝</span> 
          <span>Learn what to build before the competition starts—so you can speedrun the Permissionless hackathon like a maniac on a mission.</span>
        </p>
        
        <p className="text-left flex items-start gap-2">
          <span className="text-matrix-primary">💣</span> 
          <span>You leave with a roadmap, not regrets. No more wandering aimlessly through a hackathon.</span>
        </p>
        
        <p className="text-left flex items-start gap-2">
          <span className="text-matrix-primary">🌱</span> 
          <span>Touch grass with fellow degen builders. Form squads with 10x gigabrains, copy/paste specialists, and rare UI wizards you thought only existed in Discord lore.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
