import { useState } from "react";
import { tabContent } from "../data/services.js";

const Services = () => {
  const [activeTab, setActiveTab] = useState("MANICURE");

  return (
    <div className="services-wrapper">
      <h2 className="content-header font-raleway font-light text-lg text-charcoal-500 pt-8 uppercase tracking-widest mb-4">
        FİYAT LİSTESİ
      </h2>
      <div className="tabs flex gap-2 mb-4">
        {Object.keys(tabContent).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-1 border border-platinum-900 cursor-pointer ${
              key === activeTab
                ? "bg-platinum-900 text-platinum-100"
                : "bg-platinum-100 text-platinum-900"
            }`}
          >
            {tabContent[key].title}
          </button>
        ))}
      </div>
      <div
        className="service-image-container my-10 h-96 rounded-xl bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${tabContent[activeTab].image})` }}
      ></div>
      <ul className="service-list bg-chinese-500 my-4 p-8 rounded-xl">
        <h2 className="text-xl">{tabContent[activeTab].title}</h2>
        {tabContent[activeTab].services.map((service, index) => {
          return (
            <li key={index} className="flex bg-chinese-300 my-4 p-5 rounded-xl">
              <div className="left w-full">
                <h3 className="text-lg">{service.name}</h3>
              </div>
              <div className="right flex w-full justify-end">
                <p className="price block">Uzman: {service.price} &#8378;</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
