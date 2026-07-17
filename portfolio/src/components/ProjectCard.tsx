import React from 'react';
import type { Project } from '../store/useProjectStore';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border border-border p-10 transition-all duration-100 ease-in-out hover:bg-foreground hover:text-background group flex flex-col h-full">
      <span className="font-mono text-sm text-muted-foreground mb-6 block group-hover:text-background transition-colors duration-100">
        {project.num} / PROJECT
      </span>
      
      <h3 className="font-display text-2xl">{project.title}</h3>
      
      <p className="mt-4 opacity-80 mb-12">{project.description}</p>
      
      {/* 
        mt-auto pushes the link to the very bottom of the card.
        The ghost button style relies on a bottom border for the underline effect.
      */}
      <a 
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-foreground group-hover:border-background pb-1 w-fit transition-colors duration-100"
      >
        View Repository <span>&rarr;</span>
      </a>
    </article>
  );
};