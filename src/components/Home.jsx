import heroImage from "../assets/hero.png";
import AppointmentButton from "./AppointmentButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Values from "./Values.jsx";

const Home = () => {
  return (
    <div className="home-container w-full pt-8 ">
      <section className="home__hero-container grid grid-cols-2 rounded-3xl mb-16 bg-chinese-200">
        <div
          className="hero-image bg-cover rounded-l-3xl"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="hero-content px-14 py-10">
          <h1 className="text-4xl mb-4 leading-snug">
            RAHIMOFF - KENDİNİZDEN ÖDÜN VERMEYİN, EN İYİSİNİ SEÇİN
          </h1>
          <p className="mb-8 text-platinum-800">
            Rahimoff Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez
            denediğinizde, artık başka bir yer aramayacağınıza emin olabilirsiniz.
          </p>
          <div className="flex">
            <AppointmentButton>Randevu Al</AppointmentButton>
          </div>
        </div>
      </section>
      <section className="about mb-16">
        <SectionHeader>Biz Kimiz</SectionHeader>
        <div className="about-content grid grid-cols-2 gap-6 ">
          <p className="text-platinum-800">
            Rahimoff Nail Studio - sadece bir manikür stüdyosu değil, kendinize özen göstermenin
            gerçek bir keyfe dönüştüğü özel bir mekândır. Güzelliğe önem veriyor, en son trendleri
            takip ediyor ve yalnızca en kaliteli malzemeleri ve en güvenilir teknikleri
            kullanıyoruz. Şık iç tasarımımız, sıcak atmosferimiz ve yüksek standartlardaki
            hizmetimizle her ziyaretinizi özel kılıyoruz.
          </p>
          <p className="text-platinum-800">
            Mükemmel bir manikürün sadece bakımlı tırnaklardan ibaret olmadığını biliyoruz; bu, aynı
            zamanda kendine güvenin bir ifadesidir. Bu yüzden misyonumuz, tekrar tekrar gelmek
            isteyeceğiniz bir yer yaratmak. Deneyimli uzmanlarımız, tam sterilizasyon güvencesi, mis
            gibi kahve kokusu ve rahatlatıcı müzik — her ayrıntı konforunuz için düşünüldü. Rahimoff
            Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. Bir kez denediğinizde,
            artık başka bir yer aramayacağınıza emin olabilirsiniz.
          </p>
        </div>
      </section>
      <section className="goals">
        <SectionHeader>Diğerlerimiz</SectionHeader>
        <Values />
      </section>
      <section className="brands">
        <SectionHeader>Çalıştığımız Markalar</SectionHeader>
      </section>
    </div>
  );
};

export default Home;
