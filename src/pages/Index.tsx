import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta - would be handled by react-helmet in production */}
      <HeroSection />
      <FeaturedWork />
      <ServicesPreview />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
