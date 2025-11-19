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

const MasterCard = ({
  id,
  name,
  role,
  experience,
  priceLevel,
  description,
  photo,
  level,
  rating,
}) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>,
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg relative">
            <span className="text-yellow-500 absolute left-0 top-0 w-1/2 overflow-hidden">★</span>
            <span className="text-gray-300">★</span>
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-lg">
            ★
          </span>,
        );
      }
    }

    return stars;
  };

  return (
    <div
      className="
        bg-white rounded-3xl shadow-md p-6 text-center transition-all duration-300 
        hover:shadow-xl hover:-translate-y-1 animate-fadeIn
      "
    >
      {/* Фото + бейдж */}
      <div className="relative flex justify-center mb-6">
        <img
          src={photo}
          alt={name}
          className="
            w-40 h-40 object-cover rounded-full shadow-lg 
            scale-100 transition-transform duration-300 hover:scale-105
          "
        />

        {/* Абсолютный бейдж */}
        <span
          className={`
            absolute bottom-0 transform translate-y-1/3 
            px-4 py-1 text-xs font-semibold rounded-full 
            ${badgeStyles[level]}
          `}
        >
          {levelTitles[level]}
        </span>
      </div>

      {/* Имя */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Специализация */}
      <p className="text-gray-700 text-sm font-medium mt-1">{role}</p>

      {/* Опыт — подчёркнут цветом */}
      <p className="text-chinese-600 text-xs font-semibold mt-1">{experience}</p>

      {/* Цена — теперь на турецком */}
      <p className="text-lg font-bold text-gray-900 mt-3 tracking-wide">
        {priceLevel} <span className="text-chinese-600 text-sm">’den başlayan fiyatlar</span>
      </p>

      {/* Пояснение на турецком */}
      <p className="text-gray-400 text-[11px] mt-1">
        *Fiyatlar tırnak uzunluğu, mimari, şekil ve tasarım zorluk seviyesine göre değişiklik
        gösterebilir.
      </p>

      {/* Звёзды */}
      <div className="flex justify-center mt-2 mb-2">{renderStars(rating)}</div>

      {/* Описание */}
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">{description}</p>

      {/* Кнопка — теперь чёрная */}
      <a
        href={`/masters/${id}/gallery`}
        className="
          mt-6 inline-block bg-black text-white px-6 py-2 rounded-full 
          text-sm font-medium hover:bg-gray-800 transition
        "
      >
        Çalışmalarını Gör →
      </a>
    </div>
  );
};

export default MasterCard;
