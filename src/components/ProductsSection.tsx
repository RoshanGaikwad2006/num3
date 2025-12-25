import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const ProductsSection = () => {
    // Duplicate products to ensure we have enough items for a slider on desktop or just for infinite feel
    // Using useMemo to prevent recalculation on every render
    const sliderProducts = [...products, ...products];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setCardsToShow(window.innerWidth >= 768 ? 3 : 1);
        };
        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, sliderProducts.length - cardsToShow);
    const canScrollPrev = currentIndex > 0;
    const canScrollNext = currentIndex < maxIndex;

    const nextSlide = () => {
        if (canScrollNext) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (canScrollPrev) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="zone2 py-12 md:py-16 font-sans overflow-hidden">
            <div className="container-wide">
                <div className="flex items-end justify-between mb-8 px-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <p className="text-gold font-medium mb-3 tracking-wide uppercase text-sm">Supporting Tools</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-brown mb-4">
                            Expert-Recommended Tools
                        </h2>
                        <p className="text-lg text-warm-gray">
                            Curated aids to support your consultation and enhance your personal journey.
                        </p>
                    </motion.div>

                    {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={!canScrollPrev}
                            className={`w-12 h-12 rounded-full border border-warm-brown/20 flex items-center justify-center transition-all duration-300 ${!canScrollPrev
                                ? "opacity-30 cursor-not-allowed text-warm-gray"
                                : "text-warm-brown hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
                                }`}
                            aria-label="Previous Data"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={!canScrollNext}
                            className={`w-12 h-12 rounded-full border border-warm-brown/20 flex items-center justify-center transition-all duration-300 ${!canScrollNext
                                ? "opacity-30 cursor-not-allowed text-warm-gray"
                                : "text-warm-brown hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
                                }`}
                            aria-label="Next Item"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Slider Container */}
                    <div className="overflow-hidden -mx-4 px-4 py-8"> {/* Negative margin to allow card shadow/padding visibility */}
                        <motion.div
                            className="flex"
                            animate={{ x: `calc(-${currentIndex} * (100% / ${cardsToShow}))` }}
                            initial={false}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x; // positive = right (prev), negative = left (next)
                                if (swipe < -50 && canScrollNext) {
                                    nextSlide();
                                } else if (swipe > 50 && canScrollPrev) {
                                    prevSlide();
                                }
                            }}
                        >
                            {sliderProducts.map((product, index) => (
                                <div
                                    key={`${product.id}-${index}`}
                                    className="shrink-0 px-4"
                                    style={{ width: `${100 / cardsToShow}%` }}
                                >
                                    <div className="h-full bg-section-light rounded-2xl overflow-hidden border border-warm-brown/10 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col group">
                                        {/* Image */}
                                        <div className="h-[220px] relative overflow-hidden bg-warm-brown/5">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-serif font-semibold text-warm-brown mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-warm-gray text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                                                {product.shortDescription}
                                            </p>

                                            <Link to={`/product/${product.id}`}>
                                                <Button
                                                    variant="outline"
                                                    className="w-full"
                                                >
                                                    View Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Navigation Arrows (Below Image/Slider) */}
                <div className="flex md:hidden gap-4 justify-center mt-2 mb-8">
                    <button
                        onClick={prevSlide}
                        disabled={!canScrollPrev}
                        className={`w-12 h-12 rounded-full border border-warm-brown/20 flex items-center justify-center transition-all duration-300 ${!canScrollPrev
                            ? "opacity-30 cursor-not-allowed text-warm-gray"
                            : "text-warm-brown hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
                            }`}
                        aria-label="Previous Data"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={!canScrollNext}
                        className={`w-12 h-12 rounded-full border border-warm-brown/20 flex items-center justify-center transition-all duration-300 ${!canScrollNext
                            ? "opacity-30 cursor-not-allowed text-warm-gray"
                            : "text-warm-brown hover:bg-gold/10 hover:border-gold/50 cursor-pointer"
                            }`}
                        aria-label="Next Item"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/products">
                        <Button variant="outline" className="min-w-[200px]">
                            View All Tools
                        </Button>
                    </Link>
                </div>

            </div >
        </section >
    );
};

export default ProductsSection;
