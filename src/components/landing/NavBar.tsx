
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hack-bg/80 backdrop-blur-sm border-b border-matrix-primary/20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://hack.vc/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/lovable-uploads/8378a676-842c-49a4-b27a-01c874f3bdc1.png" 
              alt="HackVC Logo" 
              className="h-4"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-matrix-secondary hover:text-matrix-secondary/80 transition-colors">
              Past hacksummits <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-hack-bg border border-matrix-primary/30 z-50">
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://2024.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2024)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://2023.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2023)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://sf.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2022)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://2018.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2018)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://2016.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2016)
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                <a href="https://2014.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                  hacksummit (2014)
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile hamburger button */}
        <button 
          className="md:hidden text-matrix-primary hover:text-matrix-secondary transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hack-bg border-t border-matrix-primary/20 animate-in slide-in-from-top">
          <div className="px-4 py-6 space-y-6">
            <div className="space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-matrix-secondary hover:text-matrix-secondary/80 transition-colors">
                  Past hacksummits <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-hack-bg border border-matrix-primary/30 z-50">
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://2024.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2024)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://2023.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2023)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://sf.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2022)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://2018.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2018)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://2016.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2016)
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-matrix-secondary hover:text-matrix-secondary/80 cursor-pointer">
                    <a href="https://2014.hacksummit.org" target="_blank" rel="noopener noreferrer" className="w-full">
                      hacksummit (2014)
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
