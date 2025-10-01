import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Lightbulb, Heart } from 'lucide-react';

export const AboutSection = () => {
  const interests = [
    { icon: '💻', label: 'Programming' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '🚀', label: 'Innovation' },
    { icon: '📚', label: 'Learning' },
  ];

  const personalSkills = [
    'Autonomie', 'Communication', 'Gestion d\'équipe', 'Résolution de problèmes',
    'Adaptabilité', 'Rigueur', 'Force de proposition', 'Travail en équipe'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">À PROPOS</span> DE MOI
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* About Me Card */}
            <Card className="portfolio-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">QUI SUIS-JE ?</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Je suis passionné depuis mes premières lignes en QBasic par la création sur ordinateur. 
                  Fort d'une expérience significative en tant que facteur d'équipe, je possède des 
                  compétences solides en gestion du temps, organisation et communication.
                </p>
                
                <p>
                  Ma formation de Développeur Web m'a permis de développer une grande adaptabilité et 
                  de solides compétences en React, Node/Express, SQLite et MongoDB. Motivé à approfondir 
                  mes connaissances, mais aussi à découvrir d'autres langages.
                </p>
                
                <p>
                  Je suis ouvert à intégrer directement une équipe pour apprendre directement en situation, 
                  ou un contrat de professionnalisation pour m'améliorer toujours plus et ainsi contribuer 
                  efficacement à vos projets.
                </p>
              </div>
            </Card>

            {/* Personal Skills Card */}
            <Card className="portfolio-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-portfolio-cyan/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-portfolio-cyan" />
                </div>
                <h3 className="text-2xl font-bold">COMPÉTENCES PERSONNELLES</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {personalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Interests Card */}
            <Card className="portfolio-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-portfolio-purple/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-portfolio-purple" />
                </div>
                <h3 className="text-2xl font-bold">CENTRES D'INTÉRÊT</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm font-medium">{interest.label}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Philosophy Card */}
            <Card className="portfolio-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-portfolio-orange/20 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-portfolio-orange" />
                </div>
                <h3 className="text-2xl font-bold">MA PHILOSOPHIE</h3>
              </div>
              
              <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
                "L'expérience sans formation c'est aveugle, la formation sans expérience c'est vide. 
                La combinaison des deux crée un développeur complet."
              </blockquote>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  19 ans d'expérience + formation récente = profil junior unique
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};