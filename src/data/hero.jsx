import SecondaryLinkButton from "../components/SecondaryLinkButton.jsx";
import AppointmentButton from "../components/AppointmentButton.jsx";
const baseUrl = import.meta.env.BASE_URL;
const wpChatLink = import.meta.env.VITE_WP_CHAT_LINK;

export const heroData = [
        {
                title: "TÜM İŞLEMLERDE - %10 İNDİRİM!",
                text: "01/03/2026 zamana kadar nakit ödemelerde geçerlidir",
                image: `${baseUrl}discount-cover.webp`,
                isReversed: true,
                buttons: (
                        <div className="flex gap-4 w-full max-md:flex-col">
                                <SecondaryLinkButton path="/masters">Uzmanını Seç</SecondaryLinkButton>
                        </div>
                ),
        },
];
