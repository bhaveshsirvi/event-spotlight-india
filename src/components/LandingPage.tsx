import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  MapPin, 
  Star, 
  Search,
  Calendar,
  Shield,
  Zap,
  ChevronRight,
  Mail,
  User,
  Building
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import eventSpace from "@/assets/event-space.jpg";

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thanks for joining! We\'ll notify you when we launch.');
      setEmail('');
      setName('');
      setCity('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  🚀 Launching Soon in Mumbai, Bangalore & Delhi
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Stop Wasting Hours{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Finding a Venue
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover and book the perfect event space — verified, transparent, 
                  and available when you need it.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={handleSubmit}
                  disabled={!email || isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Get Early Access'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ⏱ Takes 30 seconds. No spam.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src={heroMockup}
                alt="Instavenue app interface"
                className="rounded-2xl shadow-card w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Planning a Small Event?{" "}
                <span className="text-primary">Why is it Still So Hard?</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Search,
                  title: "70% of venues aren't even listed online",
                  description: "Most venues rely on word-of-mouth or outdated directories"
                },
                {
                  icon: Clock,
                  title: "You spend 15+ hours just calling and chasing",
                  description: "Endless phone calls with no clear availability or pricing"
                },
                {
                  icon: Shield,
                  title: "Hidden charges, no-shows, and last-minute cancellations",
                  description: "Surprise costs and unreliable venue partners"
                }
              ].map((problem, index) => (
                <Card key={index} className="p-6 text-center border-0 shadow-soft">
                  <problem.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Discover, Compare, and Book —{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  All in One Place
                </span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Transparent pricing & availability",
                    description: "See real prices upfront with no hidden fees"
                  },
                  {
                    icon: Star,
                    title: "Verified venues with past reviews",
                    description: "Every venue is verified with authentic guest reviews"
                  },
                  {
                    icon: Zap,
                    title: "Real-time quotes and instant bookings",
                    description: "Get quotes in minutes and book instantly online"
                  },
                  {
                    icon: Users,
                    title: "Smart filters by capacity, vibe, and budget",
                    description: "Find exactly what you need with powerful search filters"
                  },
                  {
                    icon: Shield,
                    title: "Backup options in case of cancellations",
                    description: "We ensure you always have alternatives ready"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <img
                  src={eventSpace}
                  alt="Modern event space"
                  className="rounded-2xl shadow-card w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What People Are Saying
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "This would've saved me 2 weeks of venue hunting.",
                  author: "Priya S., Event Manager"
                },
                {
                  quote: "I just want a clean space with AC and Wi-Fi — this nails it.",
                  author: "Rahul K., Startup Founder"
                },
                {
                  quote: "Finally a place that shows me what's included in the price!",
                  author: "Anjali M., Corporate Planner"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 border-0 shadow-soft">
                  <div className="text-2xl mb-4">💬</div>
                  <blockquote className="text-lg font-medium mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Be the First to Try It
              </h2>
              <p className="text-xl opacity-90">
                We're launching in Mumbai, Bangalore, and Delhi. Join the waitlist 
                to get early access and first-booking credits.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-background/90 border-background/20"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/90 border-background/20"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background/90 border border-background/20 text-foreground"
                >
                  <option value="">Select your city</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="delhi">Delhi</option>
                  <option value="other">Other (notify me when available)</option>
                </select>
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-background text-primary hover:bg-background/90"
                disabled={!email || isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Notify Me When We Launch'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Building className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Instavenue</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}