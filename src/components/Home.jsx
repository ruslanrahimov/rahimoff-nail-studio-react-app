import AppointmentButton from "./AppointmentButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Values from "./Values.jsx";
import Brands from "./Brands/Brands.jsx";
import { faqData } from "../data/faq.js";
import { useState } from "react";
import FAQItem from "./FAQItem/FAQItem.jsx";
import PresentationSlider from "./PresentationSlider/PresentationSlider.jsx";
import { portfolioSliderData } from "../data/portfolioSliderData.js";

const baseUrl = import.meta.env.BASE_URL;
const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

const Home = () => {
  const [currentFAQData, setCurrentFAQData] = useState(faqData);

  function faqStateUpdateHandler(id) {
    setCurrentFAQData((prevState) =>
      prevState.map((faq) => {
        if (id === faq.id) {
          const nextFaqState = faq.state === "closed" ? "open" : "closed";
          return { ...faq, state: nextFaqState };
        }
        return faq;
      }),
    );
  }

  const sliderSettings = {
    autoplay: true,
    slidesToShow: 6,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="home-container mt-15 w-11/12 mx-auto pt-8 max-md:w-full max-md:pt-2 ">
      <section className="home__hero-container grid grid-cols-2 rounded-3xl mb-16 bg-chinese-200 max-lg:bg-transparent max-lg:grid-cols-1 max-lg:grid-rows-2">
        <div
          className="hero-image h-full bg-cover bg-center min-lg:rounded-l-3xl"
          style={{ backgroundImage: `url(${baseUrl}main.jpg)` }}
        ></div>
        <div className="hero-content px-14 py-10 max-md:p-8">
          <h1 className="text-4xl mb-4 leading-snug max-lg:text-xl max-lg:font-light max-lg:text-center">
            RAHIMOFF - KENDİNİZDEN ÖDÜN VERMEYİN, EN İYİSİNİ SEÇİN
          </h1>
          <p className="mb-8 text-platinum-800 max-lg:text-[14px] max-lg:text-center">
            Rahimoff Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez
            denediğinizde, artık başka bir yer aramayacağınıza emin olabilirsiniz.
          </p>
          <div className="flex">
            <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
          </div>
        </div>
      </section>
      <section className="about mb-16 max-md:px-2">
        <SectionHeader>Biz Kimiz</SectionHeader>
        <div className="about-content grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-lg:grid-rows-subgrid max-lg:gap-4">
          <p className="text-platinum-800 max-lg:text-center">
            Rahimoff Nail Studio, manikür ve pedikür hizmetlerini rahat ve temiz bir ortamda sunan
            bir salondur. Amacımız, misafirlerimize kaliteli hizmeti uygun fiyatlarla sunarken
            kendilerini iyi hissetmelerini sağlamaktır. Güncel teknikleri takip ediyor, hijyene
            büyük önem veriyor ve her işlemde steril ekipman kullanıyoruz. Deneyimli ekibimiz, sade
            ve huzurlu ortamımızda sizi en iyi şekilde ağırlamak için burada.
          </p>
          <p className="text-platinum-800 max-lg:text-center">
            İster tırnak bakımı, ister kalıcı oje veya protez tırnak olsun — her detay özenle
            düşünülür. Kahvenizi yudumlarken kendinize ayırdığınız bu zamanı keyifle geçirmenizi
            istiyoruz. Rahimoff, günlük hayatın koşturmacasında küçük ama değerli bir mola yeridir.
          </p>
        </div>
      </section>
      <section className="salon">
        <PresentationSlider data={portfolioSliderData} settings={sliderSettings} />
      </section>
      <section className="goals max-md:px-2">
        <SectionHeader>Diğerlerimiz</SectionHeader>
        <Values />
      </section>
      <section className="brands max-md:px-2">
        <SectionHeader>Çalıştığımız Markalar</SectionHeader>
        <Brands />
      </section>
      <section className="faq max-md:px-2 ">
        <SectionHeader>Sıkça Sorulan Sorular </SectionHeader>
        <ul className="faq-list">
          {currentFAQData.map((data) => (
            <FAQItem key={data.id} data={data} faqStateUpdateHandler={faqStateUpdateHandler} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
