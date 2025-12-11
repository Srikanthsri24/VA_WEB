import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle, Monitor, Zap, Users, Bot, BookOpen, Cpu, GraduationCap, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: Monitor,
    name: "AI Monitoring System",
    description: "AI-based CCTV monitoring, alerts, and analytics for safer campuses.",
    features: ["Real-time Analytics", "Threat Detection", "Smart Alerts"],
    status: "In Production",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    name: "Single-Phase Energy Monitoring",
    description: "Monitor and control single-phase loads with app-based control and alerts.",
    features: ["Real-time Monitoring", "Cost Optimization", "Mobile Control"],
    status: "In Production",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Zap,
    name: "Three-Phase Energy Monitoring",
    description: "Track heavy loads and three-phase panels with real-time analytics.",
    features: ["Heavy Load Tracking", "Panel Analytics", "Usage Reports"],
    status: "In Production",
    gradient: "from-amber-500 to-red-600",
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
    icon: Fingerprint,
    name: "Attendance Management System",
    description: "Device + software solution for accurate staff and student attendance.",
    features: ["Biometric Support", "Report Generation", "Real-time Sync"],
    status: "In Production",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Bot,
    name: "Ask.VisionariesAI",
    description: "AI co-pilot for teachers and students — question papers, explanations, and doubt solving.",
    features: ["Doubt Solving", "Question Generation", "24/7 Available"],
    status: "In Production",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: BookOpen,
    name: "Learning Management System",
    description: "Assignments, content, exams, and tracking in a single learning platform.",
    features: ["Content Management", "Exam Portal", "Progress Tracking"],
    status: "In Production",
    gradient: "from-blue-500 to-violet-600",
  },
  {
    icon: GraduationCap,
    name: "AI Curriculum (Classes 3–10)",
    description: "Full AI syllabus for Classes 3–10 with projects, activities, and digital content.",
    features: ["Project-based", "Digital Content", "Activity Kits"],
    status: "In Production",
    gradient: "from-teal-500 to-cyan-600",
  },
];

const ProductsCarousel = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Products in <span className="gradient-text">Production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI products are already powering educational institutions and businesses across India.
          </p>
        </div>

        {/* Products Carousel */}
        <div 
          ref={carouselRef}
          className={`transition-all duration-700 delay-200 ${
            carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={product.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group glass-card overflow-hidden hover-lift h-full">
                    {/* Gradient Header */}
                    <div className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`} />
                    
                    <div className="p-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <product.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-500">{product.status}</span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-4">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300">
                        Learn More
                        <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
              <CarouselNext className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            </div>
          </Carousel>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${
          carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
