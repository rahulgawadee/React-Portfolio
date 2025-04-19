import React, { useState } from 'react';
import { 
  BriefcaseIcon, GraduationCap, Code, Star, 
  Award, FileText, ChevronRight, Terminal
} from 'lucide-react';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id
          ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/20'
          : 'hover:bg-slate-800/50 text-slate-400 hover:text-emerald-300'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {activeTab === id && <ChevronRight className="w-4 h-4 ml-2 animate-pulse" />}
    </button>
  );

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-emerald-300">{skill}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"
          style={{ width: `${level}%` }}
        >
          <div className="h-full w-full animate-pulse bg-emerald-400/30" />
        </div>
      </div>
    </div>
  );

  const TimelineItem = ({ year, title, subtitle, description }) => (
    <div className="relative pl-8 pb-8 group">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-700 group-last:h-[50%]" />
      <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50">
        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/40" />
      </div>
      <div className="group-hover:scale-[1.02] transform transition-all duration-300">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-emerald-400 font-mono">{year}</span>
          <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300">
            {title}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-1">{subtitle}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">
            My Journey
            <span className="ml-2 animate-pulse">_</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate Full-Stack Developer skilled in MERN stack, AI, and cloud technologies, currently pursuing a Bachelor's degree in Computer Engineering.
          </p>
          <Terminal className="absolute right-0 top-0 text-slate-700 opacity-20 w-32 h-32 -rotate-12" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <TabButton id="skills" label="Skills" icon={Code} />
              <TabButton id="experience" label="Experience" icon={BriefcaseIcon} />
              <TabButton id="education" label="Education" icon={GraduationCap} />
              <TabButton id="achievements" label="Achievements" icon={Award} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-xl border border-slate-700/50">
              {/* Skills Section */}
              {activeTab === 'skills' && (
                <>
                  <h2 className="text-2xl font-bold text-emerald-400 mb-6">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-4">Frontend</h3>
                      <SkillBar skill="React.js" level={90} />
                      <SkillBar skill="Next.js" level={85} />
                      <SkillBar skill="TypeScript" level={80} />
                      <SkillBar skill="Tailwind CSS" level={95} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-200 mb-4">Backend & Tools</h3>
                      <SkillBar skill="Node.js" level={85} />
                      <SkillBar skill="MongoDB" level={80} />
                      <SkillBar skill="REST APIs" level={85} />
                      <SkillBar skill="AWS & Docker" level={75} />
                    </div>
                  </div>
                </>
              )}

              {/* Experience Section */}
              {activeTab === 'experience' && (
                <>
                  <h2 className="text-2xl font-bold text-emerald-400 mb-6">Work Experience</h2>
                  <div className="space-y-6">
                    <TimelineItem 
                      year="Oct 2024 – Present"
                      title="Full Stack Developer Intern"
                      subtitle="Aii Venture Pvt. Ltd, Pune"
                      description="Developed a real-time rent application, chat system, and full-stack web solutions using MERN stack. Deployed applications with Docker on AWS with 99.9% uptime."
                    />
                  </div>
                </>
              )}

              {/* Education Section */}
              {activeTab === 'education' && (
                <>
                  <h2 className="text-2xl font-bold text-emerald-400 mb-6">Education</h2>
                  <div className="space-y-6">
                    <TimelineItem 
                      year="2021 - 2025"
                      title="B.E. - Computer Engineering"
                      subtitle="Government College of Engineering & Research, Awasari"
                      description="CGPA: 8.40/10 - Focus on AI, Web Development, and Cloud Technologies"
                    />
                    <TimelineItem 
                      year="2019"
                      title="H.S.C"
                      subtitle="Bhairavnath Jr. College, Bhosari"
                      description="Score: 67.54%"
                    />
                    <TimelineItem 
                      year="2017"
                      title="S.S.C"
                      subtitle="Priyadarshani High School, Bhosari"
                      description="Score: 75.60%"
                    />
                  </div>
                </>
              )}

              {/* Achievements Section */}
              {activeTab === 'achievements' && (
                <>
                  <h2 className="text-2xl font-bold text-emerald-400 mb-6">Achievements & Certifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-colors duration-300">
                      <FileText className="w-8 h-8 text-emerald-400 mb-2" />
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">Internship at Aii Venture</h3>
                      <p className="text-slate-400">Developed live cloud-deployed projects for a US startup</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-colors duration-300">
                      <Star className="w-8 h-8 text-emerald-400 mb-2" />
                      <h3 className="text-lg font-semibold text-slate-200 mb-2">AI/ML Projects</h3>
                      <p className="text-slate-400">Worked on Generative AI with Google Gemini Pro and TensorFlow</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
