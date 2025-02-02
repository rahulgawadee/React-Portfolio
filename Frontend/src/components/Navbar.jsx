import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FileText, FolderGit2, Mail, Terminal, Code, Command } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [terminalText, setTerminalText] = useState('');

  // Simulated terminal typing effect
  useEffect(() => {
    const text = '> portfolio.init()';
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (text) => {
    setActiveItem(text);
    setIsOpen(false); // Close the menu on click (for mobile)
  };

  const NavItem = ({ text, Icon, link = "#" }) => (
    <a
      href={link}
      onClick={() => handleNavClick(text)}
      className={`group flex items-center space-x-2 px-4 py-2 rounded-lg
        transition-all duration-300 ease-in-out relative overflow-hidden
        ${activeItem === text 
          ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
          : 'hover:bg-slate-800/50 text-slate-400 hover:text-emerald-300'
        }`}
    >
      <Icon 
        className={`w-5 h-5 transition-all duration-300 
          ${activeItem === text 
            ? 'text-emerald-400' 
            : 'group-hover:text-emerald-300'}`}
      />
      <span className="font-mono tracking-wide relative z-10">
        {text}
        {activeItem === text && (
          <span className="ml-2 animate-pulse">_</span>
        )}
      </span>
    </a>
  );

  return (
    <div className="fixed w-full top-0 z-50 font-mono">
      <nav className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Terminal className="w-6 h-6 text-emerald-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-emerald-400 font-bold">
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItem text="Home" Icon={Home} />
              <NavItem text="My Resume" Icon={FileText} />
              <NavItem text="My Projects" Icon={FolderGit2} />
              <NavItem text="Contact Me" Icon={Mail} />
            </div>

            {/* Code decoration */}
            <Code className="absolute right-0 top-0 text-slate-700 opacity-20 w-32 h-32 -rotate-12" />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg
                  bg-slate-800 text-slate-400 hover:text-emerald-300 
                  transition-all duration-300 border border-slate-700"
              >
                {isOpen ? (
                  <X className="w-6 h-6 animate-spin-once" />
                ) : (
                  <Command className="w-6 h-6 hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Updated) */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-2 bg-slate-800/50 rounded-lg my-2">
              <NavItem text="Home" Icon={Home} />
              <NavItem text="My Resume" Icon={FileText} />
              <NavItem text="My Projects" Icon={FolderGit2} />
              <NavItem text="Contact Me" Icon={Mail} />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Code-inspired decoration line */}
      <div className="h-[2px] bg-gradient-to-r from-slate-900 via-emerald-500 to-slate-900 w-full" />
      
      {/* Matrix-inspired background line */}
      <div className="h-[1px] w-full bg-slate-800">
        <div className="h-full w-20 bg-emerald-500/20 animate-[scanline_2s_linear_infinite]" />
      </div>
    </div>
  );
};

export default Navbar;
