import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle, Monitor, Zap, Users, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Monitor,
    name: "AI Monitoring System",
    description: "AI-based CCTV monitoring, alerts, and analytics for safer campuses and institutions.",
    features: ["Real-time Analytics", "Threat Detection", "Smart Alerts"],
    status: "In Production",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    name: "Energy Monitoring System",
    description: "Monitor and control energy loads with app-based control, alerts, and cost optimization.",
    features: ["Real-time Monitoring", "Cost Optimization", "Mobile Control"],
    status: "In Production",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Users,
    name: "Universal Management System",
    description: "Control labs, lights, fans, and multiple devices from one unified dashboard.",
    features: ["Device Dashboard", "Automation", "Multi-user Access"],
    status: "In Production",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Bot,
    name: "Ask.VisionariesAI",
    description: "AI teaching assistant for question papers, explanations, and instant doubt solving.",
    features: ["Doubt Solving", "Question Generation", "24/7 Available"],
    status: "In Production",
    gradient: "from-pink-500 to-rose-600",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 animate-fade-up">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 animate-fade-up delay-100">
            Products in <span className="gradient-text">Production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Our AI products are already powering educational institutions and businesses across India. Built with cutting-edge technology, deployed at scale.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group glass-card overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-500">{product.status}</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up delay-500">
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;