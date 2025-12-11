import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Principal, Leading School",
    role: "Srikakulam District",
    content: "VisionariesAI's AI Monitoring System has transformed our campus safety. We can now monitor everything in real-time and the automated alerts have been invaluable.",
    rating: 5,
    avatar: "PS",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Director, Engineering College",
    role: "Andhra Pradesh",
    content: "The LMS and Attendance Management systems have streamlined our entire academic operations. Student engagement has improved significantly.",
    rating: 5,
    avatar: "DC",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Administrator, CBSE School",
    role: "Visakhapatnam",
    content: "Ask.VisionariesAI is a game-changer for our students. They can get instant doubt clarification anytime. The AI curriculum for classes 3-10 is comprehensive and engaging.",
    rating: 5,
    avatar: "AS",
    gradient: "from-green-500 to-teal-600",
  },
  {
    name: "Facility Manager",
    role: "Corporate Campus",
    content: "The Energy Monitoring System helped us reduce our electricity bills by 30%. The Universal Management System controls all our devices from one dashboard.",
    rating: 5,
    avatar: "FM",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "IT Head, Private University",
    role: "Hyderabad",
    content: "Implementation was smooth and the support team is excellent. The AI products have made our institution truly smart and efficient.",
    rating: 5,
    avatar: "IH",
    gradient: "from-indigo-500 to-violet-600",
  },
];

const TestimonialsCarousel = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation();
  
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--primary)/0.05)_0%,_transparent_50%)]" />
      
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

        {/* Testimonials Carousel */}
        <div 
          ref={carouselRef}
          className={`transition-all duration-700 delay-200 ${
            carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="glass-card p-8 relative group hover-lift h-full min-h-[300px] flex flex-col">
                    {/* Quote Icon with gradient */}
                    <div className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center`}>
                      <Quote className="w-6 h-6 text-foreground" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-primary text-primary transition-all duration-300 group-hover:scale-110" 
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <span className="font-display font-bold text-white text-lg">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    {/* Hover gradient border */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none`} />
                    
                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl`} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
              <CarouselNext className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
