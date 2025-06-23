import React from 'react';

export interface NavLink {
  id:string;
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactElement<{ className?: string }>;
  level?: string; // e.g., "Advanced", "Intermediate"
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactElement<{ className?: string }>;
}

export interface ContactMethod {
  id: string;
  title: string;
  detail: string;
  description: string;
  url: string;
  icon: React.ReactElement<{ className?: string }>;
}

export interface ChatbotQA {
  id: string;
  questionKeywords: string[];
  answer: string;
  sampleQuestion?: string; // Optional: A presentable version of a question for UI
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}
