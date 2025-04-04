"use client"

import { techStack } from "@/types/TechStacks"
import { useState } from "react"


export default function TechStackTimeline() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="p-6 bg-inherit text-white max-w-4xl mx-auto">
            <div className="relative">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0BC5EA] to-[#0BC5EA]/30"></div>

                {techStack.map((item, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col md:flex-row md:items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <div
                            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#1a202c] border-4 border-[#0BC5EA] z-10 transition-all duration-300"
                            style={{
                                boxShadow: activeIndex === index ? "0 0 15px #0BC5EA" : "none",
                                transform: activeIndex === index ? "scale(1.2) translate(-50%, 0)" : "translate(-50%, 0)",
                            }}
                        ></div>

                        <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                            <div
                                className={`p-5 rounded-lg transition-all duration-300 ${activeIndex === index ? "bg-[#2d3748] shadow-[0_0_15px_rgba(11,197,234,0.3)]" : "bg-[#1e2a3b]"
                                    }`}
                            >
                                <div className="text-[#0BC5EA] text-xl font-bold mb-1">{item.year}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.category}</h3>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {item.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-[#0BC5EA]/20 text-white rounded-md border border-[#0BC5EA]/30 text-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

