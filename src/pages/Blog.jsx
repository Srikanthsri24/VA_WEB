import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag, Send } from "lucide-react";
import { useScrollAnimation, useScrollAnimationGroup } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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
  },
];

const categories = ["All", "Industry Trends", "Technical", "Case Studies", "Product Updates"];

const Blog = () => {
  const [email, setEmail] = useState("");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();
  const { setRef, isVisible } = useScrollAnimationGroup(blogPosts.length);
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollAnimation();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
        
        <div 
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-primary/10 mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest in AI, education technology, and how we're helping institutions transform.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  category === "All"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              ref={featuredRef}
              className={`glass-card overflow-hidden hover-lift transition-all duration-700 ${
                featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${featuredPost.gradient}`} />
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`aspect-video bg-gradient-to-br ${featuredPost.gradient} rounded-xl flex items-center justify-center shadow-xl`}>
                    <span className="text-6xl">📊</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="hero" size="default" className="group">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article 
                key={post.id} 
                ref={setRef(index)}
                className={`glass-card overflow-hidden group hover-lift transition-all duration-700 ${
                  isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`aspect-video bg-gradient-to-br ${post.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  <span className="text-4xl">
                    {post.category === "Technical" && "💻"}
                    {post.category === "Case Studies" && "📈"}
                    {post.category === "Industry Trends" && "🔮"}
                    {post.category === "Product Updates" && "🚀"}
                  </span>
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
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              Load More Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div 
          ref={newsletterRef}
          className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            newsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="glass-card p-8 lg:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest AI insights, product updates, and industry news delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <Button variant="hero" size="default" type="submit" className="group">
                Subscribe
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;