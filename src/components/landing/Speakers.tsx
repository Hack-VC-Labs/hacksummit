import React from 'react';
import { VenetianMask } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const SPEAKERS = Array(12).fill({
  name: "anon",
  title: "Based Researcher",
  image: "/placeholder.svg",
}).map((speaker, index) => ({
  ...speaker,
  name: "anon",
  title: [
    "Zero-Day Hunter & NFT Collector",
    "MEV Wizard",
    "Consensus Layer Whisperer",
    "Defi Degen & Governance Guru",
    "ZK Proof Architect & Meme Lord",
    "Smart Contract Surgeon",
    "Shitcoin Maxi",
    "Based Blockchain Buidler",
    "Crypto Curve Theorist",
    "Wallet Warlock & Node Ninja",
    "Solidity Savant & Gas Guru",
    "Governance God & Data Defier"
  ][index]
}));

const Speakers = () => {
  return (
    <section className="space-y-12 mt-24">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <VenetianMask className="w-6 h-6" /> <span className="font-mono">big.brain.energy()</span>
        </h2>
        <p className="text-white/80 text-lg">
          An unholy gathering of hungry hackers, cryptography wizards, and absolutely degenerate VCs. Come for the technical brilliance, stay for the memes and mayhem.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SPEAKERS.map((speaker, index) => (
          <div key={index} className="border border-matrix-primary/30 bg-white/5 p-8 rounded-lg hover:bg-matrix-primary/10 transition-colors text-center backdrop-blur-sm shadow-lg">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="rounded-full w-full h-full object-cover border-4 border-matrix-primary shadow-glow"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-black text-4xl font-bold">?</div>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">{speaker.name}</h3>
            <p className="text-sm text-white/80 mb-3">{speaker.title}</p>
            <div className="h-15 flex items-center justify-center">
              <div className="bg-hack-bg/80 border border-matrix-primary/40 rounded px-4 py-2 text-matrix-primary flex items-center justify-center w-48 h-[calc(2.5rem)]">
                <span className="text-xs">LOGO</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
