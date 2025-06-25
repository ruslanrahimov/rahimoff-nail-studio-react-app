import { aboutUsSliderData } from "../../data/aboutUsSliderData.js";
import PresentationSlider from "../PresentationSlider/PresentationSlider.jsx";
import "./Contacts.css";
const baseUrl = import.meta.env.BASE_URL;

const Contacts = () => {
  const sliderSettings = {
    autoplay: true,
    slidesToShow: 7,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="max-md:flex max-md:flex-col-reverse max-md:mt-20">
      <div className="contacts grid grid-cols-2 w-1/2 m-auto py-20 gap-12 max-md:grid-cols-1 max-md:w-11/12 max-md:pt-4 pb-8">
        <div
          style={{ backgroundImage: `url(${baseUrl}value-1.webp` }}
          className="image-cover rounded-xl h-110 bg-center bg-cover bg-no-repeat"
        ></div>
        <div className="info-container w-full flex flex-col justify-center">
          <div className="info text-charcoal-500">
            <p className="cd text-3xl">İstiklal mah. 101 cd.</p>
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
      <div className="contacts-slider">
        <PresentationSlider data={aboutUsSliderData} settings={sliderSettings} />
      </div>
    </div>
  );
};

export default Contacts;
