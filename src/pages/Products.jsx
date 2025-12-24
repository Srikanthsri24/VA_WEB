import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Star,
  Monitor,
  Zap,
  Settings,
  Users,
  ScanLine,
  Bot,
  GraduationCap,
  BookOpen,
} from "lucide-react";

/**
 * ✅ Implemented from your earlier "big data" content:
 * - title -> name
 * - des -> description
 * - goal -> (not shown in UI now, but kept ready if needed later)
 * - features -> converted to simple feature bullet strings (max 6 to avoid too much data)
 */
const products = [
  {
    id: 1,
    icon: Monitor,
    name: "AI-Powered CCTV Monitoring & Smart Surveillance System",
    tag: "AI CCTV & Safety",
    description:
      "AI CCTV Monitoring analyzes live and recorded footage to detect normal and abnormal activities in real time with instant alerts and improved campus safety.",
    goal:
      "Transforms ordinary camera systems into proactive security tools that reduce manual monitoring and improve situational awareness.",
    features: [
      "Multi-camera monitoring",
      "Abnormal activity detection",
      "Smart alerts & notifications",
      "Customizable rules by location",
      "Discipline & safety monitoring",
      "Activity audit trails",
    ],
    status: "In Production",
    clients: "Deployed across institutions",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    icon: Zap,
    name: "Single-Phase Energy Monitoring System",
    tag: "Energy – Single Phase",
    description:
      "Single-phase energy monitoring for homes and small facilities with app-based control, real-time insights, and instant alerts for irregularities.",
    goal:
      "Provide remote control and visibility over energy usage to improve efficiency and stability.",
    features: [
      "App-based control",
      "Real-time monitoring",
      "Instant alert notifications",
      "Usage insights & trends",
      "Mobile-based monitoring",
      "Power efficiency support",
    ],
    status: "In Production",
    clients: "Active at multiple sites",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 3,
    icon: Settings,
    name: "Three-Phase Energy Monitoring System",
    tag: "Energy – Three Phase",
    description:
      "Three-phase energy monitoring designed for industries and large facilities where balanced energy management and real-time tracking are critical.",
    goal:
      "Ensure stable distribution across phases with continuous monitoring and alerts.",
    features: [
      "Three-phase monitoring",
      "Balanced energy management",
      "Real-time alerts",
      "Usage insights & tracking",
      "Mobile-based monitoring",
      "Reliable for heavy loads",
    ],
    status: "In Production",
    clients: "Used in industrial setups",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    icon: Users,
    name: "Universal Management System",
    tag: "Central Device Control",
    description:
      "Empower your school with seamless communication, efficient administration, and engaging learning experiences. Simplify operations, enhance engagement, and foster success across schools, colleges, and campuses with our advanced management platform.",
    goal:
      "Centralize device operations and automation for campuses and institutions.",
    features: [
      "Unified device dashboard",
      "Automation & scheduling",
      "Role-based access",
      "Multi-user control",
      "Device-wise activity logs",
      "Fast campus operations",
    ],
    status: "In Production",
    clients: "Managing devices daily",
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 5,
    icon: ScanLine,
    name: "Attendance Management System",
    tag: "Attendance",
    description:
      "Attendance device + software integrating face recognition, fingerprint scanning, and RFID for secure, accurate identification and reporting.",
    goal:
      "Ensure accurate attendance tracking with secure verification for schools and offices.",
    features: [
      "Face recognition support",
      "Fingerprint verification",
      "RFID card/tag support",
      "Backend reports & logs",
      "Secure identification flow",
      "Scalable hardware + software",
    ],
    status: "In Production",
    clients: "Tracking users reliably",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 6,
    icon: Bot,
    name: "Ask.VisionariesAI – AI Teaching & Learning Assistant",
    tag: "AI Assistant",
    description:
      "AI platform that assists students and teachers with explanations, quizzes, exam creation, evaluation, and instant doubt solving.",
    goal:
      "Make learning smarter with AI-driven teaching support and faster evaluation.",
    features: [
      "Doubt solving & explanations",
      "Question paper generation",
      "Quizzes & exams",
      "Automatic evaluation",
      "Homework creation & checking",
      "Study material support",
    ],
    status: "In Production",
    clients: "Helping teachers & students",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 7,
    icon: GraduationCap,
    name: "Learning Management System (LMS)",
    tag: "LMS",
    description:
      "A unified learning platform for Class 3–10 AI syllabus with lessons, assignments, quizzes, projects, and dashboards.",
    goal:
      "Make AI education faster to teach, personalized for learners, and easy to monitor for all roles.",
    features: [
      "AI curriculum hosting",
      "Assignments & homework",
      "Quizzes & exams",
      "Projects & portfolios",
      "Analytics dashboards",
      "Admin controls & mapping",
    ],
    status: "In Production",
    clients: "Used by schools",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 8,
    icon: BookOpen,
    name: "AI Curriculum (Classes 3–10)",
    tag: "AI Curriculum",
    description:
      "A structured AI-based curriculum from Classes 3 to 10 with step-by-step concept building, hands-on activities, and real examples.",
    goal:
      "Build future-ready digital skills early through progressive AI learning.",
    features: [
      "Progressive AI syllabus (3–10)",
      "Step-by-step concept building",
      "Hands-on learning activities",
      "Scratch to Python path",
      "Core AI domains simplified",
      "Future-ready skills focus",
    ],
    status: "In Production",
    clients: "Adopted by schools",
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
              Our suite of AI products is already powering educational institutions and businesses.
              Built with cutting-edge technology, deployed at scale, and trusted by clients.
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
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`}
                />

                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-medium text-green-500">
                            {product.status}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                          {product.clients}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <product.icon className="w-7 h-7 text-foreground" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground">
                            {product.name}
                          </h2>
                          <p className="text-primary text-sm font-medium">{product.tag}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{product.description}</p>

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

                    <div
                      className={`bg-secondary/30 rounded-xl p-6 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h4 className="font-display font-semibold text-foreground mb-4">
                        Key Features
                      </h4>
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
              <Star
                key={i}
                className="w-6 h-6 fill-primary text-primary animate-bounce-in"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <blockquote className="text-xl text-foreground/90 italic mb-6 animate-fade-up">
            "VisionariesAI's products have transformed how our institution operates. The AI Monitoring
            System has made our campus safer and more efficient."
          </blockquote>
          <p className="font-display font-semibold text-foreground">
            — Principal, Educational Institution
          </p>
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
