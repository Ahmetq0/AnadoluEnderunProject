import React from 'react';
import OsmanGazi from "../image/Kurumlar/osmangazi.png";
import YavuzTürk from "../image/Kurumlar/Yavuztürk.png";
import ElvanKaracan from "../image/Kurumlar/elvankaracan.png";
import Yamanevler from "../image/Kurumlar/yamanevler.png";
import Ferhatlar from "../image/Kurumlar/ferhatlar.png";
import '../css/services.css'; // Önemli: özel CSS burada

const Services: React.FC = () => {
  const services = [
    { name: "Elvan Karacan Enderun", image: ElvanKaracan , width:"150px" },
    { name: "Ferhatlar Enderun", image: Ferhatlar , width: "150px" },
    { name: "Osmangazi Enderun", image: OsmanGazi , width:"380px" },
    { name: "Yamanevler Enderun Bilişim", image: Yamanevler, width : "300px" },
    { name: "Yavuztürk Enderun Bilişim", image: YavuzTürk, width : "300px" , color : "white"},
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-cyan-500 bg-opacity-20 text-cyan-500 rounded-full mb-4">
            Kurumlarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Anadolu Enderun Kurumlarımız
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Türkiye genelindeki tüm kurumlarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Ön Yüz */}
               <div className="flip-card-front bg-gray-800 flex items-center justify-center rounded-lg">
                  <img src={service.image} alt={service.name}  style={{width : `${service.width}` , color : `${service.color}`}}  className="w-30 h-auto img-fluid lg:w-50 sm:w-30 xs:w-20  w-40"/>
                </div>

                {/* Arka Yüz */}
                <div className="flip-card-back bg-cyan-700 text-white rounded-lg flex items-center justify-center p-4 text-center font-semibold">
                  {service.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
