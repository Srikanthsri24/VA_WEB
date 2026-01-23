import { Link } from "react-router-dom";
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Send,
  Heart,
  Globe,
  Shield,
  Clock,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import logo from "../../../public/icon.png"
import logo from "../../../public/logo1.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
    ],
    services: [
      { name: "AI Solutions", path: "/services" },
      { name: "Machine Learning", path: "/services" },
      { name: "Data Analytics", path: "/services" },
      { name: "Consulting", path: "/services" },
    ],
    products: [
      { name: "AI Monitoring", path: "/products" },
      { name: "Energy Systems", path: "/products" },
      { name: "LMS Platform", path: "/products" },
      { name: "AI Assistant", path: "/products" },
      { name: "... More", path: "/products" },
    ],
    legal: [
      // { name: "Privacy Policy", url: "https://visionariesai.com/privacy-policy.html", external: true },
      { name: "Terms of Service", url: "https://visionariesai.com/terms-of-service.html", external: true },
      { name: "Refund & Warranty", url: "https://visionariesai.com/refund-warranty-policy.html", external: true },
    ],
  };

  const features = [
    { icon: Globe, text: "Serving clients across India & globally" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Clock, text: "24/7 Support available" },
  ];

  /** ✅ Two branches */
  const branches = [
    {
      label: "Srikakulam (Main Branch)",
      address: "3-28, Dubbakavani Peta, Polaki, Srikakulam, Andhra Pradesh, India - 532429",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=18.353620511952187,84.07063065323374",
    },
    {
      label: "Visakhapatnam (Branch Office)",
      address: "Visakhapatnam, Andhra Pradesh, India",
      mapLink: "https://www.google.com/maps/dir/?api=1&destination=17.72724,83.30584",
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-600" />

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-primary/10 via-card to-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Stay Updated
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on AI innovations and product releases.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full sm:w-80 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="group whitespace-nowrap">
                {subscribed ? (
                  <>
                    Subscribed!
                    <Heart className="w-4 h-4 ml-2 fill-current" />
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
                  {/* <Brain className="w-7 h-7 text-white" /> */}
                  <img src={logo} alt="" className="w-10 h-10 rounded-xl" />
                </div>
                <span className="font-display font-bold text-2xl text-foreground">
                  Visionaries<span className="text-primary">AI</span>
                </span>
              </Link>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming educational institutions and businesses with cutting-edge AI solutions. We build intelligent products that drive innovation and growth.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/visionariesai/posts/?feedView=all" },
                  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@VisionariesAILabspvtltd" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Contact Us
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@visionariesai.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>contact@visionariesai.com</span>
                  </a>
                </li>

                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <a href="tel:+919849072243" className="hover:text-primary transition-colors">
                      +91 9849072243
                    </a>
                    <a href="tel:+919849042243" className="hover:text-primary transition-colors">
                      +91 9849042243
                    </a>
                  </div>
                </li>

                {/* ✅ Two branch addresses */}
                {branches.map((b) => (
                  <li key={b.label}>
                    <a
                      href={b.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-foreground/90">
                          {b.label}
                        </span>
                        <span className="text-sm leading-relaxed">{b.address}</span>
                        <span className="text-xs text-primary flex items-center gap-1 mt-1">
                          <Navigation className="w-3 h-3" /> Get Directions
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                © Since 2023 – {currentYear} VisionariesAI Labs. Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                in India
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">

                <a
                  href={`${import.meta.env.BASE_URL}Documents/privacy-policy.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}Documents/terms-of-service.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}Documents/refund-warranty-policy.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refund & Warranty
                </a>



              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
