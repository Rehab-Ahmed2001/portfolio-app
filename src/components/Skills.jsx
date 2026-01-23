import React from 'react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap, 
  FaSass 
} from "react-icons/fa"

import { 
  SiJavascript, 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiShadcnui
} from "react-icons/si"

const skills = [
  { icon: <FaHtml5 size={40} color="#e34c26" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: 'CSS' },
  { icon: <FaBootstrap size={40} color="#7952B3" />, name: 'BOOTSTRAP' },
  { icon: <FaSass size={40} color="#CC6699" />, name: 'SASS' },
  { icon: <SiTailwindcss size={40} color="#38bdf8" />, name: 'TAILWIND' },

  { icon: <SiJavascript size={40} color="#F7DF1E" />, name: 'JAVASCRIPT' },
  { icon: <SiTypescript size={40} color="#3178c6" />, name: 'TYPESCRIPT' },

  { icon: <FaReact size={40} color="#61DBFB" />, name: 'REACT' },
  { icon: <SiNextdotjs size={40} color="#000000" />, name: 'NEXT.JS' },

  { icon: <SiRedux size={40} color="#764ABC" />, name: 'REDUX' },
  { icon: <SiFramer size={40} color="#0055FF" />, name: 'FRAMER MOTION' },
  { icon: <SiShadcnui size={40} color="#000000" />, name: 'SHADCN/UI' },
]

export default function Skills() {
  return (
    <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-100"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center pt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

