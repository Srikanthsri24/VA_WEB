import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Rocket, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "15+ years in AI/ML with experience at leading tech companies.",
    avatar: "AT",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Former ML Lead at Google, expert in deep learning systems.",
    avatar: "PS",
  },
  {
    name: "James Wilson",
    role: "Head of Engineering",
    bio: "Built scalable systems serving millions of users.",
    avatar: "JW",
  },
  {
    name: "Maria Garcia",
    role: "Head of Product",
    bio: "Product strategist with a passion for AI innovation.",
    avatar: "MG",
  },
  {
    name: "David Kim",
    role: "Lead Data Scientist",
    bio: "PhD in ML, published researcher in NLP and computer vision.",
    avatar: "DK",
  },
  {
    name: "Lisa Chen",
    role: "VP of Sales",
    bio: "Enterprise sales expert with deep AI industry knowledge.",
    avatar: "LC",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technology to deliver exceptional solutions.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering measurable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we build and deliver.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Building the Future of <span className="gradient-text">Intelligent Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              VisionariesAI Labs is a service and product-based AI company dedicated to transforming businesses through innovative artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize artificial intelligence and make it accessible to businesses of all sizes. We believe in building AI solutions that are not just powerful, but also practical and impactful for real-world applications.
              </p>
            </div>
            
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading AI innovation partner for enterprises worldwide, known for delivering transformative solutions that drive business growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VisionariesAI Labs was founded with a simple yet powerful idea: to make AI accessible and impactful for businesses everywhere.
                </p>
                <p>
                  Starting as a small team of AI enthusiasts, we've grown into a full-fledged AI company with multiple products in production and clients across the globe.
                </p>
                <p>
                  Today, our products are being used by businesses to automate processes, gain insights from data, and deliver exceptional customer experiences.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Products Live</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-display text-3xl font-bold text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              Meet the <span className="gradient-text">Visionaries</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of experts brings decades of combined experience in AI, machine learning, and software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <span className="font-display text-2xl font-bold text-primary">{member.avatar}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
