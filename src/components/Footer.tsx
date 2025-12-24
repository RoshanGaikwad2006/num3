import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer section-padding py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-warm-brown">
              Numerology Insights
            </h3>
            <p className="text-warm-gray leading-relaxed max-w-sm">
              International numerology consulting for professionals, 
              entrepreneurs, and individuals seeking clarity through 
              the ancient science of numbers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-warm-brown">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Testimonials", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-warm-gray hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-warm-brown">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-warm-gray">
                <Mail className="w-5 h-5 text-gold" />
                <span>consult@numerologyinsights.com</span>
              </li>
              <li className="flex items-center gap-3 text-warm-gray">
                <Phone className="w-5 h-5 text-gold" />
                <span>+91 98XXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-warm-gray">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Available Worldwide via Video Consultation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-brown/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-warm-gray">
              © {new Date().getFullYear()} Numerology Insights. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-warm-gray hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-warm-gray hover:text-gold transition-colors">
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
