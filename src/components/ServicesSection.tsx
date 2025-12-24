import { motion } from "framer-motion";
import { Sparkles, FileText, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Personal Numerology Reading",
    description: "Comprehensive analysis of your birth date and name to reveal life path, personality, and potential.",
    features: ["Life Path Number Analysis", "Personal Year Forecast", "Strength & Challenge Mapping"],
  },
  {
    icon: FileText,
    title: "Name Correction & Optimization",
    description: "Strategic name adjustments for individuals and businesses to enhance success vibrations.",
    features: ["Spelling Optimization", "Business Name Creation", "Brand Alignment Check"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Guidance",
    description: "Year-ahead forecasts and timing analysis for major decisions and opportunities.",
    features: ["Annual Forecast Report", "Favorable Date Selection", "Decision Timing Analysis"],
  },
  {
    icon: Users,
    title: "Relationship Compatibility",
    description: "In-depth compatibility analysis for personal relationships and business partnerships.",
    features: ["Partner Compatibility Report", "Team Dynamics Analysis", "Communication Insights"],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-section-light section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold font-medium mb-3 tracking-wide uppercase text-sm">Expert Services</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-warm-brown mb-4">
            Clarity Through Numbers
          </h2>
          <p className="text-lg text-warm-gray">
            Each service is tailored to your unique numerical blueprint, 
            delivering actionable insights for your specific situation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl p-8 border border-border shadow-soft transition-all duration-300 hover:shadow-card hover:border-gold/30">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-gold/20">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-serif font-semibold text-warm-brown">
                      {service.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-warm-gray/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
