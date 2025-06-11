
import React from 'react';
import { Users, Newspaper, Rocket, Sparkles } from 'lucide-react';

const CommunityFrens = () => {
  // Generate placeholders with consistent styling
  const generatePlaceholders = (count: number, type: 'community' | 'media') => {
    const phrase = type === 'community' ? 'Community Partner' : 'Media Partner';
    
    return Array(count).fill(null).map((_, index) => ({
      phrase: phrase,
      id: `${type}-${index}`
    }));
  };

  const communityPlaceholders = generatePlaceholders(24, 'community');
  const mediaPlaceholders = generatePlaceholders(6, 'media');

  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Users className="w-6 h-6" /> <span>Community Frens</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {communityPlaceholders.map((placeholder) => (
          <div 
            key={placeholder.id}
            className="aspect-[3/1] flex items-center justify-center bg-black rounded-lg border-2 border-matrix-primary hover:border-matrix-primary transition-all group overflow-hidden"
          >
            <div className="flex items-center gap-2 px-3 text-center">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-mono text-sm font-bold text-white">{placeholder.phrase}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-16">
        <h2 className="text-2xl font-bold flex items-center gap-3 mb-10">
          <Newspaper className="w-6 h-6" /> <span>Media</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {mediaPlaceholders.map((placeholder) => (
            <div 
              key={placeholder.id}
              className="aspect-[3/1] flex items-center justify-center bg-black rounded-lg border-2 border-matrix-primary hover:border-matrix-primary transition-all group overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 text-center">
                <Rocket className="w-4 h-4 text-white" />
                <span className="font-mono text-sm font-bold text-white">{placeholder.phrase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFrens;
