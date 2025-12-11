import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProductsCarousel from "@/components/home/ProductsCarousel";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import TeamPreview from "@/components/home/TeamPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <ProductsCarousel />
      <TeamPreview />
      <TestimonialsCarousel />
      <CTASection />
    </Layout>
  );
};

export default Index;
