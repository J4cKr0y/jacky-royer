import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jackyProfile from '@/assets/jacky-profile.jpg';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow floating-animation">
                  <img 
                    src={jackyProfile} 
                    alt="Jacky Royer - Développeur Full-Stack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 animate-pulse" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
              <div className={`space-y-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="gradient-text">JACKY</span>{' '}
                  <span className="text-foreground">ROYER</span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-portfolio-accent font-semibold tracking-wide">
                  DÉVELOPPEUR FULL-STACK
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-xl">
                  Junior expérimenté : la maturité qui fait la différence. 
                  19 ans d'expérience professionnelle + formation développeur récente = 
                  un profil junior fiable, autonome et opérationnel dès le premier jour.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 glow-effect"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Discutons de votre projet
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 font-semibold px-8 py-3"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </Button>
              </div>

              {/* Social Links */}
              <div className={`flex justify-center lg:justify-start gap-6 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">19</div>
              <div className="text-sm text-muted-foreground">ans d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Remote/Hybride</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">38e</div>
              <div className="text-sm text-muted-foreground">sur 350 au concours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};