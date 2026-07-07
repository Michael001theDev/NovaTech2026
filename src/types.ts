export interface Project {
  id: string;
  title: string;
  category: string; // 'FinTech' | 'HealthTech' | 'AI & ML' | 'E-commerce'
  description: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  snippet: string;
  readTime: string;
}
