import React from 'react'

const Work = () => {
  const projects = [
    {
      title: "HireHub",
      subtitle: "Full-Stack Job Portal",
      description: "Built a scalable MERN job portal with JWT auth and role-based access, supporting 2 user roles and 10+ REST APIs. Designed 4 MongoDB schemas with secure middleware, effectively reducing unauthorized access and improving query efficiency.",
      tech: ["MERN Stack", "JWT Auth", "REST APIs"],
      link: "#"
    },
    {
      title: "ChatSync",
      subtitle: "Real-Time Chat Application",
      description: "Developed a real-time chat system enabling instant message delivery (<200ms latency) with persistent history for concurrent users. Implemented JWT authentication and optimized React state updates.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "To-Do List Web App",
      subtitle: "Smart Productivity Engine",
      description: "Engineered a responsive task manager with drag-and-drop UI and offline sync via Local Storage; boosted task efficiency by 40% in user tests.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
    {
      title: "AI Chatbot",
      subtitle: "Real-Time Virtual Assistant",
      description: "Developed an AI chatbot achieving 75% response accuracy using NLP APIs and event-driven architecture with asynchronous API calls for low-latency interactions.",
      tech: ["JavaScript", "REST APIs", "NLP"],
      link: "#"
    },
    {
      title: "Digital Twin",
      subtitle: "AI-Powered Infrastructure Simulation",
      description: "Built an ANN-based deep learning system trained on real-world water supply datasets to simulate pipeline operations and predict real-time leak detection and supply-demand fluctuations.",
      tech: ["Deep Learning", "ANN", "Python", "Flask", "Data Simulation"],
      link: "https://github.com/Harshita-Chy/Digital_Twin.git"
    }
  ]

  return (
    <div id="projects" className="py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 [text-shadow:0_0_15px_#f64b35]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#f47346]/80 transition-all duration-400 hover:shadow-[0_0_35px_rgba(244,115,70,0.2)] group hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-[#f47346] transition-colors duration-300">{project.title}</h3>
            <p className="text-[#f47346] text-sm font-semibold tracking-wide uppercase mb-4">{project.subtitle}</p>
            <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-semibold text-white bg-[#f47346]/20 border border-[#f47346]/40 px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
            <a href={project.link} target='_blank' rel='noopener noreferrer' className="inline-flex items-center gap-2 mt-auto w-fit text-sm font-bold text-white uppercase tracking-wider border-b-2 border-transparent hover:border-[#f47346] pb-1 transition-all duration-300">
              View Project <span className="text-[#f47346] group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
