import AppointmentButton from "./AppointmentButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
const baseUrl = import.meta.env.BASE_URL;
const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

const About = () => {
  return (
    <div className="about mt-15 w-full mx-auto py-11 max-md:mt-6 md:w-1/3">
      <SectionHeader>Biz Kimiz?</SectionHeader>
      <div className="about-content w-full flex flex-col gap-8 px-4 md:px-0">
        <div
          style={{ backgroundImage: `url(${baseUrl}about.jpg` }}
          className="cover w-full mx-auto my-0 h-100 rounded-2xl bg-center bg-cover bg-no-repeat"
        ></div>
        <div className="text-container w-full mx-auto">
          <p className="block mb-8 text-platinum-900 text-sm">
            Rahimoff Nail Studio, manikür ve pedikür hizmetlerini rahat ve temiz bir ortamda sunan
            bir salondur. Amacımız, misafirlerimize kaliteli hizmeti uygun fiyatlarla sunarken
            kendilerini iyi hissetmelerini sağlamaktır. Güncel teknikleri takip ediyor, hijyene
            büyük önem veriyor ve her işlemde steril ekipman kullanıyoruz. Deneyimli ekibimiz, sade
            ve huzurlu ortamımızda sizi en iyi şekilde ağırlamak için burada. İster tırnak bakımı,
            ister kalıcı oje veya protez tırnak olsun — her detay özenle düşünülür. Kahvenizi
            yudumlarken kendinize ayırdığınız bu zamanı keyifle geçirmenizi istiyoruz. Rahimoff,
            günlük hayatın koşturmacasında küçük ama değerli bir mola yeridir.
          </p>
          <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
        </div>
      </div>
    </div>
  );
};

export default About;
