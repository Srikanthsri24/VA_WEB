import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Briefcase, MapPin, Clock, ArrowRight, Send, Users, Heart, 
  Rocket, Coffee, GraduationCap, Laptop, Smartphone, TrendingUp,
  CheckCircle, Building, Zap, Globe, Award, Star
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "Srikakulam, AP",
    experience: "1-3 years",
    description: "Drive digital marketing campaigns, manage social media presence, and create engaging content to boost brand awareness.",
    responsibilities: [
      "Plan and execute digital marketing campaigns",
      "Manage social media accounts and content calendar",
      "Analyze campaign performance and optimize strategies",
      "Create compelling marketing content",
    ],
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "Experience with digital marketing tools",
      "Strong analytical and communication skills",
      "Knowledge of SEO/SEM practices",
    ],
    gradient: "from-orange-500 to-rose-600",
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Marketing Content Creator",
    department: "Marketing",
    type: "Full-time",
    location: "Srikakulam, AP",
    experience: "0-2 years",
    description: "Create engaging content for marketing campaigns including blogs, social media posts, videos, and promotional materials.",
    responsibilities: [
      "Write compelling blog posts and articles",
      "Create social media content and graphics",
      "Develop video content and scripts",
      "Collaborate with design team on campaigns",
    ],
    requirements: [
      "Excellent writing and communication skills",
      "Experience with content creation tools",
      "Creative mindset with attention to detail",
      "Portfolio of previous work",
    ],
    gradient: "from-pink-500 to-purple-600",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Web Development Intern",
    department: "Engineering",
    type: "Internship",
    location: "Srikakulam, AP / Remote",
    experience: "Fresher",
    description: "Join our engineering team to learn and contribute to building modern web applications using React, Node.js, and other cutting-edge technologies.",
    responsibilities: [
      "Assist in developing web applications",
      "Learn and implement best coding practices",
      "Collaborate with senior developers on projects",
      "Participate in code reviews and team meetings",
    ],
    requirements: [
      "Currently pursuing or recently completed B.Tech/MCA",
      "Basic knowledge of HTML, CSS, JavaScript",
      "Familiarity with React is a plus",
      "Eager to learn and grow",
    ],
    gradient: "from-cyan-500 to-blue-600",
    icon: Laptop,
  },
  {
    id: 4,
    title: "Mobile App Development Intern",
    department: "Engineering",
    type: "Internship",
    location: "Srikakulam, AP / Remote",
    experience: "Fresher",
    description: "Work on exciting mobile app projects using React Native. Perfect opportunity for students looking to kickstart their mobile development career.",
    responsibilities: [
      "Develop mobile app features using React Native",
      "Test and debug mobile applications",
      "Learn mobile app deployment processes",
      "Work on real-world client projects",
    ],
    requirements: [
      "Currently pursuing or recently completed B.Tech/MCA",
      "Basic understanding of JavaScript/React",
      "Interest in mobile app development",
      "Strong problem-solving skills",
    ],
    gradient: "from-green-500 to-teal-600",
    icon: Smartphone,
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Clear career paths with mentorship and learning opportunities to help you grow.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours and a supportive environment that values your well-being.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Access to courses, certifications, and workshops to enhance your skills.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health coverage for you and your family members.",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team outings, celebrations, and fun activities to build connections.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance bonuses and recognition programs to celebrate your achievements.",
  },
];

const cultureValues = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We encourage creative thinking and innovative solutions to complex problems.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Work together as a team, share knowledge, and grow together.",
  },
  {
    icon: Globe,
    title: "Impact Driven",
    description: "Our work directly impacts education and businesses across India.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for excellence in everything we do, no matter how small.",
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, position: job.title }));
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll review your application and get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      message: "",
    });
    setSelectedJob(null);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-6">
              Join Our Team
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Build the <span className="gradient-text">Future with Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join VisionariesAI Labs and be part of a team that's transforming education and businesses with innovative AI solutions. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Culture</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              Why Work at <span className="gradient-text">VisionariesAI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives, ideas flourish, and everyone has the opportunity to grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Benefits & Perks</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
              Current <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the perfect role that matches your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className={`h-1.5 bg-gradient-to-r ${job.gradient} group-hover:h-2 transition-all duration-300`} />
                
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <job.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            job.type === "Internship" 
                              ? "bg-green-500/10 text-green-500" 
                              : "bg-blue-500/10 text-blue-500"
                          }`}>
                            {job.type}
                          </span>
                          <span className="text-xs text-muted-foreground">{job.department}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-primary" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-primary" />
                            {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 lg:flex-col lg:items-end">
                      <Button 
                        variant="hero" 
                        size="default"
                        onClick={() => handleApply(job)}
                        className="group/btn"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 lg:p-10"
          >
            <div className="text-center mb-8">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Apply Now</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-2">
                {selectedJob ? `Apply for ${selectedJob.title}` : "Submit Your Application"}
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 3-5 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                    Position *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a position</option>
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3+">3+ years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-foreground mb-2">
                    Portfolio/LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to join us? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about yourself, your skills, and why you'd be a great fit..."
                />
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                type="submit" 
                className="w-full sm:w-auto group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="hero-outline" size="xl" asChild className="group">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;