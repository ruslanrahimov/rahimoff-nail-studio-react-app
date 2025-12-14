import AppointmentButton from "../components/AppointmentButton.jsx";
import SecondaryLinkButton from "../components/SecondaryLinkButton.jsx";
const baseUrl = import.meta.env.BASE_URL;

export const heroData = [
        {
                title: "BÜYÜK İSTEK ÜZERİNE — ÖZEL DAVET FİYATI 700₺",
                text: (
                        <>
                                <span className="font-semibold">
                                        500₺ kampanyamız o kadar sevildi ki birçok müşterimiz uzatmamızı istedi.
                                </span>{" "}
                                Bu yüzden kampanyayı, yalnızca{" "}
                                <span className="font-semibold text-rose-500">
                                        davet ile katılabileceğiniz özel bir programa
                                </span>{" "}
                                dönüştürdük.
                                <br />
                                <br />
                                Katılım için <span className="font-semibold">promo kod gereklidir.</span> Promo kod almak
                                veya arkadaşınıza özel bir davet kodu oluşturmak için bize{" "}
                                <span className="font-semibold">WhatsApp’tan yazabilirsiniz.</span>
                                <br />
                                <br />
                                <span className="inline-block rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm max-md:text-xs">
                                        <span className="font-semibold">Protez Tırnak</span>
                                        <br />
                                        <span className="font-semibold text-rose-600 text-lg">1000₺ yerine → sadece 700₺</span>
                                </span>
                                <br />
                                <br />
                                <span className="text-xs text-slate-500 max-md:text-[11px]">
                                        Kampanya <span className="font-semibold text-rose-600">21 Aralık 2025</span> tarihine
                                        kadar geçerlidir.
                                </span>
                                <br />
                        </>
                ),
                image: `${baseUrl}happy-women.webp`,
                isReversed: false,
                buttons: (
                        <div className="flex w-full gap-4 max-md:flex-col">
                                <AppointmentButton
                                        url={`https://wa.me/905060552137?text=${encodeURIComponent(
                                                "Merhaba! Özel Davet Fiyatı için promo kod almak istiyorum.",
                                        )}`}
                                >
                                        Promo Kod Al
                                </AppointmentButton>
                                <SecondaryLinkButton path="/masters">Uzmanlarımızı Gör</SecondaryLinkButton>
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
