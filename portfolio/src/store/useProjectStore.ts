import { create } from 'zustand';

// TypeScript Interfaces for strict typing
export interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  githubUrl: string; // Added property for the repository link
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [
    { 
      id: '1', 
      num: '01', 
      title: 'React Jobs Project', 
      description: 'A simple web app for searching and posting React job listings. This project is built using React and uses Supabase as the backend (Database & Authentication).',
      githubUrl: 'https://github.com/LaurensiusDani/react-jobs-project'
    },
    { 
      id: '2', 
      num: '02', 
      title: 'WhatsApp-AI-CS-Chatbot', 
      description: 'A smart cost-effective WhatsApp Customer Service chatbot template powered by Groq (Llama-3.1-8b-instant) featuring seamless admin manual handover (Auto-Pause) and anti-spam limits.',
      githubUrl: 'https://github.com/LaurensiusDani/whatsapp-ai-cs-chatbot'
    },
    { 
      id: '3', 
      num: '03', 
      title: 'Flappy Bird in Pygame', 
      description: 'A simple, retro-style Flappy Bird clone written in Python using pygame-ce (Pygame Community Edition). This implementation features smooth vertical sky gradients, parallax scrolling ground, dynamic bird rotation based on velocity, and vector-drawn elements.',
      githubUrl: 'https://github.com/LaurensiusDani/Flappy-Bird-Clone'
    },
  ],
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
}));