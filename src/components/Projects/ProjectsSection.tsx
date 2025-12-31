import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { topProjects, allProjects, allTechnologies } from './projects-data';
import { Badge } from '@/components/ui/badge';

export const ProjectsSection = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? allProjects.filter((p) => p.technologies.includes(selectedTech))
    : allProjects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* --- TITRE --- */}
        <h2 className="text-4xl font-bold text-center mb-12">
          MES <span className="gradient-text">PROJETS</span>
        </h2>

        {/* --- FILTRAGE PAR TECHNO --- */}
        <h3 className="text-3xl font-bold text-center mb-8">
          Explorer par <span className="gradient-text">technologie</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechnologies.map((tech) => (
            <Badge
              key={tech}
              onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
              className={`cursor-pointer px-3 py-1 text-sm border-primary/40 ${
                selectedTech === tech ? 'bg-primary text-white' : ''
              }`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* --- PROJETS FILTRÉS --- */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
