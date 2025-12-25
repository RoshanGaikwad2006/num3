import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const WhoThisIsForSection = () => {
    return (
        <section className="py-24 zone2 relative overflow-hidden">
            <div className="container-narrow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 lg:gap-20"
                >
                    {/* Who This Is For */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif font-bold text-warm-brown flex items-center gap-3">
                                Who This Consultation Is For
                            </h3>
                            <div className="h-0.5 w-12 bg-gold/50 rounded-full" />
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Professionals facing important career or business decisions",
                                "Entrepreneurs planning launches, partnerships, or brand names",
                                "Individuals seeking clarity and structured guidance, not superstition"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 text-gold">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <p className="text-warm-gray font-medium leading-relaxed">{item}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Who It May Not Be For */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif font-bold text-warm-brown/80 flex items-center gap-3">
                                Who It May Not Be For
                            </h3>
                            <div className="h-0.5 w-12 bg-warm-brown/20 rounded-full" />
                        </div>
                        <ul className="space-y-6">
                            {[
                                "People seeking instant predictions or guaranteed outcomes",
                                "Entertainment-only or curiosity-based readings",
                                "Those expecting belief-based astrology rather than practical analysis"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-warm-gray/10 flex items-center justify-center shrink-0 mt-0.5 text-warm-gray/60">
                                        <X className="w-4 h-4" />
                                    </div>
                                    <p className="text-warm-gray/80 font-medium leading-relaxed">{item}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoThisIsForSection;
