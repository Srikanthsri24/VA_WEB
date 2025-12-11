import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    name: "Raghu Dubbaka",
    title: "Director",
    group: "Leadership",
    focus: ["Strategy", "Operations", "Business Growth"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Madhuri Dubbaka",
    title: "Director",
    group: "Leadership",
    focus: ["Administration", "People Management", "Finance"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Srikanth Dubbaka",
    title: "Founder & CEO",
    group: "Leadership",
    focus: ["Product Vision", "Client Success", "Partnerships"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Shiva Sai Srinivas",
    title: "Sr. Manager",
    group: "Management",
    focus: ["Team Leadership", "Project Planning", "Delivery"],
    gradient: "from-green-500 to-teal-600",
  },
];

const TeamPreview = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(teamMembers.length);

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-4">
            <Users className="w-4 h-4 inline mr-2" />
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="gradient-text">Visionaries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate team of innovators, engineers, and leaders working together to build the future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={setRef(index)}
              className={`group glass-card p-6 text-center hover-lift transition-all duration-700 ${
                isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                <span className="font-display font-bold text-white text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">{member.title}</p>
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground mb-3">
                {member.group}
              </span>

              {/* Focus Areas */}
              <div className="flex flex-wrap justify-center gap-1">
                {member.focus.slice(0, 2).map((skill) => (
                  <span key={skill} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-500 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button variant="outline" size="lg" asChild className="group border-primary/30 hover:border-primary hover:bg-primary/5">
            <Link to="/about#team">
              View Full Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
