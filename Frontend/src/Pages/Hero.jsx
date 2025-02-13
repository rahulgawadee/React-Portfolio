import React, { useEffect, useState } from 'react';
import { 
  ArrowRightCircle, Github, Linkedin, Twitter, Terminal, 
  Code2, Database, Cpu, Blocks, Brain, Mail, Sparkles,
  Laptop, Globe, Star
} from 'lucide-react';

import PROFILE from '../assets/profile.png';

const Homepage = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = '> const developer = new FullStackDeveloper("Rahul");';

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: "Full Stack", level: 90, color: "from-emerald-400 to-cyan-400" },
    { icon: <Brain className="w-6 h-6" />, name: "AI/ML", level: 85, color: "from-violet-400 to-purple-400" },
    { icon: <Database className="w-6 h-6" />, name: "Database", level: 88, color: "from-orange-400 to-pink-400" },
    { icon: <Blocks className="w-6 h-6" />, name: "System Design", level: 82, color: "from-blue-400 to-indigo-400" },
  ];

  const SocialLink = ({ icon: Icon, href, label }) => (
    <a
      href={href}
      className="group relative p-3 bg-slate-800/50 rounded-full shadow-md transition-all duration-500 hover:bg-emerald-500/20 hover:shadow-emerald-500/20 hover:-translate-y-1"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-500" />
    </a>
  );

  const StatsCard = ({ icon: Icon, label, value }) => (
    <div className="bg-slate-800/30 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:border-emerald-500/50 hover:scale-105">
      <Icon className="w-8 h-8 text-emerald-400 mb-2" />
      <div className="text-2xl font-bold text-slate-200">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto py-16 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            {/* Terminal */}
            <div className="bg-slate-800/80 rounded-xl p-6 backdrop-blur-sm border border-emerald-500/20 shadow-lg transition-all duration-500 hover:shadow-emerald-500/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono space-y-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Terminal className="w-4 h-4" />
                  <span>$ whoami</span>
                </div>
                <p className="text-slate-300 pl-6">fullstack-developer</p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Terminal className="w-4 h-4" />
                  <span>$ status</span>
                </div>
                <p className="text-slate-300 pl-6">Currently building awesome things...</p>
                <div className="text-emerald-400 mt-2">
                  {text}{showCursor ? '|' : ' '}
                </div>
              </div>
            </div>

            {/* Name and Description */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Rahul Gawade
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Crafting digital experiences through code. Specialized in building scalable applications
                and implementing AI solutions that drive innovation.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 hover:border-emerald-500/30 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-emerald-400 animate-pulse">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease-out ${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatsCard icon={Globe} label="Projects" value="50+" />
              <StatsCard icon={Star} label="Github Stars" value="1.2k" />
              <StatsCard icon={Laptop} label="Contributions" value="500+" />
              <StatsCard icon={Sparkles} label="Experience" value="5 Yrs" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-500 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-400/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                  View Projects
                  <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#contact"
                className="group px-6 py-3 rounded-xl border border-emerald-500/30 hover:border-emerald-500 transition-all duration-500 text-center"
              >
                <span className="flex items-center justify-center gap-2 font-medium">
                  <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className={`relative group transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            {/* Profile Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={PROFILE}
                alt="Rahul"
                className="w-full max-w-lg mx-auto rounded-2xl transition-all duration-500 group-hover:scale-105"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center mt-8 space-x-4">
              <SocialLink icon={Github} href="#github" label="GitHub" />
              <SocialLink icon={Linkedin} href="#linkedin" label="LinkedIn" />
              <SocialLink icon={Twitter} href="#twitter" label="Twitter" />
              <SocialLink icon={Mail} href="#mail" label="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;