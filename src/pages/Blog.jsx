import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag, Send, Search, TrendingUp, Bookmark, Share2, Eye, MessageCircle, Calendar, ChevronRight } from "lucide-react";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Education: Trends to Watch in 2024",
    excerpt: "Explore the key AI trends shaping educational technology and how institutions can prepare for the next wave of innovation.",
    author: "Srikanth Dubbaka",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Industry Trends",
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
    views: "2.4K",
    comments: 45,
  },
  {
    id: 2,
    title: "Building Production-Ready AI Monitoring Systems",
    excerpt: "A comprehensive guide to implementing AI-powered CCTV monitoring for campus safety and security.",
    author: "Harsh & Team",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "Technical",
    featured: false,
    gradient: "from-purple-500 to-pink-600",
    views: "1.8K",
    comments: 32,
  },
  {
    id: 3,
    title: "How AI Teaching Assistants are Revolutionizing Learning",
    excerpt: "Discover how Ask.VisionariesAI is transforming student engagement and doubt-solving across schools.",
    author: "VisionariesAI Team",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    featured: false,
    gradient: "from-green-500 to-teal-600",
    views: "3.1K",
    comments: 58,
  },
  {
    id: 4,
    title: "Energy Monitoring: Reducing Costs with IoT & AI",
    excerpt: "How smart energy monitoring systems are helping institutions save up to 30% on electricity bills.",
    author: "Engineering Team",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "Technical",
    featured: false,
    gradient: "from-orange-500 to-red-600",
    views: "1.5K",
    comments: 28,
  },
  {
    id: 5,
    title: "Implementing AI Curriculum in Schools: A Success Story",
    excerpt: "How we helped 25+ schools successfully adopt AI curriculum for classes 3-10.",
    author: "Srikanth Dubbaka",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Case Studies",
    featured: false,
    gradient: "from-indigo-500 to-purple-600",
    views: "2.2K",
    comments: 41,
  },
  {
    id: 6,
    title: "The Complete Guide to LMS Implementation",
    excerpt: "Best practices for deploying a Learning Management System in educational institutions.",
    author: "Development Team",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Technical",
    featured: false,
    gradient: "from-pink-500 to-rose-600",
    views: "1.9K",
    comments: 35,
  },
  {
    id: 7,
    title: "Smart Attendance Systems: Beyond Biometrics",
    excerpt: "Exploring next-gen attendance management with AI face recognition and geo-fencing.",
    author: "Lalith Kumar",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    category: "Product Updates",
    featured: false,
    gradient: "from-teal-500 to-cyan-600",
    views: "1.3K",
    comments: 22,
  },
  {
    id: 8,
    title: "Scaling AI Solutions for Rural Educational Institutions",
    excerpt: "Challenges and solutions for deploying AI technology in tier-2 and tier-3 cities.",
    author: "VisionariesAI Team",
    date: "Nov 5, 2024",
    readTime: "11 min read",
    category: "Industry Trends",
    featured: false,
    gradient: "from-amber-500 to-orange-600",
    views: "2.7K",
    comments: 52,
  },
];

const categories = ["All", "Industry Trends", "Technical", "Case Studies", "Product Updates"];

const trendingTopics = [
  { name: "AI in Education", count: 24 },
  { name: "Smart Campus", count: 18 },
  { name: "Energy Monitoring", count: 15 },
  { name: "LMS Solutions", count: 12 },
  { name: "EdTech Trends", count: 10 },
];

const Blog = () => {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();
  const { ref: sidebarRef, isVisible: sidebarVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(blogPosts.length);
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
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
              Our Blog
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
              Stay updated with the latest in AI, education technology, and how we're helping institutions transform.
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
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/80 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    <span className="text-6xl relative z-10">📊</span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium">
                        Featured
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {featuredPost.views}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" /> {featuredPost.comments}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium animate-pulse">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary-foreground" />
                        </div>
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="hero" size="default" className="group/btn">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="default" className="group/btn">
                        <Bookmark className="w-4 h-4 group-hover/btn:fill-current transition-all" />
                      </Button>
                      <Button variant="outline" size="default" className="group/btn">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article 
                    key={post.id} 
                    ref={setRef(index)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card overflow-hidden group cursor-pointer"
                  >
                    <div className={`aspect-video bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <motion.span 
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl relative z-10"
                      >
                        {post.category === "Technical" && "💻"}
                        {post.category === "Case Studies" && "📈"}
                        {post.category === "Industry Trends" && "🔮"}
                        {post.category === "Product Updates" && "🚀"}
                      </motion.span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {post.views}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" /> {post.comments}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`h-1 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg" className="group">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
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
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="w-full flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{topic.name}</span>
                      <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">{topic.count}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={sidebarVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex gap-3 group cursor-pointer"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                        <span className="text-lg">
                          {post.category === "Technical" && "💻"}
                          {post.category === "Case Studies" && "📈"}
                          {post.category === "Industry Trends" && "🔮"}
                          {post.category === "Product Updates" && "🚀"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter Card */}
              <div className="glass-card p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="font-display font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get weekly insights delivered to your inbox</p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                Join 1,000+ subscribers getting the latest AI insights, product updates, and industry news delivered weekly.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <Button variant="hero" size="lg" type="submit" className="group whitespace-nowrap">
                  Subscribe
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Blog;