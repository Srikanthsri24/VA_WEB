import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <ProductsPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
