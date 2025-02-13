import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, FileText, FolderGit2, Mail, Terminal, Code, Command, Cpu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [terminalText, setTerminalText] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Terminal typing effect
  useEffect(() => {
    const text = "> rahul.init()";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (text) => {
    setActiveItem(text);
    setIsOpen(false);
  };

  const NavItem = ({ text, Icon, to }) => (
    <Link
      to={to}
      onClick={() => handleNavClick(text)}
      className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
        hover:scale-105 transform
        ${activeItem === text 
          ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20" 
          : "hover:bg-slate-800/50 text-slate-400 hover:text-emerald-300"
        }`}
    >
      <Icon className="w-5 h-5 transition-all duration-300" />
      <span className="font-mono tracking-wide">{text}</span>
    </Link>
  );

  return (
    <div className="fixed w-full top-0 z-50 font-mono">
      <nav className={`transition-all duration-300 ${isScrolled ? "bg-slate-900/95 shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Terminal className="w-6 h-6 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-bold">{terminalText}_</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavItem text="Home" Icon={Home} to="/" />
              <NavItem text="My Resume" Icon={FileText} to="/resume" />
              <NavItem text="My Projects" Icon={FolderGit2} to="/projects" />
              <NavItem text="Contact Me" Icon={Mail} to="/contact" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-slate-800 text-slate-400 rounded-lg">
                {isOpen ? <X className="w-6 h-6" /> : <Command className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-2 pt-2 pb-3 space-y-2 bg-slate-800/50 rounded-lg">
              <NavItem text="Home" Icon={Home} to="/" />
              <NavItem text="My Resume" Icon={FileText} to="/resume" />
              <NavItem text="My Projects" Icon={FolderGit2} to="/projects" />
              <NavItem text="Contact Me" Icon={Mail} to="/contact" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
