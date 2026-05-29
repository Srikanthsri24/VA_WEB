import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  ClipboardPlus,
  CloudCog,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Hospital,
  Layers3,
  LineChart,
  MonitorSmartphone,
  Network,
  PackageCheck,
  ReceiptText,
  Rocket,
  School,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  Truck,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";

export const industryPagesData = {
  education: {
    badge: "Education Technology Solutions",
    title: "Smart digital solutions for modern schools",
    description:
      "VisionariesAI Labs helps schools manage academics, fees, attendance, exams, student learning, AI curriculum, robotics and digital transformation through powerful education technology platforms.",
    buttonText: "Contact Us",
    secondaryButtonText: "View All Services",
    heroIcon: GraduationCap,
    hubSmallTitle: "VisionariesAI Education Suite",
    hubTitle: "School Digital Hub",
    highlightIcon: Rocket,
    highlightText:
      "From administration to classroom learning, our platform supports schools with technology, automation and practical AI education.",
    floatingTitle: "Complete Setup",
    floatingText: "SMS, LMS, AI, IoT",
    floatingIcon: Workflow,
    stats: [
      { value: "Classes 1-10", label: "AI Curriculum Support" },
      { value: "SMS + LMS", label: "Complete Digital Platform" },
      { value: "AI + IoT", label: "Project-Based Learning" },
      { value: "360°", label: "School Digital Transformation" },
    ],
    hubCards: [
      {
        title: "SMS",
        text: "School operations",
        icon: Layers3,
      },
      {
        title: "LMS",
        text: "Digital learning",
        icon: BrainCircuit,
      },
      {
        title: "AI Labs",
        text: "Projects & practice",
        icon: Cpu,
      },
      {
        title: "IoT",
        text: "Smart automation",
        icon: Network,
      },
    ],
    sectionBadge: "What We Provide",
    sectionIcon: School,
    sectionTitle: "Complete education technology for schools",
    sectionDescription:
      "Our education solutions are designed for school owners, principals, administrators, teachers, students and parents.",
    solutions: [
      {
        title: "AI Academic Curriculum",
        description:
          "Class-wise AI, coding, robotics, cyber security, computer basics and practical learning content for schools.",
        icon: BookOpen,
      },
      {
        title: "School Management System",
        description:
          "Admissions, students, staff, attendance, fees, exams, ID cards, reports and complete school operations in one platform.",
        icon: School,
      },
      {
        title: "Learning Management System",
        description:
          "Digital learning platform with quizzes, chapter-wise activities, practical tasks and student progress tracking.",
        icon: MonitorSmartphone,
      },
      {
        title: "AI & Robotics Projects",
        description:
          "Hands-on student projects using AI, IoT, robotics, sensors, automation and real-time technology concepts.",
        icon: Bot,
      },
      {
        title: "Teacher Training",
        description:
          "Practical training sessions for teachers to confidently teach AI, coding, robotics and digital tools.",
        icon: UsersRound,
      },
      {
        title: "Smart Attendance",
        description:
          "Face, fingerprint and RFID-based attendance systems with digital reports and automation support.",
        icon: ShieldCheck,
      },
    ],
    modulesBadge: "SMS & LMS Modules",
    modulesIcon: MonitorSmartphone,
    modulesTitle: "Built for real school operations",
    modulesDescription:
      "Our platform supports daily school activities like student data, fees, attendance, exams, ID cards, LMS activities, reports and academic year management.",
    modulesHighlightTitle: "AI-based future-ready learning",
    modulesHighlightText:
      "We help schools introduce AI, robotics, coding and technology concepts through curriculum, LMS practice, projects and teacher training.",
    modulesHighlightIcon: BrainCircuit,
    features: [
      "Student information management",
      "Fee collection and payment history",
      "Exam schedules and marks entry",
      "Performance analytics and reports",
      "ID card generation and printing",
      "Academic year and promotion management",
      "Teacher and staff management",
      "Attendance automation",
      "LMS practical activities",
      "Parent-school communication support",
      "Website and school branding",
      "AI-powered school transformation support",
    ],
    processTitle: "Simple process to digitize your school",
    processDescription:
      "We follow a clear setup and training process so schools can start using our applications without confusion.",
    steps: [
      {
        step: "01",
        title: "School Requirement Study",
        text: "We understand the school structure, classes, branches, fee system, exams, attendance process and digital needs.",
      },
      {
        step: "02",
        title: "Platform Setup",
        text: "We configure SMS, LMS, users, academic year, standards, sections, fee types, exams and required modules.",
      },
      {
        step: "03",
        title: "Training & Launch",
        text: "We train admin staff, teachers and coordinators to use the application smoothly in daily school operations.",
      },
      {
        step: "04",
        title: "Support & Growth",
        text: "We provide continuous technical support, improvements, reports, branding and new AI-based features.",
      },
    ],
    ctaTitle: "Ready to transform your school digitally?",
    ctaDescription:
      "VisionariesAI Labs provides complete education technology support for schools, including school management software, LMS, AI curriculum, robotics projects, teacher training, website development and branding.",
  },

  healthcare: {
    badge: "Healthcare Technology Solutions",
    title: "Smart digital solutions for hospitals and clinics",
    description:
      "VisionariesAI Labs helps hospitals, clinics and healthcare organizations digitize daily operations with patient management, appointments, medical records, billing, reports, dashboards and secure healthcare applications.",
    buttonText: "Discuss Healthcare Project",
    secondaryButtonText: "View All Services",
    heroIcon: HeartPulse,
    hubSmallTitle: "VisionariesAI Healthcare Suite",
    hubTitle: "Digital Health Hub",
    highlightIcon: Hospital,
    highlightText:
      "From patient registration to reports and billing, our healthcare system supports smoother hospital and clinic operations.",
    floatingTitle: "Smooth Workflow",
    floatingText: "Patients, doctors, billing",
    floatingIcon: Workflow,
    stats: [
      { value: "HMS", label: "Hospital Management" },
      { value: "EMR", label: "Digital Medical Records" },
      { value: "AI Ready", label: "Smart Healthcare Analytics" },
      { value: "Secure", label: "Role-Based Access" },
    ],
    hubCards: [
      {
        title: "Web Application",
        text: "Responsive dashboards for admin, doctors, reception and management teams.",
        icon: MonitorSmartphone,
      },
      {
        title: "Cloud Database",
        text: "Centralized and organized patient, appointment, billing and report data.",
        icon: Database,
      },
      {
        title: "Secure Access",
        text: "User-wise permissions for safer healthcare data handling.",
        icon: ShieldCheck,
      },
      {
        title: "AI Insights",
        text: "Future-ready analytics for patient flow, reports and operational decisions.",
        icon: BrainCircuit,
      },
    ],
    sectionBadge: "What We Provide",
    sectionIcon: Hospital,
    sectionTitle: "Complete healthcare technology services",
    sectionDescription:
      "Our healthcare solutions are designed for clinics, hospitals, diagnostic centers and healthcare service providers who want to manage work digitally and professionally.",
    solutions: [
      {
        title: "Hospital Management System",
        description:
          "A complete digital platform for hospitals, clinics and healthcare centers to manage patients, doctors, appointments, billing and reports.",
        icon: Hospital,
      },
      {
        title: "Patient Management",
        description:
          "Maintain patient profiles, medical history, visit records, prescriptions, lab reports and treatment details in one secure place.",
        icon: ClipboardPlus,
      },
      {
        title: "Appointment Booking",
        description:
          "Simple appointment scheduling system for doctors, departments, patients and front-office teams with smooth daily workflow.",
        icon: CalendarCheck,
      },
      {
        title: "Digital Medical Records",
        description:
          "Store and access prescriptions, diagnosis notes, reports and healthcare documents digitally with organized records.",
        icon: FileText,
      },
      {
        title: "Healthcare Analytics",
        description:
          "Track hospital performance, patient visits, appointment trends, billing reports and operational insights through dashboards.",
        icon: Activity,
      },
      {
        title: "Secure Healthcare Platform",
        description:
          "Role-based access, secure data handling and cloud-ready architecture for reliable healthcare application usage.",
        icon: ShieldCheck,
      },
    ],
    modulesBadge: "Healthcare Application Modules",
    modulesIcon: MonitorSmartphone,
    modulesTitle: "Built for daily healthcare operations",
    modulesDescription:
      "Our healthcare software supports front-office teams, doctors, administrators and management with organized patient data, appointments, billing, documents and reports.",
    modulesHighlightTitle: "Cloud-ready healthcare platform",
    modulesHighlightText:
      "Access important hospital and clinic information from a secure web platform with role-based permissions and modern dashboard design.",
    modulesHighlightIcon: CloudCog,
    features: [
      "Patient registration and profile management",
      "Doctor and department management",
      "Appointment scheduling",
      "Prescription and medical history",
      "Billing and payment records",
      "Lab reports and document storage",
      "Role-based admin, doctor and staff access",
      "Daily appointment and patient reports",
      "Dashboard analytics",
      "Cloud-based application access",
      "Mobile responsive interface",
      "Custom hospital/clinic website support",
    ],
    processTitle: "Simple process to digitize healthcare workflow",
    processDescription:
      "We follow a clear development and implementation process so your healthcare team can start using the application without confusion.",
    steps: [
      {
        step: "01",
        title: "Requirement Analysis",
        text: "We understand your hospital, clinic or healthcare workflow, departments, staff roles, patient flow and billing process.",
      },
      {
        step: "02",
        title: "Custom Platform Setup",
        text: "We configure doctors, staff, departments, appointment modules, patient records, reports and required healthcare workflows.",
      },
      {
        step: "03",
        title: "Training & Go Live",
        text: "We train admin teams, reception staff, doctors and management to use the system smoothly in daily operations.",
      },
      {
        step: "04",
        title: "Support & Upgrades",
        text: "We provide continuous support, improvements, dashboard enhancements and new modules based on your healthcare needs.",
      },
    ],
    ctaTitle: "Ready to build your healthcare application?",
    ctaDescription:
      "VisionariesAI Labs provides custom healthcare technology solutions including hospital management software, clinic applications, appointment systems, patient records, dashboards, cloud deployment and website development.",
  },

  retail: {
    badge: "Retail Technology Solutions",
    title: "Smart software solutions for retail businesses",
    description:
      "VisionariesAI Labs helps retail stores, shops and businesses manage billing, inventory, customers, sales reports, online orders and digital branding through modern technology platforms.",
    buttonText: "Build Retail Platform",
    secondaryButtonText: "View All Services",
    heroIcon: ShoppingBag,
    hubSmallTitle: "VisionariesAI Retail Suite",
    hubTitle: "Smart Store Hub",
    highlightIcon: ShoppingCart,
    highlightText:
      "From offline billing to online selling, our retail solutions help businesses grow with digital systems.",
    floatingTitle: "Sales Growth",
    floatingText: "Reports and insights",
    floatingIcon: LineChart,
    stats: [
      { value: "POS", label: "Billing System" },
      { value: "Stock", label: "Inventory Control" },
      { value: "Online", label: "E-Commerce Ready" },
      { value: "Reports", label: "Business Analytics" },
    ],
    hubCards: [
      {
        title: "POS Billing",
        text: "Quick invoices, payment tracking and sales summaries for retail businesses.",
        icon: CreditCard,
      },
      {
        title: "Inventory Control",
        text: "Monitor product stock, movement, low stock and store-wise availability.",
        icon: Database,
      },
      {
        title: "Online Store",
        text: "Create product catalogs, digital storefronts and online order systems.",
        icon: MonitorSmartphone,
      },
      {
        title: "AI Insights",
        text: "Analyze sales trends, customer behavior and product performance.",
        icon: Bot,
      },
    ],
    sectionBadge: "What We Provide",
    sectionIcon: Store,
    sectionTitle: "Complete retail software and digital support",
    sectionDescription:
      "Our retail solutions are useful for stores, supermarkets, product sellers, small businesses, distributors and online businesses.",
    solutions: [
      {
        title: "Retail Management Software",
        description:
          "Manage products, categories, customers, billing, stock, orders and reports through a modern retail platform.",
        icon: Store,
      },
      {
        title: "POS & Billing System",
        description:
          "Fast and simple billing system for shops, stores and retail businesses with invoice and payment record support.",
        icon: ReceiptText,
      },
      {
        title: "Inventory Management",
        description:
          "Track stock availability, product movement, low-stock alerts, purchases and warehouse/store inventory.",
        icon: PackageCheck,
      },
      {
        title: "E-Commerce Platform",
        description:
          "Build online shopping websites, product catalogs, order systems and customer-friendly digital storefronts.",
        icon: ShoppingCart,
      },
      {
        title: "Customer Management",
        description:
          "Maintain customer data, purchase history, loyalty support, offers and engagement activities.",
        icon: UsersRound,
      },
      {
        title: "Retail Analytics",
        description:
          "Understand sales trends, best-selling products, revenue performance, customer behavior and business growth.",
        icon: BarChart3,
      },
    ],
    modulesBadge: "Retail Platform Modules",
    modulesIcon: Truck,
    modulesTitle: "Built for daily retail operations",
    modulesDescription:
      "Our retail applications help businesses manage selling, billing, product stock, purchase entries, customer records, discounts, orders and analytics.",
    modulesHighlightTitle: "Offline and online retail support",
    modulesHighlightText:
      "We can build both store management systems and online shopping platforms based on your business requirements.",
    modulesHighlightIcon: ShoppingCart,
    features: [
      "Product and category management",
      "Billing and invoice generation",
      "Stock and inventory tracking",
      "Purchase and supplier records",
      "Customer database management",
      "Sales reports and analytics",
      "Payment records and summaries",
      "Offer and discount management",
      "Online store development",
      "Order and delivery tracking",
      "Mobile responsive dashboards",
      "Retail branding and website support",
    ],
    processTitle: "Simple setup for retail digitization",
    processDescription:
      "We help retail businesses move from manual work to digital billing, inventory and online sales systems.",
    steps: [
      {
        step: "01",
        title: "Retail Workflow Study",
        text: "We understand your shop/store operations, products, stock flow, billing method, customers and sales process.",
      },
      {
        step: "02",
        title: "System Setup",
        text: "We configure product categories, inventory, billing, users, reports and required retail modules.",
      },
      {
        step: "03",
        title: "Training & Launch",
        text: "We train owners, managers and staff to use billing, inventory, customer and report modules smoothly.",
      },
      {
        step: "04",
        title: "Growth Support",
        text: "We support you with dashboards, online store, digital branding, offers, analytics and future improvements.",
      },
    ],
    ctaTitle: "Ready to digitize your retail business?",
    ctaDescription:
      "VisionariesAI Labs builds retail billing systems, inventory software, e-commerce platforms, customer management systems, dashboards and digital branding solutions.",
  },

  manufacturing: {
    badge: "Manufacturing Technology Solutions",
    title: "Smart digital systems for manufacturing industries",
    description:
      "VisionariesAI Labs helps manufacturing companies digitize production, inventory, machine maintenance, orders, workers, reports, IoT monitoring and automation workflows.",
    buttonText: "Build Manufacturing System",
    secondaryButtonText: "View All Services",
    heroIcon: Factory,
    hubSmallTitle: "VisionariesAI Manufacturing Suite",
    hubTitle: "Factory Digital Hub",
    highlightIcon: Settings,
    highlightText:
      "From raw materials to final dispatch, our systems help factories manage operations with better clarity.",
    floatingTitle: "End-to-End Flow",
    floatingText: "Production to dispatch",
    floatingIcon: Layers3,
    stats: [
      { value: "ERP", label: "Factory Operations" },
      { value: "IoT", label: "Automation Ready" },
      { value: "Stock", label: "Inventory Control" },
      { value: "Reports", label: "Production Analytics" },
    ],
    hubCards: [
      {
        title: "Production Flow",
        text: "Track production stages, pending tasks, completed work and daily output.",
        icon: Workflow,
      },
      {
        title: "Machine Monitoring",
        text: "Maintain machine status, usage, repairs and maintenance history.",
        icon: Activity,
      },
      {
        title: "Inventory System",
        text: "Monitor raw materials, stock movement and finished products.",
        icon: PackageCheck,
      },
      {
        title: "IoT Integration",
        text: "Connect sensors, devices and automation systems for smarter operations.",
        icon: Network,
      },
    ],
    sectionBadge: "What We Provide",
    sectionIcon: Factory,
    sectionTitle: "Complete manufacturing technology support",
    sectionDescription:
      "Our manufacturing solutions are useful for factories, production units, warehouses, fabrication units, machinery companies and industrial businesses.",
    solutions: [
      {
        title: "Manufacturing Management System",
        description:
          "Manage production, inventory, workers, machines, orders, materials and reports from one digital platform.",
        icon: Factory,
      },
      {
        title: "Production Tracking",
        description:
          "Track production stages, work progress, output, pending work, daily status and process flow.",
        icon: Activity,
      },
      {
        title: "Inventory & Raw Materials",
        description:
          "Monitor raw materials, finished goods, stock movement, purchase records and material availability.",
        icon: PackageCheck,
      },
      {
        title: "Machine & Maintenance Logs",
        description:
          "Maintain machine details, service records, repair logs, maintenance reminders and usage tracking.",
        icon: Wrench,
      },
      {
        title: "IoT & Automation",
        description:
          "Use IoT devices, sensors and automation systems to monitor machines, energy, production and alerts.",
        icon: Cpu,
      },
      {
        title: "Manufacturing Analytics",
        description:
          "Analyze production performance, stock levels, output quality, delays, machine usage and business reports.",
        icon: BarChart3,
      },
    ],
    modulesBadge: "Manufacturing Modules",
    modulesIcon: ClipboardList,
    modulesTitle: "Built for factory and production operations",
    modulesDescription:
      "Our manufacturing applications help industries monitor production, raw materials, finished goods, workers, machinery, maintenance, orders and dispatch.",
    modulesHighlightTitle: "Smarter control for industrial workflow",
    modulesHighlightText:
      "We can build custom ERP, IoT monitoring, dashboards and automation systems based on your factory process.",
    modulesHighlightIcon: ShieldCheck,
    features: [
      "Production planning and tracking",
      "Raw material inventory",
      "Finished goods management",
      "Machine maintenance records",
      "Worker and operator management",
      "Order and dispatch tracking",
      "Vendor and purchase records",
      "Quality control reports",
      "Daily production reports",
      "IoT sensor integration support",
      "Dashboard analytics",
      "Custom workflow automation",
    ],
    processTitle: "Simple process for factory digitization",
    processDescription:
      "We understand your factory flow and build a suitable digital platform for operations, tracking and automation.",
    steps: [
      {
        step: "01",
        title: "Factory Workflow Study",
        text: "We understand your production process, materials, machines, departments, workers, orders and reporting needs.",
      },
      {
        step: "02",
        title: "Module Planning",
        text: "We plan production, inventory, maintenance, order tracking, quality control and dashboard modules.",
      },
      {
        step: "03",
        title: "System Implementation",
        text: "We configure the platform, connect required data flows, train staff and launch the system step by step.",
      },
      {
        step: "04",
        title: "Automation & Support",
        text: "We add improvements, IoT integration, alerts, reports, analytics and automation based on your factory needs.",
      },
    ],
    ctaTitle: "Ready to digitize your manufacturing process?",
    ctaDescription:
      "VisionariesAI Labs builds manufacturing ERP systems, production tracking software, inventory platforms, IoT monitoring, automation workflows and industrial dashboards.",
  },

  "consulting-services": {
    badge: "Consulting Services",
    title: "Smart technology consulting for business growth",
    description:
      "VisionariesAI Labs helps companies, institutions and startups plan, build and improve digital systems using AI, automation, software development, analytics and scalable technology solutions.",
    buttonText: "Start Consultation",
    secondaryButtonText: "View All Services",
    heroIcon: BriefcaseBusiness,
    hubSmallTitle: "VisionariesAI Consulting Suite",
    hubTitle: "Business Growth Hub",
    highlightIcon: Target,
    highlightText:
      "We convert business ideas into practical digital strategies, software systems and automation workflows.",
    floatingTitle: "Clear Roadmap",
    floatingText: "Strategy to execution",
    floatingIcon: Target,
    stats: [
      { value: "AI", label: "Business Strategy" },
      { value: "360°", label: "Digital Consulting" },
      { value: "Cloud", label: "Scalable Systems" },
      { value: "Growth", label: "Long-Term Support" },
    ],
    hubCards: [
      {
        title: "AI Consultation",
        text: "Plan AI features for business automation, prediction, analytics and smart workflows.",
        icon: BrainCircuit,
      },
      {
        title: "Software Architecture",
        text: "Design proper application structure, database flow, APIs and scalable modules.",
        icon: Cpu,
      },
      {
        title: "Business Dashboards",
        text: "Create dashboards to monitor business performance, users, revenue and operations.",
        icon: BarChart3,
      },
      {
        title: "Digital Platforms",
        text: "Build web apps, mobile apps, portals and custom business management systems.",
        icon: MonitorSmartphone,
      },
    ],
    sectionBadge: "What We Provide",
    sectionIcon: ClipboardCheck,
    sectionTitle: "Complete consulting support for digital success",
    sectionDescription:
      "We provide technical guidance, software planning, AI strategy and digital transformation support for companies and institutions.",
    solutions: [
      {
        title: "Technology Consulting",
        description:
          "We help businesses choose the right technology strategy, software architecture, tools and digital systems for growth.",
        icon: CloudCog,
      },
      {
        title: "AI Business Strategy",
        description:
          "We guide companies on how to use AI for automation, analytics, customer support, productivity and decision-making.",
        icon: BrainCircuit,
      },
      {
        title: "Software Project Planning",
        description:
          "We plan complete software projects including features, modules, user roles, database structure and implementation flow.",
        icon: Code2,
      },
      {
        title: "Digital Transformation",
        description:
          "We help traditional businesses move from manual processes to digital workflows using web apps, mobile apps and automation.",
        icon: Rocket,
      },
      {
        title: "Process Automation",
        description:
          "We identify repetitive tasks and build automation systems to reduce manual work and improve operational speed.",
        icon: Workflow,
      },
      {
        title: "Business Growth Support",
        description:
          "We support businesses with branding, websites, digital platforms, analytics dashboards and future-ready technology planning.",
        icon: LineChart,
      },
    ],
    modulesBadge: "Consulting Capabilities",
    modulesIcon: ShieldCheck,
    modulesTitle: "From idea to implementation",
    modulesDescription:
      "We help organizations make the right technology decisions before development starts. Our team supports requirement planning, UI flow, backend architecture and automation opportunities.",
    modulesHighlightTitle: "Technical partner for your business",
    modulesHighlightText:
      "VisionariesAI Labs can act as your complete technical partner for software, AI, automation, branding and digital platform development.",
    modulesHighlightIcon: UsersRound,
    features: [
      "Business process analysis",
      "Technology roadmap planning",
      "AI implementation guidance",
      "Software requirement documentation",
      "Web and mobile application planning",
      "Automation workflow design",
      "Cloud deployment consultation",
      "Digital branding support",
      "Dashboard and analytics planning",
      "Cyber security guidance",
      "Team training and adoption support",
      "Long-term technical partnership",
    ],
    processTitle: "Clear process for better execution",
    processDescription:
      "We follow a practical consulting process to understand, plan, execute and improve your technology systems.",
    steps: [
      {
        step: "01",
        title: "Business Understanding",
        text: "We understand your current business model, daily operations, problems, goals and technology requirements.",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        text: "We prepare a clear digital strategy with software modules, automation ideas, timelines and implementation flow.",
      },
      {
        step: "03",
        title: "Development Guidance",
        text: "We support the development process with proper architecture, UI planning, backend logic and scalable system design.",
      },
      {
        step: "04",
        title: "Growth & Optimization",
        text: "We continuously improve your technology systems with analytics, automation, AI features and better workflows.",
      },
    ],
    ctaTitle: "Need a technical partner for your business?",
    ctaDescription:
      "We support businesses with AI consulting, software planning, automation, web applications, dashboards, digital branding and long-term technology growth.",
  },
};

export const defaultIndustryPageSlug = "education";

export {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Workflow,
};