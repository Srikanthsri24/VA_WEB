import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div 
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Ready to Transform?</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Let's Build the <span className="gradient-text">Future Together</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you need a custom AI solution for your institution, want to explore our products, or just want to discuss possibilities—we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="glow" size="xl" asChild className="group shadow-2xl shadow-primary/30">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild className="group">
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>

        {/* Quick contact */}
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
          <a 
            href="tel:+919849072243" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>+91 9849072243</span>
          </a>
          <a 
            href="mailto:contact@visionariesai.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>contact@visionariesai.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;