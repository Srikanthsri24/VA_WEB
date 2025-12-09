import { Star, Quote } from "lucide-react";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Principal, Leading School",
    role: "Srikakulam District",
    content: "VisionariesAI's AI Monitoring System has transformed our campus safety. We can now monitor everything in real-time and the automated alerts have been invaluable.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Director, Engineering College",
    role: "Andhra Pradesh",
    content: "The LMS and Attendance Management systems have streamlined our entire academic operations. Student engagement has improved significantly.",
    rating: 5,
    avatar: "DC",
  },
  {
    name: "Administrator, CBSE School",
    role: "Visakhapatnam",
    content: "Ask.VisionariesAI is a game-changer for our students. They can get instant doubt clarification anytime. The AI curriculum for classes 3-10 is comprehensive and engaging.",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Facility Manager",
    role: "Corporate Campus",
    content: "The Energy Monitoring System helped us reduce our electricity bills by 30%. The Universal Management System controls all our devices from one dashboard.",
    rating: 5,
    avatar: "FM",
  },
];

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.05)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what educational institutions and businesses say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={setRef(index)}
              className={`glass-card p-8 relative group hover-lift transition-all duration-700 ${
                isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-semibold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;