
import React from 'react';
import { Zap, Bomb } from 'lucide-react';

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-20">
      <div className="relative group w-full sm:w-auto">
        <a href="https://lu.ma/wxl670q2" className="block">
          <button className="w-full flex items-center justify-center gap-2 bg-matrix-primary text-hack-bg px-8 py-3 rounded-lg font-bold hover:bg-matrix-secondary transition-all transform hover:-translate-y-1 shadow-[0_4px_0_0_#03A062] hover:shadow-[0_6px_0_0_#03A062] active:translate-y-1 active:shadow-[0_2px_0_0_#03A062]">
            <Zap className="w-5 h-5" /> Ape In Now
          </button>
        </a>
        <div className="coin group-hover:animate-coin-1 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-2 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-3 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-4 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-5 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-6 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
      </div>
      <a href="https://form.typeform.com/to/YLHhRS5D" className="block w-full sm:w-auto">
        <button className="w-full flex items-center justify-center gap-2 border-2 border-matrix-secondary text-matrix-secondary px-8 py-3 rounded-lg font-bold hover:bg-matrix-secondary/10 transition-all transform hover:-translate-y-1 shadow-[0_4px_0_0_#70EBF7] hover:shadow-[0_6px_0_0_#70EBF7] active:translate-y-1 active:shadow-[0_2px_0_0_#70EBF7]">
          <Bomb className="w-5 h-5" /> Apply to Speak
        </button>
      </a>
    </div>
  );
};

export default CTAButtons;
