import React from 'react'

const Achievements = () => {
  const achievements = [
    "Cleared Round 1 of HackOn Hackathon by Amazon (2025).",
    "Participating in ISRO Bharatiya Antariksh Hackathon 2025.",
    "Academic Excellence Award — Central Railway Employees' Co-operative Credit Society (Class 10 & 12).",
    "Highest marks in Class 10 & 12 board exams; featured in school hoarding, and news interview.",
  ]

  const leadership = [
    {
      title: "Competitive Programming Head — D'Code, NSUT",
      duration: "2023 – Present",
      desc: "Organized 10+ large-scale hackathons and technical events, boosting student engagement by 3x; mentored juniors in DSA and frontend development. Led frontend design for society projects."
    },
    {
      title: "Junior Counsel — DevComm, Delhi",
      duration: "2023 – Present",
      desc: "Promoted open-source culture; co-organized Web Development Week for new members."
    },
    {
      title: "Volunteer — NSS Delhi",
      duration: "2023 – Present",
      desc: "Participated in health camps, blood donation drives, plantation campaigns, and a 50 km social awareness marathon."
    }
  ]

  return (
    <div id="achievements" className="py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 [text-shadow:0_0_15px_#f64b35] text-center">Achievements & Leadership</h2>
      
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl w-full px-6">
        
        {/* Achievements Section */}
        <div className="flex-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f47346]/40 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#f47346] pb-2 inline-block">Accomplishments</h3>
          <ul className="space-y-4">
            {achievements.map((ach, index) => (
              <li key={index} className="flex items-start text-gray-300 leading-relaxed">
                <span className="text-[#f47346] mr-3 mt-1">✦</span>
                <span>{ach}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leadership Section */}
        <div className="flex-1 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f47346]/40 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#f47346] pb-2 inline-block">Leadership & Extracurriculars</h3>
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-[#f47346]/50 hover:border-[#f47346] transition-colors">
                <div className="absolute w-3 h-3 bg-[#f47346] rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_#f64b35]"></div>
                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                <span className="block text-sm font-semibold text-[#f47346] mb-2">{item.duration}</span>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Achievements
