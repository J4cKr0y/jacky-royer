import { Navigation } from '@/components/portfolio/Navigation';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { TechStack } from '@/components/portfolio/TechStack';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
