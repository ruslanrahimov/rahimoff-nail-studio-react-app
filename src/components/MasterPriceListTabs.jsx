import { useState } from "react";
import { tabContent } from "../data/services";
import { getMasterServicesByCategory } from "../utils/getMasterServicesByCategory";
import "./MasterPriceListTabs.css";

const MasterPriceListTabs = ({ masterId }) => {
  const categories = getMasterServicesByCategory(masterId);
  const keys = Object.keys(categories);

  const [active, setActive] = useState(keys[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="price-tabs-section">
      <h2 className="price-tabs-title">Hizmetler ve Fiyatlar</h2>

      {/* MOBILE: CUSTOM DROPDOWN */}
      <div className="price-tabs-dropdown md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="price-tabs-dropdown-button"
        >
          <span>{tabContent[active].title}</span>
          <span className={`price-tabs-dropdown-arrow ${isOpen ? "open" : ""}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9 L12 15 L18 9" />
            </svg>
          </span>
        </button>

        {/* DROPDOWN MENU */}
        {isOpen && (
          <div className="price-tabs-dropdown-menu">
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActive(key);
                  setIsOpen(false);
                }}
                className={`price-tabs-dropdown-item ${active === key ? "active" : ""}`}
              >
                {tabContent[key].title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP: TABS */}
      <div className="price-tabs-list hidden md:flex">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`price-tab-button ${active === key ? "active" : ""}`}
          >
            {tabContent[key].title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="price-list-content">
        <div className="price-list-animate" key={active}>
          {categories[active].map((service) => (
            <div key={service.id} className="price-item">
              {/* Service Info */}
              <div className="price-item-info">
                <h3 className="price-item-name">{service.name}</h3>
                <p className="price-item-description">{service.description}</p>
              </div>

              {/* Price */}
              <div className="price-item-price">
                {service.price === null ? "Değerlendirme Sonrası" : `${service.price} TL`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterPriceListTabs;
