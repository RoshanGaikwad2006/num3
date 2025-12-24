import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Presentation, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Share your concerns and goals. We discuss your specific situation and how numerology can help.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "In-Depth Analysis",
    description: "I calculate and analyze your complete numerological profile using your birth details and name.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Personalized Report",
    description: "Receive a comprehensive report with actionable insights tailored to your questions.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Guided Implementation",
    description: "Follow-up support to help you implement recommendations and track your progress.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-section-medium section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-border" />
              )}
              
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-2xl bg-section-light border border-border shadow-soft flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-warm-brown text-section-light text-sm font-semibold flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default ProcessSection;
