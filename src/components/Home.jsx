import AppointmentButton from "./AppointmentButton.jsx";
import SecondaryLinkButton from "./SecondaryLinkButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Values from "./Values.jsx";
import Brands from "./Brands/Brands.jsx";
import { faqData } from "../data/faq.js";
import { useState } from "react";
import FAQItem from "./FAQItem/FAQItem.jsx";
import PresentationSlider from "./PresentationSlider/PresentationSlider.jsx";
import { portfolioSliderData } from "../data/portfolioSliderData.js";
import Hero from "./Hero/Hero.jsx";

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
      <section className="about mb-16 max-md:px-2">
        <Hero
          title="TÜM İŞLEMLERDE - %10 İNDİRİM!"
          text="01/09/2025 zamana kadar nakit ödemelerde geçerlidir"
          image={`${baseUrl}discount-cover.webp`}
          isReversed={true}
        >
          <div className="flex gap-4 w-full max-md:flex-col">
            <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
            <SecondaryLinkButton path="/services">Fiyat Listesi</SecondaryLinkButton>
          </div>
        </Hero>
        <Hero
          title="Rahimoff Ekibine Protez Tırnak Uzmanı Aranıyor"
          text="Isparta’nın merkezindeki modern ve şık salonumuza deneyimli veya yetenekli bir manikür ustası arıyoruz.
Rahat çalışma ortamı, sabit müşteri portföyü ve güler yüzlü bir ekip seni bekliyor!"
          image={`${baseUrl}hiring.webp`}
          isReversed={false}
        >
          <div className="flex gap-4 w-full max-md:flex-col">
            <AppointmentButton url={wpChatLink}>Başvur</AppointmentButton>
            <SecondaryLinkButton path="/contacts">İletişim</SecondaryLinkButton>
          </div>
        </Hero>
        <Hero
          title="RAHIMOFF - KENDİNİZDEN ÖDÜN VERMEYİN, EN İYİSİNİ SEÇİN"
          text="Rahimoff Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez
      denediğinizde, artık başka bir yer aramayacağınıza emin olabilirsiniz."
          image={`${baseUrl}main.jpg`}
          isReversed={true}
        >
          <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
        </Hero>
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
