import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  User,
  Tag,
  Send,
  Search,
  TrendingUp,
  Bookmark,
  Share2,
  Eye,
  MessageCircle,
  Calendar,
  ChevronRight,
  X,
} from "lucide-react";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

/** ----------------------------
 *  ✅ Demo Data (replace later with API)
 *  ---------------------------- */
const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-in-education-2025",
    title: "The Future of AI in Education: Trends to Watch in 2025",
    excerpt:
      "From personalized learning to automated assessments—here are the most practical AI trends schools can adopt this year.",
    author: "Srikanth Dubbaka",
    dateLabel: "Dec 15, 2025",
    publishedAt: "2025-12-15",
    readTime: "8 min read",
    category: "Industry Trends",
    tags: ["AI in Education", "EdTech Trends", "Personalization"],
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
    views: 2400,
    comments: 45,
    icon: "📊",
  },
  {
    id: 2,
    slug: "production-ready-ai-monitoring-systems",
    title: "Building Production-Ready AI Monitoring Systems",
    excerpt:
      "A field-tested guide to implementing AI-powered CCTV monitoring for campus safety—with real deployment lessons.",
    author: "Engineering Team",
    dateLabel: "Dec 10, 2025",
    publishedAt: "2025-12-10",
    readTime: "12 min read",
    category: "Technical",
    tags: ["Smart Campus", "AI CCTV", "Security"],
    featured: false,
    gradient: "from-purple-500 to-pink-600",
    views: 1800,
    comments: 32,
    icon: "💻",
  },
  {
    id: 3,
    slug: "ai-teaching-assistants-transform-learning",
    title: "How AI Teaching Assistants are Transforming Learning",
    excerpt:
      "See how an AI doubt-solving assistant improves engagement, reduces teacher load, and boosts confidence in students.",
    author: "VisionariesAI Team",
    dateLabel: "Dec 05, 2025",
    publishedAt: "2025-12-05",
    readTime: "6 min read",
    category: "Case Studies",
    tags: ["AI Assistant", "Student Engagement", "Ask AI"],
    featured: false,
    gradient: "from-green-500 to-teal-600",
    views: 3100,
    comments: 58,
    icon: "📈",
  },
  {
    id: 4,
    slug: "energy-monitoring-reduce-costs-iot-ai",
    title: "Energy Monitoring: Reducing Costs with IoT & AI",
    excerpt:
      "How smart energy monitoring helps institutions cut waste, track peak load, and reduce electricity bills significantly.",
    author: "IoT Team",
    dateLabel: "Nov 28, 2025",
    publishedAt: "2025-11-28",
    readTime: "10 min read",
    category: "Technical",
    tags: ["Energy Monitoring", "IoT", "Cost Saving"],
    featured: false,
    gradient: "from-orange-500 to-red-600",
    views: 1500,
    comments: 28,
    icon: "⚡",
  },
  {
    id: 5,
    slug: "implementing-ai-curriculum-in-schools",
    title: "Implementing AI Curriculum in Schools: A Success Playbook",
    excerpt:
      "A step-by-step rollout plan to introduce AI curriculum from classes 3–10 without overwhelming teachers or students.",
    author: "Srikanth Dubbaka",
    dateLabel: "Nov 20, 2025",
    publishedAt: "2025-11-20",
    readTime: "7 min read",
    category: "Case Studies",
    tags: ["AI Curriculum", "Schools", "Teacher Training"],
    featured: false,
    gradient: "from-indigo-500 to-purple-600",
    views: 2200,
    comments: 41,
    icon: "📚",
  },
  {
    id: 6,
    slug: "complete-guide-lms-implementation",
    title: "The Complete Guide to LMS Implementation",
    excerpt:
      "Best practices to deploy an LMS successfully—from onboarding and content strategy to analytics and adoption.",
    author: "Development Team",
    dateLabel: "Nov 15, 2025",
    publishedAt: "2025-11-15",
    readTime: "9 min read",
    category: "Technical",
    tags: ["LMS", "Implementation", "EdTech"],
    featured: false,
    gradient: "from-pink-500 to-rose-600",
    views: 1900,
    comments: 35,
    icon: "🧩",
  },
  {
    id: 7,
    slug: "smart-attendance-systems-beyond-biometrics",
    title: "Smart Attendance Systems: Beyond Biometrics",
    excerpt:
      "Explore next-gen attendance using face recognition, geo-fencing, and audit-friendly reports—without headaches.",
    author: "Product Team",
    dateLabel: "Nov 10, 2025",
    publishedAt: "2025-11-10",
    readTime: "8 min read",
    category: "Product Updates",
    tags: ["Attendance", "Face Recognition", "Automation"],
    featured: false,
    gradient: "from-teal-500 to-cyan-600",
    views: 1300,
    comments: 22,
    icon: "🚀",
  },
  {
    id: 8,
    slug: "scaling-ai-for-rural-institutions",
    title: "Scaling AI Solutions for Rural Educational Institutions",
    excerpt:
      "What works in tier-2/tier-3 deployments: connectivity challenges, training models, and realistic rollout plans.",
    author: "VisionariesAI Team",
    dateLabel: "Nov 05, 2025",
    publishedAt: "2025-11-05",
    readTime: "11 min read",
    category: "Industry Trends",
    tags: ["Rural EdTech", "Deployment", "Smart Campus"],
    featured: false,
    gradient: "from-amber-500 to-orange-600",
    views: 2700,
    comments: 52,
    icon: "🌍",
  },
];

const DEFAULT_CATEGORIES = ["All", "Industry Trends", "Technical", "Case Studies", "Product Updates"];

const formatCompact = (n) => {
  const num = Number(n || 0);
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`.replace(".0", "");
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`.replace(".0", "");
  return `${num}`;
};

const BOOKMARK_KEY = "vx_blog_bookmarks";

/** ----------------------------
 *  ✅ Component
 *  ---------------------------- */
const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Separate newsletter inputs (top + bottom)
  const [emailTop, setEmailTop] = useState("");
  const [emailBottom, setEmailBottom] = useState("");

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem(BOOKMARK_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
    } catch {
      // ignore
    }
  }, [bookmarks]);

  const categories = useMemo(() => {
    const set = new Set(blogPosts.map((p) => p.category));
    const dynamic = ["All", ...Array.from(set)];
    // Keep your order preference if you want
    return DEFAULT_CATEGORIES.filter((c) => dynamic.includes(c)).concat(dynamic.filter((c) => !DEFAULT_CATEGORIES.includes(c)));
  }, []);

  const trendingTopics = useMemo(() => {
    // Build topics from tags (count)
    const counter = new Map();
    blogPosts.forEach((p) => {
      (p.tags || []).forEach((t) => counter.set(t, (counter.get(t) || 0) + 1));
    });
    return Array.from(counter.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({ name, count }));
  }, []);

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();
  const { ref: sidebarRef, isVisible: sidebarVisible } = useScrollAnimation();
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation();

  // Using the max length keeps the hook stable
  const { setRef, isVisible } = useScrollAnimationGroup(blogPosts.length);

  const featuredPost = useMemo(() => blogPosts.find((p) => p.featured), []);
  const regularPosts = useMemo(() => blogPosts.filter((p) => !p.featured), []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return regularPosts
      .filter((post) => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
          !q ||
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          (post.tags || []).some((t) => t.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [regularPosts, activeCategory, searchQuery]);

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visibleCount), [filteredPosts, visibleCount]);

  useEffect(() => {
    // reset pagination when filters change
    setVisibleCount(6);
  }, [activeCategory, searchQuery]);

  const isBookmarked = (slug) => bookmarks.includes(slug);

  const toggleBookmark = (slug) => {
    setBookmarks((prev) => {
      const exists = prev.includes(slug);
      const next = exists ? prev.filter((s) => s !== slug) : [...prev, slug];
      toast({
        title: exists ? "Removed bookmark" : "Saved bookmark",
        description: exists ? "Post removed from bookmarks." : "Post saved to bookmarks.",
      });
      return next;
    });
  };

  const sharePost = async (post) => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, text: post.excerpt, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: "Post link copied to clipboard." });
    } catch {
      toast({ title: "Share failed", description: "Could not share. Try copying the URL manually." });
    }
  };

  const handleSubscribe = (which, e) => {
    e.preventDefault();
    const value = which === "top" ? emailTop : emailBottom;

    // minimal validation
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    if (!ok) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    if (which === "top") setEmailTop("");
    else setEmailBottom("");
  };

  const onTopicClick = (topic) => {
    setActiveCategory("All");
    setSearchQuery(topic);
    toast({ title: "Filtered", description: `Showing results for “${topic}”.` });
  };

  const clearSearch = () => setSearchQuery("");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-6"
            >
              VisionariesAI Blog
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Insights & <span className="gradient-text">Updates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Practical AI, EdTech, Smart Campus deployments, and product updates—written for schools and institutions.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles, tags, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg"
                />
                {searchQuery?.length > 0 && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-secondary transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <span className="text-xs text-muted-foreground">Quick filters:</span>
                {["AI in Education", "Smart Campus", "Energy Monitoring"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => onTopicClick(t)}
                    className="text-xs px-3 py-1 rounded-full bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/80 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Showing <span className="text-foreground font-medium">{filteredPosts.length}</span> results
            {searchQuery ? (
              <>
                {" "}
                for <span className="text-foreground font-medium">“{searchQuery}”</span>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={featuredRef}
              initial={{ opacity: 0, y: 30 }}
              animate={featuredVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="glass-card overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${featuredPost.gradient} group-hover:h-3 transition-all duration-300`} />
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`aspect-video bg-gradient-to-br ${featuredPost.gradient} rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="text-6xl relative z-10">{featuredPost.icon}</span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium">
                        Featured
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {formatCompact(featuredPost.views)}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" /> {formatCompact(featuredPost.comments)}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        {featuredPost.category}
                      </span>
                      {(featuredPost.tags || []).slice(0, 2).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => onTopicClick(t)}
                          className="px-3 py-1 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground text-xs transition"
                        >
                          #{t}
                        </button>
                      ))}
                    </div>

                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary-foreground" />
                        </div>
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {featuredPost.dateLabel}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild variant="hero" size="default" className="group/btn">
                        <Link >
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>

                      <Button
                        variant="outline"
                        size="default"
                        className="group/btn"
                        onClick={() => toggleBookmark(featuredPost.slug)}
                        aria-label="Bookmark"
                      >
                        <Bookmark
                          className={`w-4 h-4 transition-all ${
                            isBookmarked(featuredPost.slug) ? "fill-current text-primary" : ""
                          }`}
                        />
                      </Button>

                      <Button
                        variant="outline"
                        size="default"
                        className="group/btn"
                        onClick={() => sharePost(featuredPost)}
                        aria-label="Share"
                      >
                        <Share2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid with Sidebar */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {activeCategory === "All" ? "Latest Articles" : activeCategory}
                </h2>
                <span className="text-sm text-muted-foreground">{filteredPosts.length} articles</span>
              </div>

              <AnimatePresence mode="popLayout">
                {visiblePosts.length === 0 ? (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="glass-card p-10 text-center"
                  >
                    <p className="text-foreground font-semibold mb-2">No articles found</p>
                    <p className="text-muted-foreground text-sm mb-6">
                      Try changing category or searching with different keywords.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Button variant="outline" onClick={() => setActiveCategory("All")}>
                        Reset Category
                      </Button>
                      <Button variant="hero" onClick={clearSearch}>
                        Clear Search
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visiblePosts.map((post, index) => (
                      <motion.article
                        key={post.slug}
                        ref={setRef(index)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
                        whileHover={{ y: -6 }}
                        className="glass-card overflow-hidden group"
                      >
                        {/* Cover */}
                        <Link  className="block">
                          <div
                            className={`aspect-video bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
                          >
                            <motion.span
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.18, rotate: 8 }}
                              transition={{ duration: 0.25 }}
                              className="text-4xl relative z-10"
                            >
                              {post.icon}
                            </motion.span>

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                                <Eye className="w-3 h-3" /> {formatCompact(post.views)}
                              </span>
                              <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" /> {formatCompact(post.comments)}
                              </span>
                            </div>
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <Tag className="w-3 h-3 text-primary" />
                              <span className="text-xs font-medium text-primary">{post.category}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => toggleBookmark(post.slug)}
                                className="p-2 rounded-xl hover:bg-secondary transition-colors"
                                aria-label="Bookmark"
                              >
                                <Bookmark
                                  className={`w-4 h-4 ${
                                    isBookmarked(post.slug) ? "fill-current text-primary" : "text-muted-foreground"
                                  }`}
                                />
                              </button>
                              <button
                                type="button"
                                onClick={() => sharePost(post)}
                                className="p-2 rounded-xl hover:bg-secondary transition-colors"
                                aria-label="Share"
                              >
                                <Share2 className="w-4 h-4 text-muted-foreground" />
                              </button>
                            </div>
                          </div>

                          <Link >
                            <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>

                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {(post.tags || []).slice(0, 3).map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => onTopicClick(t)}
                                className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition"
                              >
                                #{t}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                            <span className="flex items-center gap-1 min-w-0">
                              <User className="w-3 h-3" />
                              <span className="truncate">{post.author}</span>
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.dateLabel}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Button asChild variant="outline" size="sm" className="w-full group">
                              <Link >
                                Read
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>

                        <div className={`h-1 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      </motion.article>
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Load More */}
              {filteredPosts.length > visibleCount && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="text-center mt-12"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() => setVisibleCount((c) => Math.min(c + 4, filteredPosts.length))}
                  >
                    Load More Articles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ opacity: 0, x: 30 }}
              animate={sidebarVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Trending Topics */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Trending Topics</h3>
                </div>

                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <motion.button
                      key={topic.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={sidebarVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      whileHover={{ x: 5 }}
                      onClick={() => onTopicClick(topic.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {topic.name}
                      </span>
                      <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                        {topic.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {[...blogPosts]
                    .sort((a, b) => (b.views || 0) - (a.views || 0))
                    .slice(0, 4)
                    .map((post, index) => (
                      <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={sidebarVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                        whileHover={{ x: 5 }}
                        className="flex gap-3 group"
                      >
                        <Link  className="flex gap-3 w-full">
                          <div
                            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                          >
                            <span className="text-lg">{post.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {post.dateLabel}
                              </span>
                              <span className="inline-flex items-center gap-1">
                                <Eye className="w-3 h-3" /> {formatCompact(post.views)}
                              </span>
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Bookmarks quick view */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">Saved</h3>
                {bookmarks.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No bookmarks yet. Save posts to read later.</p>
                ) : (
                  <div className="space-y-2">
                    {bookmarks
                      .map((slug) => blogPosts.find((p) => p.slug === slug))
                      .filter(Boolean)
                      .slice(0, 4)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          
                          className="block p-3 rounded-lg bg-secondary/40 hover:bg-secondary transition"
                        >
                          <div className="text-sm text-foreground font-medium line-clamp-1">{p.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">{p.dateLabel}</div>
                        </Link>
                      ))}
                  </div>
                )}
              </div>

              {/* Newsletter Card */}
              <div className="glass-card p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="font-display font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get weekly insights delivered to your inbox</p>
                <form onSubmit={(e) => handleSubscribe("top", e)} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={emailTop}
                    onChange={(e) => setEmailTop(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all"
                  />
                  <Button variant="hero" size="sm" type="submit" className="w-full group">
                    Subscribe
                    <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Newsletter */}
      <section className="py-20">
        <motion.div
          ref={newsletterRef}
          initial={{ opacity: 0, y: 30 }}
          animate={newsletterVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="glass-card p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={newsletterVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <Send className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Never Miss an Update
              </h2>

              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join our newsletter for AI insights, product updates, and real deployment learnings.
              </p>

              <form
                onSubmit={(e) => handleSubscribe("bottom", e)}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailBottom}
                  onChange={(e) => setEmailBottom(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <Button variant="hero" size="lg" type="submit" className="group whitespace-nowrap">
                  Subscribe
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Blog;
