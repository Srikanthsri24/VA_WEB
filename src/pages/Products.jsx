import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, CheckCircle, ExternalLink, Star,
  Monitor, Zap, Settings, Users, ScanLine, Bot, GraduationCap, BookOpen
} from "lucide-react";

const products = [
  {
    id: 1,
    icon: Monitor,
    name: "AI Monitoring System",
    tag: "AI CCTV & Safety",
    description: "AI-based CCTV monitoring, alerts, and analytics for safer campuses. Advanced threat detection and real-time notifications.",
    features: [
      "Real-time AI video analytics",
      "Automatic threat detection",
      "Smart alert notifications",
      "Campus safety monitoring",
      "Attendance tracking via CCTV",
      "Cloud dashboard access",
    ],
    status: "In Production",
    clients: "Deployed in 20+ institutions",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    icon: Zap,
    name: "Single-Phase Energy Monitoring System",
    tag: "Energy – Single Phase",
    description: "Monitor and control single-phase loads with app-based control and alerts. Real-time energy consumption tracking.",
    features: [
      "Real-time energy monitoring",
      "Mobile app control",
      "Usage analytics & reports",
      "Cost optimization alerts",
      "Device scheduling",
      "Historical data tracking",
    ],
    status: "In Production",
    clients: "Active in 50+ locations",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 3,
    icon: Settings,
    name: "Three-Phase Energy Monitoring System",
    tag: "Energy – Three Phase",
    description: "Track heavy loads and three-phase panels with real-time analytics. Industrial-grade monitoring solution.",
    features: [
      "Three-phase power monitoring",
      "Load balancing insights",
      "Industrial-grade sensors",
      "Power quality analysis",
      "Demand forecasting",
      "Integration with existing panels",
    ],
    status: "In Production",
    clients: "Used by 15+ industries",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    icon: Users,
    name: "Universal Management System",
    tag: "Central Device Control",
    description: "Control labs, lights, fans, and multiple devices from one unified dashboard. Smart automation for institutions.",
    features: [
      "Unified device dashboard",
      "Lab equipment control",
      "Lighting automation",
      "Climate control integration",
      "Scheduling & timers",
      "Multi-user access levels",
    ],
    status: "In Production",
    clients: "Managing 100+ devices daily",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 5,
    icon: ScanLine,
    name: "Attendance Management System",
    tag: "Attendance",
    description: "Device + software solution for accurate staff and student attendance. Biometric and RFID support.",
    features: [
      "Biometric integration",
      "RFID card support",
      "Real-time sync",
      "Automated reports",
      "Leave management",
      "Parent notifications",
    ],
    status: "In Production",
    clients: "Tracking 10,000+ users",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 6,
    icon: Bot,
    name: "Ask.VisionariesAI – AI Teaching Assistant",
    tag: "AI Assistant",
    description: "AI co-pilot for teachers and students — question papers, explanations, and doubt solving powered by advanced AI.",
    features: [
      "Instant doubt solving",
      "Question paper generation",
      "Topic explanations",
      "Personalized learning paths",
      "Multi-language support",
      "24/7 availability",
    ],
    status: "In Production",
    clients: "Helping 5,000+ students daily",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 7,
    icon: GraduationCap,
    name: "Learning Management System (LMS)",
    tag: "LMS",
    description: "Assignments, content, exams, and tracking in a single learning platform. Complete digital classroom solution.",
    features: [
      "Course content management",
      "Assignment submission",
      "Online examinations",
      "Progress tracking",
      "Discussion forums",
      "Gradebook & analytics",
    ],
    status: "In Production",
    clients: "Used by 30+ institutions",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 8,
    icon: BookOpen,
    name: "AI Curriculum (Classes 3–10)",
    tag: "AI Curriculum",
    description: "Full AI syllabus for Classes 3–10 with projects, activities, and digital content. Future-ready education.",
    features: [
      "Grade-wise AI curriculum",
      "Hands-on projects",
      "Interactive activities",
      "Digital learning content",
      "Teacher training included",
      "Assessment frameworks",
    ],
    status: "In Production",
    clients: "Adopted by 25+ schools",
    gradient: "from-emerald-500 to-green-600",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 animate-fade-up">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6 animate-fade-up delay-100">
              AI Products <span className="gradient-text">in Production</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Our suite of AI products is already powering educational institutions and businesses. Built with cutting-edge technology, deployed at scale, and trusted by industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`glass-card overflow-hidden hover-lift group ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`} />
                
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-medium text-green-500">{product.status}</span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">{product.clients}</span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <product.icon className="w-7 h-7 text-foreground" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground">{product.name}</h2>
                          <p className="text-primary text-sm font-medium">{product.tag}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {product.description}
                      </p>

                      <div className="flex gap-4">
                        <Button variant="hero" size="default" asChild className="group/btn">
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="default" className="group/btn">
                          Learn More
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    <div className={`bg-secondary/30 rounded-xl p-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h4 className="font-display font-semibold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <div 
                            key={feature} 
                            className="flex items-center gap-2 group/feature"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 group-hover/feature:scale-110 transition-transform" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary animate-bounce-in" style={{ animationDelay: `${i * 100}ms` }} />
            ))}
          </div>
          <blockquote className="text-xl text-foreground/90 italic mb-6 animate-fade-up">
            "VisionariesAI's products have transformed how our institution operates. The AI Monitoring System alone has made our campus significantly safer and more efficient."
          </blockquote>
          <p className="font-display font-semibold text-foreground">— Principal, Leading Educational Institution</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-fade-up">
            Ready to Experience Our Products?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up delay-100">
            Schedule a demo to see how our AI products can transform your institution or business.
          </p>
          <Button variant="glow" size="xl" asChild className="animate-fade-up delay-200">
            <Link to="/contact">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;