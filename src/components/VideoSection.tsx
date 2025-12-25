import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const VideoSection = () => {
    const { openBooking } = useBooking();

    return (
        <section className="py-24 zone2 relative overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="order-1"
                    >
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 bg-warm-brown/5 border border-white/20">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube-nocookie.com/embed/RUqEZ9ySIVo?controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                                title="A Message From Your Guide"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="order-2 space-y-6 lg:space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-brown">
                                A Message From Your Guide
                            </h2>
                            <p className="text-xl text-warm-brown/90 font-medium font-sans">
                                Understanding numerology as a practical tool for clarity and decision-making.
                            </p>
                        </div>

                        <div className="space-y-6 text-warm-gray leading-relaxed text-lg font-sans">
                            <p className="line-clamp-3 lg:line-clamp-none">
                                This consultation is not about predictions, but about identifying patterns, timing, and alignment to help you make informed choices in career, business, and relationships.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Button size="lg" className="w-full sm:w-auto" onClick={openBooking}>
                                Book a Consultation
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
