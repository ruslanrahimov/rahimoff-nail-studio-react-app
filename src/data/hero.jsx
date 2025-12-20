import SecondaryLinkButton from "../components/SecondaryLinkButton.jsx";
import AppointmentButton from "../components/AppointmentButton.jsx";
const baseUrl = import.meta.env.BASE_URL;
const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

export const heroData = [
  {
    title: "Yeni Yılınız Kutlu Olsun!",
    text: "Bu yıl bizi tercih eden, gelen, gülümseyen ve bakımını bize emanet eden herkese çok teşekkür ederiz! Yeni yıl öncesi kendinize zaman ayırmayı unutmayın — randevular hızla doluyor.",
    image: `${baseUrl}new-year.webp`,
    isReversed: false,
    buttons: (
      <div className="flex gap-4 w-full max-md:flex-col">
        <AppointmentButton url={wpChatLink}>Randevu Al</AppointmentButton>
        <SecondaryLinkButton path="/masters">
          Uzman seç
        </SecondaryLinkButton>
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
        <SecondaryLinkButton path="/masters">Uzmanını Seç</SecondaryLinkButton>
      </div>
    ),
  },
];
