import { useState } from "react";
import { tabContent } from "../../data/services.js";
import { NavLink } from "react-router";

const Services = () => {
        const [activeTab, setActiveTab] = useState("MANICURE");

        return (
                <div className="services-wrapper mt-15 w-11/12 mx-auto">
                        <h2 className="content-header font-raleway font-light text-lg text-charcoal-500 pt-8 uppercase tracking-widest mb-4 max-md:pt-4">
                                Hizmetlerimiz
                        </h2>
                        <div className="tabs flex gap-2 mb-4">
                                {Object.keys(tabContent).map((key) => (
                                        <button
                                                key={key}
                                                onClick={() => setActiveTab(key)}
                                                className={`px-4 py-1 border border-platinum-900 cursor-pointer ${key === activeTab
                                                        ? "bg-platinum-900 text-platinum-100"
                                                        : "bg-platinum-100 text-platinum-900"
                                                        } max-md:px-2 max-md:text-sm`}
                                        >
                                                {tabContent[key].title}
                                        </button>
                                ))}
                        </div>
                        <div
                                className="service-image-container my-10 h-96 rounded-xl bg-no-repeat bg-cover bg-center"
                                style={{ backgroundImage: `url(${tabContent[activeTab].image})` }}
                        ></div>
                        <ul className="service-list bg-chinese-500 my-4 p-8 rounded-xl max-md:p-3">
                                <h2 className="text-lg">{tabContent[activeTab].title}</h2>
                                {tabContent[activeTab].services.map((service, index) => {
                                        return (
                                                <li key={index} className="flex bg-chinese-300 my-4 p-5 rounded-xl">
                                                        <div className="left w-full max-md:pr-12">
                                                                <h3 className="text-sm max-md:pb-2">{service.name}</h3>
                                                                <p className="description text-xs">{service.description}</p>
                                                        </div>
                                                        <div className="right flex w-full justify-end max-md:flex-1">
                                                                <p className="price block md:text-sm">{service.price}</p>
                                                        </div>
                                                </li>
                                        );
                                })}
                        </ul>

                        <div className="mt-4 text-sm text-charcoal-500 mb-8">

                                <p>
                                        Fiyatlar uzmana göre değişiklik gösterebilir. Detaylı bilgi almak için{" "}
                                        <NavLink
                                                to="/masters"
                                                className="underline text-platinum-900 hover:text-charcoal-700"
                                        >
                                                lütfen uzman seçiniz
                                        </NavLink>
                                        .
                                </p>

                        </div>
                </div>
        );
};

export default Services;
