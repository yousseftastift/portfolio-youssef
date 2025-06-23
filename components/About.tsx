import React, { useEffect, useRef } from 'react';
import { ABOUT_ME_TEXT_PARAGRAPHS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      if (contentRef.current) {
         gsap.fromTo(
          contentRef.current.children, // Animate paragraphs individually
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef); // Scope context to sectionRef

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-800" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="opacity-0"> {/* Initial state for GSAP */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>
        </div>
        <div ref={contentRef} className="space-y-6 text-slate-300 text-lg leading-relaxed">
          {ABOUT_ME_TEXT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="opacity-0"> {/* Initial state for GSAP */}
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;