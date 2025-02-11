import React, { useState, useEffect } from 'react';
import { 
  Github, ExternalLink, Terminal, Code, 
  Monitor, Database, Cloud, Shield,
  ChevronRight, Command, Layout
} from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Terminal typing effect
  useEffect(() => {
    const text = '> loading_projects.exe';
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "AI-Powered Portfolio Generator",
      description: "A React-based tool that generates personalized portfolio websites using AI to analyze users' professional data and create custom themes.",
      tags: ["frontend", "ai"],
      techStack: ["React", "TypeScript", "OpenAI", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Cloud Infrastructure Monitor",
      description: "Real-time monitoring dashboard for cloud infrastructure with automated scaling and alert systems.",
      tags: ["backend", "devops"],
      techStack: ["Node.js", "AWS", "Docker", "MongoDB"],
      image: "/api/placeholder/600/400",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted chat application with real-time translation and file sharing capabilities.",
      tags: ["fullstack", "security"],
      techStack: ["Next.js", "PostgreSQL", "WebSocket", "Azure"],
      image: "/api/placeholder/600/400",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Layout },
    { id: 'frontend', label: 'Frontend', icon: Monitor },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'fullstack', label: 'Full Stack', icon: Code },
    { id: 'devops', label: 'DevOps', icon: Cloud },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Terminal-style Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <Terminal className="w-8 h-8 text-emerald-400 mb-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-emerald-400">{terminalText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
            </h1>
            <p className="text-slate-400 font-mono">Showcasing my latest works and experiments</p>
          </div>
          <Command className="absolute right-0 top-0 text-slate-700 opacity-20 w-32 h-32 -rotate-12" />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${activeFilter === filter.id 
                    ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
                    : 'bg-slate-800/50 text-slate-400 hover:text-emerald-300 hover:bg-slate-800'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-mono">{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.links.github}
                    className="p-2 bg-slate-900/90 rounded-full hover:bg-emerald-500/20 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-emerald-400" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-2 bg-slate-900/90 rounded-full hover:bg-emerald-500/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-mono text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;