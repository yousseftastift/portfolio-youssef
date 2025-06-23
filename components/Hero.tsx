
import React, { useEffect, useRef } from 'react';
import { DEVELOPER_NAME, DEVELOPER_TITLE, PROFILE_IMAGE_URL, HERO_INTRO, SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
// Removed: import FloatingOrbsBackground from './FloatingOrbsBackground';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const titleDescRef = useRef<HTMLParagraphElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const ctx = gsap.context(() => {
      // Set initial states for elements that will be animated
      gsap.set(
        [imgRef.current, h1Ref.current, titleDescRef.current, introTextRef.current, ctaButtonsRef.current, socialLinksRef.current],
        { autoAlpha: 0 }
      );

      tl.fromTo(imgRef.current, { y: -30, scale: 0.8 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 })
        .fromTo(h1Ref.current, { y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(titleDescRef.current, { y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(introTextRef.current, { y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(ctaButtonsRef.current, { y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(socialLinksRef.current, { y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 pt-20 overflow-hidden">
      {/* Removed: <FloatingOrbsBackground /> */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <img
            ref={imgRef}
            src={PROFILE_IMAGE_URL}
            alt={DEVELOPER_NAME}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 border-4 border-emerald-500 shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <h1 ref={h1Ref} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hi, I'm  <span className="text-emerald-400">YOUSSEF TASTIFT</span>
          </h1>

          <p ref={titleDescRef} className="mt-4 text-xl sm:text-2xl text-slate-300">
            {DEVELOPER_TITLE}
          </p>
          <p ref={introTextRef} className="mt-6 max-w-xl mx-auto text-lg text-slate-400">
            {HERO_INTRO}
          </p>
          <div ref={ctaButtonsRef} className="mt-10 flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-slate-700 hover:bg-slate-600 text-emerald-400 font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          <div ref={socialLinksRef} className="mt-12 flex justify-center space-x-6">
            {SOCIAL_LINKS.map((link: SocialLink) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
              >
                {React.cloneElement(link.icon, { className: 'w-8 h-8 transform transition-all duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-1' })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
