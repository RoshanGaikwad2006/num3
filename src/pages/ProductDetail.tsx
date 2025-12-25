import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Star, MessageCircle, ShieldCheck, Zap, Heart, Truck, Users } from "lucide-react";
import { useEffect, useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const [showFloatingCTA, setShowFloatingCTA] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            // Show floating CTA after scrolling down a bit (e.g., 300px)
            setShowFloatingCTA(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-warm-brown mb-4">Product Not Found</h2>
                    <Link to="/products">
                        <Button variant="outline">Back to Tools</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleWhatsAppOrder = () => {
        const message = `Hello, I am interested in the ${product.name}. Can you please share more details or the purchase link?`;
        const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleExpertChat = () => {
        const message = `Hello, I'm considering the ${product.name} but I'm not sure if it's right for me. Can I get some advice?`;
        const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Icons map for highlights - cycling through them or mapping specific ones nicely
    const highlightIcons = [Zap, ShieldCheck, Heart, Users];

    return (
        <div className="min-h-screen bg-background font-sans relative">
            <Header />

            {/* Soft divider/shadow for navbar separation if needed, though Header has one on scroll. 
                We can add a spacer or just rely on spacing. 
            */}

            <div className="pt-32 pb-24 container-wide px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                {/* Back Link */}
                    <Link to="/products" className="inline-flex items-center text-warm-gray hover:text-warm-brown transition-colors mb-8 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Tools
                </Link>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left: Image - Sticky on Desktop */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-section-light rounded-2xl overflow-hidden border border-warm-brown/10 relative w-full h-[400px] md:h-[550px] max-h-[580px] md:sticky md:top-32 shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </motion.div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col h-full">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-warm-brown mb-6 leading-tight">{product.name}</h1>

                                {/* Product Hightlight Strip */}
                                <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-t border-b border-warm-brown/10">
                                    {product.highlights?.map((highlight, index) => {
                                        const Icon = highlightIcons[index % highlightIcons.length];
                                        return (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                                                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-sm font-medium text-warm-brown/80 leading-tight">
                                                    {highlight}
                                                </span>
                                            </div>
                                        );
                                    }) || (
                                            // Fallback if highlights missing (shouldn't happen with update)
                                            <>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                                                        <ShieldCheck className="w-5 h-5 text-gold" />
                                                    </div>
                                                    <span className="text-sm font-medium text-warm-brown/80">Premium Quality</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center shrink-0">
                                                        <Users className="w-5 h-5 text-gold" />
                                                    </div>
                                                    <span className="text-sm font-medium text-warm-brown/80">Trusted by Clients</span>
                                                </div>
                                            </>
                                        )}
                                </div>

                                <p className="text-lg text-warm-gray leading-relaxed font-medium">
                                    {product.fullDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-serif text-xl font-semibold text-warm-brown">What This Helps With</h3>
                                <ul className="space-y-3">
                                    {product.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3 text-warm-gray">
                                            <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-gold" />
                                            </div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Secondary Soft CTA */}
                                                                <div className="bg-warm-brown/5 rounded-xl p-6 border border-warm-brown/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-left">
                                    <p className="font-medium text-warm-brown text-sm">Unsure if this is right for you?</p>
                                    <p className="text-warm-gray text-xs">Chat with an expert before ordering.</p>
                                </div>
                                                                <Button variant="outline" size="sm" onClick={handleExpertChat}>
                                                                    Talk to Expert on WhatsApp
                                                                </Button>
                            </div>


                            <div className="bg-white rounded-xl p-6 border border-warm-brown/10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full -mr-10 -mt-10" />
                                <h3 className="font-serif text-lg font-semibold text-warm-brown mb-2 relative z-10">Why This Is Recommended</h3>
                                <p className="text-warm-gray text-sm leading-relaxed relative z-10">
                                    {product.recommendedFor}
                                </p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h3 className="font-serif text-lg font-semibold text-warm-brown">How To Use</h3>
                                <ol className="list-decimal list-inside space-y-2 text-warm-gray text-sm marker:text-gold marker:font-medium">
                                    {product.usageSteps.map((step) => (
                                        <li key={step} className="pl-1">{step}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className="flex flex-col gap-3 pt-6">
                                <Button size="lg" className="w-full" onClick={handleWhatsAppOrder}>
                                    Order via WhatsApp
                                </Button>
                                <p className="text-xs text-center text-warm-brown/60 italic">
                                    *These tools are supportive aids and work best when combined with professional consultation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Floating CTA */}
            <AnimatePresence>
                {showFloatingCTA && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 z-40"
                    >
                        <Button onClick={handleWhatsAppOrder} size="lg">
                            Order Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductDetail;
