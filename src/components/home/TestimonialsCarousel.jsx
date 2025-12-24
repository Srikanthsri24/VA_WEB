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
    name: "Principal, CBSE School",
    role: "Srikakulam, Andhra Pradesh",
    content:
      "The AI Monitoring System improved discipline and safety across the campus. Real-time alerts and centralized control have reduced incidents and made supervision easier.",
    rating: 5,
    avatar: "PS",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Vice Principal, High School",
    role: "Vizag, Andhra Pradesh",
    content:
      "Attendance tracking is now consistent and transparent. Reports are accurate, and our staff saves time every day on manual follow-ups.",
    rating: 5,
    avatar: "VP",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Director, Engineering College",
    role: "Andhra Pradesh",
    content:
      "The LMS rollout was smooth and well-structured. Assignments, content delivery, and communication are now streamlined across departments.",
    rating: 5,
    avatar: "DC",
    gradient: "from-green-500 to-teal-600",
  },
  {
    name: "Administrator, Residential School",
    role: "Anakapalle, Andhra Pradesh",
    content:
      "Hostel and transport modules brought everything into one place. Parents get timely updates, and our office workload has reduced significantly.",
    rating: 5,
    avatar: "AR",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "IT Head, Private University",
    role: "Hyderabad, Telangana",
    content:
      "Support is responsive and implementation was organized. The platform integrated well with our workflows and improved visibility across operations.",
    rating: 5,
    avatar: "IH",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    name: "School Correspondent",
    role: "Rajam, Andhra Pradesh",
    content:
      "Fee management is now clear for both parents and staff. Pending tracking, receipts, and reports are accurate and easy to access.",
    rating: 5,
    avatar: "SC",
    gradient: "from-emerald-500 to-lime-600",
  },
  {
    name: "Principal, State Board School",
    role: "Palasa, Andhra Pradesh",
    content:
      "The dashboards gave us quick insights into attendance and performance. Decision-making is faster, and follow-ups are more effective.",
    rating: 5,
    avatar: "PB",
    gradient: "from-fuchsia-500 to-rose-600",
  },
  {
    name: "Academic Coordinator",
    role: "Srikakulam, Andhra Pradesh",
    content:
      "The AI curriculum for classes 3–10 is engaging and structured. Students are curious and confident, and teachers find it easy to deliver.",
    rating: 5,
    avatar: "AC",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    name: "Parent Representative",
    role: "Vizag, Andhra Pradesh",
    content:
      "We receive timely updates about attendance and important notices. Communication is clear and we feel more connected to the school.",
    rating: 5,
    avatar: "PR",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Facility Manager",
    role: "Corporate Campus",
    content:
      "Energy Monitoring helped us identify wastage and peak usage patterns. The reports are practical and the savings were visible within weeks.",
    rating: 5,
    avatar: "FM",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Operations Head",
    role: "Industrial Unit",
    content:
      "The multi-channel energy monitoring gives us clear visibility across sections. The alerts and logs help prevent downtime and unnecessary load.",
    rating: 5,
    avatar: "OH",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Trustee, Educational Society",
    role: "Andhra Pradesh",
    content:
      "We liked the end-to-end approach—software, monitoring, and support. The system improved accountability without adding complexity for staff.",
    rating: 5,
    avatar: "TS",
    gradient: "from-blue-500 to-violet-600",
  },
  {
    name: "Principal, English Medium School",
    role: "Narasannapeta, Andhra Pradesh",
    content:
      "CCTV monitoring with AI alerts reduced the time we spent reviewing footage. The dashboard gives quick access when we need evidence.",
    rating: 5,
    avatar: "PE",
    gradient: "from-cyan-500 to-sky-600",
  },
  {
    name: "Exam Cell In-charge",
    role: "Degree College",
    content:
      "Exam and result handling is much easier now. Reports and consolidated summaries save us a lot of time during peak exam seasons.",
    rating: 5,
    avatar: "EC",
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "Accounts Manager",
    role: "Educational Campus",
    content:
      "Income and expenditure tracking is neat and report-ready. Audit preparation became faster with consistent records and exports.",
    rating: 5,
    avatar: "AM",
    gradient: "from-lime-500 to-emerald-600",
  },
  {
    name: "Transport In-charge",
    role: "School Transport Department",
    content:
      "Transport routes and student mapping are now organized. It’s easier to manage stops, attendance, and parent communication on delays.",
    rating: 5,
    avatar: "TI",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    name: "Hostel Warden",
    role: "Residential Campus",
    content:
      "Hostel attendance and permissions are easy to manage. Records are clean, and approvals are tracked properly without confusion.",
    rating: 5,
    avatar: "HW",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Head of Department",
    role: "Autonomous College",
    content:
      "We use the LMS for content and communication. Students submit work on time, and faculty collaboration has improved.",
    rating: 5,
    avatar: "HD",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    name: "School IT Coordinator",
    role: "Kakinada, Andhra Pradesh",
    content:
      "Setup was straightforward and training was practical. The team addressed our concerns quickly and the system runs reliably.",
    rating: 5,
    avatar: "IC",
    gradient: "from-slate-500 to-zinc-600",
  },
  {
    name: "Administrator, CBSE School",
    role: "Visakhapatnam, Andhra Pradesh",
    content:
      "Ask.VisionariesAI helps students with instant doubt clarification. It supports learning beyond classroom hours and keeps them engaged.",
    rating: 5,
    avatar: "AS",
    gradient: "from-green-500 to-teal-600",
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
