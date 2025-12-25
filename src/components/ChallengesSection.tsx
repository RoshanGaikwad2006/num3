import React from "react";
import { Briefcase, Building2, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";

const challenges = [
  {
    icon: Briefcase,
    title: "Career Direction",
    description: "Align your profession with your natural strengths for fulfillment and success.",
  },
  {
    icon: Building2,
    title: "Business Naming",
    description: "Choose a name that carries the right energy to attract growth and prosperity.",
  },
  {
    icon: Heart,
    title: "Relationships",
    description: "Understand compatibility and timing to foster deeper, more meaningful connections.",
  },
  {
    icon: Clock,
    title: "Decision Timing",
    description: "Launch, invest, or act when the cosmic energy supports your goals.",
  },
];

const ChallengesSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="challenges-section section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold challenges-heading mb-4">
            Real Challenges, Real Solutions
          </h2>
          <p className="text-lg challenges-body max-w-[90%] mx-auto leading-relaxed">
            Numerology isn't fortune-telling — it's a decision-support system
            that has guided professionals and entrepreneurs for centuries.
          </p>
        </div>

        {/* Divider before cards */}
        <div className="w-[120px] h-[2px] bg-[#C9A45C]/30 mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {challenges.map((challenge) => (
            <div key={challenge.title} className="group h-full">
              <div className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out relative overflow-hidden flex flex-col justify-between hover:-translate-y-[2px] bg-white border border-gold shadow-lg ring-1 ring-gold/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 bg-gold text-white shadow-lg">
                  <challenge.icon className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-serif font-bold text-warm-brown group-hover:text-gold transition-colors duration-300 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="leading-relaxed mb-6 text-warm-gray">
                    {challenge.description}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full md:w-auto" onClick={openBooking}>
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
