import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "VisionAI Analytics",
    description: "Enterprise-grade analytics platform with AI-powered insights and real-time dashboards.",
    features: ["Real-time Analytics", "Predictive Models", "Custom Dashboards"],
    status: "In Production",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "SmartDoc AI",
    description: "Intelligent document processing and extraction system using advanced OCR and NLP.",
    features: ["OCR Technology", "NLP Processing", "Auto-Classification"],
    status: "In Production",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "ChatGenius Pro",
    description: "Advanced conversational AI platform for customer support and engagement.",
    features: ["Multi-language", "24/7 Support", "Analytics Built-in"],
    status: "In Production",
    gradient: "from-orange-500 to-red-600",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Products in <span className="gradient-text">Production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI products are already powering businesses worldwide. Built with cutting-edge technology, deployed at scale.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`} />
              
              <div className="p-8">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-green-500">{product.status}</span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="default" className="w-full group-hover:border-primary group-hover:text-primary">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
