import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Wrench } from 'lucide-react';

export const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: <Code className="h-5 w-5" />,
      color: 'text-portfolio-accent',
      bgColor: 'bg-portfolio-accent/20',
      technologies: ['React', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'JavaScript ES6+', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Database className="h-5 w-5" />,
      color: 'text-portfolio-cyan',
      bgColor: 'bg-portfolio-cyan/20',
      technologies: ['Node.js', 'Express', 'Java', '.NET/C#', 'API REST', 'Jest']
    },
    {
      title: 'Mobile & Database',
      icon: <Smartphone className="h-5 w-5" />,
      color: 'text-portfolio-purple',
      bgColor: 'bg-portfolio-purple/20',
      technologies: ['React Native', 'Expo', 'MongoDB', 'Firebase/Firestore', 'SQLite']
    },
    {
      title: 'Outils & DevOps',
      icon: <Wrench className="h-5 w-5" />,
      color: 'text-portfolio-orange',
      bgColor: 'bg-portfolio-orange/20',
      technologies: ['Git', 'GitHub Actions', 'CI/CD', 'Babel', 'Vite', 'Vercel']
    }
  ];

  return (
    <section id="tech" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            STACK <span className="gradient-text">TECHNIQUE</span>
          </h2>

          {/* Technology Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {techCategories.map((category, index) => (
              <Card key={index} className="portfolio-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <span className={category.color}>{category.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="mr-2 mb-2 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Highlight */}
          <div className="mt-12 text-center">
            <Card className="portfolio-card inline-block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">38e</span>
                </div>
                <div className="text-left">
                  <p className="font-bold">Concours Code In Time</p>
                  <p className="text-sm text-muted-foreground">38e sur 350 participants</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};