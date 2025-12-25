import { motion } from "framer-motion";

const OrnamentalDivider = () => {
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-center overflow-hidden">
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
    );
};

export default OrnamentalDivider;
