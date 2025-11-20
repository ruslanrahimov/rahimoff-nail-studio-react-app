const PrivacyPolicy = () => {
  return (
    <div className="pers-data font-raleway max-w-200 mt-30 mx-auto max-md:px-2">
      <h1 className="text-3xl uppercase font-medium mb-6">
        Gizlilik ve Kişisel Verilerin Korunması Politikası
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Genel Hükümler</h2>
        <p>
          Bu Gizlilik Politikası, Türkiye’de bulunan Rahimoff Güzellik Salonu’nun (bundan sonra
          "Salon" olarak anılacaktır) 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca
          müşteri kişisel verilerinin işlenmesi ve korunmasına ilişkin esasları belirlemektedir.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Veri Sorumlusu</h2>
        <p>Kişisel verilerin veri sorumlusu Türkiye’de kayıtlı Rahimoff Güzellik Salonu’dur.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Salon hizmetlerinin sunulması, randevu alınması, danışmanlık verilmesi ve işlemlerin
            gerçekleştirilmesi.
          </li>
          <li>
            Müşteri ilişkilerinin yönetimi, yeni hizmetler, kampanyalar ve özel teklifler hakkında
            bilgilendirme.
          </li>
          <li>
            Türkiye mevzuatına uygun şekilde muhasebe ve vergi yükümlülüklerinin yerine getirilmesi.
          </li>
          <li>Güvenliğin sağlanması ve dolandırıcılıkların önlenmesi.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. İşlenen Kişisel Veriler</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ad, soyad.</li>
          <li>İletişim bilgileri (telefon numarası, e-posta adresi).</li>
          <li>Önceki ziyaretler ve müşteri tercihleri hakkında bilgiler.</li>
          <li>Ödeme bilgileri (hizmetin nakitsiz ödenmesi durumunda).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Kişisel Veri İşleme Hukuki Sebepleri</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Veri sahibinin açık rızası.</li>
          <li>Salon ile müşteri arasında kurulan sözleşmenin ifası için zorunlu olması.</li>
          <li>
            Türkiye Cumhuriyeti yasaları uyarınca Salon’un yasal yükümlülüklerini yerine getirmesi.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Veri Sahiplerinin Hakları</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kişisel verilerinin işlenip işlenmediğini öğrenme.</li>
          <li>Kişisel veriler işlenmişse buna ilişkin bilgi talep etme.</li>
          <li>Kişisel verilerin düzeltilmesini veya silinmesini talep etme.</li>
          <li>Belirli durumlarda kişisel verilerinin işlenmesine itiraz etme.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Kişisel Verilerin Güvenliği</h2>
        <p>
          Salon, kişisel verilerin yetkisiz erişime, değiştirilmesine veya yok edilmesine karşı
          korunması amacıyla gerekli teknik ve idari tedbirleri almaktadır.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Kişisel Verilerin Saklama Süresi</h2>
        <p>
          Kişisel veriler, işleme amaçlarının gerektirdiği süre boyunca veya Türkiye mevzuatında
          öngörülen süre kadar saklanmaktadır.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          9. Kişisel Verilerin Üçüncü Kişilere Aktarılması
        </h2>
        <p>
          Salon, kişisel verileri yalnızca Türkiye mevzuatında öngörülen durumlarda veya veri
          sahibinin açık rızası ile üçüncü kişilere aktarabilir.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. İletişim Bilgileri</h2>
        <p>Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Adres: [adresinizi buraya yazınız]</li>
          <li>Telefon: [telefon numarası]</li>
          <li>E-posta: [e-posta adresi]</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
