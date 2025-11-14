import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Users, Clock, Smartphone, Database, Shield, Zap, Leaf, Navigation, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-campus-shuttle.jpg";
import mobileAppImage from "@/assets/mobile-app-mockup.jpg";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import gpsHardwareImage from "@/assets/gps-hardware.jpg";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observe all elements with the data-animate attribute
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoRoute</h1>
              <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Overview</a>
            <a href="#problem" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Problem</a>
            <a href="#requirements" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Requirements</a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Solution</a>
            <a href="/team" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Team</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Smart Campus Shuttle System" 
            className="w-full h-full object-cover animate-scale-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/85 to-accent/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <Badge className="mb-4 bg-background/20 text-primary-foreground border-primary-foreground/30 animate-fade-in backdrop-blur-sm">
            Requirement Analysis Case Study by EcoRoute
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Smart Campus Shuttle
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
              Tracking System
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards]">
            A comprehensive analysis of requirements for modernizing campus transportation through real-time tracking and intelligent routing
          </p>
          <div className="flex gap-4 justify-center opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 hover:scale-105 transition-all shadow-lg"
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Case Study
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-background/30 text-primary-foreground hover:bg-background/10 backdrop-blur-sm"
            >
              View Demo
            </Button>
          </div>

          {/* Floating stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16 opacity-0 animate-fade-in-up [animation-delay:800ms] [animation-fill-mode:forwards]">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-background/20 hover:bg-background/20 transition-all hover:scale-105">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm opacity-90">Less Wait Time</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-background/20 hover:bg-background/20 transition-all hover:scale-105">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-sm opacity-90">Fuel Savings</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-background/20 hover:bg-background/20 transition-all hover:scale-105">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/70 rounded-full" />
          </div>
          </div>
        </section>

        {/* Bus Animation Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,95%,45%,0.05),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Live Tracking</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Real-Time Bus Movement</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch our smart shuttles navigate campus routes in real-time with precision GPS tracking
              </p>
            </div>
            
            {/* Animated Bus Container */}
            <div className="relative h-64 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl border-2 border-primary/20 overflow-hidden">
              {/* Road background */}
              <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-muted/40" />
              
              {/* Road center line */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-0.5 border-t-2 border-dashed border-primary/40 relative">
                  <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-bus-move" />
                </div>
              </div>
              
              {/* Moving Bus */}
              <div className="absolute bottom-12 left-0 animate-bus-move animate-bus-bounce">
                <div className="relative">
                  {/* Bus body */}
                  <div className="w-32 h-20 bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-lg shadow-2xl border-2 border-primary/50 relative">
                    {/* Bus windows */}
                    <div className="absolute top-2 left-2 w-8 h-6 bg-background/80 rounded border border-primary/30" />
                    <div className="absolute top-2 left-12 w-8 h-6 bg-background/80 rounded border border-primary/30" />
                    <div className="absolute top-2 left-[88px] w-8 h-6 bg-background/80 rounded border border-primary/30" />
                    {/* Bus door */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-secondary/50 rounded-t border border-secondary/50" />
                    {/* EcoRoute logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background/90 flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  {/* Bus wheels */}
                  <div className="absolute -bottom-2 left-4 w-6 h-6 bg-foreground rounded-full border-2 border-primary/50" />
                  <div className="absolute -bottom-2 right-4 w-6 h-6 bg-foreground rounded-full border-2 border-primary/50" />
                </div>
              </div>
              
              {/* GPS indicator */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-foreground">GPS Active</span>
                </div>
              </div>
            </div>
            
            <div data-animate className="mt-8 text-center opacity-0">
              <p className="text-sm text-muted-foreground">
                Our shuttles are equipped with advanced GPS tracking technology for accurate real-time location updates
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
      <section id="overview" className="py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Project Overview</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Revolutionizing Campus Transportation</h2>
              <p className="text-lg text-muted-foreground">
                This case study examines the development of a Smart Campus Shuttle Tracking System designed to transform 
                how students, faculty, and staff interact with campus transportation services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card data-animate className="opacity-0 border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-2 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Target Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Students, faculty, staff, and campus administrators across the entire university ecosystem</p>
                </CardContent>
              </Card>
              
              <Card data-animate className="opacity-0 border-2 hover:border-secondary transition-all hover:shadow-lg hover:-translate-y-2 group [animation-delay:200ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Campus-wide shuttle fleet with real-time GPS tracking and intelligent route optimization</p>
                </CardContent>
              </Card>
              
              <Card data-animate className="opacity-0 border-2 hover:border-accent transition-all hover:shadow-lg hover:-translate-y-2 group [animation-delay:400ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Improved efficiency, reduced wait times, enhanced sustainability and user experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div data-animate className="opacity-0">
              <Badge className="mb-4">Mobile Experience</Badge>
              <h3 className="text-4xl font-bold mb-6 text-foreground">Track Your Ride in Real-Time</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our intuitive mobile application puts the power of real-time tracking at your fingertips. 
                See exactly where shuttles are, get accurate arrival predictions, and plan your commute with confidence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Live Location Updates</strong>
                    <p className="text-sm text-muted-foreground">30-second refresh intervals for accurate tracking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Smart ETA Predictions</strong>
                    <p className="text-sm text-muted-foreground">AI-powered arrival time calculations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Push Notifications</strong>
                    <p className="text-sm text-muted-foreground">Instant alerts for arrivals and delays</p>
                  </div>
                </li>
              </ul>
            </div>
            <div data-animate className="opacity-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src={mobileAppImage} 
                alt="Mobile App Interface" 
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-destructive/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge variant="destructive" className="mb-4">Current Challenges</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Problem Statement</h2>
            </div>
            
            <Card data-animate className="opacity-0 bg-card shadow-xl border-2 border-destructive/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-destructive via-orange-500 to-destructive" />
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Current campus shuttle systems face several critical challenges that impact user satisfaction and operational efficiency:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold mb-1">Unpredictable Wait Times</p>
                      <p className="text-muted-foreground">Students have no visibility into shuttle locations or arrival times, leading to frustration and missed classes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Navigation className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold mb-1">Inefficient Route Planning</p>
                      <p className="text-muted-foreground">Fixed routes don't adapt to demand patterns or campus events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold mb-1">Limited Communication</p>
                      <p className="text-muted-foreground">No real-time updates about delays, route changes, or service disruptions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold mb-1">Operational Blind Spots</p>
                      <p className="text-muted-foreground">Administrators lack data-driven insights for fleet management and optimization</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Analysis */}
      <section id="requirements" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Technical Specifications</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Requirements Analysis</h2>
              <p className="text-lg text-muted-foreground">Comprehensive breakdown of system capabilities and constraints</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Functional Requirements */}
              <Card data-animate className="opacity-0 border-2 border-primary/20 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    Functional Requirements
                  </CardTitle>
                  <CardDescription>Core features and capabilities</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Real-Time GPS Tracking</strong>
                        <p className="text-sm text-muted-foreground">Display shuttle locations with 30-second update intervals</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">ETA Calculations</strong>
                        <p className="text-sm text-muted-foreground">Predict arrival times based on current traffic and route conditions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Route Visualization</strong>
                        <p className="text-sm text-muted-foreground">Interactive maps showing all routes and stops</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Push Notifications</strong>
                        <p className="text-sm text-muted-foreground">Alerts for arrivals, delays, and service changes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Historical Data</strong>
                        <p className="text-sm text-muted-foreground">Analytics dashboard for usage patterns and optimization</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Multi-Platform Support</strong>
                        <p className="text-sm text-muted-foreground">iOS, Android, and web applications</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Non-Functional Requirements */}
              <Card data-animate className="opacity-0 border-2 border-secondary/20 hover:shadow-2xl transition-all hover:-translate-y-1 [animation-delay:200ms]">
                <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
                <CardHeader className="bg-secondary/5">
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    Non-Functional Requirements
                  </CardTitle>
                  <CardDescription>Performance, security, and quality attributes</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">High Availability</strong>
                        <p className="text-sm text-muted-foreground">99.9% uptime during operational hours (6 AM - 11 PM)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Scalability</strong>
                        <p className="text-sm text-muted-foreground">Support 10,000+ concurrent users during peak times</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Response Time</strong>
                        <p className="text-sm text-muted-foreground">Location updates within 2 seconds, page loads under 3 seconds</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Data Security</strong>
                        <p className="text-sm text-muted-foreground">Encrypted data transmission, GDPR compliance for user data</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Accessibility</strong>
                        <p className="text-sm text-muted-foreground">WCAG 2.1 Level AA compliance for all interfaces</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <strong className="text-foreground">Battery Efficiency</strong>
                        <p className="text-sm text-muted-foreground">Minimal battery drain on mobile devices (&lt;5% per hour)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div data-animate className="opacity-0 relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={dashboardImage} 
                alt="Analytics Dashboard" 
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div data-animate className="opacity-0 order-1 md:order-2">
              <Badge className="mb-4">Admin Dashboard</Badge>
              <h3 className="text-4xl font-bold mb-6 text-foreground">Data-Driven Fleet Management</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Powerful analytics and monitoring tools give administrators complete visibility into fleet operations, 
                enabling data-driven decisions that optimize routes, reduce costs, and improve service quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Real-Time Fleet Monitoring</strong>
                    <p className="text-sm text-muted-foreground">Track all shuttles simultaneously on an interactive map</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Usage Analytics</strong>
                    <p className="text-sm text-muted-foreground">Comprehensive reports on ridership patterns and demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <strong className="text-foreground">Route Optimization</strong>
                    <p className="text-sm text-muted-foreground">AI-powered suggestions for improving efficiency</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section id="solution" className="py-20 bg-card relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Our Approach</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Proposed Solution Architecture</h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive system architecture designed to meet all identified requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card data-animate className="opacity-0 hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <Smartphone className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Mobile Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Native iOS and Android apps with intuitive interfaces, real-time maps, and push notifications
                  </p>
                </CardContent>
              </Card>

              <Card data-animate className="opacity-0 hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-secondary/50 [animation-delay:100ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <Database className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Backend Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cloud-based microservices architecture with real-time data processing and scalable storage
                  </p>
                </CardContent>
              </Card>

              <Card data-animate className="opacity-0 hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-accent/50 [animation-delay:200ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <MapPin className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">GPS Tracking Units</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hardware devices installed on shuttles with 4G connectivity and high-precision GPS
                  </p>
                </CardContent>
              </Card>

              <Card data-animate className="opacity-0 hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-primary/50 [animation-delay:300ms]">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">Admin Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Web-based management portal for fleet monitoring, analytics, and route optimization
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Hardware Showcase */}
            <div data-animate className="opacity-0 mt-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 border-2 border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">Hardware Component</Badge>
                  <h3 className="text-2xl font-bold mb-4">GPS Tracking Technology</h3>
                  <p className="text-muted-foreground mb-6">
                    State-of-the-art GPS hardware provides accurate, real-time location data with minimal power consumption 
                    and maximum reliability, even in challenging urban environments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">High-precision GPS (±2m accuracy)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">4G LTE connectivity with fallback</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">Ruggedized for vehicle mounting</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
                  <img 
                    src={gpsHardwareImage} 
                    alt="GPS Tracking Hardware" 
                    className="relative rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div data-animate className="text-center mb-12 opacity-0">
              <Badge className="mb-4">Expected Outcomes</Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Benefits & Impact</h2>
              <p className="text-lg text-muted-foreground">
                Measurable improvements in user experience and operational efficiency
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card data-animate className="opacity-0 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Users className="w-6 h-6" />
                    For Users
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Reduced average wait time by <strong className="text-primary">40%</strong></p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Improved trip planning and time management</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Enhanced accessibility for students with disabilities</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Increased ridership and satisfaction scores</p>
                  </div>
                </CardContent>
              </Card>

              <Card data-animate className="opacity-0 bg-gradient-to-br from-secondary/5 to-secondary/10 border-2 border-secondary/20 hover:shadow-xl transition-all hover:-translate-y-1 [animation-delay:200ms]">
                <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Shield className="w-6 h-6" />
                    For Administration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Data-driven route optimization reducing fuel costs by <strong className="text-secondary">25%</strong></p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Real-time fleet monitoring and incident response</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Predictive maintenance reducing vehicle downtime</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-foreground">Comprehensive analytics for strategic planning</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div data-animate className="max-w-4xl mx-auto text-center opacity-0">
            <Badge className="mb-6 bg-background/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm">
              Final Thoughts
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Conclusion</h2>
            <p className="text-lg md:text-xl mb-6 opacity-95 leading-relaxed">
              The Smart Campus Shuttle Tracking System addresses critical pain points in campus transportation through 
              a comprehensive, user-centered approach. By combining real-time tracking, intelligent routing, and 
              data-driven optimization, this solution promises to transform the campus commute experience while 
              delivering measurable operational benefits.
            </p>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed mb-8">
              This requirements analysis provides a solid foundation for implementation, ensuring all stakeholder 
              needs are addressed while maintaining technical feasibility and scalability for future growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-lg hover:scale-105 transition-all">
                Download Full Report
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-background/30 text-primary-foreground hover:bg-background/10 backdrop-blur-sm">
                Contact EcoRoute
              </Button>
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
                      <Leaf className="w-6 h-6 text-primary-foreground" />
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
                    <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
                    <li><a href="#problem" className="hover:text-primary transition-colors">Problem Statement</a></li>
                    <li><a href="#requirements" className="hover:text-primary transition-colors">Requirements</a></li>
                    <li><a href="#solution" className="hover:text-primary transition-colors">Solution</a></li>
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

export default Index;
