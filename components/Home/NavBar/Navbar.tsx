import React, { useState } from 'react'

const Navbar = () => {
  
  const [isDark, setIsDark] = useState(true);

  return (
    <ul
        id="navbar"
        className={`flex gap-10 pl-16 pt-10 justify-center items-center font-medium tracking-wide transition-colors duration-300 ${isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
      >
        {[
          { label: "ABOUT", href: "#about" },
          { label: "SKILLS", href: "#Skills" },
          { label: "PROJECT", href: "#project" },
          { label: "SERVICES", href: "#services" },
          { label: "RESUME", href: "#resume" },
          { label: "CONTACT", href: "#contact" },
        ].map((item) => (
          <li
            key={item.href}
            id={`nav-${item.label.toLowerCase()}`}
            className={`relative cursor-pointer transition-all duration-300
        hover:-translate-y-1 
        ${isDark
                ? "hover:text-white after:bg-white"
                : "hover:text-black after:bg-black"
              }
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:transition-all after:duration-300
        hover:after:w-full
      `}
          >
            <a href={item.href} className="block">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
  )
}

export default Navbar