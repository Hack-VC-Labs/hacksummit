
import React from 'react';
import { Skull, ListOrdered, Clock } from 'lucide-react';

const AGENDA = [
  {
    time: "10:00",
    companies: ["Ethereum Foundation", "Optimism"],
    title: "Lorem ipsum dolor sit amet"
  },
  {
    time: "10:20",
    companies: ["Arbitrum", "zkSync"],
    title: "Consectetur adipiscing elit"
  },
  {
    time: "10:40",
    companies: ["Polygon", "Scroll"],
    title: "Sed do eiusmod tempor incididunt"
  },
  {
    time: "11:00",
    companies: ["Coinbase", "Binance"],
    title: "Ut labore et dolore magna"
  },
  {
    time: "11:20",
    companies: ["Uniswap", "Curve"],
    title: "Aliqua ut enim ad minim"
  },
  {
    time: "11:40",
    companies: ["Worldcoin", "Celestia"],
    title: "Veniam quis nostrud exercitation"
  },
  {
    time: "12:00",
    companies: ["a16z", "Paradigm"],
    title: "Ullamco laboris nisi ut aliquip"
  },
  {
    time: "12:20",
    companies: ["Jump Crypto", "Wintermute"],
    title: "Ex ea commodo consequat duis"
  },
  {
    time: "12:40",
    companies: ["Chainlink", "The Graph"],
    title: "Aute irure dolor in reprehenderit"
  },
  {
    time: "13:00",
    companies: ["Consensys", "Alchemy"],
    title: "Voluptate velit esse cillum"
  },
  {
    time: "13:20",
    companies: ["StarkWare", "zkSync"],
    title: "Dolore eu fugiat nulla pariatur"
  },
  {
    time: "13:40",
    companies: ["Gnosis", "Aragon"],
    title: "Excepteur sint occaecat cupidatat"
  },
  {
    time: "14:00",
    companies: ["Filecoin", "IPFS"],
    title: "Non proident sunt in culpa qui"
  },
  {
    time: "14:20",
    companies: ["Lido", "Rocket Pool"],
    title: "Officia deserunt mollit anim id"
  },
  {
    time: "14:40",
    companies: ["Lens Protocol", "ENS"],
    title: "Est laborum et dolorum fuga"
  }
];

const Agenda = () => {
  return (
    <section className="space-y-12 animate-fade-in">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Skull className="w-6 h-6" /> <span>agenda.execute()</span>
      </h2>
      <p className="text-white/80 text-lg mb-8">
        Space is ultra limited (srsly). Arrive before 10:00am if you want in - no promises after. Pull up with your zero days and spiciest exploits.
      </p>
      
      <div className="border border-matrix-primary p-8 rounded-lg hover:bg-matrix-primary/5 transition-colors transform hover:scale-[1.01] duration-300">
        <div className="flex items-start gap-4">
          <ListOrdered className="w-6 h-6 flex-shrink-0 mt-1" />
          <div className="w-full">
            <h3 className="text-xl font-bold mb-4">Day 1: Main Event</h3>
            <div className="grid grid-cols-[auto_1fr_2fr] gap-x-6 gap-y-3">
              {AGENDA.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="text-matrix-primary font-mono text-white">{item.time}</div>
                  <div className="opacity-80 text-sm">
                    {[2, 5, 8].includes(index) ? 
                      "Speaker × Speaker × Speaker" :
                      "Speaker × Speaker"
                    }
                  </div>
                  <div className="text-white">{item.title}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border border-matrix-primary p-8 rounded-lg hover:bg-matrix-primary/5 transition-colors transform hover:scale-[1.01] duration-300">
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">Idea Validation Thunderdome</h3>
            <div className="space-y-2 text-white">
              <p>15:00 - 17:00</p>
              <p>• Team formation & future co-founder speed dating</p>
              <p>• Booze. Booze. Booze (we got u anon).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
