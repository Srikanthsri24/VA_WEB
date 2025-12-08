import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Brain, Database, LineChart, Cpu, Bot, Cloud, 
  ArrowRight, CheckCircle, Zap, Shield, Users 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions designed specifically for your business challenges and opportunities.",
    features: [
      "Custom model development",
      "AI strategy consulting",
      "Proof of concept development",
      "Production deployment",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust, scalable data infrastructure that powers your AI initiatives and business intelligence.",
    features: [
      "Data pipeline design",
      "ETL/ELT processes",
      "Data warehouse architecture",
      "Real-time data streaming",
    ],
  },
  {
    icon: LineChart,
    title: "Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights that drive strategic business decisions.",
    features: [
      "Predictive analytics",
      "Custom dashboards",
      "KPI monitoring",
      "Automated reporting",
    ],
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants that enhance customer experience and automate support.",
    features: [
      "Multi-channel chatbots",
      "Voice assistants",
      "Intent recognition",
      "Seamless integrations",
    ],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Production-ready machine learning models that scale with your business and deliver consistent results.",
    features: [
      "Model development",
      "MLOps implementation",
      "Model optimization",
      "Continuous learning",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud AI Integration",
    description: "Seamless integration of AI capabilities with major cloud platforms for maximum scalability.",
    features: [
      "AWS AI services",
      "Google Cloud AI",
      "Azure AI integration",
      "Hybrid solutions",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business, challenges, and goals to identify the right AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We design a comprehensive AI strategy and roadmap tailored to your needs.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds and tests the solution using agile methodologies.",
  },
  {
    step: "04",
    title: "Deployment",
    description: "We deploy the solution and ensure seamless integration with your systems.",
  },
  {
    step: "05",
    title: "Support",
    description: "Ongoing maintenance, optimization, and support to ensure continued success.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              End-to-End <span className="gradient-text">AI Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From strategy to deployment, we provide comprehensive AI services that transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
              The VisionariesAI Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Agile development process ensures rapid prototyping and quick time-to-market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-grade security and compliance with industry standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">A dedicated team of experts working exclusively on your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
              How We Work
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background">
                    <span className="font-display text-xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our AI services can transform your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
