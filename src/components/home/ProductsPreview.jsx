import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Monitor,
  Zap,
  Users,
  Bot,
  Fingerprint,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * ✅ Minimal data (based on your previous big data)
 * Keeping only: title, des, goal, features
 * Also keeping ONLY 3 feature bullets per card to avoid "lot of data"
 */
const products = [
  {
    icon: Monitor,
    slug: "ai-cctv-monitoring",
    title: "AI-Powered CCTV Monitoring & Smart Surveillance System",
    des:
      "AI CCTV Monitoring by VisionariesAI is an intelligent surveillance system designed to automatically analyze live and recorded camera footage to detect normal and abnormal activities in real time.",
    goal:
      "Transforms ordinary camera systems into smart, proactive security tools with instant alerts and adaptable monitoring.",
    features: [
      "Multi-Environment & Multi-Camera Monitoring",
      "Disciplinary, Safety & Security Incident Detection",
      "Behavior Understanding & Customizable Alerts",
    ],
    status: "In Production",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    slug: "energy-monitoring",
    title: "Energy Monitoring System",
    des:
      "Monitor and control energy loads with app-based control, real-time alerts, and efficiency insights for homes, schools, and industries.",
    goal:
      "Provide reliable energy insights, alerts, and remote control for improved power efficiency and management.",
    features: ["App-Based Control", "Real-Time Alerts", "Seamless Energy Monitoring"],
    status: "In Production",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Fingerprint,
    slug: "attendance-management",
    title: "Attendance Management System",
    des:
      "An attendance system that integrates face recognition, fingerprint scanning, and RFID technology for secure and accurate identification.",
    goal:
      "Deliver accurate attendance tracking with secure verification that works across schools, offices, and institutions.",
    features: ["Face Recognition", "Fingerprint Scanning", "RFID Technology"],
    status: "In Production",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Bot,
    slug: "ask-visionariesai",
    title: "Ask.VisionariesAI – AI Teaching & Learning Assistant",
    des:
      "An AI platform to assist students and teachers with learning, teaching, evaluation, quizzes, and question generation.",
    goal:
      "Make education smarter and more efficient with instant explanations, auto-evaluation, and teaching support tools.",
    features: [
      "Learning, Teaching & Evaluation",
      "Question Paper Generation",
      "Live Quizzes & Auto Evaluation",
    ],
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
            Our AI products are powering educational institutions and businesses across India.
            Built with cutting-edge technology, deployed at scale.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.slug}
              className="group glass-card overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${product.gradient} group-hover:h-3 transition-all duration-300`}
              />

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-500">{product.status}</span>
                </div>

                {/* Title + Description */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {product.des}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <Link to={`/products/${product.slug}`} className="flex items-center justify-center gap-2">
                    Learn More
                    <ExternalLink className="w-3 h-3" />
                  </Link>
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
