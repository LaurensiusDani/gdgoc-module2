  import { useProjectStore } from '../store/useProjectStore';
  import { ProjectCard } from '../components/ProjectCard';

  export default function ProjectsPage() {
    // Pulling global state from Zustand
    const projects = useProjectStore((state) => state.projects);

    return (
      <div className="max-w-[72rem] mx-auto px-6 py-24 md:py-32">
        <h1 className="font-display text-5xl md:text-7xl uppercase mb-16">Projects.</h1>
        
        <hr className="border-t-4 border-foreground mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }