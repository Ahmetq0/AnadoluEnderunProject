import React from 'react';
import { CheckCircle } from 'lucide-react';
import Aboutresim from "../image/about.jpg"

const About: React.FC = () => {
  const features = [
    "Nitelikli eğitim verir",
    "Potansiyel odaklıdır",
    "Liyakat esaslıdır",
    "Teknolojiyle bütünleşmiştir.",
    "Maneviyat Temelli Gelişim",
    "Ahlak ve Sorumluluk Bilinci"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={Aboutresim}
              alt="About Cyber-Chip" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-cyan-500 bg-opacity-20 text-cyan-500 rounded-full mb-4">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
Anadolu Enderun Ne Anlatır?         </h2>
            <p className="text-gray-300 mb-6">
            Anadolu Enderun, geleneksel Enderun mektebi ruhunu günümüz dünyasına taşır. Türkiye'nin dört bir yanındaki gençleri keşfederek onların potansiyelini ortaya çıkaran bir eğitim ve gelişim kurumudur.
            </p>
            <p className="text-gray-300 mb-8">Bu platformda her birey değerlidir. Her birey lider adayıdır.


            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;