import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Award, BookOpen, Globe } from "lucide-react";
import consultantPortrait from "@/assets/consultant-portrait.jpg";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useBooking } from "@/contexts/BookingContext";

const About = () => {
    const { openBooking } = useBooking();

    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#4A4238] font-sans">
            <Header />

            <main className="pt-20">
                {/* 1. HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#F9F5F0] to-[#F2EFE9] overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none mix-blend-multiply">
                        <div className="absolute inset-0 font-serif text-[300px] font-bold leading-none text-[#C9A45C] tracking-widest">
                            <div className="absolute top-20 right-10">8</div>
                            <div className="absolute bottom-20 left-10">4</div>
                        </div>
                    </div>

                    <div className="container-wide grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <span className="text-[#C9A45C] font-semibold tracking-wider text-sm uppercase">International Numerologist | Predictive Guidance</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4A4238] leading-tight">
                                Guiding Decisions<br />Through Numbers
                            </h1>
                            <p className="text-lg text-[#6D635B] max-w-lg leading-relaxed">
                                Numerology isn't about superstition—it's a precise decision-support system.
                                I help professionals and entrepreneurs decode the patterns shaping their lives to make smarter, timing-based choices.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="absolute -inset-4 bg-[#C9A45C]/20 rounded-full blur-3xl opacity-40 pointer-events-none" />
                            <img
                                src={consultantPortrait}
                                alt="Founder Portrait"
                                className="w-full max-w-[24rem] rounded-2xl shadow-xl z-10 contrast-[1.05] sepia-[0.1]"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* 2. FOUNDER STORY */}
                <section className="py-20 bg-white">
                    <div className="container-wide max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A4238]">The Journey Behind the Numbers</h2>
                            <div className="w-20 h-[2px] bg-[#C9A45C]/50 mx-auto" />
                        </div>

                        <div className="grid md:grid-cols-5 gap-8 items-start">
                            <div className="md:col-span-2 relative">
                                <div className="border-l-2 border-[#C9A45C]/30 pl-6 space-y-8 ml-4">
                                    <div className="relative">
                                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C9A45C] border-4 border-white" />
                                        <h4 className="font-bold text-lg">Foundations</h4>
                                        <p className="text-sm text-[#6D635B]">Started with a deep curiosity for patterns and ancient Vedic systems.</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#C9A45C] border-4 border-white" />
                                        <h4 className="font-bold text-lg">Global Practice</h4>
                                        <p className="text-sm text-[#6D635B]">Expanded to serve clients in 40+ countries.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-3 space-y-6 text-[#4A4238]/90 leading-relaxed text-lg">
                                <p>
                                    "I never intended to be a numerologist. I began as a skeptic, analyzing numbers purely as data points."
                                </p>
                                <p className="text-[#6D635B] text-base">
                                    Over the last 15 years, I realized that numbers aren't just abstract concepts—they are the architectural blueprint of our lives.
                                    By combining traditional knowledge with modern analytical methods, I developed a system that removes the 'mystical fluff' and focuses on actionable clarity.
                                </p>
                                <blockquote className="border-l-4 border-[#C9A45C] pl-4 italic text-[#4A4238] font-serif text-xl">
                                    "My goal is to give you the clarity to move forward, not to predict a fixed destiny."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CREDENTIALS & EXPERIENCE (Moved up for flow) */}
                <section className="py-16 bg-[#4A4238] text-white">
                    <div className="container-wide">
                        <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/10">
                            <div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-[#C9A45C] mb-2"><AnimatedCounter value={15} suffix="+" /></div>
                                <div className="text-xs md:text-sm uppercase tracking-widest opacity-80">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-[#C9A45C] mb-2"><AnimatedCounter value={5000} suffix="+" /></div>
                                <div className="text-xs md:text-sm uppercase tracking-widest opacity-80">Clients Served</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-[#C9A45C] mb-2"><AnimatedCounter value={40} suffix="+" /></div>
                                <div className="text-xs md:text-sm uppercase tracking-widest opacity-80">Countries</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PHILOSOPHY & APPROACH */}
                <section className="py-20 bg-[#FAFAF8]">
                    <div className="container-wide">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A4238]">My Approach</h2>
                            <p className="text-[#6D635B] mt-4 max-w-2xl mx-auto">Logic meets Intuition. A grounded method for modern problems.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Check, title: "Data-Backed", desc: "Analysis based on precise calculations, not guesswork." },
                                { icon: Star, title: "Ethical", desc: "No fear-mongering. Purely empowering guidance." },
                                { icon: Award, title: "Practical", desc: "Real-world solutions for career and relationships." },
                                { icon: Globe, title: "Global", desc: "Understanding diverse cultures and naming conventions." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: i * 0.06 }}
                                    className="group h-full"
                                >
                                    <div className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out relative overflow-hidden flex flex-col justify-between hover:-translate-y-[2px] bg-white border border-gold shadow-lg ring-1 ring-gold/10">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0 bg-gold text-white shadow-lg">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xl font-serif font-bold text-warm-brown group-hover:text-gold transition-colors duration-300 mb-3">{item.title}</h3>
                                            <p className="leading-relaxed mb-6 text-warm-gray text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. CERTIFICATIONS / LEGACY */}
                <section className="py-20 bg-white border-y border-[#E5E0D8]">
                    <div className="container-wide flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <BookOpen className="w-10 h-10 text-[#C9A45C]" />
                            <div>
                                <h4 className="font-bold text-[#4A4238]">Continuous Learning</h4>
                                <p className="text-xs text-[#6D635B] uppercase tracking-wider">Vedic & Western Systems</p>
                            </div>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 bg-[#E5E0D8]" />
                        <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <Award className="w-10 h-10 text-[#C9A45C]" />
                            <div>
                                <h4 className="font-bold text-[#4A4238]">Certified Expert</h4>
                                <p className="text-xs text-[#6D635B] uppercase tracking-wider">Professional Practice</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. CALL TO ACTION */}
                <section className="py-24 bg-[#FAFAF8] text-center">
                    <div className="container-wide max-w-3xl mx-auto space-y-8">
                        <div className="w-[120px] h-[2px] bg-[#C9A45C]/40 mx-auto" />
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4A4238] leading-tight">
                            If you're at a turning point,<br />let's decode the right path.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Button
                                size="xl"
                                className="bg-[#4A4238] hover:bg-[#5C5349] text-white shadow-lg hover:-translate-y-1 transition-all"
                                onClick={openBooking}
                            >
                                Book Consultation
                            </Button>
                            <Button
                                size="xl"
                                variant="outline"
                                className="border-[#C9A45C] text-[#4A4238] hover:bg-[#C9A45C]/10"
                                onClick={() => window.open('https://wa.me/919560416174', '_blank')}
                            >
                                WhatsApp for Guidance
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
