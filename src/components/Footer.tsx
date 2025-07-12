
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Lavish Holidays Logo"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in creating authentic Malaysian travel experiences. 
              Local expertise, tailor-made journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/packages" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Tour Packages
              </Link>
              <Link to="/destinations" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Destinations
              </Link>
              <Link to="/travel-info" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Travel Info
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Kuala Lumpur</div>
              <div className="text-gray-400 text-sm">Langkawi</div>
              <div className="text-gray-400 text-sm">Penang</div>
              <div className="text-gray-400 text-sm">Cameron Highlands</div>
              <div className="text-gray-400 text-sm">Borneo</div>
              <div className="text-gray-400 text-sm">Melaka</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                <span className="text-gray-400 text-sm">+60 12 345 6789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <span className="text-gray-400 text-sm">info@lavishholidaysdmc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-400" />
                <span className="text-gray-400 text-sm">WhatsApp Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Lavish Holidays DMC. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
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
