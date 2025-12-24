import { motion } from "framer-motion";
import { Briefcase, Building2, Heart, Clock } from "lucide-react";

const challenges = [
  {
    icon: Briefcase,
    title: "Career Direction",
    description: "Feeling stuck or uncertain about your professional path? Numerology reveals your natural strengths and optimal career alignment.",
  },
  {
    icon: Building2,
    title: "Business Naming",
    description: "Your business name carries energy. Get the right name that attracts success and aligns with your entrepreneurial vision.",
  },
  {
    icon: Heart,
    title: "Relationships",
    description: "Understand compatibility patterns and timing for meaningful connections — personal and professional.",
  },
  {
    icon: Clock,
    title: "Decision Timing",
    description: "When to launch, invest, or wait. Numerology helps you identify favorable periods for major life decisions.",
  },
];

const ChallengesSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-warm-brown mb-4">
            Real Challenges, Real Solutions
          </h2>
          <p className="text-lg text-warm-gray">
            Numerology isn't fortune-telling — it's a decision-support system 
            that has guided professionals and entrepreneurs for centuries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-section-light rounded-2xl p-8 border border-border/50 shadow-soft transition-all duration-300 hover:shadow-card hover:border-gold/30">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold/20">
                  <challenge.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-warm-brown mb-3">
                  {challenge.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
