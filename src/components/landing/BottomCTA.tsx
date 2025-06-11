
import React from 'react';
import { Rocket } from 'lucide-react';

const BottomCTA = () => {
  return (
    <section className="text-center space-y-8">
      <h2 className="text-2xl font-bold flex items-center justify-center gap-3 text-white">
        <Rocket className="w-6 h-6" /> <span>WAGMI (probably)</span>
      </h2>
      <p className="opacity-80">Bring your whitepaper and your worst ideas</p>
      <div className="relative group inline-block">
        <a href="https://lu.ma/wxl670q2">
          <button className="bg-matrix-secondary text-hack-bg px-8 py-3 rounded-lg font-bold hover:bg-[#5CD8E5] transition-all transform hover:-translate-y-1 shadow-[0_4px_0_0_#4BC5D2] hover:shadow-[0_6px_0_0_#4BC5D2] active:translate-y-1 active:shadow-[0_2px_0_0_#4BC5D2]">
            wen badge?
          </button>
        </a>
        <div className="coin group-hover:animate-coin-1 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-2 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-3 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-4 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-5 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
        <div className="coin group-hover:animate-coin-6 absolute w-6 h-6 bg-[#FFD700] rounded-full opacity-0 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.3)] border-2 border-[#FDB813]" />
      </div>
    </section>
  );
};

export default BottomCTA;
