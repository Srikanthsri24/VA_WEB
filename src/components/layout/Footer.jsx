import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
  Send,
  Heart,
  Globe,
  Shield,
  ExternalLink,
  Clock,
  Navigation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "../../../public/logo1.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim()) {
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
    products: [
      { name: "AI Monitoring", path: "/products" },
      { name: "Energy Systems", path: "/products" },
      { name: "LMS Platform", path: "/products" },
      { name: "AI Assistant", path: "/products" },
      { name: "... More", path: "/products" },
    ],
  };

  const features = [
    { icon: Globe, text: "Serving clients across India & globally" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Clock, text: "24/7 Support available" },
  ];

  const branches = [
    {
      label: "Srikakulam (Main Branch)",
      address:
        "3-28, Dubbakavani Peta, Polaki, Srikakulam, Andhra Pradesh, India - 532429",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=18.353620511952187,84.07063065323374",
    },
    {
      label: "Visakhapatnam (Branch Office)",
      address: "Visakhapatnam, Andhra Pradesh, India",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=17.72724,83.30584",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/visionariesai/posts/?feedView=all",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@VisionariesAILabspvtltd",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Policy",
      url: `${import.meta.env.BASE_URL}privacy-policy.html`,
    },
    {
      name: "Terms of Service",
      url: `${import.meta.env.BASE_URL}terms-of-service.html`,
    },
    {
      name: "Refund & Warranty",
      url: `${import.meta.env.BASE_URL}refund-warranty-policy.html`,
    },
  ];

  const FooterLinkList = ({ title, colorClass, links }) => {
    return (
      <div className="w-full">
        <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2 text-base sm:text-lg">
          <span className={`w-2 h-2 rounded-full ${colorClass}`} />
          {title}
        </h4>

        <ul className="space-y-2.5 sm:space-y-3">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
              >
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-blue-600" />

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-primary/10 via-card to-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
                  Stay Updated
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
                Subscribe to Our Newsletter
              </h3>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Get the latest updates on AI innovations and product releases.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full sm:w-80 lg:w-96 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                required
              />

              <Button
                type="submit"
                variant="hero"
                className="group whitespace-nowrap w-full sm:w-auto min-h-[46px]"
              >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <Link
                to="/"
                className="flex items-center justify-center sm:justify-start gap-3 mb-5 sm:mb-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20 shrink-0">
                  <img
                    src={logo}
                    alt="VisionariesAI Logo"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                </div>

                <span className="font-display font-bold text-xl sm:text-2xl text-foreground">
                  Visionaries<span className="text-primary">AI</span>
                </span>
              </Link>

              <p className="text-muted-foreground mb-6 leading-relaxed text-center sm:text-left text-sm sm:text-base">
                Transforming educational institutions and businesses with
                cutting-edge AI solutions. We build intelligent products that
                drive innovation and growth.
              </p>

              <div className="space-y-3 mb-6">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="leading-relaxed">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center sm:justify-start gap-3">
                {socialLinks.map((social) => (
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
            <FooterLinkList
              title="Company"
              colorClass="bg-primary"
              links={footerLinks.company}
            />

            {/* Products Links */}
            <FooterLinkList
              title="Products"
              colorClass="bg-cyan-500"
              links={footerLinks.products}
            />

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2 text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Contact Us
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@visionariesai.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>

                    <span className="text-sm sm:text-base break-all">
                      contact@visionariesai.com
                    </span>
                  </a>
                </li>

                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex flex-col gap-1 text-sm sm:text-base">
                    <a
                      href="tel:+919849072243"
                      className="hover:text-primary transition-colors"
                    >
                      +91 9849072243
                    </a>
                    <a
                      href="tel:+919849042243"
                      className="hover:text-primary transition-colors"
                    >
                      +91 9849042243
                    </a>
                  </div>
                </li>

                {branches.map((branch) => (
                  <li key={branch.label}>
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed">
                          {branch.label}
                        </span>

                        <span className="text-sm leading-relaxed break-words">
                          {branch.address}
                        </span>

                        <span className="text-xs text-primary flex items-center gap-1 mt-1">
                          <Navigation className="w-3 h-3 shrink-0" />
                          Get Directions
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs sm:text-sm flex flex-wrap items-center justify-center lg:justify-start gap-1 text-center lg:text-left leading-relaxed">
                <span>© Since 2023 – {currentYear} VisionariesAI Labs.</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span>in India</span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-end gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    {link.name}
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;