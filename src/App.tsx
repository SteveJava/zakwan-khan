/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  User, 
  Layers,
  ChevronDown
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#141414] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F5F5F5]/80 backdrop-blur-md border-bottom border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold tracking-tighter">ZAKWAN.KHAN</span>
          <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#education" className="hover:opacity-100 transition-opacity">Education</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] opacity-40">Software Developer</span>
              <h1 className="text-7xl md:text-9xl font-medium tracking-tight leading-[0.85]">
                Zakwan Khan
              </h1>
            </div>
            
            <p className="max-w-xl text-lg md:text-xl opacity-60 leading-relaxed font-light">
              Building efficient software solutions with a focus on clean code and systems design. 
              Currently exploring the intersection of Computer Science and Business Computing.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="mailto:zakwanzar@gmail.com" className="flex items-center gap-2 group">
                <div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">Email</span>
              </a>
              <a href="https://github.com/SteveJava" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <div className="p-2 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Github size={16} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>
              <div className="flex items-center gap-2">
                <div className="p-2 border border-black/10 rounded-full">
                  <Phone size={16} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider opacity-60">064-654-2006</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0"
          >
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-20 animate-bounce">
              <span>Scroll</span>
              <ChevronDown size={14} />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-2 opacity-30">
                  <User size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest">About Me</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight">Focus & Drive</h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-2xl leading-relaxed opacity-70">
                I am a Computer Science graduate with a unique blend of technical expertise and business acumen. 
                My passion lies in developing scalable systems that solve real-world problems. 
                Whether it's building peer-to-peer sharing protocols or designing complex scheduling systems, 
                I strive for excellence in every line of code.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-30 mb-2">Location</h4>
                  <p>Cape Town, South Africa</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-30 mb-2">Availability</h4>
                  <p>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-2 opacity-30">
                  <Layers size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest">Stack</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight">Technical Skills</h2>
              </div>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-medium text-lg border-b border-black/10 pb-2">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "HTML", "CSS", "JavaScript", "C#"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-mono">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-medium text-lg border-b border-black/10 pb-2">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Windows Forms", ".NET Framework", "Git", "Docker", "UDP/TCP Sockets", "UML"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-mono">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-30">
                  <Code2 size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest">Workspace</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight">Selected Projects</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1: MiniTorrent */}
              <motion.div 
                {...fadeInUp}
                className="group bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 transition-colors space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Python / Networking</span>
                    <h3 className="text-2xl font-medium">MiniTorrent</h3>
                  </div>
                  <div className="p-3 bg-[#F5F5F5] rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <p className="opacity-60 text-sm leading-relaxed">
                  A peer-to-peer file sharing system using UDP and TCP sockets. Features protocol discovery, 
                  chunk-based distribution for parallel downloads, and transfer coordination.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">Sockets</span>
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">P2P</span>
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">Distributed</span>
                </div>
              </motion.div>

              {/* Project 2: Hotel Reservation */}
              <motion.div 
                {...fadeInUp}
                className="group bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 transition-colors space-y-6"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">.NET / C# / CRUD</span>
                    <h3 className="text-2xl font-medium">Hotel System</h3>
                  </div>
                  <div className="p-3 bg-[#F5F5F5] rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <p className="opacity-60 text-sm leading-relaxed">
                  Enterprise room booking and guest management system with database-backed CRUD operations. 
                  Includes full system design documentation and UML modeling.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">SQL</span>
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">WinForms</span>
                  <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">System Design</span>
                </div>
              </motion.div>

              {/* Project 3: University Test Scheduler */}
              <motion.div 
                {...fadeInUp}
                className="md:col-span-2 group bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 transition-colors flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/2 space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Capstone Project</span>
                    <h3 className="text-3xl font-medium">Test Scheduling System</h3>
                  </div>
                  <p className="opacity-60 text-sm leading-relaxed">
                    A comprehensive management system to coordinate exam allocations across courses, venues, and users. 
                    Utilized BPMN process models and complex architectural documentation.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">BPMN</span>
                    <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">Optimization</span>
                    <span className="px-2 py-1 bg-[#F5F5F5] rounded text-[10px] font-mono">Systems Architecture</span>
                  </div>
                </div>
                <div className="md:w-1/2 bg-[#F5F5F5] rounded-2xl p-6 flex items-center justify-center border border-black/5">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap size={24} />
                    </div>
                    <span className="block text-xs font-mono uppercase tracking-widest opacity-40 italic">Final Year Capstone</span>
                    <span className="block font-medium">University of Cape Town</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-2 opacity-30">
                  <Briefcase size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest">Timeline</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight">Experience</h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Co-Founder</h3>
                    <p className="opacity-60">Paracausal Events</p>
                  </div>
                  <span className="font-mono text-xs opacity-40 uppercase tracking-widest">Oct 2024 - Present</span>
                </div>
                <ul className="space-y-2 text-sm opacity-60 list-disc list-inside">
                  <li>Organise underground electronic music events in Cape Town.</li>
                  <li>Manage event logistics, artist coordination, and marketing.</li>
                  <li>Brand development and strategic planning.</li>
                </ul>
              </div>

              <div className="space-y-4 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">Senior Waiter</h3>
                    <p className="opacity-60">Fancy Franks</p>
                  </div>
                  <span className="font-mono text-xs opacity-40 uppercase tracking-widest">Dec 2022 - Jan 2024</span>
                </div>
                <p className="text-sm opacity-60">
                  Delivered high-quality customer service and coordinated front-of-house operations in a high-volume environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 px-6 max-w-7xl mx-auto border-t border-black/10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-2 opacity-30">
                  <GraduationCap size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest">Roots</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight">Education</h2>
              </div>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="p-8 bg-black text-white rounded-3xl space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-medium">BSc Computer Science & Business Computing</h3>
                    <p className="opacity-60">University of Cape Town</p>
                  </div>
                  <span className="font-mono text-xs opacity-40 uppercase tracking-widest">Dec 2025</span>
                </div>
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-40">Relevant Coursework</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Networks", "Operating Systems", "Software Design", 
                      "Computation Theory", "Parallel Programming", "Algorithms", 
                      "BPMN", "Enterprise Systems"
                    ].map(course => (
                      <span key={course} className="px-2 py-1 border border-white/20 rounded text-[10px] font-mono">{course}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-black/10 rounded-2xl space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Self-Paced</span>
                  <h4 className="font-medium">Full Stack Web Development</h4>
                  <p className="text-sm opacity-60">Udemy, 2026</p>
                </div>
                <div className="p-6 border border-black/10 rounded-2xl space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Specialization</span>
                  <h4 className="font-medium">Sound Technology</h4>
                  <p className="text-sm opacity-60">SAE Creative Media Institute, 2027</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono font-bold tracking-tighter text-xl">ZAKWAN.KHAN</span>
            <p className="text-xs opacity-40 tracking-widest uppercase">Built with precision © 2026</p>
          </div>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-[0.2em] opacity-40">
            <a href="https://github.com/SteveJava" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
            <a href="mailto:zakwanzar@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Resume PDF</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
