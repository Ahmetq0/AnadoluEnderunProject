import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-cyan-500 bg-opacity-20 text-cyan-500 rounded-full mb-4">
Bize Ulaşın          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">İletişime Geçin</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
Hizmetlerimiz hakkında sorularınız mı var? Bize ulaşın, ekibimiz en kısa sürede size geri dönecektir.          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Konumumuz</h4>
                    <p className="text-gray-400">Yukarı Dudullu, Galata Sk. No:8, 34775 Ümraniye/İstanbul</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Telefon Numarası</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-400">info@anadoluenderun.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Çalışma Saatleri</h4>
                    <p className="text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p className="text-gray-400">Destek: 7/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8">
               <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.343780287288!2d29.15744387598568!3d41.01773417134917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfacee9b6cfb%3A0x2884640b9635bab3!2sDudullu%20Talebe%20Yurdu!5e0!3m2!1str!2str!4v1747069687063!5m2!1str!2str"
        width="100%"
        height="350px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kurum Haritası"
      ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
