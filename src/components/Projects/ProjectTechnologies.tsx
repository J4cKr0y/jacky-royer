import { Badge } from '@/components/ui/badge';

export const ProjectTechnologies = ({ technologies }) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech, index) => (
      <Badge key={index} variant="outline" className="text-xs border-primary/30">
        {tech}
      </Badge>
    ))}
  </div>
);
