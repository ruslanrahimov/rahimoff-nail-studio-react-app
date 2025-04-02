import AppointmentButton from "./AppointmentButton.jsx";
import SectionHeader from "./SectionHeader.jsx";
const baseUrl = import.meta.env.BASE_URL;

const About = () => {
  return (
    <div className="about py-11">
      <SectionHeader>Biz kimiz?</SectionHeader>
      <div style={{backgroundImage: `url(${baseUrl}about.jpg`}} className="cover w-1/2 mx-auto my-0 h-100 rounded-2xl bg-center bg-cover bg-no-repeat"></div>
      <div className="text-container w-1/2 mx-auto my-10">
        <p className="text-center">
          Rahimoff sadece bir güzellik stüdyosu değil, kendinize özen göstermenin ilhama dönüştüğü
          özel bir yer. Güzelliği yaşıyor, trendleri takip ediyor ve yalnızca dünya çapında kendini
          kanıtlamış markaları tercih ediyoruz. Burada şık bir iç mekan, sıcak bir atmosfer ve her
          ziyareti özel kılan kusursuz bir hizmet sizi bekliyor. Sizin her gelişiniz, bizim sizin
          hikayenizin bir parçası haline geldiğimizin kanıtıdır. Misyonumuz sadece hizmet sunmak
          değil, kendinizi her zaman rahat hissedeceğiniz “o özel yeri” bulmanıza yardımcı olmaktır.
          Güleryüzlü resepsiyon ekibimiz, lezzetli kahvemiz veya bir kadeh Prosecco, huzur veren
          müzik — her detay sizin konforunuz için özenle tasarlandı. Rahimoff, sizin benzersiz
          stiliniz ve özgüveniniz için var. Eminiz ki, bir kez bizi ziyaret ettiğinizde, başka bir
          yer aramak istemeyeceksiniz.
        </p>
      </div>
      <div className="interface flex justify-center">
        <AppointmentButton url="#">Randevu Al</AppointmentButton>
      </div>
    </div>
  );
};

export default About;
