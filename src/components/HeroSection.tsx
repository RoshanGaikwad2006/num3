import { motion, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react";
import ConsultationTicker from "@/components/ConsultationTicker";
import consultantPortraitHeroFinal from "@/assets/consultant-portrait-hero-final.jpg";
import consultantPortrait from "@/assets/consultant-portrait.jpg";
import consultationSession from "@/assets/consultation-session.jpg";
import careerSuccessMeeting from "@/assets/career-success-meeting.jpg";
import careerClarityImage from "@/assets/career-clarity.png";
import globalTrustImage from "@/assets/global-trust.png";
import { useEffect, useRef, useState } from "react";
import { useBooking } from "@/contexts/BookingContext";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const slides = [
  {
    id: 1,
    layout: "standard",
    headline: "Numerology for Life Decisions",
    subtext: "International Numerologist | Name Correction | Predictive Guidance",
    description: "Make confident decisions in your career, business, and relationships through the ancient science of numbers — refined for the modern world.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "WhatsApp for Guidance",
    image: consultantPortrait,
    stats: true
  },
  {
    id: 2,
    layout: "standard",
    headline: "Numerology for Career Success",
    subtext: "International Numerologist | Business & Career Guidance",
    description: "Make informed career and business decisions using numerology insights designed for clarity and long-term growth.",
    ctaPrimary: "View Services",
    ctaSecondary: null,
    image: careerSuccessMeeting,
    stats: false
  },
  {
    id: 3,
    layout: "consultation",
    headline: "Personal Guidance Beyond Predictions",
    subtext: "REAL CONSULTATIONS. REAL IMPACT.",
    description: "Confidential, practical, and tailored sessions focused on clarity, timing, and long-term outcomes.",
    ctaPrimary: "Book a Personal Consultation",
    ctaSecondaryTitle: "Limited weekly slots available",
    image: consultationSession,
    stats: false,
    trustPoints: ["Confidential Sessions", "Structured Analysis", "Clear Next Steps"]
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openBooking } = useBooking();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentContent = slides[currentSlide];

  // Per-slide image sizing to ensure consistent framing and avoid overly tall images
  const imageSizeClass = (id: number) => {
    // Slide 1 & 2: slightly decreased from previous values for tighter framing
    if (id === 1 || id === 2) return 'max-h-[400px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px]';
    // Slide 3 (consultation): slightly increased so it matches visually with others
    return 'max-h-[560px] sm:max-h-[600px] md:max-h-[640px] lg:max-h-[680px]';
  };

  return (
    <section className={`relative min-h-screen overflow-hidden flex items-center group transition-colors duration-700 ease-in-out hero-bg zone1`}> 
      {/* Twilight overlay + subtle numerology motif (low opacity, drifting) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 twilight-overlay bg-drift" />
        <div className="absolute inset-0 numerology-motif" />
      </div>

      {/* decorative hero numerology numbers (1-9), very faint (2-3% opacity), organic placement */}
      <div className="absolute inset-0 opacity-[0.045] pointer-events-none select-none">
        <div className="absolute inset-0 font-serif text-[200px] font-bold leading-none tracking-widest">
          <div className="absolute top-6 left-6 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '-6deg', ['--float-duration' as any]: '26s', animationDelay: '-2s' }}>1</div>
          <div className="absolute top-20 right-28 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '8deg', ['--float-duration' as any]: '22s', animationDelay: '-4s' }}>2</div>
          <div className="absolute top-40 left-28 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '-4deg', ['--float-duration' as any]: '28s', animationDelay: '-6s' }}>3</div>
          <div className="absolute left-1/3 top-16 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '6deg', ['--float-duration' as any]: '24s', animationDelay: '-1s' }}>4</div>
          <div className="absolute bottom-40 right-12 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '-2deg', ['--float-duration' as any]: '26s', animationDelay: '-3s' }}>5</div>
          <div className="absolute bottom-28 left-16 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '4deg', ['--float-duration' as any]: '23s', animationDelay: '-5s' }}>6</div>
          <div className="absolute top-12 left-1/2 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '-8deg', ['--float-duration' as any]: '27s', animationDelay: '-2.5s' }}>7</div>
          <div className="absolute bottom-24 right-1/3 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '3deg', ['--float-duration' as any]: '25s', animationDelay: '-4.5s' }}>8</div>
          <div className="absolute bottom-8 left-1/4 hero-number hero-number-floating hero-number-subtle" style={{ ['--rot' as any]: '-5deg', ['--float-duration' as any]: '29s', animationDelay: '-1.8s' }}>9</div>
        </div>
      </div>

      {/* Very subtle sacred-geometry overlay (circles/flower-like) at ~2-3% opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g stroke="black" strokeOpacity="0.02" fill="none">
            <circle cx="20%" cy="25%" r="80" />
            <circle cx="80%" cy="20%" r="120" />
            <circle cx="50%" cy="50%" r="160" />
            <g transform="translate(50,50)">
              <circle cx="0" cy="0" r="40" />
              <circle cx="0" cy="0" r="80" />
              <circle cx="0" cy="0" r="120" />
            </g>
          </g>
        </svg>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/40 hover:bg-white/60 text-[#4A4238] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/40 hover:bg-white/60 text-[#4A4238] transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="container-wide section-padding relative z-10 w-full">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide}
            className="grid gap-12 items-center lg:items-stretch grid-cols-1 lg:grid-cols-2 lg:gap-10"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: currentContent.layout === 'consultation' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentContent.layout === 'consultation' ? -20 : 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative z-20 space-y-6 order-1 text-center lg:text-left flex flex-col justify-center ${currentContent.layout === 'consultation' ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <div className="space-y-4">
                {/* subtle radial glow behind headings */}
                <div aria-hidden="true" className="hero-heading-glow" />
                {currentContent.layout === 'consultation' ? (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                    className="text-xs font-bold tracking-widest text-[#C9A45C] uppercase block mb-2"
                  >
                    {currentContent.subtext}
                  </motion.span>
                ) : null}

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#C9A45C] leading-[1.1] tracking-tight max-w-[95%] mx-auto lg:mx-0 gold-accent-text"
                >
                  {currentContent.headline}
                </motion.h1>

                {currentContent.layout !== 'consultation' && (
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#6D635B] font-medium font-sans min-h-[3.5rem] flex items-center justify-center lg:justify-start max-w-[90%] mx-auto lg:mx-0 leading-relaxed"
                  >
                    {/* Split subtext on mobile if needed */}
                    <span className="block sm:inline">{currentContent.subtext}</span>
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`text-base md:text-lg font-sans leading-relaxed max-w-[90%] mx-auto lg:mx-0 ${currentContent.layout === 'consultation' ? 'text-[#5C5349]/80' : 'text-[#8C857D]/80 min-h-[4.5rem]'}`}
                >
                  {currentContent.description}
                </motion.p>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
              >
                <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
                    <Button
                    variant="hero"
                    size="xl"
                    className="shadow-lg transition-all duration-300 w-full sm:w-auto min-w-[240px] min-h-[48px] gold-cta solid"
                    onClick={() => {
                      if (currentContent.id === 2) {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        openBooking();
                      }
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-3 text-[#C9A45C]" />
                    {currentContent.ctaPrimary}
                  </Button>

                  {/* Secondary Text Below Button */}
                  {currentContent.ctaSecondaryTitle && (
                    <span className="text-xs text-[#8C857D] font-medium tracking-wide">
                      {currentContent.ctaSecondaryTitle}
                    </span>
                  )}
                </div>

                {currentContent.ctaSecondary && (
                  <div className="relative w-full sm:w-auto">
                    <span className="cta-number">7</span>
                    <Button
                      variant="outline"
                      size="xl"
                      className="relative z-10 outline-gold-glow border-[#E0C57A] transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                      onClick={() => {
                        window.open('https://wa.me/919560416174', '_blank');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-3 whatsapp-icon" />
                      <span className="relative z-20">{currentContent.ctaSecondary}</span>
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Verified Trust/Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 lg:mt-4 w-full"
              >
                {/* Separator */}
                <div className="w-[180px] h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-transparent mx-auto my-5 opacity-50" />

                {/* Content Container */}
                <div className="flex items-center justify-center text-[#4A4238]/90 w-full">
                  {currentContent.stats ? (
                    /* Slide 1: Stats - Grid on Mobile */
                    <div className="grid grid-cols-3 gap-4 w-full lg:flex lg:w-auto lg:gap-10">
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={15} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Years Exp.</p>
                      </div>
                      <div className="hidden lg:block w-[1px] h-10 bg-[#C9A45C]/40" />
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={5000} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Clients</p>
                      </div>
                      <div className="hidden lg:block w-[1px] h-10 bg-[#C9A45C]/40" />
                      <div className="text-center">
                        <p className="text-2xl md:text-3xl font-serif font-bold text-[#C9A45C] flex items-center justify-center">
                          <AnimatedCounter value={40} suffix="+" />
                        </p>
                        <p className="text-[10px] md:text-xs font-bold text-[#8C857D] uppercase tracking-widest mt-1">Countries</p>
                      </div>
                    </div>
                  ) : (
                    /* Slide 2 & 3: Trust Strip - Stack on Mobile? Checks? User didn't specify Trust Strip stacking, but 'Stats appear BELOW buttons'. I will keep row for Trust Strip as it fits, or wrap it. */
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold tracking-wide text-[#6D635B]">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Used by professionals</span>
                      </div>
                      <div className="hidden sm:block w-[1px] h-5 bg-[#C9A45C]/40" />
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Practical guidance</span>
                      </div>
                      <div className="hidden sm:block w-[1px] h-5 bg-[#C9A45C]/40" />
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>Global consultations</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Right (or Left) - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className={`flex items-center justify-center relative order-2 w-full ${currentContent.layout === 'consultation' ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'}`}
            >
              {/* Enhanced aura behind image: warm-gold keylight, indigo rim, soft vignette for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,164,92,0.14)_0%,_transparent_45%)] blur-3xl opacity-100 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(45,40,90,0.04)_0%,_transparent_50%)] blur-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.06)_0%,_transparent_60%)] pointer-events-none opacity-40" />
              </div>

              <div className={`relative rounded-[22px] overflow-hidden shadow-2xl border border-white/40 w-full h-full ${currentContent.layout === 'consultation' ? 'max-w-2xl' : 'max-w-lg lg:max-w-none'} ${imageSizeClass(currentContent.id)}`}> 
                <img
                  src={currentContent.image}
                  alt="Professional Numerology Consultant"
                  className={`w-full h-full object-cover object-center contrast-[1.03] saturate-[1.04] blur-[0.3px] brightness-[1.02] rounded-[22px]`}
                />
                {/* Warm highlight overlay for golden highlights (matte + warmth) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,164,92,0.08)_0%,_transparent_35%)] mix-blend-screen pointer-events-none" />
                {/* Gentle matte tint to remove corporate-studio flatness */}
                <div className="absolute inset-0 bg-[hsl(var(--gold))]/6 mix-blend-overlay pointer-events-none" />
                {/* Slight vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.08)_0%,_transparent_55%)] pointer-events-none opacity-30" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[22px] pointer-events-none" />
                {/* Decorative number below image (very faint) */}
                <span className="under-image-number" style={{ bottom: '-28px' }}>3</span>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
      
      {/* Ticker positioned at the bottom of the hero section - fixed spacing so it never overlaps images */}
      <div className={`absolute left-0 right-0 z-20 opacity-90 mix-blend-multiply transition-all duration-700 ease-in-out bottom-12`}> 
        {/* Thin gold divider above ticker */}
        <div className="absolute left-0 right-0 top-0 h-px bg-[hsl(var(--gold))] opacity-70 pointer-events-none" />
        <div className="mx-auto max-w-full px-4 relative">
          <ConsultationTicker />
        </div>
        {/* Thin gold divider below ticker */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-[hsl(var(--gold))] opacity-70 pointer-events-none" />
      </div>
      {/* Add bottom padding so ticker never overlaps content on small screens */}
      <div className="pointer-events-none h-32 lg:h-36" />
    </section>
  );
};

export default HeroSection;
