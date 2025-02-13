import React, { useEffect, useState } from 'react';
import { ArrowRightCircle, Github, Linkedin, Twitter, Terminal, Code2, Database, Cpu, Blocks, Brain } from 'lucide-react';

const Homepage = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> const developer = new FullStackDeveloper("Rahul");';

  useEffect(() => {
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
    { icon: <Code2 className="w-6 h-6" />, name: "Full Stack", level: 90 },
    { icon: <Brain className="w-6 h-6" />, name: "AI/ML", level: 85 },
    { icon: <Database className="w-6 h-6" />, name: "Database", level: 88 },
    { icon: <Blocks className="w-6 h-6" />, name: "System Design", level: 82 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-16">
        {/* Responsive Grid Layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Text & Info) */}
          <div className="space-y-8">
            {/* Terminal-like introduction */}
            <div className="bg-slate-800/80 rounded-lg p-6 backdrop-blur-sm border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="font-mono">
                <p className="text-emerald-400">$ whoami</p>
                <p className="text-slate-300">fullstack-developer</p>
                <p className="text-emerald-400 mt-2">$ status</p>
                <p className="text-slate-300">Currently building awesome things...</p>
                <p className="text-emerald-400 mt-2">{text}{showCursor ? '|' : ' '}</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Rahul Gawade
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Crafting digital experiences through code. Specialized in building scalable applications
              and implementing AI solutions that drive innovation.
            </p>

            {/* Tech Stack Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-emerald-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-emerald-400">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-all text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#contact"
                className="group px-6 py-3 rounded-lg border border-emerald-500/30 hover:border-emerald-500 transition-all text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Right Column (Profile Image) */}
          <div className="relative group flex flex-col items-center">
  {/* Profile Image */}
  <div className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
    <img
      src="./src/assets/PROFILE.png"
      alt="Rahul"
      className="w-full max-w-xs md:max-w-md mx-auto rounded-2xl transition-all duration-500"
    />
    {/* Subtle Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Social Links */}
  <div className="flex justify-center mt-6 space-x-4">
    {[
      { icon: <Github />, href: "#github" },
      { icon: <Linkedin />, href: "#linkedin" },
      { icon: <Twitter />, href: "#twitter" }
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        className="p-3 bg-slate-800 rounded-full shadow-md transition-all duration-300 hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="text-emerald-400 w-6 h-6">{social.icon}</div>
      </a>
    ))}
  </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Homepage;
