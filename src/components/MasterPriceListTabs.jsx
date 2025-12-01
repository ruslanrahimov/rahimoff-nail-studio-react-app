import { useState } from "react";
import { tabContent } from "../data/services";
import { getMasterServicesByCategory } from "../utils/getMasterServicesByCategory";

const MasterPriceListTabs = ({ masterId }) => {
  const categories = getMasterServicesByCategory(masterId);
  const keys = Object.keys(categories);

  const [active, setActive] = useState(keys[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-12 px-2">
      <h2 className="text-xl font-bold mb-4 text-charcoal-900">Hizmetler ve Fiyatlar</h2>

      {/* MOBILE: CUSTOM DROPDOWN */}
      <div className="md:hidden mb-6 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
      w-full p-3 px-4
      bg-white border border-charcoal-300
      rounded-xl text-charcoal-900 text-sm
      flex items-center justify-between
      shadow-sm active:scale-[0.98] transition
    "
        >
          <span>{tabContent[active].title}</span>

          {/* Arrow */}
          <span
            className={`
        transition-transform duration-200 
        ${isOpen ? "rotate-180" : "rotate-0"}
        text-charcoal-700
      `}
          >
            ▼
          </span>
        </button>

        {/* DROPDOWN LIST */}
        {isOpen && (
          <div
            className="
        absolute z-20 left-0 right-0 mt-2 
        bg-white border border-charcoal-300 rounded-xl 
        shadow-xl overflow-hidden animate-fadeIn
      "
          >
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActive(key);
                  setIsOpen(false);
                }}
                className={`
            w-full text-left px-4 py-3 text-sm
            ${
              active === key
                ? "bg-charcoal-900 text-white"
                : "text-charcoal-900 hover:bg-charcoal-100"
            }
          `}
              >
                {tabContent[key].title}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* DESKTOP: TABS */}
      <div className="hidden md:flex gap-2 mb-6">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`
        px-4 py-2 rounded-full whitespace-nowrap transition-all border 
        ${
          active === key
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
                <h3 className="font-semibold text-sm text-charcoal-900">{service.name}</h3>
                <p className="text-xs text-charcoal-700 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* PRICE */}
              <div className="w-1/4 text-right">
                <p className="font-bold text-sm text-charcoal-900">
                  {service.price === null ? "Değerlendirme Sonrası" : `${service.price} TL`}
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
