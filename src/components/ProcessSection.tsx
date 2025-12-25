import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Presentation, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Share your goals and concerns. We discuss your situation and determine how numerology can support your decisions.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "In-Depth Analysis",
    description: "Your complete numerological profile is calculated using your birth details and name for precise insights.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Personalized Report",
    description: "Receive a clear, structured report with actionable guidance tailored to your questions.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Guided Implementation",
    description: "Ongoing support to help you apply insights, track progress, and refine decisions.",
  },
];

const ProcessSection = () => {
  const { openBooking } = useBooking();

  return (
    <section id="process" className="zone2 px-6 md:px-12 lg:px-20 pt-8 pb-12 relative overflow-hidden">
      <div className="container-wide max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <p className="text-gold font-medium mb-3 tracking-wide uppercase text-sm">The Process</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-warm-brown mb-4">
            How It Works
          </h2>
          <p className="text-lg text-warm-gray">
            A structured, professional approach to numerological consultation
            that respects your time and delivers clear value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                  className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-warm-brown/20 to-transparent origin-left z-0"
                />
              )}

              <div className="text-center space-y-5 px-4 py-6 rounded-2xl transition-colors duration-500 hover:bg-warm-brown/5 relative z-10">
                <div className="relative inline-block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 rounded-2xl bg-section-light border border-border shadow-soft flex items-center justify-center mx-auto transition-shadow duration-300 group-hover:shadow-card group-hover:border-gold/30"
                  >
                    <step.icon className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warm-brown text-section-light text-sm font-semibold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-warm-brown">
                  {step.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="default"
            size="xl"
            onClick={openBooking}
          >
            Book Your Consultation
          </Button>
          <p className="mt-4 text-sm text-warm-gray/80 font-medium">
            Consultations available worldwide via video call.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
