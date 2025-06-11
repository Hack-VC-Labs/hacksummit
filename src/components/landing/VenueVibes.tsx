import React from 'react';
import { MapPin, Brain, Computer, Coffee, Flame } from 'lucide-react';

const VenueVibes = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <MapPin className="w-6 h-6" /> <span>Venue Vibes</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:self-stretch">
          <div className="col-span-1 md:col-span-2 aspect-video bg-hack-bg/50 rounded-lg overflow-hidden border-2 border-matrix-primary/40">
            <img 
              src="/lovable-uploads/448738df-725d-4e7c-9665-aac5b98a5cb0.png" 
              alt="Venue main hall with large windows, dark walls, and wooden flooring"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="aspect-square bg-hack-bg/50 rounded-lg overflow-hidden border-2 border-matrix-primary/40">
            <img 
              src="/lovable-uploads/d06c7e7e-2371-49ad-b55e-da74d6874af7.png" 
              alt="Venue workspace with large windows, elegant columns, and minimal furniture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square bg-hack-bg/50 rounded-lg overflow-hidden border-2 border-matrix-primary/40">
            <img 
              src="/lovable-uploads/41afcf6f-2a86-41d6-ba3e-4a29a3bab8d7.png" 
              alt="Historic venue building exterior with ornate architecture and multiple floors"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 flex flex-col space-y-6 bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-matrix-primary/20 lg:self-stretch">
          <div className="space-y-4">
            <p className="text-matrix-primary font-bold text-xl">
              We locked down [reacted]. Now we're filling it with brains, bytes & barely contained chaos.
            </p>
            <p className="text-white/80">
              This isn't some dry panel snoozefest. It's a high-signal, low-BS hangout for builders who actually ship. Two rooms. One mission: collide ideas and code with real humans in the bear market trenches.
            </p>
          </div>
          
          <div className="space-y-3 text-white/70">
            <p className="font-bold text-white/90">What to expect:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-matrix-primary mr-2">•</span>
                <span><Brain className="inline-block w-5 h-5 text-matrix-primary mr-1" /> <span className="text-matrix-primary font-semibold">Front room</span> – Presentations, A/V, and unconference-style convos that don't suck</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-primary mr-2">•</span>
                <span><Computer className="inline-block w-5 h-5 text-matrix-primary mr-1" /> <span className="text-matrix-primary font-semibold">Back room</span> – Picnic tables for devs to drop laptops, form teams, trade alpha</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-primary mr-2">•</span>
                <span><Coffee className="inline-block w-5 h-5 text-matrix-primary mr-1" /> Coffee flowing, food served, and yeah—there's a bar</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-primary mr-2">•</span>
                <span><Flame className="inline-block w-5 h-5 text-matrix-primary mr-1" /> Vibes = hacker house meets rooftop afterparty energy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueVibes;
