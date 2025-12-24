import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-section-light section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-warm-brown">
              Ready to Decode Your Numbers?
            </h2>
            <p className="text-lg md:text-xl text-warm-gray leading-relaxed">
              Take the first step toward clarity. Whether you're facing a 
              major decision or simply curious about your life path, 
              I'm here to guide you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Calendar className="w-5 h-5" />
              Schedule Your Consultation
            </Button>
            <Button variant="heroOutline" size="xl">
              <MessageCircle className="w-5 h-5" />
              Quick Chat on WhatsApp
            </Button>
          </div>

          <p className="text-sm text-warm-gray/70">
            Initial consultations typically last 30-45 minutes. 
            Available worldwide via video call.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
