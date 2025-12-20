import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Database,
  LineChart,
  Cpu,
  Bot,
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Globe,
  Smartphone,
  Palette,
  Video,
  Code2,
  Server,
  Workflow,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Brain,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions designed specifically for your business challenges and opportunities.",
    features: [
      "Custom model development",
      "AI strategy consulting",
      "Proof of concept development",
      "Production deployment",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    description:
      "Intelligent chatbots and automation solutions to improve support, sales, admissions, and internal workflows.",
    features: [
      "Website & WhatsApp chatbots",
      "Knowledge-base Q&A bot",
      "Workflow automation",
      "CRM / ERP integrations",
    ],
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Production-ready machine learning models that scale with your business and deliver consistent results.",
    features: [
      "Model development",
      "MLOps implementation",
      "Model optimization",
      "Continuous learning",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: LineChart,
    title: "Analytics & Business Intelligence",
    description:
      "Transform raw data into actionable insights that drive strategic business decisions.",
    features: [
      "Predictive analytics",
      "Custom dashboards",
      "KPI monitoring",
      "Automated reporting",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust, scalable data infrastructure that powers your AI initiatives and business intelligence.",
    features: [
      "Data pipeline design",
      "ETL/ELT processes",
      "Data warehouse architecture",
      "Real-time data streaming",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Cloud,
    title: "Cloud AI Integration",
    description:
      "Seamless integration of AI capabilities with major cloud platforms for maximum scalability.",
    features: [
      "AWS AI services",
      "Google Cloud AI",
      "Azure AI integration",
      "Hybrid solutions",
    ],
    gradient: "from-pink-500 to-rose-600",
  },

  // ✅ Software Services (Added)
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern websites, admin panels, portals, and dashboards built for speed, scalability, and clean UI.",
    features: [
      "React / Next.js websites",
      "Admin dashboards",
      "School/ERP portals",
      "SEO-ready & responsive",
    ],
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "High-performance Android & iOS apps with smooth UX and secure backend integration.",
    features: [
      "Android & iOS apps",
      "React Native / Expo apps",
      "Push notifications",
      "Play Store deployment",
    ],
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly UI/UX with design systems that match your brand and product goals.",
    features: [
      "Wireframes & prototypes",
      "Mobile & web UI design",
      "Design systems",
      "User flow optimization",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build custom software modules, portals, and automation tools tailored to your business processes.",
    features: [
      "Custom modules & workflows",
      "Role-based access",
      "Scalable architecture",
      "Secure authentication",
    ],
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Secure backend systems and APIs to connect apps, websites, payments, SMS/WhatsApp, and third-party tools.",
    features: [
      "REST API development",
      "Database design",
      "Payments & gateways",
      "SMS/WhatsApp integrations",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Workflow,
    title: "Systems Integration",
    description:
      "Connect your tools and platforms for a unified, automated workflow across operations.",
    features: [
      "CRM/ERP integrations",
      "Device & IoT integrations",
      "Data sync & automation",
      "Single sign-on (SSO)",
    ],
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Protect your applications and data with security best practices and compliance-ready setups.",
    features: [
      "Secure authentication",
      "Access control & audit logs",
      "Data protection",
      "Security hardening",
    ],
    gradient: "from-slate-500 to-zinc-700",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing support, monitoring, upgrades, and performance improvements for stable operations.",
    features: [
      "Bug fixes & enhancements",
      "Performance optimization",
      "Server monitoring",
      "Feature upgrades",
    ],
    gradient: "from-lime-500 to-emerald-600",
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description:
      "Professional editing for product videos, promos, reels, explainers, and brand content.",
    features: [
      "Product explainer videos",
      "Reels & social creatives",
      "Motion graphics",
      "Brand promos",
    ],
    gradient: "from-rose-500 to-red-600",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business, challenges, and goals to identify the right opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We design a clear roadmap, architecture, and plan tailored to your needs.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We craft UI/UX, flows, and prototypes to ensure a smooth user experience.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Our team builds and tests the solution using agile methodologies.",
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "We deploy and integrate with your systems, ensuring stability and performance.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "Ongoing maintenance, optimization, and updates to ensure continued success.",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile development ensures quick prototyping and faster time-to-market.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Security-first approach with best practices and compliance-ready setups.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A focused team working closely with you from planning to production.",
    gradient: "from-blue-500 to-indigo-600",
  },
];

const Services = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { setRef: setServiceRef, isVisible: serviceVisible } =
    useScrollAnimationGroup(services.length);
  const { ref: advantageHeaderRef, isVisible: advantageHeaderVisible } =
    useScrollAnimation();
  const { setRef: setAdvantageRef, isVisible: advantageVisible } =
    useScrollAnimationGroup(advantages.length);
  const { ref: processHeaderRef, isVisible: processHeaderVisible } =
    useScrollAnimation();
  const { setRef: setProcessRef, isVisible: processVisible } =
    useScrollAnimationGroup(processSteps.length);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />

        <div
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI & <span className="gradient-text">Software Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategy to design, development, deployment, and support — we deliver complete solutions that grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={setServiceRef(index)}
                className={`glass-card p-8 hover-lift group transition-all duration-700 ${
                  serviceVisible(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
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
          <div
            ref={advantageHeaderRef}
            className={`text-center mb-12 transition-all duration-700 ${
              advantageHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              The VisionariesAI Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                ref={setAdvantageRef(index)}
                className={`text-center glass-card p-8 hover-lift group transition-all duration-700 ${
                  advantageVisible(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={processHeaderRef}
            className={`text-center mb-12 transition-all duration-700 ${
              processHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              How We Work
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  ref={setProcessRef(index)}
                  className={`relative text-center transition-all duration-700 ${
                    processVisible(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background shadow-lg group hover:from-primary/30 hover:to-primary/20 transition-colors cursor-default">
                    <span className="font-display text-xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
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
            Let's discuss how our services can transform your business.
          </p>
          <Button variant="hero" size="xl" asChild className="group shadow-lg shadow-primary/20">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
