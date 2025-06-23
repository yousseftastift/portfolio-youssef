import React, { useEffect, useRef } from 'react';
import { PROJECTS_DATA, GithubIcon, GlobeAltIcon } from '../constants';
import type { Project } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col border-2 border-transparent hover:border-emerald-500/70 hover:shadow-2xl hover:shadow-emerald-500/20">
      <img src={project.imageUrl} alt={project.title} className="project-image w-full h-56 object-cover"/>
      <div className="project-content-wrapper p-6 flex flex-col flex-grow">
        <h3 className="project-title text-2xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="project-description text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="project-tags-wrapper mb-4">
          <p className="text-slate-300 font-medium mb-1">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-emerald-600/30 text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links-wrapper mt-auto flex flex-wrap gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 group bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <GlobeAltIcon className="w-5 h-5 mr-2 transform transition-transform duration-200 group-hover:scale-110" />
              Live Demo
            </a>
          )}
          {project.repoUrl && project.repoUrl !== '#' && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 group bg-slate-700 hover:bg-slate-600 text-slate-100"
            >
              <GithubIcon className="w-5 h-5 mr-2 transform transition-transform duration-200 group-hover:scale-110" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade-in animation for the title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
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

      // Simple staggered animation for project cards
      if (gridRef.current) {
        const cards = gsap.utils.toArray('.project-card') as HTMLElement[];
        
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-16"></div>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;