import React from 'react';
import {User , BookMarked , GraduationCap} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-12 md:py-32 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-fixed bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block bg-gray-800 bg-opacity-70 p-2 rounded-lg mb-4">
              <span className="text-cyan-500 font-medium">Geleceğini Şekillendir!
</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enderun Lisesi’ne 
 <br />
              <span className="text-cyan-500">Başvurunu Hemen Yap</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg md:pr-12">
Nitelikli akademik kadromuz, modern eğitim anlayışımız ve güçlü sosyal imkanlarımızla geleceğin liderlerini yetiştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Başvuru Yap
              </button>
             
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Cybersecurity concept" 
              className="rounded-lg shadow-xl max-w-full h-auto md:max-w-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <User className="h-10 w-10 text-cyan-500" />,
              title: "Uzman Kadro",
              description: "Alanında deneyimli öğretmenlerle kaliteli eğitim."
            },
            {
              icon: <BookMarked className="h-10 w-10 text-cyan-500" />,
              title: "Zengin Müfredat",
              description: "MEB müfredatına ek olarak yabancı dil, kodlama ve kişisel gelişim."
            },
            {
              icon: <GraduationCap className="h-10 w-10 text-cyan-500" />,
              title: "Uygulamalı Eğitim",
              description: "STEM, robotik, yazılım ve laboratuvar imkanlarıyla aktif öğrenme."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-cyan-900/20 transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;