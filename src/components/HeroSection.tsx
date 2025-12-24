import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import consultantPortrait from "@/assets/consultant-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Subtle number pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <div className="absolute inset-0 font-serif text-[200px] font-bold leading-none text-warm-brown tracking-widest">
          <div className="absolute top-10 left-10">3</div>
          <div className="absolute top-20 right-20">7</div>
          <div className="absolute bottom-40 left-1/4">9</div>
          <div className="absolute top-1/3 right-1/4">1</div>
          <div className="absolute bottom-20 right-10">5</div>
          <div className="absolute top-1/2 left-10">8</div>
        </div>
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-warm-brown leading-[1.1] text-balance"
              >
                Decode Your Life's Path with Numerology
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-warm-gray font-sans"
              >
                International Numerologist | Name Correction | Predictive Guidance
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-warm-gray/80 font-sans leading-relaxed max-w-lg"
              >
                Make confident decisions in your career, business, and relationships 
                through the ancient science of numbers — refined for the modern world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Guidance
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-warm-brown">15+</p>
                <p className="text-sm text-warm-gray">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-warm-brown/20" />
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-warm-brown">5000+</p>
                <p className="text-sm text-warm-gray">Clients Worldwide</p>
              </div>
              <div className="w-px h-10 bg-warm-brown/20" />
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-warm-brown">40+</p>
                <p className="text-sm text-warm-gray">Countries</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-gold/20">
                <img
                  src={consultantPortrait}
                  alt="Professional Numerology Consultant"
                  className="w-full max-w-md h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
