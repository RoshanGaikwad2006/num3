import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
