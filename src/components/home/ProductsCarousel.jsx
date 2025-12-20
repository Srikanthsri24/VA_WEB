import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Monitor,
  Zap,
  Users,
  Bot,
  BookOpen,
  GraduationCap,
  Fingerprint,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

/**
 * ✅ Data implemented based on your earlier data:
 * - title -> name
 * - des -> description
 * - goal -> (kept, optional for later use)
 * - features -> we only take 3 feature titles to keep short
 */
const products = [
  {
    icon: Monitor,
    name: "AI-Powered CCTV Monitoring",
    description:
      "AI CCTV Monitoring analyzes live/recorded footage to detect normal and abnormal activities in real time with instant alerts.",
    goal:
      "Transforms ordinary cameras into proactive security tools with customizable alerts and continuous monitoring.",
    features: [
      "Multi-Camera Monitoring",
      "Incident Detection",
      "Customizable Alerts",
    ],
    status: "In Production",
    gradient: "from-cyan-500 to-blue-600",
    slug: "ai-cctv-monitoring",
  },
  {
    icon: Zap,
    name: "Single-Phase Energy Monitoring",
    description:
      "Efficient control and monitoring for single-phase usage with app-based control and real-time consumption insights.",
    goal:
      "Provide reliable energy insights, alerts, and remote control to improve power efficiency.",
    features: ["App-Based Control", "Real-Time Alerts", "Energy Insights"],
    status: "In Production",
    gradient: "from-yellow-500 to-orange-600",
    slug: "single-phase-energy",
  },
  {
    icon: Zap,
    name: "Three-Phase Energy Monitoring",
    description:
      "Comprehensive monitoring for three-phase panels and heavy loads with balanced energy management and real-time tracking.",
    goal:
      "Enable stable energy distribution and monitoring for industrial and large commercial environments.",
    features: ["Panel Monitoring", "Real-Time Tracking", "Balanced Management"],
    status: "In Production",
    gradient: "from-amber-500 to-red-600",
    slug: "three-phase-energy",
  },
  {
    icon: Users,
    name: "Universal Management System",
    description:
      "Control labs, lights, fans, and multiple devices from one unified dashboard.",
    goal:
      "Centralize device control and automation for institutions and campuses.",
    features: ["Device Dashboard", "Automation", "Multi-user Access"],
    status: "In Production",
    gradient: "from-green-500 to-teal-600",
    slug: "universal-management",
  },
  {
    icon: Fingerprint,
    name: "Attendance Management System",
    description:
      "Integrates face recognition, fingerprint scanning, and RFID for secure and accurate attendance identification.",
    goal:
      "Deliver accurate attendance tracking with secure verification across schools and offices.",
    features: ["Face Recognition", "Fingerprint Scanning", "RFID Technology"],
    status: "In Production",
    gradient: "from-purple-500 to-indigo-600",
    slug: "attendance-management",
  },
  {
    icon: Bot,
    name: "Ask.VisionariesAI",
    description:
      "AI assistant for learning and teaching: explanations, question papers, quizzes, evaluation, and instant doubt solving.",
    goal:
      "Make education smarter and more efficient with AI-driven teaching and evaluation tools.",
    features: ["Doubt Solving", "Question Generation", "Auto Evaluation"],
    status: "In Production",
    gradient: "from-pink-500 to-rose-600",
    slug: "ask-visionariesai",
  },
  {
    icon: BookOpen,
    name: "Learning Management System (LMS)",
    description:
      "A unified learning platform delivering your Class 3–10 AI syllabus end-to-end with assignments, exams, and tracking.",
    goal:
      "Make AI education faster to teach, personalized, and easy to monitor for all roles.",
    features: ["AI Curriculum Hosting", "Assignments & Exams", "Analytics Dashboards"],
    status: "In Production",
    gradient: "from-blue-500 to-violet-600",
    slug: "lms",
  },
  {
    icon: GraduationCap,
    name: "AI Curriculum (Classes 3–10)",
    description:
      "A structured, progressive AI syllabus from Classes 3 to 10 with hands-on learning, projects, and real examples.",
    goal:
      "Build future-ready digital skills early through step-by-step AI learning.",
    features: ["Hands-On Learning", "Scratch & Python", "Core AI Domains"],
    status: "In Production",
    gradient: "from-teal-500 to-cyan-600",
    slug: "ai-curriculum",
  },
];

const ProductsCarousel = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="py-24 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.slug}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group glass-card overflow-hidden hover-lift h-full">
                    {/* Gradient Header */}
                    <div
                      className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`}
                    />

                    <div className="p-6">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                      >
                        <product.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-500">
                          {product.status}
                        </span>
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
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Learn More */}
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                      >
                        <Link
                          // to={`/products/${product.slug}`}
                          className="flex items-center justify-center"
                        >
                          Learn More
                          <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
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
        <div
          className={`text-center mt-12 transition-all duration-700 delay-400 ${
            carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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
