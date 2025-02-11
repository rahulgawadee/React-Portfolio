import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FileText, FolderGit2, Mail, Terminal, Code, Command, Cpu, Link } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [terminalText, setTerminalText] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Terminal typing effect
  useEffect(() => {
    const text = '> rahul.init()';
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (text) => {
    setActiveItem(text);
    setIsOpen(false);
  };

  const NavItem = ({ text, Icon, to }) => (
    <Link
      to={to}
      onClick={() => handleNavClick(text)}
      className={`group flex items-center space-x-2 px-4 py-2 rounded-lg
        transition-all duration-300 ease-in-out relative overflow-hidden
        hover:scale-105 transform
        ${activeItem === text 
          ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
          : 'hover:bg-slate-800/50 text-slate-400 hover:text-emerald-300'
        }`}
    >
      <div className="relative">
        <Icon 
          className={`w-5 h-5 transition-all duration-300 
            ${activeItem === text 
              ? 'text-emerald-400 animate-spin-slow' 
              : 'group-hover:text-emerald-300'}`}
        />
        {activeItem === text && (
          <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full animate-pulse" />
        )}
      </div>
      <span className="font-mono tracking-wide relative z-10">
        {text}
        {activeItem === text && (
          <span className="ml-2 animate-pulse">_</span>
        )}
      </span>
    </Link>
  );

  return (
    <div className="fixed w-full top-0 z-50 font-mono">
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-emerald-500/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand with enhanced effects */}
            <div className="flex-shrink-0 flex items-center space-x-3 group">
              <div className="relative">
                <Terminal className="w-6 h-6 text-emerald-400 animate-pulse" />
                <div className="absolute -inset-2 bg-emerald-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors duration-300">
                  {terminalText}
                  <span className="animate-pulse">_</span>
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItem text="Home" Icon={Home} to="/" />
              <NavItem text="My Resume" Icon={FileText} to="/resume" />
              <NavItem text="My Projects" Icon={FolderGit2} to="/projects" />
              <NavItem text="Contact Me" Icon={Mail} to="/contact" />
            </div>

            {/* Decorative elements */}
            <Cpu className="absolute left-1/2 -translate-x-1/2 text-slate-700 opacity-10 w-32 h-32 animate-spin-slower" />
            <Code className="absolute right-0 top-0 text-slate-700 opacity-20 w-32 h-32 -rotate-12" />

            {/* Mobile menu button with enhanced effects */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative inline-flex items-center justify-center p-2 rounded-lg
                  bg-slate-800 text-slate-400 hover:text-emerald-300 
                  transition-all duration-300 border border-slate-700 hover:border-emerald-500/50"
              >
                <div className="absolute -inset-0.5 bg-emerald-500/20 blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
                {isOpen ? (
                  <X className="w-6 h-6 animate-spin-once" />
                ) : (
                  <Command className="w-6 h-6 hover:rotate-180 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu with enhanced animation */}
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out transform ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-4 opacity-0 pointer-events-none'
            }`}
          >
             <div className="px-2 pt-2 pb-3 bg-slate-800/50 backdrop-blur-xl rounded-lg border border-slate-700/50">
              <NavItem text="Home" Icon={Home} to="/" />
              <NavItem text="My Resume" Icon={FileText} to="/resume" />
              <NavItem text="My Projects" Icon={FolderGit2} to="/projects" />
              <NavItem text="Contact Me" Icon={Mail} to="/contact" />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Enhanced decorative elements */}
      <div className="h-[2px] bg-gradient-to-r from-slate-900 via-emerald-500 to-slate-900 w-full relative">
        <div className="absolute inset-0 bg-emerald-500/20 animate-pulse" />
      </div>
      
      <div className="h-[1px] w-full bg-slate-800 relative overflow-hidden">
        <div className="h-full w-20 bg-emerald-500/20 animate-[scanline_2s_linear_infinite]" />
      </div>
    </div>
  );
};

export default Navbar;