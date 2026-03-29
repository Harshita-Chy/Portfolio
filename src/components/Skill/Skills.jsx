import React from 'react'

const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["C++", "Python", "JavaScript", "HTML5", "CSS3", "SQL"] },
    { title: "Frameworks & Stack", skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"] },
    { title: "Frontend", skills: ["Responsive UI", "DOM Manipulation", "API Integration", "Tailwind CSS"] },
    { title: "Tools & Platforms", skills: ["Git", "GitHub", "Figma", "Local Storage", "JWT Auth"] },
    { title: "CS Fundamentals", skills: ["DSA", "OOP", "OS", "DBMS", "Computer Networks"] }
  ]
  
  return (
    <div id="skills" className="py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight [text-shadow:0_0_10px_#f0a500]">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4 w-full">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-start w-full backdrop-blur-sm bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#f0a500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f0a500] shadow-[0_0_5px_#f0a500]"></span>
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 rounded-md border border-gray-700 bg-white/5 text-gray-300 text-xs font-medium hover:bg-[#f0a500]/10 hover:text-[#f0a500] hover:border-[#f0a500]/40 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills