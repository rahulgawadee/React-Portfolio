import React, { useState, useEffect } from 'react';
import { 
  Github, ExternalLink, Terminal, Code, 
  Monitor, Database, Cloud, Shield,
  ChevronRight, Command, Layout, Search,
  Filter, ArrowUpRight
} from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

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

  const filteredProjects = projects
    .filter(project => 
      (activeFilter === 'all' || project.tags.includes(activeFilter)) &&
      (searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Terminal-style Header */}
        <div className="text-center mb-8 sm:mb-16 relative">
          <div className="inline-block">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mb-4 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-emerald-400">{terminalText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 font-mono">Showcasing my latest works and experiments</p>
          </div>
          <Command className="hidden md:block absolute right-0 top-0 text-slate-700 opacity-20 w-32 h-32 -rotate-12" />
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg 
                          text-slate-300 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50
                          focus:ring-1 focus:ring-emerald-500/50"
              />
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="sm:hidden flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800/50 
                        border border-slate-700 text-slate-300"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Pills - Desktop */}
          <div className="hidden sm:flex flex-wrap justify-start gap-2 mt-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300
                    ${activeFilter === filter.id 
                      ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
                      : 'bg-slate-800/50 text-slate-400 hover:text-emerald-300 hover:bg-slate-800'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-mono">{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Menu - Mobile */}
          <div className={`sm:hidden ${isFilterMenuOpen ? 'block' : 'hidden'} mt-4`}>
            <div className="grid grid-cols-2 gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setIsFilterMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300
                      ${activeFilter === filter.id 
                        ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20' 
                        : 'bg-slate-800/50 text-slate-400'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-mono">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden 
                        hover:border-emerald-500/30 transition-all duration-300 flex flex-col"
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
                    className="p-2 bg-slate-900/90 rounded-full hover:bg-emerald-500/20 
                              transition-colors duration-300 transform hover:scale-110"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                  </a>
                  <a
                    href={project.links.live}
                    className="p-2 bg-slate-900/90 rounded-full hover:bg-emerald-500/20 
                              transition-colors duration-300 transform hover:scale-110"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-400 mb-2 flex items-center group-hover:underline">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded-full bg-emerald-500/10 
                                text-emerald-400 hover:bg-emerald-500/20 transition-colors duration-300"
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

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 font-mono">No projects found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;