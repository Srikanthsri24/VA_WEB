import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, mounted } = useTheme();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-background/5' 
        : 'bg-background/70 backdrop-blur-lg border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Visionaries<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.path) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-secondary/80 hover:bg-secondary transition-all duration-300 hover:scale-105 overflow-hidden group"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                    theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`} />
                  <Moon className={`absolute inset-0 w-5 h-5 text-primary transition-all duration-500 ${
                    theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                  }`} />
                </div>
              </button>
            )}
            <Button variant="hero" size="default" asChild className="shadow-lg shadow-primary/20">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/98 backdrop-blur-xl border-b border-border px-4 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
              style={{ 
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Button variant="hero" size="lg" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;