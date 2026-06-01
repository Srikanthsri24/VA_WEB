import { Star, Quote } from "lucide-react";
import {
  useScrollAnimation,
  useScrollAnimationGroup,
} from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Principal, Leading School",
    role: "AI Curriculum & School Technology",
    content:
      "VisionariesAI helped us introduce AI-based learning with proper curriculum, LMS support, and classroom technology. Their solutions are useful for school students from early classes to higher classes.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "School Correspondent",
    role: "Complete School Digital Solutions",
    content:
      "From smart classrooms to school automation, VisionariesAI provides practical technology solutions for schools. Their team understands school requirements clearly and supports implementation properly.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Academic Coordinator",
    role: "ScholAR Labs for Classes 6 to 12",
    content:
      "ScholAR Labs helped our students understand Science concepts through AR and 3D simulations. Physics, Chemistry, and Biology topics became more visual, practical, and easy to explain.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "School Administrator",
    role: "Aye Board Smart Classroom",
    content:
      "Aye Board presented by VisionariesAI improved our classroom teaching experience. Teachers can explain lessons more clearly using digital content and smart board features.",
    rating: 5,
    avatar: "SA",
  },
  {
    name: "Principal, Private School",
    role: "Learning Management System",
    content:
      "The LMS platform made lessons, assignments, quizzes, and student tracking easier. It is useful for teachers, students, and school management.",
    rating: 5,
    avatar: "PP",
  },
  {
    name: "School Management Team",
    role: "Nursery to 12th School Support",
    content:
      "VisionariesAI provides solutions suitable for Nursery to Class 12 schools. Their AI curriculum, smart board, LMS, ScholAR Labs, and automation services are helpful for modern education.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Operations Head",
    role: "Attendance Management System",
    content:
      "The attendance system with face recognition, fingerprint, and RFID improved our daily tracking process. Reports are easy to manage and the system is suitable for schools and offices.",
    rating: 5,
    avatar: "OH",
  },
  {
    name: "Campus Security Incharge",
    role: "AI CCTV Monitoring",
    content:
      "The AI CCTV monitoring system helped us improve campus safety. Real-time alerts and abnormal activity detection reduced manual monitoring work.",
    rating: 5,
    avatar: "CS",
  },
  {
    name: "Business Owner",
    role: "Software Development Services",
    content:
      "VisionariesAI developed our software with proper planning, clean UI, backend support, deployment, and technical guidance. Their service is useful for growing businesses.",
    rating: 5,
    avatar: "BO",
  },
  {
    name: "Retail Business Owner",
    role: "Business Automation",
    content:
      "Their technology solutions helped us manage business operations more easily. The team provided good support from requirement discussion to final implementation.",
    rating: 5,
    avatar: "RB",
  },
  {
    name: "Facility Manager",
    role: "Energy Monitoring System",
    content:
      "The single-phase and three-phase energy monitoring systems helped us track power usage, control devices, and receive alerts from one platform.",
    rating: 5,
    avatar: "FM",
  },
  {
    name: "Corporate Campus Manager",
    role: "Production-Based Technology Solutions",
    content:
      "VisionariesAI products are practical and production-ready. Their AI, IoT, automation, and software solutions are useful for schools, campuses, and business operations.",
    rating: 5,
    avatar: "CM",
  },
];

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.05)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            Client Reviews
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="gradient-text">
              Schools, Businesses & Institutions
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Reviews based on our school products, AI curriculum, Aye Board,
            ScholAR Labs, LMS, attendance systems, AI CCTV, energy monitoring,
            software development, and production-ready technology services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              ref={setRef(index)}
              className={`glass-card p-8 relative group hover-lift transition-all duration-700 ${
                isVisible(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-foreground/90 text-base leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <span className="font-display font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>

                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;