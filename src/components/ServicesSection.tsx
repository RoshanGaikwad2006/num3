import { motion } from "framer-motion";
import { Sparkles, FileText, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";

const services = [
  {
    icon: Sparkles,
    title: "Personal Numerology Reading",
    description: "Reveal your life path, personality, and potential through your unique numbers.",
    features: ["Life Path Analysis", "Personal Year Forecast"],
  },
  {
    icon: FileText,
    title: "Name Correction",
    description: "Optimize your name for success, higher vibrations, and alignment.",
    features: ["Spelling Optimization", "Brand Alignment"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Guidance",
    description: "Timing analysis to help you make major decisions with confidence.",
    features: ["Annual Forecast", "Decision Timing"],
  },
  {
    icon: Users,
    title: "Relationship Compatibility",
    description: "Deep analysis for stronger personal and professional bonds.",
    features: ["Compatibility Report", "Communication Insights"],
  },
];

const ServicesSection = () => {
  const { openBooking } = useBooking();

  return (
    <section id="services" className="zone2 pb-20 pt-10 md:pb-24 md:pt-12">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-gold font-medium mb-3 tracking-wide uppercase text-sm">Expert Services</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-brown mb-4">
            Our Services
          </h2>
          <p className="text-lg text-warm-gray">
            Tailored numerology consultations to guide your life path and decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => {
            const isPrimary = index === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out relative overflow-hidden flex flex-col justify-between hover:-translate-y-[2px] bg-white border border-gold shadow-lg ring-1 ring-gold/10">
                  {isPrimary && (
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider z-10">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 bg-gold text-white shadow-lg">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-xl font-serif font-bold text-warm-brown group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-warm-gray leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-warm-gray/90">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pl-0 md:pl-[4.25rem]">
                    <Button variant="outline" size="sm" className="w-full md:w-auto" onClick={openBooking}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Button size="lg" variant="default" className="px-8">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


export default ServicesSection;
