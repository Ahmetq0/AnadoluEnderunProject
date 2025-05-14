import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from "../image/logo.jpeg"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className='ms-5' src={Logo} alt="" width={100}/>
            <span className="ml-2 text-xl font-bold text-white"> </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Anasayfa', id: 'hero' },
              { name: 'Kurumlarımız', id: 'services' },
              { name: 'Hakkımızda', id: 'about' },
              { name: 'İletişim', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
              { name: 'Anasayfa', id: 'hero' },
              { name: 'Kurumlarımız', id: 'services' },
              { name: 'Hakkımızda', id: 'about' },
              { name: 'İletişim', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-cyan-500 transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;