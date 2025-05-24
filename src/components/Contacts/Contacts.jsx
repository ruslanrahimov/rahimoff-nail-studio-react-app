import { aboutUsSliderData } from "../../data/aboutUsSliderData.js";
import PresentationSlider from "../PresentationSlider/PresentationSlider.jsx";

const baseUrl = import.meta.env.BASE_URL;

const Contacts = () => {
  return (
    <>
      <div className="contacts grid grid-cols-2 w-1/2 m-auto py-20 gap-12">
        <div
          style={{ backgroundImage: `url(${baseUrl}about.webp` }}
          className="image-cover rounded-xl h-110 bg-center bg-cover bg-no-repeat"
        ></div>
        <div className="info-container w-full flex flex-col justify-center">
          <div className="info text-charcoal-500">
            <p className="cd text-3xl">101 cd. İstiklal mah.</p>
            <p className="apt text-xl mt-4">Valide Apartmanı NO:90, Kat 2</p>
            <a
              href="tel:+905060552137"
              className="phone text-xl block mt-1.5 hover:text-charcoal-400"
            >
              0 (506) 055 21 37
            </a>
            <p className="hours text-xl mt-1.5">Çalışma Saatleri Pzt-Cmt: 10:00-20:00</p>
          </div>
          <div className="buttons flex gap-4 mt-6">
            <a
              href="#"
              className="appointment block w-full text-center bg-charcoal-800 text-white px-4 py-2 hover:bg-platinum-700 hover:text-charcoal-800 transition cursor-pointer"
            >
              Randevu al
            </a>
            <a
              href="#"
              className="map block w-full text-center bg-platinum-700 text-charcoal-800 px-4 py-2 hover:bg-charcoal-800 hover:text-platinum-200 transition cursor-pointer"
            >
              Konum
            </a>
          </div>
        </div>
      </div>
      <PresentationSlider data={aboutUsSliderData} />
    </>
  );
};

export default Contacts;
