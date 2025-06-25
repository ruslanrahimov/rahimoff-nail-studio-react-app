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
            Rahimoff sadece bir güzellik stüdyosu değil, kendinize özen göstermenin ilhama dönüştüğü
            özel bir yer. Güzelliği yaşıyor, trendleri takip ediyor ve yalnızca dünya çapında
            kendini kanıtlamış markaları tercih ediyoruz. Burada şık bir iç mekan, sıcak bir
            atmosfer ve her ziyareti özel kılan kusursuz bir hizmet sizi bekliyor. Sizin her
            gelişiniz, bizim sizin hikayenizin bir parçası haline geldiğimizin kanıtıdır. Misyonumuz
            sadece hizmet sunmak değil, kendinizi her zaman rahat hissedeceğiniz “o özel yeri”
            bulmanıza yardımcı olmaktır. Güleryüzlü resepsiyon ekibimiz, lezzetli kahvemiz veya bir
            kadeh Prosecco, huzur veren müzik — her detay sizin konforunuz için özenle tasarlandı.
            Rahimoff, sizin benzersiz stiliniz ve özgüveniniz için var. Eminiz ki, bir kez bizi
            ziyaret ettiğinizde, başka bir yer aramak istemeyeceksiniz.
          </p>
          <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
        </div>
      </div>
    </div>
  );
};

export default About;
