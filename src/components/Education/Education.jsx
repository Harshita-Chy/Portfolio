import React from 'react'

const Education = () => {
  const educationList = [
    {
      institution: "Netaji Subhas University of Technology, Delhi",
      degree: "B.Tech Computer Science",
      duration: "2023 – 2027",
      score: "CGPA: 7.8"
    },
    {
      institution: "Kendriya Vidyalaya, Masjid Moth",
      degree: "CBSE Class XII",
      duration: "2022",
      score: "88.2%"
    },
    {
      institution: "Kendriya Vidyalaya, Masjid Moth",
      degree: "CBSE Class X",
      duration: "2020",
      score: "87.8%"
    }
  ]

  return (
    <div id="education" className="py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 [text-shadow:0_0_15px_#f64b35]">Education</h2>
      <div className="flex flex-col gap-8 max-w-4xl w-full px-6">
        {educationList.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 backdrop-blur-md bg-white/5 border border-[#f47346]/20 rounded-2xl hover:bg-white/10 hover:border-[#f47346]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,115,70,0.15)]">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-[#f47346] font-medium text-lg">{edu.degree}</p>
            </div>
            <div className="text-left md:text-right mt-2 md:mt-0">
              <span className="block text-gray-300 font-semibold mb-1">{edu.duration}</span>
              <span className="inline-block bg-[#f47346]/20 text-[#f47346] px-3 py-1 rounded-full text-sm font-bold border border-[#f47346]/30">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
