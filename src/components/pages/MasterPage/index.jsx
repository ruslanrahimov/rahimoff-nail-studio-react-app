import { useParams } from "react-router";
import { masters } from "../../../data/masters.js";
import MasterPriceListTabs from "../../MasterPriceListTabs.jsx";

const badgeStyles = {
  top: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  middle: "bg-purple-100 text-purple-800 border border-purple-300",
  "junior-plus": "bg-blue-100 text-blue-800 border border-blue-300",
  intern: "bg-gray-100 text-gray-700 border border-gray-300",
};

const levelTitles = {
  top: "Top Master",
  middle: "Middle Master",
  "junior-plus": "Junior+",
  intern: "Stajyer",
};

const renderStars = (rating) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className="text-yellow-500 text-xl">
          ★
        </span>,
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i} className="text-yellow-500 text-xl relative">
          <span className="text-yellow-500 absolute left-0 top-0 w-1/2 overflow-hidden">★</span>
          <span className="text-gray-300">★</span>
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300 text-xl">
          ★
        </span>,
      );
    }
  }

  return stars;
};

const MasterPage = () => {
  const { id } = useParams();
  const master = masters.find((m) => m.id === id);

  if (!master) {
    return <p className="text-center mt-20 text-lg">Master bulunamadı.</p>;
  }

  return (
    <section className="container mx-auto mt-16 px-4 py-12 animate-fadeIn">
      {/* HEADER BLOCK */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Foto */}
        <div className="relative">
          <img
            src={master.photo}
            alt={master.name}
            className="w-72 h-72 object-cover rounded-xl border border-gray-200"
          />

          {/* Badge */}
          <span
            className={`
              absolute top-2 right-2 
              px-3 py-1 text-xs font-semibold rounded-full
              ${badgeStyles[master.level]}
            `}
          >
            {levelTitles[master.level]}
          </span>
        </div>

        {/* INFORMATION */}
        <div
          className="
    flex-1 text-left pt-4 lg:pt-6 
    max-md:text-center max-md:flex max-md:flex-col max-md:items-center
  "
        >
          {/* Имя мастера */}
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">{master.name}</h1>

          {/* Роль */}
          <p className="text-gray-700 text-base mt-2 font-medium max-md:max-w-sm">{master.role}</p>

          {/* Опыт + рейтинг */}
          <div
            className="
      flex items-center gap-6 mt-4 
      max-md:justify-center
    "
          >
            <span className="text-chinese-600 text-sm font-semibold">{master.experience}</span>

            <div className="flex items-center">{renderStars(master.rating)}</div>
          </div>

          {/* Описание */}
          <p
            className="
      text-gray-600 text-[15px] leading-relaxed mt-6 max-w-xl 
      max-md:max-w-sm
    "
          >
            {master.description}
          </p>

          {/* CTA */}
          <a
            href={`https://wa.me/905060552137?text=${encodeURIComponent(
              `Merhaba! ${master.name} için randevu almak istiyorum. Müsait olduğunuz saatleri paylaşabilir misiniz?`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
    inline-block mt-8 px-7 py-2.5 bg-black text-white text-sm font-medium 
    hover:bg-gray-800 transition 
    max-md:w-full max-md:max-w-xs max-md:mx-auto text-center
  "
          >
            Randevu Al
          </a>
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-lg font-semibold text-charcoal-900 mt-12 mb-3">Uzmanlık Alanları</h3>
      <div className="flex flex-wrap gap-2">
        {master.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 border border-gray-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Price List */}
      <MasterPriceListTabs masterId={master.id} />

      {/* Gallery */}
      <h2 className="text-xl font-semibold mt-12 mb-5">Çalışmalar</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {/* FIRST LARGE IMAGE */}
        <div className="col-span-2 sm:col-span-3">
          <img
            src={master.gallery[0]}
            alt=""
            className="
        w-full h-64 sm:h-96 object-cover rounded-xl border border-gray-200 
        hover:opacity-95 transition
      "
          />
        </div>

        {/* OTHER IMAGES */}
        {master.gallery.slice(1).map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="
        w-full h-48 object-cover rounded-xl border border-gray-200 
        hover:opacity-90 transition
      "
          />
        ))}
      </div>
    </section>
  );
};

export default MasterPage;
