
import React from 'react';
import Header from '@/components/landing/Header';
import NavBar from '@/components/landing/NavBar';

const Index = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen p-4 md:p-8 pt-20 max-w-6xl mx-auto">
        <Header />
        <footer className="mt-32 pt-12 border-t border-matrix-primary/30 text-center opacity-60">
          <p>powered by caffeine and mathematical induction</p>
        </footer>
      </div>
    </>
  );
};

export default Index;
