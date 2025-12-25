import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Tools", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    // If href is a root hash (e.g. "/#services"), navigate to home then scroll
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isMobileMenuOpen
          ? "bg-white shadow-md py-4 border-warm-brown/10"
          : isScrolled
            ? "bg-white/90 backdrop-blur-md border-warm-brown/10 shadow-sm py-4"
            : "bg-transparent border-transparent py-6"
        }`}
    >
      <div className="container-wide px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="block hover:opacity-90 transition-opacity">
            <Logo className="h-12" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-warm-gray hover:text-warm-brown transition-colors duration-200 font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="default" onClick={openBooking}>
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-warm-brown"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-warm-gray hover:text-warm-brown transition-colors duration-200 font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="default" size="default" className="mt-2" onClick={() => { openBooking(); setIsMobileMenuOpen(false); }}>
                  Book Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
