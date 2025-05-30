import AppointmentButton from "./AppointmentButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Values from "./Values.jsx";
import Brands from "./Brands/Brands.jsx";
import { faqData } from "../data/faq.js";
import { useState } from "react";
import FAQItem from "./FAQItem/FAQItem.jsx";
import PresentationSlider from "./PresentationSlider/PresentationSlider.jsx";
import { aboutUsSliderData } from "../data/aboutUsSliderData.js";

const baseUrl = import.meta.env.BASE_URL;

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
    <div className="home-container mt-15 w-11/12 mx-auto pt-8 max-md:w-full ">
      <section className="home__hero-container grid grid-cols-2 rounded-3xl mb-16 bg-chinese-200 max-lg:bg-transparent max-lg:grid-cols-1 max-lg:grid-rows-2">
        <div
          className="hero-image h-full bg-cover bg-center min-lg:rounded-l-3xl"
          style={{ backgroundImage: `url(${baseUrl}main.jpg)` }}
        ></div>
        <div className="hero-content px-14 py-10">
          <h1 className="text-4xl mb-4 leading-snug max-lg:text-xl max-lg:font-light max-lg:text-center">
            RAHIMOFF - KENDİNİZDEN ÖDÜN VERMEYİN, EN İYİSİNİ SEÇİN
          </h1>
          <p className="mb-8 text-platinum-800 max-lg:text-[14px] max-lg:text-center">
            Rahimoff Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez
            denediğinizde, artık başka bir yer aramayacağınıza emin olabilirsiniz.
          </p>
          <div className="flex">
            <AppointmentButton>Randevu Al</AppointmentButton>
          </div>
        </div>
      </section>
      <section className="about mb-16 max-md:px-2">
        <SectionHeader>Biz Kimiz</SectionHeader>
        <div className="about-content grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-lg:grid-rows-2 max-lg:gap-1">
          <p className="text-platinum-800 max-lg:text-center">
            Rahimoff Nail Studio - sadece bir manikür stüdyosu değil, kendinize özen göstermenin
            gerçek bir keyfe dönüştüğü özel bir mekândır. Güzelliğe önem veriyor, en son trendleri
            takip ediyor ve yalnızca en kaliteli malzemeleri ve en güvenilir teknikleri
            kullanıyoruz. Şık iç tasarımımız, sıcak atmosferimiz ve yüksek standartlardaki
            hizmetimizle her ziyaretinizi özel kılıyoruz.
          </p>
          <p className="text-platinum-800 max-lg:text-center">
            Mükemmel bir manikürün sadece bakımlı tırnaklardan ibaret olmadığını biliyoruz; bu, aynı
            zamanda kendine güvenin bir ifadesidir. Bu yüzden misyonumuz, tekrar tekrar gelmek
            isteyeceğiniz bir yer yaratmak. Deneyimli uzmanlarımız, tam sterilizasyon güvencesi, mis
            gibi kahve kokusu ve rahatlatıcı müzik — her ayrıntı konforunuz için düşünüldü. Rahimoff
            Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez denediğinizde,
            artık başka bir yer aramayacağınıza emin olabilirsiniz.
          </p>
        </div>
      </section>
      <section className="salon">
        <PresentationSlider data={aboutUsSliderData} settings={sliderSettings} />
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
