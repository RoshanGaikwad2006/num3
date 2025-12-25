import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="zone2 section-padding py-16 text-warm-gray border-t border-warm-brown/5">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="mb-4">
              <Logo className="h-14" />
            </div>
            <p className="leading-relaxed max-w-sm text-sm md:text-base">
              International numerology consulting for professionals, entrepreneurs,
              and individuals seeking clarity through a structured, practical,
              and modern approach to numbers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-warm-brown">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="hover:text-gold transition-colors duration-200 inline-block py-0.5 w-fit">
                About
              </Link>
              <a href="/#services" className="hover:text-gold transition-colors duration-200 inline-block py-0.5 w-fit">
                Services
              </a>
              <a href="/#process" className="hover:text-gold transition-colors duration-200 inline-block py-0.5 w-fit">
                Process
              </a>
              <Link to="/contact" className="hover:text-gold transition-colors duration-200 inline-block py-0.5 w-fit">
                Contact
              </Link>
              <Link to="/products" className="hover:text-gold transition-colors duration-200 inline-block py-0.5 w-fit">
                Tools & Products
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-warm-brown">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:consult@numerologyinsights.com" className="hover:text-gold transition-colors">
                  consult@numerologyinsights.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Available Worldwide via Video Consultation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-brown/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm opacity-80">
              © 2025 Numerology Insights. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm opacity-80 hover:text-gold transition-colors hover:opacity-100">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm opacity-80 hover:text-gold transition-colors hover:opacity-100">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
