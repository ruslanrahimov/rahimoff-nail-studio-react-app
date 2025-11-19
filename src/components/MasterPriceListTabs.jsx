import { useState } from "react";
import { tabContent } from "../data/services";
import { getMasterServicesByCategory } from "../utils/getMasterServicesByCategory";

const MasterPriceListTabs = ({ masterId }) => {
        const categories = getMasterServicesByCategory(masterId);
        const keys = Object.keys(categories);

        const [active, setActive] = useState(keys[0]);

        return (
                <div className="my-12 px-2">

                        <h2 className="text-xl font-bold mb-4 text-charcoal-900">
                                Hizmetler ve Fiyatlar
                        </h2>

                        {/* TABS */}
                        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
                                {keys.map((key) => (
                                        <button
                                                key={key}
                                                onClick={() => setActive(key)}
                                                className={`
              px-4 py-2 rounded-full whitespace-nowrap transition-all border 
              ${active === key
                                                                ? "bg-charcoal-900 text-white border-charcoal-900"
                                                                : "bg-white text-charcoal-900 border-charcoal-300"
                                                        }
            `}
                                        >
                                                {tabContent[key].title}
                                        </button>
                                ))}
                        </div>

                        {/* CONTENT */}
                        <div className="bg-chinese-500 p-4 rounded-xl transition-all duration-300">

                                <div className="animate-fadeIn">
                                        {categories[active].map((service) => (
                                                <div
                                                        key={service.id}
                                                        className="
                flex justify-between items-start 
                bg-chinese-300 p-4 rounded-xl mb-4 
                border border-chinese-400 
                transition
                hover:bg-chinese-200
              "
                                                >
                                                        {/* LEFT */}
                                                        <div className="w-3/4 pr-4">
                                                                <h3 className="font-semibold text-sm text-charcoal-900">
                                                                        {service.name}
                                                                </h3>
                                                                <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                                                                        {service.description}
                                                                </p>
                                                        </div>

                                                        {/* PRICE */}
                                                        <div className="w-1/4 text-right">
                                                                <p className="font-bold text-sm text-charcoal-900">
                                                                        {service.price === null
                                                                                ? "Değerlendirme Sonrası"
                                                                                : `${service.price} TL`}
                                                                </p>
                                                        </div>
                                                </div>
                                        ))}
                                </div>

                        </div>
                </div>
        );
};

export default MasterPriceListTabs;

