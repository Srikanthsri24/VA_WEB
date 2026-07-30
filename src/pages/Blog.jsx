import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Bookmark,
  Bot,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  Cuboid,
  Eye,
  GraduationCap,
  Mail,
  MessageCircle,
  Rocket,
  Search,
  Send,
  Share2,
  Sparkles,
  TrendingUp,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 28,
    slug: "visionariesai-robo-teacher-ai-classroom-robot",
    title: "VisionariesAI Robo Teacher: An AI Classroom Teaching Robot",
    excerpt:
      "Robo Teacher is an AI-powered classroom robot developed by VisionariesAI to teach lessons, interact with students, explain concepts, conduct classroom activities, and answer student doubts through natural voice conversations.",
    author: "VisionariesAI Robotics Team",
    dateLabel: "Jul 30, 2026",
    publishedAt: "2026-07-30",
    readTime: "8 min read",
    category: "Robotics & AI",
    tags: ["Robo Teacher", "AI Classroom Robot", "Student Doubts"],
    featured: true,
    views: 0,
    comments: 0,
    icon: "🤖",
  },
  {
    id: 29,
    slug: "custom-3d-objects-design-and-visualization",
    title: "Custom 3D Objects for Education, AR, VR and Product Visualization",
    excerpt:
      "VisionariesAI creates custom 3D objects and interactive digital models for classroom learning, science visualization, AR and VR experiences, product demonstrations, prototypes, simulations, and 3D printing requirements.",
    author: "VisionariesAI 3D Design Team",
    dateLabel: "Jul 29, 2026",
    publishedAt: "2026-07-29",
    readTime: "7 min read",
    category: "3D Solutions",
    tags: ["3D Objects", "3D Visualization", "AR and VR"],
    featured: true,
    views: 0,
    comments: 0,
    icon: "🧊",
  },
  {
    id: 26,
    slug: "aye-board-presented-by-visionariesai",
    title: "Aye Board Presented by VisionariesAI",
    excerpt:
      "Aye Board is an AI-enabled smart classroom board solution for schools, helping teachers deliver digital lessons, interactive teaching, and modern classroom learning.",
    author: "VisionariesAI Team",
    dateLabel: "Jun 01, 2026",
    publishedAt: "2026-06-01",
    readTime: "7 min read",
    category: "Education Services",
    tags: ["Aye Board", "Smart Board", "Smart Classroom"],
    featured: true,
    views: 8200,
    comments: 118,
    icon: "🖥️",
  },
  {
    id: 27,
    slug: "scholarlabs-ar-3d-learning-for-schools",
    title: "ScholAR Labs for Classes 6 to 12",
    excerpt:
      "ScholAR Labs helps students from Classes 6 to 12 learn Physics, Chemistry, and Biology through AR, 3D simulations, and interactive classroom experiences.",
    author: "Education Team",
    dateLabel: "Jun 01, 2026",
    publishedAt: "2026-06-01",
    readTime: "8 min read",
    category: "Education Services",
    tags: ["ScholAR Labs", "AR Learning", "3D Simulations"],
    featured: true,
    views: 7900,
    comments: 104,
    icon: "🧪",
  },
  {
    id: 1,
    slug: "rajasab-project-successfully-delivered",
    title: "Rajasab Project Successfully Delivered",
    excerpt:
      "VisionariesAI Labs successfully delivered the Rajasab project with complete application setup, deployment, production configuration, and technical support.",
    author: "VisionariesAI Team",
    dateLabel: "May 30, 2026",
    publishedAt: "2026-05-30",
    readTime: "7 min read",
    category: "Delivered Projects",
    tags: ["Rajasab Project", "Web Application", "Deployment"],
    featured: true,
    views: 5200,
    comments: 68,
    icon: "🚀",
  },
  {
    id: 2,
    slug: "email-server-delivered-for-business-communication",
    title: "Email Server Delivered for Business Communication",
    excerpt:
      "A professional email server setup delivered with domain configuration, reliable communication flow, and business-ready technical support.",
    author: "VisionariesAI Team",
    dateLabel: "May 28, 2026",
    publishedAt: "2026-05-28",
    readTime: "6 min read",
    category: "Delivered Projects",
    tags: ["Email Server", "Business Communication", "Domain Setup"],
    featured: false,
    views: 4100,
    comments: 54,
    icon: "📧",
  },
  {
    id: 3,
    slug: "iot-dental-project-delivered",
    title: "IoT Dental Project Delivered with Smart Automation",
    excerpt:
      "An IoT-based dental project delivered with smart device connectivity, real-time control, monitoring flow, and automation support.",
    author: "IoT Team",
    dateLabel: "May 25, 2026",
    publishedAt: "2026-05-25",
    readTime: "8 min read",
    category: "IoT Solutions",
    tags: ["IoT", "Dental Project", "Smart Automation"],
    featured: false,
    views: 4650,
    comments: 72,
    icon: "🦷",
  },
  {
    id: 4,
    slug: "ai-chatbots-delivered-for-businesses",
    title: "AI Chatbots Delivered for Smarter Customer Support",
    excerpt:
      "AI chatbot solutions delivered to automate customer replies, improve response speed, and support businesses with intelligent communication.",
    author: "AI Team",
    dateLabel: "May 22, 2026",
    publishedAt: "2026-05-22",
    readTime: "6 min read",
    category: "AI Solutions",
    tags: ["AI Chatbots", "Automation", "Customer Support"],
    featured: false,
    views: 6100,
    comments: 88,
    icon: "🤖",
  },
  {
    id: 5,
    slug: "providing-services-to-100-plus-schools",
    title: "Providing Technology Services to 100+ Schools",
    excerpt:
      "VisionariesAI Labs is supporting 100+ schools with AI curriculum, LMS, school management systems, workshops, Aye Board, ScholAR Labs, and smart education tools.",
    author: "VisionariesAI Team",
    dateLabel: "May 20, 2026",
    publishedAt: "2026-05-20",
    readTime: "7 min read",
    category: "Education Services",
    tags: ["100+ Schools", "AI Curriculum", "School Solutions"],
    featured: false,
    views: 7800,
    comments: 102,
    icon: "🏫",
  },
  {
    id: 6,
    slug: "500-plus-satisfied-clients-journey",
    title: "500+ Satisfied Clients: Our Journey of Trust",
    excerpt:
      "Till now, VisionariesAI Labs has served 500+ satisfied clients through software, AI, IoT, automation, and education technology services.",
    author: "VisionariesAI Team",
    dateLabel: "May 18, 2026",
    publishedAt: "2026-05-18",
    readTime: "5 min read",
    category: "Company Updates",
    tags: ["500+ Clients", "Client Success", "Technology Services"],
    featured: false,
    views: 6900,
    comments: 96,
    icon: "🌟",
  },
  {
    id: 7,
    slug: "school-workshops-for-future-ready-students",
    title: "Workshops at Schools for Future-Ready Students",
    excerpt:
      "Practical school workshops on AI, robotics, IoT, coding, automation, and modern technologies to prepare students for future careers.",
    author: "Training Team",
    dateLabel: "May 15, 2026",
    publishedAt: "2026-05-15",
    readTime: "7 min read",
    category: "Workshops",
    tags: ["School Workshops", "Robotics", "AI Training"],
    featured: false,
    views: 5700,
    comments: 81,
    icon: "🎓",
  },
  {
    id: 8,
    slug: "automation-to-applications-delivered",
    title: "From Automation to Applications: Projects Delivered",
    excerpt:
      "Multiple automation systems and web/mobile applications delivered for businesses, institutions, and individual client requirements.",
    author: "Development Team",
    dateLabel: "May 12, 2026",
    publishedAt: "2026-05-12",
    readTime: "8 min read",
    category: "Automation",
    tags: ["Automation", "Applications", "Software Development"],
    featured: false,
    views: 6400,
    comments: 91,
    icon: "⚙️",
  },
  {
    id: 9,
    slug: "many-projects-running-live",
    title: "Many Projects Running Live with Real-Time Users",
    excerpt:
      "Several VisionariesAI projects are running live with dashboards, automation flows, digital platforms, and real-time user operations.",
    author: "VisionariesAI Team",
    dateLabel: "May 10, 2026",
    publishedAt: "2026-05-10",
    readTime: "6 min read",
    category: "Company Updates",
    tags: ["Live Projects", "Production Systems", "Digital Platforms"],
    featured: false,
    views: 5900,
    comments: 74,
    icon: "🌐",
  },
  {
    id: 10,
    slug: "ai-curriculum-services-for-schools",
    title: "AI Curriculum Services for Schools",
    excerpt:
      "AI academic curriculum support for schools with practical learning, LMS activities, classroom examples, and student-friendly content.",
    author: "Education Team",
    dateLabel: "May 08, 2026",
    publishedAt: "2026-05-08",
    readTime: "7 min read",
    category: "Education Services",
    tags: ["AI Curriculum", "Schools", "LMS"],
    featured: false,
    views: 7200,
    comments: 99,
    icon: "📚",
  },
  {
    id: 11,
    slug: "lms-solutions-for-modern-schools",
    title: "LMS Solutions for Modern Schools",
    excerpt:
      "LMS solutions to manage lessons, quizzes, student activities, digital learning, teacher workflows, and academic progress tracking.",
    author: "Product Team",
    dateLabel: "May 05, 2026",
    publishedAt: "2026-05-05",
    readTime: "6 min read",
    category: "Education Services",
    tags: ["LMS", "Digital Learning", "School Platform"],
    featured: false,
    views: 5300,
    comments: 63,
    icon: "🧩",
  },
  {
    id: 12,
    slug: "school-management-software-delivered",
    title: "School Management Software Delivered",
    excerpt:
      "Complete school management software delivered with admissions, students, staff, fees, exams, attendance, reports, and academic workflows.",
    author: "Development Team",
    dateLabel: "May 02, 2026",
    publishedAt: "2026-05-02",
    readTime: "8 min read",
    category: "Software Development",
    tags: ["School Management", "ERP", "Web Application"],
    featured: false,
    views: 5600,
    comments: 77,
    icon: "🏢",
  },
  {
    id: 13,
    slug: "smart-attendance-solutions-for-schools",
    title: "Smart Attendance Solutions for Schools",
    excerpt:
      "Smart attendance systems using face recognition, biometric devices, RFID support, and digital reports for better institutional tracking.",
    author: "IoT Team",
    dateLabel: "Apr 29, 2026",
    publishedAt: "2026-04-29",
    readTime: "6 min read",
    category: "IoT Solutions",
    tags: ["Smart Attendance", "Biometric", "Face Recognition"],
    featured: false,
    views: 4900,
    comments: 58,
    icon: "🆔",
  },
  {
    id: 14,
    slug: "robotics-and-iot-training-at-schools",
    title: "Robotics and IoT Training for Students",
    excerpt:
      "Robotics and IoT training to help students understand sensors, automation, coding, devices, and real-world project development.",
    author: "Training Team",
    dateLabel: "Apr 26, 2026",
    publishedAt: "2026-04-26",
    readTime: "7 min read",
    category: "Workshops",
    tags: ["Robotics", "IoT Training", "Student Projects"],
    featured: false,
    views: 6200,
    comments: 84,
    icon: "🦾",
  },
  {
    id: 15,
    slug: "ai-based-student-projects-delivered",
    title: "AI-Based Student Projects Delivered",
    excerpt:
      "Student AI projects delivered with practical examples, easy tools, guided implementation, and project-based learning methods.",
    author: "AI Team",
    dateLabel: "Apr 23, 2026",
    publishedAt: "2026-04-23",
    readTime: "6 min read",
    category: "AI Solutions",
    tags: ["AI Projects", "Students", "Practical Learning"],
    featured: false,
    views: 5800,
    comments: 71,
    icon: "🧠",
  },
  {
    id: 16,
    slug: "business-automation-solutions-delivered",
    title: "Business Automation Solutions Delivered",
    excerpt:
      "Automation systems delivered to reduce manual work, improve accuracy, increase speed, and support business operations efficiently.",
    author: "Automation Team",
    dateLabel: "Apr 20, 2026",
    publishedAt: "2026-04-20",
    readTime: "7 min read",
    category: "Automation",
    tags: ["Business Automation", "Workflow", "Operations"],
    featured: false,
    views: 5400,
    comments: 66,
    icon: "🔄",
  },
  {
    id: 17,
    slug: "custom-web-applications-for-clients",
    title: "Custom Web Applications for Client Needs",
    excerpt:
      "Custom web applications developed with dashboards, admin panels, user roles, APIs, reports, and secure backend systems.",
    author: "Development Team",
    dateLabel: "Apr 17, 2026",
    publishedAt: "2026-04-17",
    readTime: "8 min read",
    category: "Software Development",
    tags: ["Web Applications", "React", "Django"],
    featured: false,
    views: 5100,
    comments: 59,
    icon: "💻",
  },
  {
    id: 18,
    slug: "mobile-application-development-services",
    title: "Mobile Application Development Services",
    excerpt:
      "Mobile app development services with clean UI, smooth performance, backend integration, and scalable business workflows.",
    author: "Mobile Team",
    dateLabel: "Apr 14, 2026",
    publishedAt: "2026-04-14",
    readTime: "6 min read",
    category: "Software Development",
    tags: ["Mobile Apps", "React Native", "Business Apps"],
    featured: false,
    views: 4700,
    comments: 52,
    icon: "📱",
  },
  {
    id: 19,
    slug: "ai-powered-school-transformation-services",
    title: "Helping Schools Move Towards AI and Digital Transformation",
    excerpt:
      "Supporting schools with AI learning, digital systems, smart classrooms, LMS platforms, workshops, and future-ready technology services.",
    author: "VisionariesAI Team",
    dateLabel: "Apr 11, 2026",
    publishedAt: "2026-04-11",
    readTime: "7 min read",
    category: "Education Services",
    tags: ["AI Schools", "Digital Transformation", "Smart Classrooms"],
    featured: false,
    views: 6600,
    comments: 90,
    icon: "✨",
  },
  {
    id: 20,
    slug: "teacher-training-programs-for-ai-education",
    title: "Teacher Training Programs for AI-Based Education",
    excerpt:
      "Teacher training programs to help educators understand AI concepts, LMS usage, classroom tools, and practical teaching methods.",
    author: "Training Team",
    dateLabel: "Apr 08, 2026",
    publishedAt: "2026-04-08",
    readTime: "6 min read",
    category: "Workshops",
    tags: ["Teacher Training", "AI Education", "LMS Training"],
    featured: false,
    views: 4950,
    comments: 57,
    icon: "👩‍🏫",
  },
  {
    id: 21,
    slug: "iot-device-control-and-monitoring-solutions",
    title: "IoT Device Control and Monitoring Solutions",
    excerpt:
      "IoT systems developed for device control, monitoring, automation, real-time data, and smart decision-making across industries.",
    author: "IoT Team",
    dateLabel: "Apr 05, 2026",
    publishedAt: "2026-04-05",
    readTime: "8 min read",
    category: "IoT Solutions",
    tags: ["IoT Devices", "Monitoring", "Smart Control"],
    featured: false,
    views: 5600,
    comments: 69,
    icon: "📡",
  },
  {
    id: 22,
    slug: "digital-marketing-and-school-branding-services",
    title: "Digital Marketing and School Branding Services",
    excerpt:
      "Branding, websites, promotional content, digital campaigns, and technology-focused visibility support for schools and businesses.",
    author: "Marketing Team",
    dateLabel: "Apr 02, 2026",
    publishedAt: "2026-04-02",
    readTime: "5 min read",
    category: "Company Updates",
    tags: ["Branding", "Digital Marketing", "School Promotion"],
    featured: false,
    views: 4300,
    comments: 49,
    icon: "📢",
  },
  {
    id: 23,
    slug: "cloud-deployment-and-server-management",
    title: "Cloud Deployment and Server Management",
    excerpt:
      "Deployment, server setup, domain configuration, API hosting, database setup, production support, and technical maintenance.",
    author: "Engineering Team",
    dateLabel: "Mar 30, 2026",
    publishedAt: "2026-03-30",
    readTime: "7 min read",
    category: "Software Development",
    tags: ["Cloud Deployment", "Server Setup", "Production"],
    featured: false,
    views: 5100,
    comments: 61,
    icon: "☁️",
  },
  {
    id: 24,
    slug: "end-to-end-technology-partner-for-institutions",
    title: "End-to-End Technology Partner for Institutions",
    excerpt:
      "From idea to deployment, VisionariesAI Labs supports planning, design, development, automation, AI, IoT, and long-term technical support.",
    author: "VisionariesAI Team",
    dateLabel: "Mar 27, 2026",
    publishedAt: "2026-03-27",
    readTime: "8 min read",
    category: "Company Updates",
    tags: ["Technology Partner", "AI", "IoT", "Software"],
    featured: false,
    views: 6000,
    comments: 82,
    icon: "🤝",
  },
  {
    id: 25,
    slug: "visionariesai-labs-building-future-ready-solutions",
    title: "Building Future-Ready Technology Solutions",
    excerpt:
      "With delivered projects, live platforms, 100+ schools served, and 500+ satisfied clients, VisionariesAI Labs continues building future-ready solutions.",
    author: "VisionariesAI Team",
    dateLabel: "Mar 24, 2026",
    publishedAt: "2026-03-24",
    readTime: "7 min read",
    category: "Company Updates",
    tags: ["VisionariesAI Labs", "Future Technology", "Client Success"],
    featured: false,
    views: 7500,
    comments: 105,
    icon: "🏆",
  },
];

const heroSlides = [
  {
    title: "VisionariesAI Robo Teacher",
    subtitle:
      "An intelligent classroom robot that teaches lessons, communicates with students, explains topics, conducts learning activities, and answers doubts through natural voice interaction.",
    category: "AI Classroom Robot",
    icon: "🤖",
    link: "/blog/visionariesai-robo-teacher-ai-classroom-robot",
    views: "New",
    comments: "0",
    date: "Jul 30, 2026",
    gradient: "from-cyan-700 via-blue-600 to-indigo-700",
  },
  {
    title: "Custom 3D Object Design & Visualization",
    subtitle:
      "Custom 3D models for education, product visualization, AR and VR experiences, simulations, prototypes, and 3D printing projects.",
    category: "3D Solutions",
    icon: "🧊",
    link: "/blog/custom-3d-objects-design-and-visualization",
    views: "New",
    comments: "0",
    date: "Jul 29, 2026",
    gradient: "from-orange-600 via-rose-500 to-purple-600",
  },
  {
    title: "Aye Board Presented by VisionariesAI",
    subtitle:
      "AI-enabled smart classroom board for interactive teaching, digital lessons, and modern school learning.",
    category: "Education Product",
    icon: "🖥️",
    link: "/blog/aye-board-presented-by-visionariesai",
    views: "8.2K",
    comments: "118",
    date: "Jun 01, 2026",
    gradient: "from-blue-700 via-sky-500 to-cyan-400",
  },
  {
    title: "ScholAR Labs for Classes 6 to 12",
    subtitle:
      "AR and 3D learning simulations for Physics, Chemistry, and Biology classroom concepts.",
    category: "AR / 3D Labs",
    icon: "🧪",
    link: "/blog/scholarlabs-ar-3d-learning-for-schools",
    views: "7.9K",
    comments: "104",
    date: "Jun 01, 2026",
    gradient: "from-violet-700 via-purple-500 to-fuchsia-500",
  },
  {
    title: "Rajasab Project Successfully Delivered",
    subtitle: "Complete application setup, deployment and production support.",
    category: "Delivered Project",
    icon: "🚀",
    link: "/blog/rajasab-project-successfully-delivered",
    views: "5.2K",
    comments: "68",
    date: "May 30, 2026",
    gradient: "from-blue-600 via-sky-500 to-cyan-500",
  },
  {
    title: "Email Server Delivered",
    subtitle:
      "Professional domain-based email server setup for business communication.",
    category: "Server Setup",
    icon: "📧",
    link: "/blog/email-server-delivered-for-business-communication",
    views: "4.1K",
    comments: "54",
    date: "May 28, 2026",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },
  {
    title: "IoT Dental Project Delivered",
    subtitle: "Smart IoT automation with device connectivity and monitoring workflow.",
    category: "IoT Solution",
    icon: "🦷",
    link: "/blog/iot-dental-project-delivered",
    views: "4.6K",
    comments: "72",
    date: "May 25, 2026",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
  },
  {
    title: "AI Chatbots Delivered",
    subtitle:
      "AI chatbot systems delivered for faster support and automated customer replies.",
    category: "AI Solution",
    icon: "🤖",
    link: "/blog/ai-chatbots-delivered-for-businesses",
    views: "6.1K",
    comments: "88",
    date: "May 22, 2026",
    gradient: "from-indigo-600 via-purple-500 to-pink-500",
  },
  {
    title: "Technology Services to 100+ Schools",
    subtitle:
      "AI curriculum, LMS, Aye Board, ScholAR Labs, workshops, school software and digital transformation.",
    category: "Education Services",
    icon: "🏫",
    link: "/blog/providing-services-to-100-plus-schools",
    views: "7.8K",
    comments: "102",
    date: "May 20, 2026",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    title: "500+ Satisfied Clients",
    subtitle:
      "Trusted by clients across AI, IoT, automation, software and education services.",
    category: "Client Success",
    icon: "🌟",
    link: "/blog/500-plus-satisfied-clients-journey",
    views: "6.9K",
    comments: "96",
    date: "May 18, 2026",
    gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
  },
  {
    title: "Workshops at Schools",
    subtitle:
      "Practical AI, robotics, IoT, coding and automation workshops for students.",
    category: "Workshops",
    icon: "🎓",
    link: "/blog/school-workshops-for-future-ready-students",
    views: "5.7K",
    comments: "81",
    date: "May 15, 2026",
    gradient: "from-cyan-600 via-blue-500 to-indigo-500",
  },
  {
    title: "Automation to Applications Delivered",
    subtitle: "From workflow automation to complete web and mobile applications.",
    category: "Automation",
    icon: "⚙️",
    link: "/blog/automation-to-applications-delivered",
    views: "6.4K",
    comments: "91",
    date: "May 12, 2026",
    gradient: "from-slate-800 via-blue-700 to-cyan-600",
  },
];

const CATEGORY_STYLES = {
  "Delivered Projects": {
    icon: Rocket,
    chip: "bg-blue-50 text-blue-700 border-blue-200",
    bg: "from-blue-600 to-cyan-500",
  },
  "AI Solutions": {
    icon: Cpu,
    chip: "bg-violet-50 text-violet-700 border-violet-200",
    bg: "from-violet-600 to-fuchsia-500",
  },
  "Robotics & AI": {
    icon: Bot,
    chip: "bg-cyan-50 text-cyan-700 border-cyan-200",
    bg: "from-cyan-700 via-blue-600 to-indigo-700",
  },
  "3D Solutions": {
    icon: Cuboid,
    chip: "bg-orange-50 text-orange-700 border-orange-200",
    bg: "from-orange-600 via-rose-500 to-purple-600",
  },
  "IoT Solutions": {
    icon: Zap,
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bg: "from-emerald-600 to-teal-500",
  },
  "Education Services": {
    icon: GraduationCap,
    chip: "bg-orange-50 text-orange-700 border-orange-200",
    bg: "from-orange-500 to-amber-500",
  },
  Workshops: {
    icon: Users,
    chip: "bg-pink-50 text-pink-700 border-pink-200",
    bg: "from-pink-600 to-rose-500",
  },
  Automation: {
    icon: BriefcaseBusiness,
    chip: "bg-cyan-50 text-cyan-700 border-cyan-200",
    bg: "from-cyan-600 to-blue-500",
  },
  "Software Development": {
    icon: CheckCircle2,
    chip: "bg-indigo-50 text-indigo-700 border-indigo-200",
    bg: "from-indigo-600 to-blue-600",
  },
  "Company Updates": {
    icon: Award,
    chip: "bg-slate-100 text-slate-700 border-slate-200",
    bg: "from-slate-800 to-slate-600",
  },
};

const DEFAULT_CATEGORIES = [
  "All",
  "Delivered Projects",
  "AI Solutions",
  "Robotics & AI",
  "3D Solutions",
  "IoT Solutions",
  "Education Services",
  "Workshops",
  "Automation",
  "Software Development",
  "Company Updates",
];

const stats = [
  {
    label: "Satisfied Clients",
    value: "500+",
    icon: Award,
  },
  {
    label: "Schools Served",
    value: "100+",
    icon: GraduationCap,
  },
  {
    label: "Delivered Projects",
    value: "25+",
    icon: Rocket,
  },
  {
    label: "Core Services",
    value: "AI + IoT",
    icon: Cpu,
  },
];

const BOOKMARK_KEY = "visionaries_blog_bookmarks_v3";

const formatCompact = (value) => {
  const num = Number(value || 0);
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`.replace(".0", "");
  return `${num}`;
};

const getCategoryStyle = (category) => {
  return (
    CATEGORY_STYLES[category] || {
      icon: Sparkles,
      chip: "bg-primary/10 text-primary border-primary/20",
      bg: "from-primary to-blue-600",
    }
  );
};

const BlogCard = ({
  post,
  index,
  isBookmarked,
  onBookmark,
  onShare,
  onTopicClick,
}) => {
  const style = getCategoryStyle(post.category);
  const CategoryIcon = style.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${style.bg}`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-12 left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <CategoryIcon className="h-3.5 w-3.5" />
            {post.category}
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 text-4xl shadow-lg backdrop-blur">
              {post.icon}
            </div>

            <div className="flex gap-2 text-white">
              <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs backdrop-blur">
                <Eye className="h-3 w-3" />
                {formatCompact(post.views)}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-xs backdrop-blur">
                <MessageCircle className="h-3 w-3" />
                {post.comments}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${style.chip}`}
          >
            {post.category}
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onBookmark(post.slug)}
              className="rounded-xl p-2 text-muted-foreground transition hover:bg-secondary hover:text-primary"
              aria-label="Bookmark post"
            >
              <Bookmark
                className={`h-4 w-4 ${
                  isBookmarked(post.slug) ? "fill-primary text-primary" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onClick={() => onShare(post)}
              className="rounded-xl p-2 text-muted-foreground transition hover:bg-secondary hover:text-primary"
              aria-label="Share post"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3 className="line-clamp-2 text-xl font-bold leading-snug text-foreground transition group-hover:text-primary">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTopicClick(tag)}
              className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
            >
              #{tag}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <Button asChild variant="outline" className="w-full justify-between rounded-2xl">
            <Link to={`/blog/${post.slug}`}>
              Read Article
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

const HeroSlider = ({ activeSlide, setActiveSlide }) => {
  const slide = heroSlides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative rounded-[2rem] border border-border bg-white p-4 shadow-2xl">
      <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-cyan-300 shadow-xl lg:block">
        <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        EXPLORE SERVICES
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, x: 35, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -35, scale: 0.98 }}
          transition={{ duration: 0.45 }}
          className={`relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${slide.gradient} p-7 text-white sm:p-8`}
        >
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-20 left-6 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex h-full min-h-[380px] flex-col">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">
                <Rocket className="h-4 w-4" />
                {slide.category}
              </span>

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 text-4xl shadow-lg backdrop-blur">
                {slide.icon}
              </div>
            </div>

            <div className="mt-auto">
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
                {slide.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                {slide.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/90">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {slide.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {slide.views}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  {slide.comments}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-2xl bg-white text-slate-900 hover:bg-white/90">
                  <Link to={slide.link}>
                    Read Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <button
                  type="button"
                  onClick={prevSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur transition hover:bg-white/25"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur transition hover:bg-white/25"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide
                        ? "w-9 bg-white"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);
  const [email, setEmail] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem(BOOKMARK_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    } catch {
      // localStorage unavailable
    }
  }, [bookmarks]);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeCategory, searchQuery]);

  const categories = useMemo(() => {
    const found = new Set(blogPosts.map((post) => post.category));
    return DEFAULT_CATEGORIES.filter(
      (category) => category === "All" || found.has(category)
    );
  }, []);

  const filteredPosts = useMemo(() => {
    const keyword = searchQuery.trim().toLowerCase();

    return blogPosts
      .filter((post) => {
        const categoryMatch =
          activeCategory === "All" || post.category === activeCategory;

        const keywordMatch =
          !keyword ||
          post.title.toLowerCase().includes(keyword) ||
          post.excerpt.toLowerCase().includes(keyword) ||
          post.category.toLowerCase().includes(keyword) ||
          post.author.toLowerCase().includes(keyword) ||
          post.tags.some((tag) => tag.toLowerCase().includes(keyword));

        return categoryMatch && keywordMatch;
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const trendingTopics = useMemo(() => {
    const map = new Map();

    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        map.set(tag, (map.get(tag) || 0) + 1);
      });
    });

    return Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name, count]) => ({ name, count }));
  }, []);

  const popularPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5);
  }, []);

  const savedPosts = useMemo(() => {
    return bookmarks
      .map((slug) => blogPosts.find((post) => post.slug === slug))
      .filter(Boolean)
      .slice(0, 5);
  }, [bookmarks]);

  const isBookmarked = (slug) => bookmarks.includes(slug);

  const toggleBookmark = (slug) => {
    setBookmarks((prev) => {
      const exists = prev.includes(slug);
      const next = exists
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];

      toast({
        title: exists ? "Bookmark removed" : "Bookmark saved",
        description: exists
          ? "This article was removed from saved posts."
          : "This article was added to saved posts.",
      });

      return next;
    });
  };

  const sharePost = async (post) => {
    const url = `${window.location.origin}/blog/${post.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);

      toast({
        title: "Link copied",
        description: "Blog link copied to clipboard.",
      });
    } catch {
      toast({
        title: "Unable to share",
        description: "Please copy the page link manually.",
      });
    }
  };

  const applyTopic = (topic) => {
    setActiveCategory("All");
    setSearchQuery(topic);
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!valid) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    toast({
      title: "Subscribed successfully",
      description: "You will receive VisionariesAI updates.",
    });

    setEmail("");
  };

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,hsl(var(--primary)/0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  <Sparkles className="h-4 w-4" />
                  VisionariesAI Labs Blogs
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Delivered Projects,{" "}
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    AI Services
                  </span>{" "}
                  & Live Success Stories
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Explore our delivered projects like Rajasab, email server,
                  IoT dental project, AI chatbots, Aye Board, ScholAR Labs,
                  Robo Teacher, custom 3D objects, school services, workshops,
                  automation systems, and live applications.
                </p>

                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-border bg-card/90 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <Icon className="mb-3 h-5 w-5 text-primary" />
                        <div className="text-2xl font-bold text-foreground">
                          {item.value}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <HeroSlider
                  activeSlide={activeSlide}
                  setActiveSlide={setActiveSlide}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[420px_1fr_auto] lg:items-center">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search blogs, projects, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-border bg-card pl-12 pr-12 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
                {categories.map((category) => {
                  const active = activeCategory === category;
                  const style =
                    category === "All"
                      ? { icon: Sparkles }
                      : getCategoryStyle(category);
                  const Icon = style.icon;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category}
                    </button>
                  );
                })}
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={clearFilters}
                className="rounded-2xl"
              >
                Clear
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
              <span>
                Showing{" "}
                <strong className="text-foreground">
                  {filteredPosts.length}
                </strong>{" "}
                articles
                {searchQuery ? (
                  <>
                    {" "}
                    for{" "}
                    <strong className="text-foreground">
                      “{searchQuery}”
                    </strong>
                  </>
                ) : null}
              </span>

              <div className="flex flex-wrap gap-2">
                {[
                  "Robo Teacher",
                  "3D Objects",
                  "Aye Board",
                  "ScholAR Labs",
                  "Rajasab Project",
                  "AI Chatbots",
                  "100+ Schools",
                  "500+ Clients",
                ].map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => applyTopic(topic)}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium transition hover:bg-primary/10 hover:text-primary"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                    Updated Blogs
                  </p>
                  <h2 className="text-3xl font-bold text-foreground">
                    {activeCategory === "All"
                      ? "Latest Articles"
                      : activeCategory}
                  </h2>
                </div>
              </div>

              <AnimatePresence mode="popLayout">
                {visiblePosts.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-3xl border border-border bg-card p-10 text-center"
                  >
                    <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
                    <h3 className="text-xl font-bold text-foreground">
                      No blogs found
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try another keyword or clear the selected filter.
                    </p>
                    <Button onClick={clearFilters} className="mt-6 rounded-2xl">
                      Clear Filters
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                  >
                    {visiblePosts.map((post, index) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        index={index}
                        isBookmarked={isBookmarked}
                        onBookmark={toggleBookmark}
                        onShare={sharePost}
                        onTopicClick={applyTopic}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {filteredPosts.length > visibleCount && (
                <div className="mt-10 text-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      setVisibleCount((count) =>
                        Math.min(count + 6, filteredPosts.length)
                      )
                    }
                    className="rounded-2xl"
                  >
                    Load More Articles
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-40 lg:self-start">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">
                    Delivered Highlights
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    "Robo Teacher for interactive AI classroom teaching",
                    "Custom 3D objects and visualization solutions",
                    "Aye Board smart classroom solution",
                    "ScholAR Labs for Classes 6 to 12",
                    "Rajasab project delivered",
                    "Email server delivered",
                    "IoT dental project delivered",
                    "AI chatbots delivered",
                    "Automation to applications delivered",
                    "Many live projects running",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-3 text-sm font-medium text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-foreground">
                    Trending Topics
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <button
                      key={topic.name}
                      type="button"
                      onClick={() => applyTopic(topic.name)}
                      className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                    >
                      {topic.name} ({topic.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-bold text-foreground">
                  Popular Posts
                </h3>

                <div className="space-y-4">
                  {popularPosts.map((post) => {
                    const style = getCategoryStyle(post.category);

                    return (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="group flex gap-3 rounded-2xl p-2 transition hover:bg-secondary"
                      >
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${style.bg} text-xl`}
                        >
                          {post.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-primary">
                            {post.title}
                          </h4>
                          <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <Eye className="h-3 w-3" />
                            {formatCompact(post.views)}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-bold text-foreground">Saved Posts</h3>

                {savedPosts.length === 0 ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    No saved posts yet. Click bookmark icon on any blog card.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {savedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="block rounded-2xl bg-secondary/70 p-3 transition hover:bg-secondary"
                      >
                        <p className="line-clamp-1 text-sm font-semibold text-foreground">
                          {post.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {post.dateLabel}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="overflow-hidden rounded-3xl border border-primary/20 bg-primary p-6 text-primary-foreground shadow-lg">
                <Mail className="mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold">Stay Updated</h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/80">
                  Get updates on Robo Teacher, custom 3D objects, Aye Board,
                  ScholAR Labs, AI, IoT, school workshops, automation, and live
                  projects.
                </p>

                <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 px-4 text-sm text-white placeholder:text-white/65 outline-none focus:bg-white/20"
                  />

                  <Button
                    type="submit"
                    className="w-full rounded-2xl bg-white text-primary hover:bg-white/90"
                  >
                    Subscribe
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border bg-background p-8 shadow-sm lg:p-10">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    Your Idea, Our Solution
                  </p>
                  <h2 className="text-3xl font-bold text-foreground">
                    Need Robo Teacher, custom 3D objects, AI, IoT, automation,
                    school services, Aye Board, ScholAR Labs, or application
                    development?
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                    VisionariesAI Labs Pvt Ltd supports businesses,
                    schools, institutions, and individuals with complete
                    technology solutions from planning to deployment.
                  </p>
                </div>

                <Button asChild size="lg" className="rounded-2xl">
                  <Link to="/contact">
                    Contact Us
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;