export type MatrixMode = 'matrix' | 'cyber' | 'off';

export interface FeaturedProject {
  id: string;
  icon: string;
  name: string;
  description: string;
  tech: string[];
  url: string;
  gradient: string;
}

export interface MobileProject {
  id: string;
  year: string;
  name: string;
  subtitle: string;
  type: 'Mobile';
  description: string;
  tech: string[];
  url: string;
  gradient: string;
  slides: string[];
}

export interface ArchiveProject {
  id: string;
  year: string;
  name: string;
  type: 'Web' | 'Mobile' | 'Security';
  description: string;
  tech: string[];
  url: string;
}

export interface BootcampPractice {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  badge?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  image?: string;
}
