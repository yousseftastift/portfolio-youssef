import React, { useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      if (gridRef.current) {
        // Target children with a specific class for animation
        gsap.fromTo(
          ".skill-card", // Add this class to skill card divs
          { autoAlpha: 0, y: 30, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%', // Start a bit later for better visual
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="opacity-0"> {/* Initial state for GSAP */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-16"></div>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {SKILLS_DATA.map((skill: Skill) => (
            <div
              key={skill.id}
              // Add skill-card class for GSAP targeting and opacity-0 for initial state
              className="skill-card bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30 opacity-0"
            >
              <div className="mb-4">
                {skill.icon ? React.cloneElement(skill.icon, { className: 'w-10 h-10 text-emerald-400' }) : <div className="w-12 h-12 bg-emerald-500 rounded-full"></div>}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
              {skill.level && <p className="text-sm text-emerald-400">{skill.level}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;