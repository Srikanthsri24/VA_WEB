import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  ArrowRight,
  Sparkles,
  Send,
  Heart,
  Globe,
  Shield,
  ExternalLink,
  Clock,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logo from "../../../public/logo1.jpg";

const EMAILJS_PUBLIC_KEY = "9R9VMnwYtqehumZjw";
const EMAILJS_SERVICE_ID = "service_tvtk2xr";
const EMAILJS_TEMPLATE_ID = "template_joe8237";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const CONTACT_EMAIL = "contact@visionariesai.com";
  const INFO_EMAIL = "info@visionariesai.com";

  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const footerLinks = useMemo(
    () => ({
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
    }),
    []
  );

  const features = [
    { icon: Globe, text: "Serving clients across India & globally" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Clock, text: "24/7 Support available" },
  ];

  const branches = [
    {
      label: "Srikakulam",
      subtitle: "Main Branch",
      address:
        "3-28, Dubbakavani Peta, Polaki, Srikakulam, Andhra Pradesh, India - 532429",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=18.353620511952187,84.07063065323374",
      showDirections: true,
    },
    {
      label: "Visakhapatnam",
      subtitle: "Branch Office",
      address: "Visakhapatnam, Andhra Pradesh, India",
      mapLink:
        "https://www.google.com/maps/dir/?api=1&destination=17.72724,83.30584",
      showDirections: true,
    },
    {
      label: "Vijayawada",
      subtitle: "Service Location",
      address: "Andhra Pradesh, India",
      mapLink: "",
      showDirections: false,
    },
    {
      label: "Hyderabad",
      subtitle: "Service Location",
      address: "Telangana, India",
      mapLink: "",
      showDirections: false,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/visionariesai/posts/?feedView=all",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/visionariesai?igsh=M3MxNWt2NzNtbmo2&utm_source=qr",
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

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setSubscribeStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setSubscribeStatus({
        type: "loading",
        message: "Sending subscription...",
      });

      const templateParams = {
        name: "Newsletter Subscriber",
        email: trimmedEmail,
        mobile: "-",
        organizationName: "VisionariesAI Website Footer",
        subject: `Subject: New Newsletter Subscription

Message:
A new user subscribed from the VisionariesAI website footer.

Subscriber Email: ${trimmedEmail}
Send To: ${INFO_EMAIL}
Submitted From: VisionariesAI Website Footer
Submitted At: ${new Date().toLocaleString()}`,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubscribeStatus({
        type: "success",
        message: "Thank you! Your subscription was sent successfully.",
      });

      setEmail("");

      setTimeout(() => {
        setSubscribeStatus({
          type: "",
          message: "",
        });
      }, 3500);
    } catch (error) {
      console.error("EmailJS subscribe error:", error);

      setSubscribeStatus({
        type: "error",
        message: "Unable to send subscription. Please try again.",
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const FooterTitle = ({ dotClass, icon: Icon, children }) => {
    return (
      <h4 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-foreground">
        {Icon ? (
          <Icon className="h-5 w-5 text-primary" />
        ) : (
          <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
        )}
        {children}
      </h4>
    );
  };

  const FooterLinkList = ({ title, colorClass, links }) => {
    return (
      <div>
        <h5 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
          <span className={`h-2.5 w-2.5 rounded-full ${colorClass}`} />
          {title}
        </h5>

        <ul className="space-y-2.5">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary"
              >
                <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const InfoRow = ({ icon: Icon, label, children, href }) => {
    const content = (
      <div className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background/35 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <div className="mt-1 text-sm font-semibold leading-relaxed text-foreground">
            {children}
          </div>
        </div>
      </div>
    );

    if (href) {
      return (
        <a href={href} className="block">
          {content}
        </a>
      );
    }

    return content;
  };

  const LocationCard = ({ branch }) => {
    const cardContent = (
      <div className="group flex h-full min-h-[175px] flex-col rounded-3xl border border-border/70 bg-background/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 hover:shadow-xl hover:shadow-primary/10">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
            <MapPin className="h-5 w-5 text-primary" />
          </div>

          <div className="min-w-0">
            <h5 className="text-base font-bold leading-tight text-foreground">
              {branch.label}
            </h5>

            {branch.subtitle && (
              <span className="mt-1 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {branch.subtitle}
              </span>
            )}
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {branch.address}
        </p>

        {branch.showDirections && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            <Navigation className="h-4 w-4 shrink-0" />
            Get Directions
          </span>
        )}
      </div>
    );

    if (branch.showDirections && branch.mapLink) {
      return (
        <a
          href={branch.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
          aria-label={`Get directions to ${branch.label}`}
        >
          {cardContent}
        </a>
      );
    }

    return <div className="h-full">{cardContent}</div>;
  };

  return (
    <footer className="relative overflow-hidden bg-card">
      <div className="h-1.5 bg-gradient-to-r from-primary via-cyan-500 to-blue-600" />

      <section className="relative border-b border-border bg-gradient-to-br from-primary/10 via-card to-card">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 rounded-3xl border border-border/70 bg-background/40 p-5 shadow-sm sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Stay Updated
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                Subscribe to Our Newsletter
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                Get the latest updates on AI innovations, product releases,
                education technology, automation, and business solutions.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (subscribeStatus.message) {
                      setSubscribeStatus({
                        type: "",
                        message: "",
                      });
                    }
                  }}
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15 sm:text-base"
                  aria-label="Email address"
                />

                <Button
                  type="submit"
                  className="group h-12 rounded-2xl bg-primary px-6 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[150px]"
                  disabled={subscribeStatus.type === "loading"}
                >
                  {subscribeStatus.type === "loading" ? (
                    <>
                      Sending...
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  ) : subscribeStatus.type === "success" ? (
                    <>
                      Subscribed
                      <CheckCircle2 className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>

              {subscribeStatus.message && (
                <div
                  className={`mt-3 flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                    subscribeStatus.type === "success"
                      ? "bg-green-500/10 text-green-600"
                      : subscribeStatus.type === "loading"
                      ? "bg-primary/10 text-primary"
                      : "bg-red-500/10 text-red-600"
                  }`}
                >
                  {subscribeStatus.type === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : subscribeStatus.type === "loading" ? (
                    <Send className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}

                  <span>{subscribeStatus.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/70">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.18fr_0.78fr_1fr_0.82fr] xl:gap-12">
            <div>
              <Link to="/" className="group mb-5 inline-flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-500 shadow-lg shadow-primary/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <img
                    src={logo}
                    alt="VisionariesAI Logo"
                    className="h-11 w-11 rounded-xl object-cover"
                  />
                </div>

                <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Visionaries<span className="text-primary">AI</span>
                </span>
              </Link>

              <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Transforming educational institutions and businesses with
                cutting-edge AI solutions. We build intelligent products that
                drive innovation, automation, and growth.
              </p>

              <div className="space-y-3">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-[18px] w-[18px] text-primary" />
                    </div>

                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <FooterTitle dotClass="bg-primary">Quick Links</FooterTitle>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">
                <FooterLinkList
                  title="Company"
                  colorClass="bg-primary"
                  links={footerLinks.company}
                />

                <FooterLinkList
                  title="Products"
                  colorClass="bg-cyan-500"
                  links={footerLinks.products}
                />
              </div>
            </div>

            <div>
              <FooterTitle dotClass="bg-green-500">Contact Us</FooterTitle>

              <div className="space-y-4">
                <InfoRow icon={Mail} label="Emails">
                  <div className="flex flex-col gap-1">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-words transition-colors duration-300 hover:text-primary"
                    >
                      {CONTACT_EMAIL}
                    </a>

                    <a
                      href={`mailto:${INFO_EMAIL}`}
                      className="break-words transition-colors duration-300 hover:text-primary"
                    >
                      {INFO_EMAIL}
                    </a>
                  </div>
                </InfoRow>

                <InfoRow icon={Phone} label="Phone">
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919849072243"
                      className="transition-colors duration-300 hover:text-primary"
                    >
                      +91 9849072243
                    </a>

                    <a
                      href="tel:+919849042243"
                      className="transition-colors duration-300 hover:text-primary"
                    >
                      +91 9849042243
                    </a>
                  </div>
                </InfoRow>
              </div>
            </div>

            <div>
              <FooterTitle icon={Share2}>Follow Us</FooterTitle>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Connect with VisionariesAI Labs for latest updates, products,
                services, and technology news.
              </p>

              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-background/35 p-3 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                      <social.icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold">{social.label}</span>

                    <ExternalLink className="ml-auto h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border/70 pt-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                  <Globe className="h-5 w-5 text-primary" />
                  Our Locations
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Visit our branches and service locations across India.
                </p>
              </div>
            </div>

            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {branches.map((branch) => (
                <LocationCard key={branch.label} branch={branch} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background/40">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm lg:justify-start lg:text-left">
              <span>© Since 2023 – {currentYear} VisionariesAI Labs.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>in India</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm lg:justify-end">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium transition-colors duration-300 hover:text-primary"
                >
                  {link.name}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" />
                </a>
              ))}

              <button
                type="button"
                onClick={handleBackToTop}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;