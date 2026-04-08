import React from 'react';
import { FaDiscord, FaXTwitter, FaTelegram, FaInstagram, FaArrowUp } from 'react-icons/fa6';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Logo/>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs font-inter">
              A premium development agency helping businesses scale through high-performance web applications and custom digital solutions.
            </p>
          </div>

          {/* Product/Services Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 font-grotesk tracking-tight">Services</h4>
            <ul className="space-y-4 text-gray-500 font-inter">
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Software Architecture</Link></li>
              <li><Link to="/services" className="hover:text-indigo-600 transition-colors">Digital Strategy</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 font-grotesk tracking-tight">Company</h4>
            <ul className="space-y-4 text-gray-500 font-inter">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 font-grotesk tracking-tight">Social</h4>
            <ul className="space-y-4 text-gray-500 font-inter flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 hover:text-indigo-600 transition-colors cursor-pointer">
                <FaDiscord /> Discord
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-600 transition-colors cursor-pointer">
                <FaXTwitter /> X(Twitter)
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-600 transition-colors cursor-pointer">
                <FaTelegram /> Telegram
              </li>
              <li className="flex items-center gap-3 hover:text-indigo-600 transition-colors cursor-pointer">
                <FaInstagram /> Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-sm font-inter order-2 md:order-1">
            © 2026 PixelGrow. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-all group order-1 md:order-2"
          >
            <span className="text-sm font-medium font-inter">Back to top</span>
            <div className="p-2 bg-indigo-600 group-hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-lg shadow-indigo-100">
              <FaArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;