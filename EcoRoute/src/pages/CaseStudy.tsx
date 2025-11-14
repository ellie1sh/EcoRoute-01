import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Users, MapPin, BarChart3, Smartphone, Database, Radio, Monitor, ArrowLeft, Mail, Menu, Home, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-campus-shuttle.jpg";
import mobileAppImage from "@/assets/mobile-app-mockup.jpg";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import gpsHardwareImage from "@/assets/gps-hardware.jpg";

const CaseStudy = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">EcoRoute</h1>
              <p className="text-xs text-muted-foreground">Smart Campus Solutions</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/team')}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Team
            </Button>
            <Button variant="default" size="sm">
              Case Study
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
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 border-l-4 border-primary text-left"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium text-primary">Case Study</span>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/team');
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors group text-left"
                >
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-base font-medium group-hover:text-primary transition-colors">Team</span>
                </button>
                
                <div className="border-t pt-4 mt-4">
                  <div className="px-4 py-3 bg-muted/30 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Quick Stats</p>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Wait Time Reduction</span>
                        <span className="text-sm font-bold text-primary">40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Fuel Savings</span>
                        <span className="text-sm font-bold text-primary">25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Uptime</span>
                        <span className="text-sm font-bold text-primary">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Smart Campus Shuttle System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10" data-animate>
          <Badge className="mb-4 animate-scale-in">Case Study</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Smart Campus Shuttle Tracking System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Requirement Analysis & System Design
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8" data-animate>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Target Users</h3>
                <p className="text-muted-foreground">Students, faculty, staff, and campus administration</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Scope</h3>
                <p className="text-muted-foreground">Campus-wide shuttle tracking and route optimization</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground">Reduced wait times and improved resource allocation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto" data-animate>
            <Badge className="mb-4">Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Problem Statement</h2>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Campus shuttle services face significant challenges in providing efficient transportation without real-time tracking capabilities:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Unpredictable wait times</strong> - Students cannot determine shuttle arrival times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Inefficient resource allocation</strong> - No data on usage patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Poor user experience</strong> - Frustration from missed shuttles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Limited accountability</strong> - Difficult to monitor service quality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate>
              <Badge className="mb-4">Mobile Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Tracking at Your Fingertips</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our mobile application provides students and faculty with instant access to shuttle locations, estimated arrival times, and route information.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Live GPS tracking on interactive maps</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Accurate ETA calculations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Push notifications for delays</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Route planning and favorites</span>
                </li>
              </ul>
            </div>
            <div data-animate className="relative">
              <img
                src={mobileAppImage}
                alt="Mobile App Interface"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-animate>
            <Badge className="mb-4">Analysis</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Requirements Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive breakdown of functional and non-functional requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow" data-animate>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Functional Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Real-time Location Tracking:</strong> Display shuttle positions on a map</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>ETA Calculation:</strong> Provide estimated arrival times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Route Management:</strong> Define and modify shuttle routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Notifications:</strong> Alert users about delays or changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Analytics Dashboard:</strong> Usage statistics and patterns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow" data-animate>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Non-Functional Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Performance:</strong> Updates within 5 seconds, handle 5000+ users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Reliability:</strong> 99.5% uptime during operating hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Scalability:</strong> Support growth without degradation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Security:</strong> Data encryption and privacy protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Usability:</strong> Intuitive interface for all users</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-animate>
            <Badge className="mb-4">Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proposed Solution Architecture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive four-component system designed for efficiency and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1" data-animate>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Mobile Applications</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Cross-platform apps for iOS and Android providing real-time shuttle tracking and route information.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Interactive map interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Push notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Offline route viewing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1" data-animate>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Backend Infrastructure</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Cloud-based server system handling data processing, storage, and real-time updates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>RESTful API architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>PostgreSQL database</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>WebSocket for real-time updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1" data-animate>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Radio className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">GPS Tracking Units</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hardware devices installed on shuttles for precise location tracking.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>High-accuracy GPS modules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>4G LTE connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Battery backup system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1" data-animate>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Admin Dashboard</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Web-based control panel for managing routes, monitoring shuttles, and analyzing data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Fleet management tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Analytics and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Route optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Hardware Component Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-16">
            <div data-animate className="relative order-2 md:order-1">
              <img
                src={gpsHardwareImage}
                alt="GPS Hardware Component"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div data-animate className="order-1 md:order-2">
              <Badge className="mb-4">Hardware</Badge>
              <h3 className="text-2xl font-bold mb-4">GPS Tracking Technology</h3>
              <p className="text-muted-foreground mb-6">
                State-of-the-art GPS tracking units installed on each shuttle provide real-time location data with high accuracy. These rugged devices are designed for 24/7 operation in various weather conditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>±2 meter location accuracy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Update frequency: 5 seconds</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Weather-resistant enclosure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-animate>
              <Badge className="mb-4">Analytics</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Decision Making</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The admin dashboard provides comprehensive analytics to optimize shuttle operations and improve service quality based on real usage patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Passenger volume trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Route efficiency metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Peak hours identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Performance monitoring</span>
                </li>
              </ul>
            </div>
            <div data-animate className="relative">
              <img
                src={dashboardImage}
                alt="Analytics Dashboard"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-animate>
            <Badge className="mb-4">Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Expected Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-t-4 border-t-primary" data-animate>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">For Users</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Reduced Wait Times</strong>
                      <span className="text-sm text-muted-foreground">Know exactly when shuttles arrive</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Better Planning</strong>
                      <span className="text-sm text-muted-foreground">Schedule activities around shuttle times</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Improved Experience</strong>
                      <span className="text-sm text-muted-foreground">Less frustration, more convenience</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary" data-animate>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">For Administration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Optimized Routes</strong>
                      <span className="text-sm text-muted-foreground">Data-driven route planning</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Cost Efficiency</strong>
                      <span className="text-sm text-muted-foreground">Better resource allocation</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <strong className="block mb-1">Quality Monitoring</strong>
                      <span className="text-sm text-muted-foreground">Track performance metrics</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-animate>
            <Badge className="mb-4">Conclusion</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Campus Transportation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Smart Campus Shuttle Tracking System represents a significant advancement in campus transportation management. By leveraging modern GPS technology and mobile applications, this solution addresses critical pain points while providing valuable data for continuous improvement.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <Badge variant="outline" className="mb-4">Final Thoughts</Badge>
              <p className="text-muted-foreground">
                This comprehensive requirement analysis demonstrates the feasibility and necessity of implementing a real-time shuttle tracking system. The proposed solution balances user needs with administrative requirements, creating value for all stakeholders in the campus community.
              </p>
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

export default CaseStudy;
