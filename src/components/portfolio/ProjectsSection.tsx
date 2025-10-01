import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Gamepad2, Brain } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Pong Game',
      description: 'Recréation du jeu classique Pong avec JavaScript vanilla. Gameplay authentique, contrôles intuitifs, design minimaliste et système de score.',
      icon: <Gamepad2 className="h-6 w-6" />,
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Jest', 'Babel'],
      stats: {
        js: '66.8%',
        css: '27.5%',
        html: '5.7%'
      },
      features: [
        'Mode un joueur vs IA',
        'Mode deux joueurs',
        'Effets sonores',
        'Design responsive',
        'Tests unitaires'
      ],
      liveUrl: 'https://j4ckr0y.github.io/Pong/',
      githubUrl: '#',
      color: 'portfolio-accent'
    },
    {
      title: 'Mastermind',
      description: 'Version moderne du jeu de déduction Mastermind développé avec Next.js et TypeScript. Interface réactive et logique avancée.',
      icon: <Brain className="h-6 w-6" />,
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      features: [
        'Rendu côté serveur (SSR)',
        'Interface réactive',
        'Logique sophistiquée',
        'Optimisé pour mobile',
        'Déploiement Vercel'
      ],
      liveUrl: 'https://mastermind-bay-three.vercel.app',
      githubUrl: '#',
      color: 'portfolio-purple'
    },
    {
      title: 'Portfolio Web',
      description: 'Portfolio personnel développé avec des technologies modernes. Design responsive, animations fluides et architecture modulaire.',
      icon: <Code className="h-6 w-6" />,
      technologies: ['React', 'TypeScript', 'CSS3', 'JavaScript'],
      features: [
        'Design responsive',
        'Animations CSS',
        'Architecture modulaire',
        'Interface intuitive',
        'Code propre et documenté'
      ],
      githubUrl: '#',
      color: 'portfolio-cyan'
    }
  ];


/*https://j4ckr0y.github.io/LandingPage
https://j4ckr0y.github.io/Nina-Carducci-Dev
https://j4ckr0y.github.io/Booki/*/

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            MES <span className="gradient-text">PROJETS</span>
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="portfolio-card group">
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-${project.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className={`text-${project.color}`}>{project.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats for Pong project */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-4 py-4 bg-secondary/30 rounded-lg px-4">
                      <div className="text-center">
                        <div className="font-bold text-portfolio-accent">{project.stats.js}</div>
                        <div className="text-xs text-muted-foreground">JavaScript</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-portfolio-cyan">{project.stats.css}</div>
                        <div className="text-xs text-muted-foreground">CSS</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-portfolio-purple">{project.stats.html}</div>
                        <div className="text-xs text-muted-foreground">HTML</div>
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Fonctionnalités clés :</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
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
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="portfolio-card inline-block">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">Envie de voir plus ?</h3>
                <p className="text-muted-foreground">
                  Découvrez tous mes projets sur GitHub
                </p>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Voir tous les projets
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};