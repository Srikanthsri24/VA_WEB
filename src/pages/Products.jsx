import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, CheckCircle, ExternalLink, Star,
  BarChart3, FileSearch, MessageSquare, Cpu, Scan, Shield
} from "lucide-react";

const products = [
  {
    icon: BarChart3,
    name: "VisionAI Analytics",
    tagline: "Enterprise Analytics Reimagined",
    description: "A powerful analytics platform that turns complex data into clear, actionable insights. Featuring AI-powered predictions, real-time monitoring, and customizable dashboards.",
    features: [
      "Real-time data visualization",
      "AI-powered predictive analytics",
      "Custom dashboard builder",
      "Automated report generation",
      "Multi-source data integration",
      "Role-based access control",
    ],
    status: "In Production",
    clients: "Used by 15+ enterprise clients",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: FileSearch,
    name: "SmartDoc AI",
    tagline: "Intelligent Document Processing",
    description: "Transform your document workflows with AI-powered extraction, classification, and processing. Handle invoices, contracts, and forms with unprecedented accuracy.",
    features: [
      "Advanced OCR technology",
      "Multi-format support",
      "Automatic classification",
      "Data extraction & validation",
      "Workflow automation",
      "API integration ready",
    ],
    status: "In Production",
    clients: "Processing 1M+ documents monthly",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: MessageSquare,
    name: "ChatGenius Pro",
    tagline: "Next-Gen Conversational AI",
    description: "Build intelligent customer experiences with our advanced chatbot platform. Multi-language support, seamless integrations, and continuous learning capabilities.",
    features: [
      "Multi-language support",
      "Omnichannel deployment",
      "Intent recognition engine",
      "Live agent handoff",
      "Analytics dashboard",
      "Custom training tools",
    ],
    status: "In Production",
    clients: "Handling 500K+ conversations/month",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Scan,
    name: "VisionScan",
    tagline: "Computer Vision Platform",
    description: "Enterprise-grade computer vision solution for quality control, security, and automation. Deploy custom visual AI models with ease.",
    features: [
      "Object detection & tracking",
      "Quality inspection",
      "Anomaly detection",
      "Custom model training",
      "Edge deployment",
      "Real-time processing",
    ],
    status: "In Production",
    clients: "Deployed in 10+ manufacturing plants",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Cpu,
    name: "AutoML Suite",
    tagline: "Machine Learning Made Simple",
    description: "No-code machine learning platform that empowers teams to build and deploy ML models without deep technical expertise.",
    features: [
      "Automated model selection",
      "Feature engineering",
      "Model explainability",
      "One-click deployment",
      "Performance monitoring",
      "Version control",
    ],
    status: "In Production",
    clients: "Used by 20+ data teams",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Shield,
    name: "SecureAI Guard",
    tagline: "AI-Powered Security",
    description: "Protect your systems with intelligent threat detection and response. Real-time monitoring, anomaly detection, and automated incident response.",
    features: [
      "Real-time threat detection",
      "Behavioral analytics",
      "Automated response",
      "Compliance reporting",
      "Integration ecosystem",
      "24/7 monitoring",
    ],
    status: "In Production",
    clients: "Protecting 50+ enterprises",
    gradient: "from-red-500 to-orange-600",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              AI Products <span className="gradient-text">in Production</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our suite of AI products is already powering businesses worldwide. Built with cutting-edge technology, deployed at scale, and trusted by industry leaders.
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
                key={product.name}
                className={`glass-card overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`h-2 bg-gradient-to-r ${product.gradient}`} />
                
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-medium text-green-500">{product.status}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{product.clients}</span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground">{product.name}</h2>
                          <p className="text-primary text-sm">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {product.description}
                      </p>

                      <div className="flex gap-4">
                        <Button variant="hero" size="default" asChild>
                          <Link to="/contact">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="default">
                          Learn More
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="bg-secondary/30 rounded-xl p-6">
                      <h4 className="font-display font-semibold text-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
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
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-xl text-foreground/90 italic mb-6">
            "VisionariesAI's products have transformed how we operate. The analytics platform alone has saved us hundreds of hours and provided insights we never knew existed in our data."
          </blockquote>
          <p className="font-display font-semibold text-foreground">— Fortune 500 Client</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Experience Our Products?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a demo to see how our AI products can transform your business.
          </p>
          <Button variant="glow" size="xl" asChild>
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
