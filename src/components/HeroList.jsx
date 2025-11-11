import Hero from "./Hero/Hero.jsx";
import AppointmentButton from "./AppointmentButton.jsx";
import SecondaryLinkButton from "./SecondaryLinkButton.jsx";

const HeroList = () => {
        const baseUrl = import.meta.env.BASE_URL;
        const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

        const heroData = [
                {
                        title: "YENİ UZMANLARIMIZLA TANIŞMA FIRSATI — HER ŞEY DAHİL 500₺",
                        text: "Rahimoff ailesine katılan yeni uzmanlarımızla tanışmanız için özel bir kampanya. Tüm işlemler, deneyimli eğitmenlerimizin gözetiminde, Rahimoff kalitesiyle yapılmaktadır. KAMPANYA SINIRLI BİR SÜRE İÇİN GEÇERLİDİR.",
                        image: `${baseUrl}new-masters.webp`,
                        isReversed: false,
                        buttons: (
                                <div className="flex gap-4 w-full max-md:flex-col">
                                        <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
                                </div>
                        ),
                },
                {
                        title: "TÜM İŞLEMLERDE - %10 İNDİRİM!",
                        text: "31/12/2025 zamana kadar nakit ödemelerde geçerlidir",
                        image: `${baseUrl}discount-cover.webp`,
                        isReversed: true,
                        buttons: (
                                <div className="flex gap-4 w-full max-md:flex-col">
                                        <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
                                        <SecondaryLinkButton path="/services">Fiyat Listesi</SecondaryLinkButton>
                                </div>
                        ),
                },
                {
                        title: "Rahimoff Ekibine Protez Tırnak Uzmanı Aranıyor",
                        text: `Isparta’nın merkezindeki modern ve şık salonumuza deneyimli veya yetenekli bir manikür ustası arıyoruz.
Rahat çalışma ortamı, sabit müşteri portföyü ve güler yüzlü bir ekip seni bekliyor!`,
                        image: `${baseUrl}hiring.webp`,
                        isReversed: false,
                        buttons: (
                                <div className="flex gap-4 w-full max-md:flex-col">
                                        <AppointmentButton url={wpChatLink}>Başvur</AppointmentButton>
                                        <SecondaryLinkButton path="/contacts">İletişim</SecondaryLinkButton>
                                </div>
                        ),
                },
                {
                        title: "RAHIMOFF - KENDİNİZDEN ÖDÜN VERMEYİN, EN İYİSİNİ SEÇİN",
                        text: `Rahimoff Nail Studio, tarzınızı ve kendinize olan güveninizi yansıtır. 
Bir kez denediğinizde, artık başka bir yer aramayacağınıza emin olabilirsiniz.`,
                        image: `${baseUrl}main.jpg`,
                        isReversed: true,
                        buttons: <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>,
                },
        ];

        return (
                <>
                        {heroData.map((hero, index) => (
                                <Hero
                                        key={index}
                                        title={hero.title}
                                        text={hero.text}
                                        image={hero.image}
                                        isReversed={hero.isReversed}
                                >
                                        {hero.buttons}
                                </Hero>
                        ))}
                </>
        );
};

export default HeroList;
