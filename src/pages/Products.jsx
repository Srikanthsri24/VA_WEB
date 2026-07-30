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
  Presentation,
  FlaskConical,
  School,
  Cuboid,
} from "lucide-react";

const products = [
  {
    id: 1,
    icon: Presentation,
    name: "Aye Board – Presented by VisionariesAI",
    tag: "AI Smart Board",
    description:
      "Aye Board is an AI-enabled smart board solution for digital classrooms, interactive teaching, multimedia lessons, and modern school presentations.",
    goal:
      "Make classroom teaching more interactive, visual, and technology-driven from Nursery to Class 12.",
    features: [
      "Interactive smart classroom board",
      "Digital lesson presentation",
      "Teacher-friendly classroom tools",
      "Multimedia teaching support",
      "AI-assisted learning experience",
      "Suitable for Nursery to 12th",
    ],
    status: "Available",
    clients: "For schools & institutions",
    gradient: "from-sky-500 to-blue-700",
  },
  {
    id: 2,
    icon: FlaskConical,
    name: "ScholAR Labs Projects",
    tag: "AR / 3D Labs for Classes 6-12",
    description:
      "ScholAR Labs brings 3D and AR-based learning experiences for Science concepts, helping students understand Physics, Chemistry, and Biology through interactive simulations.",
    goal:
      "Improve science learning with visual, practical, and simulation-based classroom experiences.",
    features: [
      "For Classes 6 to 12",
      "AR & 3D science simulations",
      "Physics learning models",
      "Chemistry concept visualization",
      "Biology interactive content",
      "Classroom demonstration support",
    ],
    status: "Available",
    clients: "For high school learning",
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    id: 3,
    icon: School,
    name: "Complete School Technology Solutions",
    tag: "Nursery to 12th",
    description:
      "VisionariesAI provides complete technology solutions for schools from Nursery to Class 12, including AI curriculum, LMS, smart classrooms, digital tools, and school automation.",
    goal:
      "Support schools with complete digital transformation from early learning to senior secondary education.",
    features: [
      "Nursery to 12th support",
      "AI curriculum solutions",
      "Smart classroom setup",
      "LMS & digital learning",
      "School automation tools",
      "Technology partner support",
    ],
    status: "In Production",
    clients: "For complete school setup",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    id: 4,
    icon: Monitor,
    name: "AI-Powered CCTV Monitoring & Smart Surveillance System",
    tag: "AI CCTV & Safety",
    description:
      "AI CCTV Monitoring analyzes live and recorded footage to detect normal and abnormal activities in real time with instant alerts and improved campus safety.",
    goal:
      "Transform ordinary camera systems into proactive security tools that reduce manual monitoring and improve situational awareness.",
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    icon: ScanLine,
    name: "Attendance Management System",
    tag: "Attendance",
    description:
      "Attendance device and software integrating face recognition, fingerprint scanning, and RFID for secure, accurate identification and reporting.",
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
    id: 9,
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
    id: 10,
    icon: GraduationCap,
    name: "Learning Management System (LMS)",
    tag: "LMS",
    description:
      "A unified learning platform for school education with lessons, assignments, quizzes, projects, and dashboards for students, teachers, and administrators.",
    goal:
      "Make digital learning faster to teach, personalized for learners, and easy to monitor for all roles.",
    features: [
      "Digital lessons",
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
    id: 11,
    icon: BookOpen,
    name: "AI Curriculum",
    tag: "Nursery to 12th AI Learning Path",
    description:
      "A structured AI-based curriculum for schools from Nursery to Class 12 with age-wise learning, activities, practical projects, coding, robotics, and future-ready skills.",
    goal:
      "Build future-ready digital skills early through progressive AI learning.",
    features: [
      "Nursery to 12th curriculum",
      "Age-wise AI learning",
      "Hands-on activities",
      "Coding & robotics path",
      "AI concepts simplified",
      "Future-ready skill development",
    ],
    status: "In Production",
    clients: "Adopted by schools",
    gradient: "from-emerald-500 to-green-600",
  },

  // New Product 1
  {
    id: 12,
    icon: Bot,
    name: "VisionariesAI Robo Teacher",
    tag: "AI-Powered Classroom Robot",
    description:
      "Robo Teacher is an intelligent classroom robot developed by VisionariesAI to teach lessons, communicate with students, explain concepts, and answer student questions through natural voice interaction.",
    goal:
      "Bring intelligent, interactive, and personalized AI teaching support directly into classrooms.",
    features: [
      "Interactive classroom teaching",
      "Instant student doubt clarification",
      "Natural voice-based interaction",
      "Curriculum-based explanations",
      "Quiz and question interaction",
      "Engaging classroom presentations",
    ],
    status: "Available for Demo",
    clients: "Built for future-ready schools",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
  },

  // New Product 2
  {
    id: 13,
    icon: Cuboid,
    name: "3D Object Design & Visualization",
    tag: "Custom 3D Models & Digital Objects",
    description:
      "VisionariesAI creates high-quality 3D objects and interactive digital models for education, product demonstrations, AR and VR applications, simulations, prototypes, and visual learning experiences.",
    goal:
      "Turn ideas and complex concepts into clear, realistic, and interactive 3D visual experiences.",
    features: [
      "Custom 3D object creation",
      "Educational 3D learning models",
      "Product visualization",
      "AR and VR-ready models",
      "Realistic materials and textures",
      "3D printing-ready designs",
    ],
    status: "Available",
    clients: "For education & businesses",
    gradient: "from-orange-500 via-rose-500 to-purple-600",
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 animate-fade-up">
              Our Products
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6 animate-fade-up delay-100">
              AI Products{" "}
              <span className="gradient-text">
                for Modern Institutions
              </span>
            </h1>

            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              From Nursery to Class 12, VisionariesAI provides AI curriculum,
              smart boards, Robo Teachers, 3D learning objects, ScholAR Labs,
              LMS, automation, energy monitoring, and advanced technology
              solutions for schools and businesses.
            </p>
          </div>
        </div>
      </section>

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
                      <div className="flex flex-wrap items-center gap-3 mb-4">
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
                          <product.icon className="w-7 h-7 text-white" />
                        </div>

                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground">
                            {product.name}
                          </h2>

                          <p className="text-primary text-sm font-medium">
                            {product.tag}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-5 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mb-6 rounded-xl border border-primary/10 bg-primary/5 p-4">
                        <p className="text-sm leading-relaxed text-foreground/80">
                          <span className="font-semibold text-primary">
                            Our Goal:
                          </span>{" "}
                          {product.goal}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button
                          variant="hero"
                          size="default"
                          asChild
                          className="group/btn"
                        >
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>

                        <Button
                          variant="outline"
                          size="default"
                          asChild
                          className="group/btn"
                        >
                          <Link to="/contact">
                            Learn More
                            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          </Link>
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

                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
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
            “VisionariesAI products help institutions move towards smart,
            interactive, automated, and future-ready education.”
          </blockquote>

          <p className="font-display font-semibold text-foreground">
            — Educational Institution
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 animate-fade-up">
            Ready to Upgrade Your Institution?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-up delay-100">
            Schedule a demonstration of Aye Board, Robo Teacher, ScholAR Labs,
            custom 3D learning objects, LMS, AI Curriculum, and our complete
            school technology solutions.
          </p>

          <Button
            variant="glow"
            size="xl"
            asChild
            className="animate-fade-up delay-200"
          >
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