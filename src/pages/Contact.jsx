import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Calendar,
  Building,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const EMAILJS_PUBLIC_KEY = "9R9VMnwYtqehumZjw";
const EMAILJS_SERVICE_ID = "service_tvtk2xr";
const EMAILJS_TEMPLATE_ID = "template_joe8237";

/** ✅ Two branches */
const BRANCHES = [
  {
    key: "sri",
    label: "Srikakulam (Main Branch)",
    addressLine1: "3-28, Dubbakavani Peta",
    addressLine2: "Polaki, Srikakulam, AP - 532429",
    lat: 18.353620511952187,
    lng: 84.07063065323374,
  },
  {
    key: "vzg",
    label: "Visakhapatnam (Branch Office)",
    addressLine1: "Visakhapatnam, Andhra Pradesh",
    addressLine2: "India",
    lat: 17.72724,
    lng: 83.30584,
  },
];

const getDirectionsLink = (lat, lng) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

const getEmbedSrc = (lat, lng) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0].key);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const activeBranchObj = useMemo(
    () => BRANCHES.find((b) => b.key === activeBranch) || BRANCHES[0],
    [activeBranch]
  );

  const contactInfo = useMemo(
    () => [
      {
        icon: Mail,
        title: "Email Us",
        content: "contact@visionariesai.com",
        subtext: "We’ll respond within 24 hours",
        link: "mailto:contact@visionariesai.com",
      },
      {
        icon: Phone,
        title: "Call Us",
        content: "+91 9849072243",
        subtext: "+91 9849042243",
        link: "tel:+919849072243",
      },
      {
        icon: MapPin,
        title: "Our Branches",
        branches: true,
        subtext: "Open directions in Google Maps",
      },
      {
        icon: Clock,
        title: "Business Hours",
        content: "Monday - Saturday",
        subtext: "9:00 AM - 6:00 PM IST",
      },
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const getSubjectLabel = (value) => {
    const map = {
      general: "General Inquiry",
      sales: "Sales & Pricing",
      demo: "Request a Demo",
      support: "Technical Support",
      partnership: "Partnership",
      curriculum: "AI Curriculum Inquiry",
    };
    return map[value] || value || "General Inquiry";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name?.trim(),
        email: formData.email?.trim(),
        mobile: formData.phone?.trim(),
        organizationName: formData.company?.trim(),
        subject: `Subject: ${getSubjectLabel(formData.subject)}\n\nMessage:\n${formData.message?.trim()}`,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.10)_0%,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 animate-fade-up">
              Contact Us <ArrowRight className="w-4 h-4" />
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-4 animate-fade-up delay-100">
              Let’s Start a <span className="gradient-text">Conversation</span>
            </h1>

            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              Have a project in mind or want to know more about our products? Share your details and we’ll reach you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="glass-card p-6 hover-lift group animate-fade-up h-full"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-foreground leading-tight">
                      {info.title}
                    </h3>

                    {/* Branches */}
                    {info.branches ? (
                      <div className="mt-2 space-y-2">
                        {BRANCHES.map((b) => (
                          <a
                            key={b.key}
                            href={getDirectionsLink(b.lat, b.lng)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-foreground/90 hover:text-primary transition-colors text-sm"
                          >
                            {b.label}
                          </a>
                        ))}
                        <p className="text-xs text-muted-foreground pt-1">{info.subtext}</p>
                      </div>
                    ) : (
                      <div className="mt-2">
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground/90 hover:text-primary transition-colors text-sm break-words"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground/90 text-sm">{info.content}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{info.subtext}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            {/* Form */}
            <div className="glass-card p-7 sm:p-8 lg:p-10 animate-slide-in-left">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-muted-foreground mt-1">
                    Fill out the form and we’ll get back to you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
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
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Institution/Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your Institution/Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+91 9849072243"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="demo">Request a Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="curriculum">AI Curriculum Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Please share brief requirements, timeline, and your preferred contact method.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="hero"
                    size="lg"
                    type="submit"
                    className="w-full sm:w-auto group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar (sticky on desktop) */}
            <div className="space-y-8 animate-slide-in-right lg:sticky lg:top-24">
              {/* Quick Links */}
              <div className="glass-card p-7 sm:p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-5">Quick Actions</h3>

                <div className="space-y-3">
                  {[
                    { icon: Calendar, title: "Schedule a Demo", desc: "See our products in action", link: "#" },
                    { icon: MessageSquare, title: "WhatsApp Us", desc: "Chat with our team now", link: "https://wa.me/919849072243" },
                    { icon: Building, title: "Enterprise Solutions", desc: "For large organizations", link: "#" },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground leading-tight">{item.title}</p>
                        <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Locations (Tab style, cleaner) */}
              <div className="glass-card p-7 sm:p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-5">Our Locations</h3>

                <div className="flex items-center gap-2 mb-4">
                  {BRANCHES.map((b) => {
                    const active = b.key === activeBranch;
                    return (
                      <button
                        key={b.key}
                        type="button"
                        onClick={() => setActiveBranch(b.key)}
                        className={[
                          "px-3 py-2 rounded-lg text-sm font-medium transition-all border",
                          active
                            ? "bg-primary/10 text-primary border-primary/30"
                            : "bg-secondary/40 text-foreground/80 border-border hover:bg-secondary",
                        ].join(" ")}
                      >
                        {b.key === "sri" ? "Srikakulam" : "Visakhapatnam"}
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-xl overflow-hidden bg-secondary/50">
                  <div className="aspect-video relative">
                    <iframe
                      src={getEmbedSrc(activeBranchObj.lat, activeBranchObj.lng)}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title={activeBranchObj.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{activeBranchObj.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activeBranchObj.addressLine1}
                        {activeBranchObj.addressLine2 ? `, ${activeBranchObj.addressLine2}` : ""}
                      </p>
                    </div>

                    <a
                      href={getDirectionsLink(activeBranchObj.lat, activeBranchObj.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium shrink-0 hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Directions
                    </a>
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                  Tip: Use the tabs to switch between locations.
                </div>
              </div>
            </div>
            {/* /Sidebar */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
