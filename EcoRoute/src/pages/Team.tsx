import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Github, MapPin, Users, Award, Code, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const Team = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      name: "Sarah Chen",
      position: "Lead Software Engineer",
      initials: "SC",
      bio: "10+ years of experience in full-stack development and system architecture. Passionate about building scalable solutions.",
      gradient: "from-blue-500 to-cyan-500",
      icon: Code,
    },
    {
      name: "Marcus Rodriguez",
      position: "Product Manager",
      initials: "MR",
      bio: "Strategic product leader with expertise in transportation technology and user experience design.",
      gradient: "from-purple-500 to-pink-500",
      icon: Zap,
    },
    {
      name: "Emily Watson",
      position: "UX/UI Designer",
      initials: "EW",
      bio: "Award-winning designer specializing in mobile interfaces and accessibility. Creating intuitive user experiences.",
      gradient: "from-green-500 to-emerald-500",
      icon: Award,
    },
    {
      name: "David Kim",
      position: "DevOps Engineer",
      initials: "DK",
      bio: "Cloud infrastructure specialist ensuring 99.9% uptime and seamless deployments. Expert in containerization.",
      gradient: "from-orange-500 to-red-500",
      icon: Code,
    },
    {
      name: "Alexandra Park",
      position: "Data Scientist",
      initials: "AP",
      bio: "Machine learning expert optimizing routes and predicting demand patterns using advanced analytics.",
      gradient: "from-indigo-500 to-purple-500",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoRoute</h1>
              <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/#overview" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Overview</a>
            <a href="/#solution" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Solution</a>
            <a href="/team" className="text-sm font-medium text-primary">Team</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div data-animate className="text-center max-w-4xl mx-auto opacity-0">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Meet Our Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              The People Behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                EcoRoute
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A talented team of engineers, designers, and innovators dedicated to revolutionizing campus transportation
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => {
                const Icon = member.icon;
                return (
                  <Card
                    key={index}
                    data-animate
                    className="opacity-0 border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <Avatar className="w-24 h-24 border-4 border-background shadow-lg group-hover:scale-110 transition-transform">
                          <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white text-2xl font-bold`}>
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle className="text-2xl mb-2 text-foreground">{member.name}</CardTitle>
                      <CardDescription className="text-base font-semibold text-primary">
                        {member.position}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3 pt-2">
                        <a
                          href="#"
                          className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group-hover:scale-110"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group-hover:scale-110"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all group-hover:scale-110"
                          aria-label={`GitHub profile of ${member.name}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Our Impact</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Team Achievements</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Years Combined Experience", value: "50+", icon: Award },
                { label: "Projects Delivered", value: "200+", icon: Code },
                { label: "Team Members", value: "5", icon: Users },
                { label: "Countries Served", value: "15+", icon: MapPin },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    data-animate
                    className="opacity-0 text-center border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-4xl font-bold text-primary mb-2">{stat.value}</CardTitle>
                      <CardDescription className="text-sm">{stat.label}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-card to-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">EcoRoute</h3>
                    <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  Pioneering sustainable and efficient transportation solutions for modern campuses.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/#overview" className="hover:text-primary transition-colors">Overview</a></li>
                  <li><a href="/#solution" className="hover:text-primary transition-colors">Solution</a></li>
                  <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>info@ecoroute.edu</li>
                  <li>+1 (555) 123-4567</li>
                  <li>Campus Innovation Center</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border text-center">
              <p className="text-foreground text-sm">
                Smart Campus Shuttle Tracking System - Requirement Analysis Case Study
              </p>
              <p className="text-foreground text-sm mt-2">
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
