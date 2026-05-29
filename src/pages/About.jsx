import Layout from "@/components/layout/Layout";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Rocket,
  Code,
  Database,
  Briefcase,
  Headphones,
  Brain,
  Calculator,
  Wrench,
  FlaskConical,
  Video,
  Megaphone,
  UserCog,
  GraduationCap,
} from "lucide-react";

const teamMembers = [
  // Leadership
  {
    id: 1,
    name: "Raghu Dubbaka",
    title: "Director",
    group: "Leadership",
    focus: ["Strategy", "Operations Oversight", "Business Growth"],
    avatar: "D",
    icon: Briefcase,
  },
  {
    id: 2,
    name: "Madhuri Dubbaka",
    title: "Director",
    group: "Leadership",
    focus: ["Administration", "People Management", "Finance Oversight"],
    avatar: "D",
    icon: Briefcase,
  },
  {
    id: 3,
    name: "Srikanth Dubbaka",
    title: "Founder & CEO",
    group: "Leadership",
    focus: ["Product Vision", "Client Success", "Go-to-Market", "Partnerships"],
    avatar: "CEO",
    icon: Rocket,
  },

  // Management
  {
    id: 9,
    name: "Shiva Sai Srinivas",
    title: "Sr. Manager",
    group: "Management",
    focus: [
      "Team Leadership",
      "Project Planning",
      "Client Coordination",
      "Delivery Management",
    ],
    avatar: "SM",
    icon: Users,
  },
  {
    id: 21,
    name: "Harsh Chandan Bendalam",
    title: "Chief Operational Manager",
    group: "Management",
    focus: [
      "Operations Management",
      "Team Coordination",
      "Process Planning",
      "Execution",
    ],
    avatar: "COM",
    icon: UserCog,
  },

  // Operations
  {
    id: 15,
    name: "Ram Krishna & Team",
    title: "Technician Team",
    group: "Operations",
    focus: [
      "Hardware Installation",
      "Device Maintenance",
      "On-site Support",
      "Networking",
    ],
    avatar: "OPS",
    icon: Wrench,
  },

  // Engineering
  {
    id: 5,
    name: "Lalith Kumar",
    title: "Full-Stack Developer",
    group: "Engineering",
    focus: ["MERN Stack", "React", "Node.js", "React Native", "API Integration"],
    avatar: "DEV",
    icon: Code,
  },
  {
    id: 6,
    name: "Narasing",
    title: "Full-Stack Developer",
    group: "Engineering",
    focus: ["MERN Stack", "React", "Node.js", "MongoDB", "System Architecture"],
    avatar: "DEV",
    icon: Code,
  },
  {
    id: 4,
    name: "Gayathri",
    title: "DevOps Engineer",
    group: "Engineering",
    focus: ["CI/CD Pipelines", "Cloud Infrastructure", "Server Monitoring", "Security"],
    avatar: "DO",
    icon: Database,
  },
  {
    id: 22,
    name: "Chandrakala",
    title: "Python Developer",
    group: "Engineering",
    focus: ["Python", "Backend Development", "API Development", "Database Integration"],
    avatar: "PY",
    icon: Code,
  },

  // AI & Data
  {
    id: 7,
    name: "Harsh & Team",
    title: "AI Developer Team",
    group: "AI & Data",
    focus: ["Machine Learning", "Computer Vision", "Model Training", "AI Integrations"],
    avatar: "AI",
    icon: Brain,
  },

  // AI Training
  {
    id: 23,
    name: "Anil Sajja",
    title: "AI Trainer",
    group: "AI Training",
    focus: ["AI Training", "Student Workshops", "Teacher Training", "Practical Sessions"],
    avatar: "TR",
    icon: GraduationCap,
  },

  // Editorial
  {
    id: 19,
    name: "Uday & Team",
    title: "Editorial Team",
    group: "Editorial",
    focus: ["Content Editing", "Proofreading", "Academic Content", "Book Formatting"],
    avatar: "ED",
    icon: Video,
  },

  // QA
  {
    id: 11,
    name: "Pothala Santhosi",
    title: "Test Engineer",
    group: "QA",
    focus: ["Manual Testing", "Test Case Design", "Bug Reporting", "Release Validation"],
    avatar: "QA",
    icon: FlaskConical,
  },
  {
    id: 12,
    name: "Nikitha",
    title: "Automation Engineer",
    group: "QA",
    focus: ["Test Automation", "Selenium / Playwright", "API Testing", "Performance Testing"],
    avatar: "AT",
    icon: FlaskConical,
  },

  // Business
  {
    id: 8,
    name: "Jallu Gopal",
    title: "Business Developer",
    group: "Business",
    focus: ["Client Acquisition", "Institution Partnerships", "Product Demos", "Sales Strategy"],
    avatar: "BD",
    icon: Briefcase,
  },

  // Marketing
  {
    id: 16,
    name: "Anil S",
    title: "Marketing Executive",
    group: "Marketing",
    focus: ["Digital Marketing", "Brand Strategy", "Campaign Management", "Analytics"],
    avatar: "MK",
    icon: Briefcase,
  },
  {
    id: 17,
    name: "Chaitanya",
    title: "Marketing Executive",
    group: "Marketing",
    focus: ["Content Marketing", "Social Media", "Lead Generation", "SEO"],
    avatar: "MK",
    icon: Briefcase,
  },

  // Digital Marketing
  {
    id: 20,
    name: "Girish & Team",
    title: "Digital Marketing Team",
    group: "Digital Marketing",
    focus: ["Social Media", "Digital Campaigns", "Brand Promotion", "Lead Generation"],
    avatar: "DM",
    icon: Megaphone,
  },

  // Support
  {
    id: 10,
    name: "Ratnakar & Team",
    title: "Support Team",
    group: "Support",
    focus: ["Client Support", "Issue Resolution", "Product Training", "Onboarding"],
    avatar: "SP",
    icon: Headphones,
  },
  {
    id: 18,
    name: "Geethika J",
    title: "Support Engineer",
    group: "Support",
    focus: ["Technical Support", "Customer Assistance", "Issue Resolution", "Documentation"],
    avatar: "SE",
    icon: Headphones,
  },

  // Finance
  {
    id: 13,
    name: "Hari Krishna",
    title: "Chartered Accountant",
    group: "Finance",
    focus: ["Accounting & Compliance", "Auditing", "Taxation", "Financial Reporting"],
    avatar: "CA",
    icon: Calculator,
  },
  {
    id: 14,
    name: "Midhun",
    title: "Chartered Accountant",
    group: "Finance",
    focus: ["GST & Tax Filing", "Payroll", "Financial Planning", "Regulatory Compliance"],
    avatar: "CA",
    icon: Calculator,
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We push boundaries and embrace cutting-edge technology to deliver exceptional solutions.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our success. We're committed to delivering measurable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we build and deliver.",
  },
];

const groupColors = {
  Leadership: "from-cyan-500 to-blue-600",
  Management: "from-purple-500 to-pink-600",
  Engineering: "from-green-500 to-teal-600",
  "AI & Data": "from-orange-500 to-red-600",
  "AI Training": "from-sky-500 to-cyan-600",
  Editorial: "from-violet-500 to-purple-600",
  QA: "from-indigo-500 to-purple-600",
  Business: "from-yellow-500 to-orange-600",
  Marketing: "from-rose-500 to-orange-600",
  "Digital Marketing": "from-fuchsia-500 to-pink-600",
  Support: "from-pink-500 to-rose-600",
  Finance: "from-emerald-500 to-green-600",
  Operations: "from-blue-500 to-indigo-600",
};

const About = () => {
  const groupedTeam = teamMembers.reduce((acc, member) => {
    if (!acc[member.group]) acc[member.group] = [];
    acc[member.group].push(member);
    return acc;
  }, {});

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 animate-fade-up">
              About Us
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6 animate-fade-up delay-100">
              Building the Future of{" "}
              <span className="gradient-text">Intelligent Systems</span>
            </h1>

            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
              VisionariesAI Labs is a service and product-based AI company
              dedicated to transforming educational institutions and businesses
              through innovative artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-10 hover-lift animate-slide-in-left">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                To democratize artificial intelligence and make it accessible to
                educational institutions and businesses of all sizes. We believe
                in building AI solutions that are not just powerful, but also
                practical and impactful for real-world applications.
              </p>
            </div>

            <div className="glass-card p-10 hover-lift animate-slide-in-right">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                To be the leading AI innovation partner for educational
                institutions and enterprises, known for delivering transformative
                solutions that drive growth, efficiency, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const ValueIcon = value.icon;

              return (
                <div
                  key={value.title}
                  className="glass-card p-6 text-center hover-lift group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ValueIcon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                From Vision to Reality
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  VisionariesAI Labs was founded with a simple yet powerful idea:
                  to make AI accessible and impactful for educational
                  institutions and businesses everywhere.
                </p>

                <p>
                  Starting as a small team of AI enthusiasts in Srikakulam,
                  Andhra Pradesh, we've grown into a full-fledged AI company with
                  multiple products in production serving clients across India.
                </p>

                <p>
                  Today, our products are being used by schools, colleges, and
                  businesses to automate processes, enhance learning experiences,
                  and deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Rocket, value: "100+", label: "Projects Delivered" },
                  { icon: Users, value: "100+", label: "Happy Clients" },
                  { icon: Award, value: "8+", label: "Products Live" },
                  { icon: Target, value: "99%", label: "Success Rate" },
                ].map((stat, index) => {
                  const StatIcon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="text-center p-6 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors animate-bounce-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <StatIcon className="w-8 h-8 text-primary mx-auto mb-3" />

                      <p className="font-display text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
    {/* Team */}
<section id="team" className="py-16 bg-card/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <span className="text-primary font-medium text-sm uppercase tracking-wider">
        Our Team
      </span>

      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4">
        Meet the <span className="gradient-text">Visionaries</span>
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Our diverse team brings expertise across engineering, AI, business
        development, management, operations, content, marketing, and support
        to deliver exceptional solutions.
      </p>
    </div>

    {Object.entries(groupedTeam).map(([group, members], groupIndex) => (
      <div key={group} className="mb-16 last:mb-0">
        <div className="flex items-center gap-3 mb-8">
          <div
            className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${
              groupColors[group] || "from-primary to-primary"
            }`}
          />

          <h3 className="font-display text-2xl font-bold text-foreground">
            {group}
          </h3>

          <span className="text-sm text-muted-foreground">
            ({members.length})
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {members.map((member, index) => {
            const MemberIcon = member.icon;

            return (
              <div
                key={member.id}
                className="glass-card relative overflow-hidden p-7 min-h-[285px] hover-lift group animate-fade-up border border-border/70"
                style={{
                  animationDelay: `${groupIndex * 100 + index * 50}ms`,
                }}
              >
                <div
                  className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${
                    groupColors[member.group] || "from-primary to-primary"
                  } opacity-10 group-hover:opacity-20 transition-all duration-300`}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                      groupColors[member.group] || "from-primary to-primary"
                    } flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="font-display text-xl font-bold text-white">
                      {member.avatar}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-xl font-bold text-foreground leading-snug mb-1">
                      {member.name}
                    </h4>

                    <p className="text-primary text-base font-medium leading-snug mb-3">
                      {member.title}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MemberIcon className="w-4 h-4 text-primary shrink-0" />
                      <span>{member.group}</span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Focused on {member.focus.slice(0, 2).join(" and ").toLowerCase()}.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.focus.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 rounded-full bg-secondary/80 text-muted-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</section>
    </Layout>
  );
};

export default About;