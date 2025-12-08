import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the key AI trends shaping enterprise technology and how businesses can prepare for the next wave of innovation.",
    author: "Alex Thompson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Industry Trends",
    featured: true,
  },
  {
    id: 2,
    title: "Building Production-Ready ML Models: Best Practices",
    excerpt: "A comprehensive guide to taking machine learning models from prototype to production with confidence.",
    author: "Priya Sharma",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: 3,
    title: "How Conversational AI is Revolutionizing Customer Service",
    excerpt: "Discover how modern chatbots and virtual assistants are transforming customer experience across industries.",
    author: "David Kim",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    featured: false,
  },
  {
    id: 4,
    title: "Data Engineering Foundations for AI Success",
    excerpt: "Why robust data infrastructure is the foundation of every successful AI initiative.",
    author: "James Wilson",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "Technical",
    featured: false,
  },
  {
    id: 5,
    title: "Computer Vision in Manufacturing: A Success Story",
    excerpt: "How one of our clients achieved 99.5% quality detection accuracy using our VisionScan platform.",
    author: "Maria Garcia",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Case Studies",
    featured: false,
  },
  {
    id: 6,
    title: "The Ethics of AI: Building Responsible Systems",
    excerpt: "Exploring the ethical considerations and best practices for developing fair and transparent AI systems.",
    author: "Lisa Chen",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Industry Trends",
    featured: false,
  },
];

const categories = ["All", "Industry Trends", "Technical", "Case Studies", "Product Updates"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Blog</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest in AI, machine learning, and how we're helping businesses transform.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
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
            <div className="glass-card overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Featured
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button variant="hero" size="default">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
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
            {regularPosts.map((post) => (
              <article key={post.id} className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-secondary/50 flex items-center justify-center group-hover:bg-secondary/70 transition-colors">
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest AI insights, product updates, and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero" size="default">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
