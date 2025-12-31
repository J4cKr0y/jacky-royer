import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Gamepad2, Brain, Code } from 'lucide-react';
import { ProjectTechnologies } from './ProjectTechnologies';
import { ProjectStats } from './ProjectStats';
import { ProjectFeatures } from './ProjectFeatures';

const icons = {
  gamepad: <Gamepad2 className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
};

export const ProjectCard = ({ project }) => {
  return (
    <Card className="portfolio-card group">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-lg bg-${project.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}
          >
            <span className={`text-${project.color}`}>{icons[project.icon]}</span>
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <ProjectTechnologies technologies={project.technologies} />

        {/* Stats */}
        {project.stats && <ProjectStats stats={project.stats} />}

        {/* Features */}
        <ProjectFeatures features={project.features} />

        {/* Actions */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Démo
              </a>
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:border-primary/60"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};
