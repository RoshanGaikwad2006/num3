import { motion } from "framer-motion";

const TransitionDivider = () => {
    return (
        <section className="relative w-full h-24 md:h-32 overflow-hidden bg-gradient-to-b from-[hsl(var(--hero-bg)/0.12)] via-white/80 to-section-light/30 flex items-center justify-center">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4">
                {/* Caption */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-sm md:text-base font-serif italic text-foreground/70 tracking-wider text-center"
                >
                    Turning Insight into Action
                </motion.p>

                {/* Ornamental Line (thin gold with small center diamond) */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                    className="flex items-center gap-3 opacity-60"
                >
                    {/* Left Line */}
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-[hsl(var(--gold))] to-transparent" />

                    {/* Center Symbol (small gold diamond) */}
                    <div className="w-2 h-2 rotate-45 bg-[hsl(var(--gold))] shadow-soft" />

                    {/* Right Line */}
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-[hsl(var(--gold))] to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default TransitionDivider;
