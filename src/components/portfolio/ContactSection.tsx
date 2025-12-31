import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

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
    
    try {
      // Configuration EmailJS
      const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'jacky.royer.dev@gmail.com',
    reply_to: formData.email
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      
      if (result.text === 'OK') {
        toast({
          title: "Message envoyé ! ✅",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      toast({
        title: "Erreur d'envoi ❌",
        description: "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'jacky.royer.dev@gmail.com',
      link: 'mailto:jacky.royer.dev@gmail.com',
      color: 'text-portfolio-accent',
      bgColor: 'bg-portfolio-accent/20'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Localisation',
      value: 'Occitanie/Var - Remote/Hybride',
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
      url: 'https://github.com/J4cKr0y',
      color: 'hover:text-portfolio-accent'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jacky-royer',
      color: 'hover:text-portfolio-cyan'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      url: 'mailto:jacky.royer.dev@gmail.com',
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
              <Card className="portfolio-card p-6">
                <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
                <p className="text-muted-foreground mb-8">
                  Vous avez un projet en tête ? Une équipe à renforcer ? 
                  N'hésitez pas à me contacter pour discuter de vos besoins. 
                  Je suis toujours ouvert aux nouvelles opportunités.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                      onClick={() => info.link && window.open(info.link, '_self')}
                    >
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
              <Card className="portfolio-card p-6">
                <h3 className="text-xl font-bold mb-4">Retrouvez-moi sur</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Card>

              {/* Testimonial */}
              <Card className="portfolio-card p-6 bg-primary/10 border-primary/20">
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
            <Card className="portfolio-card p-6">
              <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
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

                <p className="text-xs text-muted-foreground text-center">
                  Vos données seront envoyées de manière sécurisée via EmailJS.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};