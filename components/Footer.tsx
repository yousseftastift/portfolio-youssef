import React from 'react';
import { FOOTER_TEXT, SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
            {SOCIAL_LINKS.map((link: SocialLink) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 group"
              >
                {React.cloneElement(link.icon, { className: 'w-6 h-6 transform transition-all duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5' })}
              </a>
            ))}
          </div>
        <p className="text-sm">{FOOTER_TEXT}</p>
        <p className="text-xs mt-2">
            Built with React, TypeScript, and Tailwind CSS. Hosted with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;