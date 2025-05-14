import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="ml-2 text-xl font-bold text-white">Cyber-Chip</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of cybersecurity solutions for businesses of all sizes.
              Protecting your digital assets is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '#hero' },
                { name: 'About Us', link: '#about' },
                { name: 'Services', link: '#services' },
                { name: 'Features', link: '#features' },
                { name: 'Team', link: '#team' },
                { name: 'Contact', link: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Threat Protection', link: '#' },
                { name: 'Encryption Services', link: '#' },
                { name: 'Cloud Security', link: '#' },
                { name: 'Security Audits', link: '#' },
                { name: 'Identity Management', link: '#' },
                { name: 'Incident Response', link: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2 rounded-r-lg transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              We respect your privacy. Your information is safe with us.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cyber-Chip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;