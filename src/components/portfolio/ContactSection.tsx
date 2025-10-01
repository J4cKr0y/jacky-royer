import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'jacky.royer@example.com',
      color: 'text-portfolio-accent',
      bgColor: 'bg-portfolio-accent/20'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Localisation',
      value: 'France - Remote/Hybride',
      color: 'text-portfolio-cyan',
      bgColor: 'bg-portfolio-cyan/20'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Disponibilité',
      value: 'Immédiate',
      color: 'text-portfolio-purple',
      bgColor: 'bg-portfolio-purple/20'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      url: '#',
      color: 'hover:text-portfolio-accent'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      url: '#',
      color: 'hover:text-portfolio-cyan'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      url: 'mailto:jacky.royer@example.com',
      color: 'hover:text-portfolio-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">CONTACT</span> ME
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="portfolio-card">
                <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
                <p className="text-muted-foreground mb-8">
                  Vous avez un projet en tête ? Une équipe à renforcer ? 
                  N'hésitez pas à me contacter pour discuter de vos besoins. 
                  Je suis toujours ouvert aux nouvelles opportunités.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                      <div className={`w-10 h-10 rounded-lg ${info.bgColor} flex items-center justify-center`}>
                        <span className={info.color}>{info.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="portfolio-card">
                <h3 className="text-xl font-bold mb-4">Retrouvez-moi sur</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center transition-colors ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Testimonial */}
              <Card className="portfolio-card bg-primary/10 border-primary/20">
                <blockquote className="text-sm italic text-muted-foreground mb-4">
                  "Jacky est un développeur impliqué, rigoureux et force de proposition. 
                  Son expérience du terrain et sa capacité à s'intégrer rapidement font de lui un atout rare."
                </blockquote>
                <cite className="text-xs text-primary font-semibold">
                  — Recommandation LinkedIn client
                </cite>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="portfolio-card">
              <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre.email@example.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Parlez-moi de votre projet..."
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 glow-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};