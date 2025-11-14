import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Linkedin, Mail, Github, Menu, Users, Database, Home, Briefcase } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Team = () => {
  const navigate = useNavigate();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Project Lead & Systems Architect",
      bio: "15+ years of experience in transportation systems and smart city solutions. PhD in Computer Science from MIT.",
      expertise: ["System Design", "IoT Architecture", "Project Management"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Chen",
      position: "Lead Mobile Developer",
      bio: "Expert in cross-platform mobile development with a focus on real-time location-based applications.",
      expertise: ["React Native", "Mobile UX", "Real-time Systems"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      position: "Backend Engineer & Data Scientist",
      bio: "Specialized in scalable cloud architecture and predictive analytics for transportation optimization.",
      expertise: ["Cloud Infrastructure", "Machine Learning", "Data Analytics"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "James Kumar",
      position: "UX/UI Designer",
      bio: "Award-winning designer passionate about creating intuitive and accessible user experiences.",
      expertise: ["User Research", "Interface Design", "Accessibility"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Olivia Thompson",
      position: "DevOps & Security Engineer",
      bio: "Ensures system reliability, security, and performance through robust infrastructure and monitoring.",
      expertise: ["CI/CD", "Security", "System Monitoring"],
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoRoute</h1>
              <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/case-study')}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Case Study
            </Button>
            <Button 
              variant="default"
              className="text-sm font-medium"
            >
              Team
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-bold">EcoRoute</div>
                    <div className="text-xs text-muted-foreground font-normal">Smart Campus Solutions</div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/');
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors group text-left"
                >
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium group-hover:text-primary transition-colors">Home</span>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/case-study');
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors group text-left"
                >
                  <Database className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium group-hover:text-primary transition-colors">Case Study</span>
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border-l-4 border-primary text-left"
                >
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium text-primary">Team</span>
                </button>
                
                <div className="border-t pt-4 mt-4">
                  <div className="px-4 py-3 bg-muted/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Contact Us</p>
                    <p className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      info@ecoroute.edu
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-[length:60px_60px]" />
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground py-20">
          <Badge className="mb-4 bg-background/20 text-primary-foreground border-primary-foreground/30 animate-fade-in backdrop-blur-sm">
            EcoRoute Teams
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
            Meet The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              EcoRoute Teams
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards]">
            A passionate team of experts dedicated to revolutionizing campus transportation through cutting-edge technology
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">EcoRoute Teams</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Expert Team Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the talented individuals driving innovation at EcoRoute
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  data-animate
                  className="opacity-0 group overflow-hidden border-2 hover:border-primary transition-all hover:shadow-2xl hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img 
                      src={member.avatar}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-xs text-primary font-semibold">{member.position}</p>
                        <Badge variant="outline" className="mt-2 text-xs">EcoRoute Teams</Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                        LinkedIn
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 group/btn hover:bg-secondary hover:text-secondary-foreground"
                      >
                        <Mail className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-animate className="max-w-4xl mx-auto text-center opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Join Our Mission?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              We're always looking for talented individuals passionate about sustainable transportation 
              and innovative technology solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 shadow-lg hover:scale-105 transition-all"
              >
                View Open Positions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-background/30 text-primary-foreground hover:bg-background/10 backdrop-blur-sm"
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">EcoRoute</h3>
                    <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pioneering sustainable and efficient transportation solutions for modern campuses.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button 
                      onClick={() => navigate('/')} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/case-study')} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Case Study
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/team')} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Team
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    info@ecoroute.edu
                  </li>
                  <li>+1 (555) 123-4567</li>
                  <li>Campus Innovation Center</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-sm">
                Smart Campus Shuttle Tracking System - Requirement Analysis Case Study
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                © 2024 EcoRoute. All Rights Reserved. | Presented by the EcoRoute Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
