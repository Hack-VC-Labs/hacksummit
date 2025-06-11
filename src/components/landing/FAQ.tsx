
import React from 'react';
import { Dice1 } from 'lucide-react';

const FAQ = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold flex items-center gap-3">
        <Dice1 className="w-6 h-6" /> <span>FAQ.wtf</span>
      </h2>
      <div className="space-y-8">
        <div className="border-b border-matrix-primary/30 pb-6">
          <h3 className="font-bold mb-2">Is the event free?</h3>
          <p className="opacity-80">Yes the event is free. However, it is first come first serve till we hit capacity.</p>
        </div>
        <div className="border-b border-matrix-primary/30 pb-6">
          <h3 className="font-bold mb-2">Will there be lunch & drinks?</h3>
          <p className="opacity-80">Yes, you will be fed. Coffee & beer will be available.</p>
        </div>
        <div className="border-b border-matrix-primary/30 pb-6">
          <h3 className="font-bold mb-2">Who's the target audience?</h3>
          <p className="opacity-80">Builders, cryptographers, and anyone looking to participate in the Permissionless hackathon.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
