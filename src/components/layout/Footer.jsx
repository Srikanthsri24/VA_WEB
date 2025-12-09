import { Link } from "react-router-dom";
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/contact" },
      { name: "Blog", path: "/blog" },
    ],
    services: [
      { name: "AI Solutions", path: "/services" },
      { name: "Machine Learning", path: "/services" },
      { name: "Data Analytics", path: "/services" },
      { name: "Consulting", path: "/services" },
    ],
    products: [
      { name: "Our Products", path: "/products" },
      { name: "AI Monitoring", path: "/products" },
      { name: "Energy Systems", path: "/products" },
      { name: "LMS", path: "/products" },
    ],
    legal: [
      { name: "Privacy Policy", url: "https://visionariesai.com/privacy-policy.html", external: true },
      { name: "Terms of Service", url: "https://visionariesai.com/terms-of-service.html", external: true },
      { name: "Refund & Warranty", url: "https://visionariesai.com/refund-warranty-policy.html", external: true },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Visionaries<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming educational institutions and businesses with cutting-edge AI solutions. We build intelligent products that drive innovation and growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@visionariesai.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>contact@visionariesai.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919849072243" className="hover:text-primary transition-colors">+91 9849072243</a>
                  <a href="tel:+919849042243" className="hover:text-primary transition-colors">+91 9849042243</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>3-28, Dubbakavani Peta, Polaki, Srikakulam, Andhra Pradesh, India - 532429</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} VisionariesAI Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
              >
                {link.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;