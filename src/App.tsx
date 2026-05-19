import React, { useState, useMemo } from 'react';
import { 
  Mail, MapPin,
  Briefcase, Code,
  ArrowUpRight
} from 'lucide-react';

// Custom vector SVG Icons for social platforms
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function App() {
  const resumeData = {
  "personal": {
    "name": "SWETAPRANGYA SAHOO",
    "title": "Technical Customer Support Engineer | 8+ Years Experience (5 Years in B2B SaaS)",
    "subtitle": "",
    "bio": "Technical Customer Support Engineer | 8+ Years Experience (5 Years in B2B SaaS) Award-winning Senior Support Engineer specializing in log analysis, network debugging, and resolving complex enterprise escalations. I excel at finding the root cause of API and integration failures, working directly with engineering to improve the core product.",
    "avatar": "SS",
    "email": "swetapsahoo05@gmail.com",
    "phone": "+491728314843",
    "location": "",
    "socials": {
      "github": "https://github.com",
      "linkedin": "https://linkedin.com/in/swetaprangya-sahoo-105493b2",
      "twitter": "https://twitter.com",
      "email": "mailto:swetapsahoo05@gmail.com"
    }
  },
  "experience": [
    {
      "id": "exp-1",
      "company": "Sauce Labs GmbH",
      "position": "Senior Customer Support Engineer",
      "location": "Berlin/Remote",
      "period": "Aug 2021 - Present",
      "current": true,
      "description": [
        "Led root-cause investigations for 40+ high-priority enterprise escalations weekly, diving into server logs and proxies to fix infrastructure while maintaining a 98% SLA.",
        "Investigated network payloads and secure proxy logs to debug complex API failures.",
        "Debugged customer API integrations and delivered detailed bug reports to Engineering.",
        "Built internal tools using Python and AI assistants to parse and analyze complex system logs, which reduced our manual troubleshooting time by around 30 %.",
        "Wrote technical documentation and knowledge base articles, turning one-off bug fixes into reusable resources for the support team."
      ],
      "technologies": []
    },
    {
      "id": "exp-2",
      "company": "DXC Technology",
      "position": "Tech Support Analyst",
      "location": "Bangalore",
      "period": "Jul 2016 - Oct 2019",
      "current": false,
      "description": [
        "Provided global technical support for enterprise clients, resolving critical system outages across APJ, EMEA, and the Americas .",
        "Managed complex support workflows and prioritized high-severity production incidents using Jira, Salesforce, and ServiceNow.",
        "Escalated complex issues with clear technical context, working closely with backend engineering to speed up bug resolution.",
        "Diagnosed system integration errors and managed secure access protocols to help streamline the enterprise onboarding process."
      ],
      "technologies": []
    }
  ],
  "skills": [
    {
      "name": "API Troubleshooting (REST)",
      "level": 90,
      "category": "Backend"
    },
    {
      "name": "Incident Management & RCA",
      "level": 88,
      "category": "Frontend"
    },
    {
      "name": "Log Analysis",
      "level": 88,
      "category": "Frontend"
    },
    {
      "name": "English",
      "level": 85,
      "category": "Languages"
    },
    {
      "name": "German (A1)",
      "level": 92,
      "category": "Languages"
    },
    {
      "name": "Kibana",
      "level": 85,
      "category": "Tools/Other"
    },
    {
      "name": "SauceLabs",
      "level": 88,
      "category": "Tools/Other"
    },
    {
      "name": "Confluence",
      "level": 86,
      "category": "Tools/Other"
    },
    {
      "name": "JIRA",
      "level": 93,
      "category": "Tools/Other"
    },
    {
      "name": "SQL",
      "level": 85,
      "category": "Backend"
    },
    {
      "name": "PostgreSQL",
      "level": 88,
      "category": "Backend"
    },
    {
      "name": "Postman",
      "level": 91,
      "category": "Tools/Other"
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "institution": "ITER Bhubaneswar",
      "degree": "India",
      "fieldOfStudy": "",
      "location": "United States",
      "period": ""
    }
  ],
  "projects": [],
  "certificates": [
    {
      "id": "cert-1",
      "name": "Support Engineer of the Year",
      "issuer": "Sauce Labs",
      "date": "2024"
    },
    {
      "id": "cert-2",
      "name": "Rookie Team of the Year",
      "issuer": "Verification Body",
      "date": "2024"
    }
  ],
  "testimonials": []
};
  const theme = {
  "id": "creative",
  "primaryColor": "emerald",
  "fontFamily": "sans",
  "darkMode": true,
  "layout": "standard",
  "heroStyle": "gradient"
};

  const [activeExperience, setActiveExperience] = useState(
    resumeData.experience && resumeData.experience.length > 0 ? resumeData.experience[0].id : null
  );

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const colors = useMemo(() => {
    const map: any = {
      violet: {
        primary: 'violet-600', text: 'text-violet-600 dark:text-violet-400',
        bg: 'bg-violet-600', border: 'border-violet-500 dark:border-violet-400',
        accentBg: 'bg-violet-50 dark:bg-violet-950/30',
        badge: 'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 border border-violet-100 dark:border-violet-900/40',
        gradient: 'from-violet-600 to-indigo-600', ring: 'ring-violet-500', glow: 'shadow-violet-500/25 dark:shadow-violet-400/10'
      },
      emerald: {
        primary: 'emerald-600', text: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-600', border: 'border-emerald-500 dark:border-emerald-400',
        accentBg: 'bg-emerald-50 dark:bg-emerald-950/30',
        badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/40',
        gradient: 'from-emerald-600 to-teal-600', ring: 'ring-emerald-500', glow: 'shadow-emerald-500/25 dark:shadow-emerald-400/10'
      },
      blue: {
        primary: 'blue-600', text: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-600', border: 'border-blue-500 dark:border-blue-400',
        accentBg: 'bg-blue-50 dark:bg-blue-950/30',
        badge: 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-100 dark:border-blue-900/40',
        gradient: 'from-blue-600 to-cyan-600', ring: 'ring-blue-500', glow: 'shadow-blue-500/25 dark:shadow-blue-400/10'
      },
      amber: {
        primary: 'amber-500', text: 'text-amber-650 dark:text-amber-400',
        bg: 'bg-amber-500', border: 'border-amber-500 dark:border-amber-400',
        accentBg: 'bg-amber-50 dark:bg-amber-950/30',
        badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-100 dark:border-amber-900/40',
        gradient: 'from-amber-500 to-orange-500', ring: 'ring-amber-500', glow: 'shadow-amber-500/25 dark:shadow-amber-400/10'
      },
      rose: {
        primary: 'rose-500', text: 'text-rose-600 dark:text-rose-400',
        bg: 'bg-rose-500', border: 'border-rose-500 dark:border-rose-400',
        accentBg: 'bg-rose-50 dark:bg-rose-950/30',
        badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-100 dark:border-rose-900/40',
        gradient: 'from-rose-500 to-pink-500', ring: 'ring-rose-500', glow: 'shadow-rose-500/25 dark:shadow-rose-400/10'
      },
      slate: {
        primary: 'slate-700', text: 'text-slate-700 dark:text-slate-300',
        bg: 'bg-slate-800 dark:bg-slate-700', border: 'border-slate-700 dark:border-slate-600',
        accentBg: 'bg-slate-50 dark:bg-slate-900/50',
        badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
        gradient: 'from-slate-700 to-zinc-900 dark:from-slate-800 dark:to-zinc-950', ring: 'ring-slate-500', glow: 'shadow-slate-500/25 dark:shadow-slate-400/10'
      }
    };
    return map[theme.primaryColor] || map.violet;
  }, [theme.primaryColor]);

  const fontClass = useMemo(() => {
    switch (theme.fontFamily) {
      case 'serif': return 'font-serif';
      case 'mono': return 'font-mono';
      default: return 'font-sans';
    }
  }, [theme.fontFamily]);


  const groupedSkills = useMemo(() => {
    const groups: { [key: string]: typeof resumeData.skills } = {};
    if (resumeData.skills) {
      resumeData.skills.forEach(skill => {
        const cat = skill.category || 'Other';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(skill);
      });
    }
    return groups;
  }, [resumeData.skills]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitSuccess(true);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1000);
  };

  const renderSocialIcon = (type: string, url?: string) => {
    if (!url) return null;
    const iconClass = "w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5";
    let IconElement = <Mail className={iconClass} />;
    if (type === 'github') IconElement = <GithubIcon className={iconClass} />;
    else if (type === 'linkedin') IconElement = <LinkedinIcon className={iconClass} />;
    else if (type === 'twitter') IconElement = <TwitterIcon className={iconClass} />;

    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${colors.ring}`}
      >
        {IconElement}
      </a>
    );
  };

  const renderHero = () => {
    if (theme.id === 'cyberpunk') {
      return (
        <div className="relative py-20 px-6 md:px-12 bg-zinc-950 text-emerald-400 font-mono border-b border-zinc-800 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-block text-xs px-2 py-1 mb-4 border border-emerald-500/30 rounded text-emerald-400 bg-emerald-950/20 animate-pulse">
              SYSTEM_ONLINE // VER_3.8
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase mb-2 font-mono">
              {resumeData.personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-cyan-400 mb-6">
              &gt; {resumeData.personal.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mb-8 leading-relaxed text-sm md:text-base">
              {resumeData.personal.bio}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {resumeData.personal.email && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-zinc-800 rounded bg-zinc-900/80 text-xs text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-emerald-500" /> {resumeData.personal.email}
                </span>
              )}
              {resumeData.personal.location && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-zinc-800 rounded bg-zinc-900/80 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" /> {resumeData.personal.location}
                </span>
              )}
            </div>

            <div className="flex items-center gap-4">
              {renderSocialIcon('github', resumeData.personal.socials.github)}
              {renderSocialIcon('linkedin', resumeData.personal.socials.linkedin)}
              {renderSocialIcon('twitter', resumeData.personal.socials.twitter)}
            </div>
          </div>
        </div>
      );
    }

    if (theme.heroStyle === 'gradient') {
      return (
        <div className={`relative py-24 px-6 md:px-12 text-center overflow-hidden border-b border-slate-100 dark:border-slate-900 ${theme.darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
          <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${colors.gradient} opacity-20 blur-3xl animate-pulse`}></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white font-bold text-2xl flex items-center justify-center shadow-lg ${colors.glow}`}>
              {resumeData.personal.avatar || resumeData.personal.name.substring(0,2).toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              {resumeData.personal.name}
            </h1>
            <p className={`text-lg md:text-xl font-semibold ${colors.text} mb-6 max-w-2xl mx-auto`}>
              {resumeData.personal.title}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              {resumeData.personal.bio}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-slate-500 dark:text-slate-400">
              {resumeData.personal.email && (
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-slate-400" /> {resumeData.personal.email}
                </span>
              )}
              {resumeData.personal.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" /> {resumeData.personal.location}
                </span>
              )}
            </div>

            <div className="flex justify-center gap-3">
              {renderSocialIcon('github', resumeData.personal.socials.github)}
              {renderSocialIcon('linkedin', resumeData.personal.socials.linkedin)}
              {renderSocialIcon('twitter', resumeData.personal.socials.twitter)}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`py-20 px-6 md:px-12 max-w-5xl mx-auto border-b border-slate-100 dark:border-slate-900 ${theme.darkMode ? 'text-white' : 'text-slate-900'}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {resumeData.personal.name}
            </h1>
            <p className={`text-lg md:text-xl font-medium ${colors.text}`}>
              {resumeData.personal.title}
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              {resumeData.personal.bio}
            </p>
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400 pt-2">
              {resumeData.personal.email && (
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4" /> {resumeData.personal.email}
                </span>
              )}
              {resumeData.personal.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {resumeData.personal.location}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className={`w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 font-bold text-3xl flex items-center justify-center text-slate-800 dark:text-white shadow-inner border-2 ${colors.border}`}>
              {resumeData.personal.avatar || resumeData.personal.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex gap-2">
              {renderSocialIcon('github', resumeData.personal.socials.github)}
              {renderSocialIcon('linkedin', resumeData.personal.socials.linkedin)}
              {renderSocialIcon('twitter', resumeData.personal.socials.twitter)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${fontClass} min-h-screen flex flex-col transition-colors duration-300 ${theme.darkMode ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-800'}`}>
      <header className={`sticky top-0 z-30 backdrop-blur-md border-b transition-colors duration-200 ${
        theme.darkMode ? 'bg-slate-950/80 border-slate-900 text-white' : 'bg-white/80 border-slate-100 text-slate-950'
      }`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight text-lg">{resumeData.personal.name}</span>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* noinspection HtmlUnknownAnchorTarget */}
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {renderHero()}

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 space-y-20 w-full">
        {/* Timeline */}
        <section id="experience" className="scroll-mt-20">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className={`w-5 h-5 ${colors.text}`} />
            <h3 className="text-2xl font-bold tracking-tight">Work Experience</h3>
          </div>

          {resumeData.experience && resumeData.experience.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-2 border-l border-slate-100 dark:border-slate-900 md:border-l-0">
                {resumeData.experience.map((exp: any) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExperience(exp.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 border-l-2 text-sm ${
                      activeExperience === exp.id
                        ? `${colors.accentBg} ${colors.text} ${colors.border} font-semibold`
                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-xs opacity-80">{exp.period}</div>
                  </button>
                ))}
              </div>

              <div className="md:col-span-2">
                {resumeData.experience.map((exp: any) => exp.id === activeExperience && (
                  <div key={exp.id} className="space-y-4">
                    <h4 className="text-xl font-bold tracking-tight flex items-center flex-wrap gap-2">
                      {exp.position}
                      <span className={`text-xs font-normal px-2 py-0.5 rounded-md ${colors.badge}`}>
                        {exp.company}
                      </span>
                    </h4>
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </p>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed text-slate-500 dark:text-slate-400 pl-5 list-disc">
                      {exp.description.map((b: string, i: number) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        {/* Featured Work */}
        <section id="projects" className="scroll-mt-20">
          <div className="flex items-center gap-2 mb-8">
            <Code className={`w-5 h-5 ${colors.text}`} />
            <h3 className="text-2xl font-bold tracking-tight">Featured Work</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects && resumeData.projects.length > 0 ? (
              resumeData.projects.map((project: any) => (
                <div key={project.id} className={`p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-900/30 hover:shadow-xl transition-all ${colors.glow}`}>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}>{project.category}</span>
                  <h4 className="text-lg font-bold mt-3 flex items-center gap-1.5">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4" />
                  </h4>
                  <p className="text-sm text-slate-400 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {project.techStack.map((t: string, i: number) => (
                      <span key={i} className="text-xs bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 col-span-2">No projects added yet.</p>
            )}
          </div>
        </section>

        {/* Skillset */}
        <section id="skills" className="scroll-mt-20">
          <div className="flex items-center gap-2 mb-8">
            <Code className={`w-5 h-5 ${colors.text}`} />
            <h3 className="text-2xl font-bold tracking-tight">Technical Framework & Skillset</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, skills]: any) => (
              <div key={category} className="space-y-3 p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-900">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">{category}</h4>
                <div className="space-y-3">
                  {skills.map((skill: any) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${colors.bg} rounded-full`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="scroll-mt-20">
          <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-3xl font-extrabold">Let's launch something amazing</h3>
                <p className="text-slate-400 text-sm">Have a hiring requirement or contract project? Contact me directly!</p>
                {resumeData.personal.email && <p className="text-slate-300 text-xs">Email: {resumeData.personal.email}</p>}
              </div>

              <div className="md:col-span-3 bg-slate-800/50 rounded-2xl p-6">
                {submitSuccess ? (
                  <p className="text-emerald-400 font-bold text-center">Thanks for reaching out! Message sent.</p>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input
                      type="text" required value={contactName} onChange={e => setContactName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500"
                      placeholder="Name"
                    />
                    <input
                      type="email" required value={contactEmail} onChange={e => setContactEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500"
                      placeholder="Email"
                    />
                    <textarea
                      rows={3} required value={contactMessage} onChange={e => setContactMessage(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-indigo-500"
                      placeholder="Message Content"
                    />
                    <button type="submit" className="w-full bg-indigo-655 hover:bg-indigo-700 text-white py-2 rounded-lg text-xs font-bold">
                      Transmit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {resumeData.personal.name}. Generated with ProPortfolio Builder.</p>
      </footer>
    </div>
  );
}
