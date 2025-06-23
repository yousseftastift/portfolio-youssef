import React, { useEffect, useRef } from 'react';
import { CONTACT_METHODS_DATA, SOCIAL_LINKS, DEVELOPER_NAME } from '../constants';
import type { ContactMethod, SocialLink } from '../types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const contactCardsGridRef = useRef<HTMLDivElement>(null);
  const socialsIntroRef = useRef<HTMLHeadingElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const outroTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elementsToAnimate = [
        { ref: titleRef, y: 30 },
        { ref: introTextRef, y: 20, delay: 0.1 },
        // Cards will be animated separately with stagger
        { ref: socialsIntroRef, y: 20, delay: 0.3 },
        // Social icons will be animated separately with stagger
        { ref: outroTextRef, y: 20, delay: 0.5 },
      ];

      elementsToAnimate.forEach(item => {
        if (item.ref.current) {
          gsap.fromTo(
            item.ref.current,
            { autoAlpha: 0, y: item.y },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              delay: item.delay || 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item.ref.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      if (contactCardsGridRef.current) {
        gsap.fromTo(
          contactCardsGridRef.current.children,
          { autoAlpha: 0, y: 30, scale: 0.95 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contactCardsGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      
      if (socialIconsRef.current) {
         gsap.fromTo(
          socialIconsRef.current.children,
          { autoAlpha: 0, y: 20, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: socialIconsRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={titleRef} className="opacity-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>
        </div>

        <p ref={introTextRef} className="text-lg text-slate-300 mb-12 opacity-0">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
          Here are a few ways to reach me:
        </p>

        <div ref={contactCardsGridRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {CONTACT_METHODS_DATA.map((method: ContactMethod) => (
            <a
              key={method.id}
              href={method.url}
              target={method.id === 'email' || method.id === 'phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-card bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-emerald-500/30 transform transition-all duration-300 hover:scale-105 group text-left opacity-0"
              aria-label={`Contact ${DEVELOPER_NAME} via ${method.title}: ${method.detail}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {React.cloneElement(method.icon, { className: 'w-10 h-10 mt-1' })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-emerald-400 group-hover:text-emerald-300 transition-colors font-medium text-lg break-all">{method.detail}</p>
                  <p className="text-sm text-slate-400 mt-2">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div ref={socialsIntroRef} className="opacity-0">
            <h3 className="text-xl font-semibold text-slate-200 mb-6">Or Connect On Social Media</h3>
        </div>

        <div ref={socialIconsRef} className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300 opacity-0" // Added opacity-0 for GSAP
              aria-label={`Connect with ${DEVELOPER_NAME} on ${link.name}`}
            >
              {React.cloneElement(link.icon, { className: 'w-8 h-8 mb-1 transform transition-all duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-1' })}
              <span className="text-xs">{link.name}</span>
            </a>
          ))}
        </div>

        <p ref={outroTextRef} className="text-slate-400 opacity-0">
          Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;