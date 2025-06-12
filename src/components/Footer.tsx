import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-4" style={{ backgroundColor: '#1B2B4A', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src="https://cdn.shopify.com/s/files/1/0562/5505/3986/files/Mindsight_Landing_Page_Photo.png?v=1749007013"
              alt="Mindsight Logo"
              className="h-12 w-auto"
            />
            <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>
              Helping people build better habits and reclaim their focus with innovative 
              solutions for digital wellness.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Support</h3>
            <div className="space-y-2" style={{ color: '#FFFFFF' }}>
              <div>
                <a href="https://mindsightnow.com/pages/faq" target="_blank" rel="noopener noreferrer" className="hover:underline">FAQ</a>
              </div>
              <div>
                <a href="https://mindsightnow.com/pages/support" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact Us</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#FFFFFF' }}>Contact</h3>
            <div className="space-y-3" style={{ color: '#FFFFFF' }}>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@mindsightnow.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>10 Kilmer Rd, Edison, NJ 08817</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: '#3A4E72' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm" style={{ color: '#FFFFFF' }}>
              © 2025 Mindsight. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm" style={{ color: '#FFFFFF' }}>
              <a href="https://mindsightnow.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
              <a href="https://mindsightnow.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Service</a>
              <a href="https://mindsightnow.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
