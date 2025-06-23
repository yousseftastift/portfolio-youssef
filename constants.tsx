import React from 'react';
import { Project, Skill, SocialLink, NavLink, ContactMethod, ChatbotQA } from './types';

// SVG Icons
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.218.682-.484 0-.238-.009-.869-.014-1.705-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.089.635-1.339-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.547 9.547 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.375.203 2.392.1 2.645.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.689-4.567 4.935.359.309.679.92.679 1.852 0 1.335-.012 2.413-.012 2.741 0 .269.18.579.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.75 3H4.25A1.25 1.25 0 003 4.25v15.5A1.25 1.25 0 004.25 21h15.5A1.25 1.25 0 0021 19.75V4.25A1.25 1.25 0 0019.75 3zM8.07 18.25h-2.7V9.75h2.7v8.5zm-1.35-9.72a1.59 1.59 0 01-1.6-1.59c0-.88.72-1.59 1.6-1.59s1.6.71 1.6 1.59a1.59 1.59 0 01-1.6 1.59zm11.23 9.72h-2.7V14.1c0-1.04-.02-2.37-.99-2.37-.99 0-1.14.77-1.14 2.29v4.23h-2.7V9.75h2.59v1.27h.04c.39-.73 1.33-1.5 2.55-1.5 2.73 0 3.23 1.8 3.23 4.14v4.6z" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M2.25 5.25a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V5.25zM20.25 6H3.75v.9l8.25 5.5 8.25-5.5V6zm0 1.875l-8.25 5.5-8.25-5.5V18.75h16.5V7.875z" />
  </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21.75 12H2.25a8.959 8.959 0 0 1 1.816-5.418" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

export const LocationMarkerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />
  </svg>
);

export const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-2.184-2.183a11.25 11.25 0 00-1.279.096H7.75a1.125 1.125 0 01-1.125-1.125V6.108c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072V3.75a1.125 1.125 0 011.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v3.024a11.25 11.25 0 001.279-.096l2.183 2.183V8.511zM12 11.25a.375.375 0 110 .75.375.375 0 010-.75zM12 15a.375.375 0 110 .75.375.375 0 010-.75zM15.75 11.25a.375.375 0 110 .75.375.375 0 010-.75z" />
  </svg>
);

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Developer Info
export const DEVELOPER_NAME = "yousseftastift";
export const DEVELOPER_TITLE = " Web Developer  ";
export const PROFILE_IMAGE_URL = "https://avatars.githubusercontent.com/u/117593867?v=4";
export const HERO_INTRO = "I build engaging and user-friendly web experiences with a passion for clean code and modern design.";

// About Me
export const ABOUT_ME_TEXT_PARAGRAPHS = [
  `Hello! I'm ${DEVELOPER_NAME}, a dedicated web developer with a keen eye for aesthetics and a strong foundation in front-end technologies. I specialize in creating dynamic, responsive websites and applications using React, TypeScript, and Tailwind CSS.`,
  "My journey into web development started with a fascination for how design and technology intersect to create compelling digital experiences. I thrive on solving complex problems and continuously learning new skills to stay at the forefront of web innovation. I'm particularly interested in leveraging AI APIs like Gemini to build smarter, more interactive applications.",
  "When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee while sketching out new ideas."
];

// Skills
export const SKILLS_DATA: Skill[] = [
  { id: 'react', name: 'React', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Advanced' },
  { id: 'javascript', name: 'JavaScript (ES6+)', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Advanced' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Proficient' },
  { id: 'nodejs', name: 'Node.js', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Intermediate' },
  { id: 'html5', name: 'HTML5', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Expert' },
  { id: 'css3', name: 'CSS3', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Expert' },
  { id: 'git', name: 'Git & GitHub', icon: <GithubIcon className="w-10 h-10 text-emerald-400" />, level: 'Proficient' },
  { id: 'python', name: 'python', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Intermediate' },
  { id: 'ux ui', name: 'ux ui', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Expert' },
    { id: 'database', name: 'database', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Intermediate' },
  { id: 'laravel', name: 'laravel', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Expert' },
    { id: 'AI', name: 'AI', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Intermediate' },
  { id: 'php', name: 'php', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Intermediate' },
    { id: 'wordpress', name: 'wordpress', icon: <CodeBracketIcon className="w-10 h-10 text-emerald-400" />, level: 'Expert' },

];

// Projects
export const PROJECTS_DATA: Project[] = [
  /*
  {
    id: 'project1',
    title: 'E-commerce ',
    description: 'An advanced health e-commerce website offering curated wellness products. Built with React, Tailwind CSS, and Node.js. Features a clean, responsive design and a smooth user experience optimized for performance.',
    imageUrl: '/portfolio-youssef/images/Screenshot 2025-06-20 134416.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: `https://yousseftastift.github.io/health-ecommerce/`,
    repoUrl: `https://github.com/yousseftastift/health-ecommerce`,

  },
*/
  {
    id: 'project1',
    title: 'E-learning ',
    description: 'A responsive educational platform with interactive course pages, instructor profiles, and blog features — built using React, TypeScript, and Tailwind CSS.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQEYrlOcoOtaEA/feedshare-shrink_2048_1536/B56ZedZsKuHEAw-/0/1750692449183?e=1753315200&v=beta&t=x68yqGxZ9q93jERZl-h5kXCXQzB48cVxadKhHwhc5Wg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: `https://yousseftastift.github.io/e-learning/`,
    repoUrl: `https://github.com/yousseftastift/e-learning`,

  },
  {
    id: 'project2',
    title: 'restaurant website ',
    description: 'A sleek and modern restaurant site with menu display, online booking, and client testimonials — crafted with Next.js and Firebase.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQFARU8Bw8WdDA/feedshare-shrink_2048_1536/B56ZedZsKyHUAo-/0/1750692448698?e=1753315200&v=beta&t=mE9OrzX47N2_UXtgWJDxARJKAoE_N-h2Z_mHLtL9WpY',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'react', 'TypeScript'],
    liveUrl: 'https://yousseftastift.github.io/mon-restaurant/',
    repoUrl: 'https://github.com/yousseftastift/mon-restaurant',

  },
  {
    id: 'project3',
    title: 'E-commerce ',
    description: 'A stylish wellness e-commerce site offering curated products, built with React and Node.js, optimized for speed and mobile responsiveness.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQHQb9_eA15EaA/feedshare-shrink_2048_1536/B56ZedZsLWHQAo-/0/1750692447678?e=1753315200&v=beta&t=96A1FSXCqGGBGgi_ie7vUOF11aA3JdzSvkgn3Gfz-G4',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'react', 'TypeScript'],
    liveUrl: `https://yousseftastift.github.io/ecommerce-Pastel-Perfection/`,
    repoUrl: `https://github.com/yousseftastift/ecommerce-Pastel-Perfection`,

  }
];

// Contact Methods for new card design
export const CONTACT_METHODS_DATA: ContactMethod[] = [
  {
    id: 'email',
    title: 'Email',
    detail: `yousseftastift203@gmail.com`,
    description: 'Send me an email anytime',
    url: `mailto:yousseftastift203@gmail.com`,
    icon: <EmailIcon />,
  },
  {
    id: 'phone',
    title: 'Phone',
    detail: '+212 659-91-45-18',
    description: 'Call me for urgent matters',
    url: 'tel:+212659914518',
    icon: <PhoneIcon />,
  },
  {
    id: 'location',
    title: 'morocco ',
    detail: 'Digital Nomad',
    description: 'Available for remote work globally',
    url: 'https://www.google.com/maps/search/?api=1&query=ouarzazate',
    icon: <LocationMarkerIcon />,
  },
  {
    id: 'upwork',
    title: 'Upwork Freelance',
    detail: 'My Upwork Profile',
    description: 'Hire me for freelance projects',
    url: 'https://www.upwork.com/freelancers/~01ef0637ed828d78fd?viewMode=1',
    icon: <GlobeAltIcon />,
  },
];


// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'github', name: 'GitHub', url: `https://github.com/${DEVELOPER_NAME.toLowerCase()}`, icon: <GithubIcon /> },
  { id: 'linkedin', name: 'LinkedIn', url: `https://linkedin.com/in/${DEVELOPER_NAME.toLowerCase()}-dev`, icon: <LinkedinIcon /> },
];

export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${DEVELOPER_NAME}. All rights reserved.`;

// Chatbot Constants
export const CHATBOT_WELCOME_MESSAGE: string = "Hello! 👋 How can I help you today?";
export const CHATBOT_DEFAULT_RESPONSE: string = "I'm still learning. Try asking about my skills or projects!";
export const CHATBOT_TYPING_TEXT: string = "Bot is typing...";

export const CHATBOT_QA_DATA: ChatbotQA[] = [
  {
    id: 'greeting',
    questionKeywords: ['hi', 'hello', 'hey'],
    answer: CHATBOT_WELCOME_MESSAGE, // Uses the updated welcome message
    sampleQuestion: 'Hi there!'
  },
  {
    id: 'how_are_you',
    questionKeywords: ['how are you'],
    answer: "I'm doing great, thanks for asking! How can I help you today?",
    sampleQuestion: 'How are you?'
  },
  {
    id: 'identity',
    questionKeywords: ["what's your name", "what is your name", "who are you", "tell me about yourself"],
    answer: `I'm ${DEVELOPER_NAME}, a ${DEVELOPER_TITLE}.`,
    sampleQuestion: "What's your name?"
  },
  {
    id: 'what_developer_does',
    questionKeywords: ["what do you do", "what is your job", "what is your profession", "what do you work as"],
    answer: `I build modern, responsive web applications using React, Node.js, and more.`,
    sampleQuestion: "What do you do?"
  },
  {
    id: 'technologies',
    questionKeywords: ["what technologies do you use", "which technologies do you use", "what stack do you use", "what is your tech stack"],
    answer: "My stack includes React, TypeScript, Tailwind CSS, Node.js, and I also have experience with Python, Django, Docker, and Firebase.",
    sampleQuestion: "What technologies do you use?"
  },
  {
    id: 'projects_q',
    questionKeywords: ["can i see your projects", "show me your work", "do you have any projects", "portfolio", "where can i see your portfolio"],
    answer: `Of course! Just scroll to the Projects section on ${DEVELOPER_NAME}'s portfolio.`,
    sampleQuestion: "Can I see your projects?"
  },
  {
    id: 'contact_q',
    questionKeywords: ["how can i contact you", "how to contact you", "contact info", "what is your email", "how to reach you", "email"],
    answer: `You can reach ${DEVELOPER_NAME} via the contact form or email at ${DEVELOPER_NAME.toLowerCase()}@example.com.`,
    sampleQuestion: "How can I contact you?"
  },
  {
    id: 'location_q',
    questionKeywords: ["where are you from"],
    answer: "I'm based in the U.S., but I work with clients worldwide.", // Generic location as per original FAQ
    sampleQuestion: "Where are you from?"
  },
  {
    id: 'experience_q',
    questionKeywords: ["what is your experience"],
    answer: "I have several years of experience building full-stack apps and modern UIs.",
    sampleQuestion: "What's your experience?"
  },
  {
    id: 'coding_duration_q',
    questionKeywords: ["how long have you been coding"],
    answer: "I’ve been coding professionally for over 5 years.",
    sampleQuestion: "How long have you been coding?"
  },
  {
    id: 'freelance_q',
    questionKeywords: ["do you do freelance", "are you open for work", "do you accept freelance projects"],
    answer: "Yes! I'm available for freelance and contract work.",
    sampleQuestion: "Are you available for freelance?"
  },
  {
    id: 'skills_q',
    questionKeywords: ["what are your skills", "skills"],
    // Combining with SKILLS_DATA for a more dynamic answer could be an enhancement, but sticking to FAQ for now.
    answer: `My skills include React, TypeScript, Node.js, Tailwind CSS, and more. Check out the Skills section for details!`,
    sampleQuestion: "What are your skills?"
  },
  {
    id: 'build_q',
    questionKeywords: ["what can you build"],
    answer: "Web apps, landing pages, dashboards, portfolios, admin panels, and more.",
    sampleQuestion: "What can you build?"
  },
  {
    id: 'build_website_q',
    questionKeywords: ["can you build a website"],
    answer: "Absolutely! I specialize in building responsive and dynamic websites.",
    sampleQuestion: "Can you build a website?"
  },
  {
    id: 'services_q',
    questionKeywords: ["what services do you offer"],
    answer: "Web development, UI/UX design, API development, and consulting.",
    sampleQuestion: "What services do you offer?"
  },
  {
    id: 'tools_q',
    questionKeywords: ["what tools do you use"],
    answer: "VS Code, Git, Figma, Postman, Firebase, and many more.",
    sampleQuestion: "What tools do you use?"
  },
  {
    id: 'help_q',
    questionKeywords: ["can you help me", "help"],
    answer: "Of course! Just type your question and I'll do my best to help.",
    sampleQuestion: "Can you help me?"
  },
  {
    id: 'thanks_q',
    questionKeywords: ["thank you", "thanks", "thank you so much"],
    answer: "You're welcome! 😊",
    sampleQuestion: "Thank you"
  },
  {
    id: 'bye_q',
    questionKeywords: ["bye", "goodbye", "see you", "talk later"],
    answer: "Goodbye! Have a great day. 👋",
    sampleQuestion: "Bye"
  }
];