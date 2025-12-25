import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const CTASection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="zone1 section-padding py-24 relative overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-warm-brown">
              Ready to Decode Your Numbers?
            </h2>
            <p className="text-lg md:text-xl text-warm-gray leading-relaxed font-medium">
              Take the first step toward clarity. Whether you're facing an important decision
              or exploring your life path, expert guidance is just one conversation away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="xl"
              onClick={openBooking}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] text-gold"
              onClick={() => window.open('https://wa.me/919560416174', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp for Guidance
            </Button>
          </div>

          <p className="text-sm text-warm-gray/70 font-medium">
            Initial consultations last 30–45 minutes. Available worldwide via secure video call.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
