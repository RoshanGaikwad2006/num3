import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementBar from "@/components/AnnouncementBar";
import ConsultationTicker from "@/components/ConsultationTicker";
import ChallengesSection from "@/components/ChallengesSection";
import VideoSection from "@/components/VideoSection";
import TransitionDivider from "@/components/TransitionDivider";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/ProductsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengesSection />
      <OrnamentalDivider />
      <VideoSection />
      <TransitionDivider />
      <ServicesSection />
      <OrnamentalDivider />
      <ProductsSection />
      <OrnamentalDivider />
      <ProcessSection />
      <OrnamentalDivider />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
