import { Link } from "react-router-dom";
import { Brain, Database, LineChart, Cpu, ArrowRight, Bot, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI models tailored to your business needs, from NLP to computer vision.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to power your AI initiatives.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with advanced analytics.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Bot,
    title: "Chatbots & Automation",
    description: "Intelligent conversational AI and process automation solutions.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Deploy production-ready ML models that scale with your business.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud AI Services",
    description: "Seamless AI integration with major cloud platforms.",
    gradient: "from-pink-500 to-rose-600",
  },
];

const ServicesPreview = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(services.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.05)_0%,_transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end AI services that transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={setRef(index)}
              className={`group glass-card p-8 hover-lift transition-all duration-700 ${
                isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="group shadow-lg shadow-primary/20">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;