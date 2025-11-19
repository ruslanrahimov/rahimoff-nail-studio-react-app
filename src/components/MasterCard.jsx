import { Link } from "react-router";

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
                                stars.push(<span key={i} className="text-yellow-500 text-lg">★</span>);
                        } else if (rating >= i - 0.5) {
                                stars.push(
                                        <span key={i} className="text-yellow-500 text-lg relative">
                                                <span className="text-yellow-500 absolute left-0 top-0 w-1/2 overflow-hidden">★</span>
                                                <span className="text-gray-300">★</span>
                                        </span>
                                );
                        } else {
                                stars.push(<span key={i} className="text-gray-300 text-lg">★</span>);
                        }
                }
                return stars;
        };

        return (
                <Link
                        to={`/masters/${id}`}
                        className="
        block bg-white rounded-3xl p-6 text-center transition-all duration-300 
        hover:-translate-y-1 hover:bg-gray-50 
        cursor-pointer animate-fadeIn border border-gray-200
      "
                >
                        {/* Фото + бейдж */}
                        <div className="relative flex justify-center mb-6">
                                <img
                                        src={photo}
                                        alt={name}
                                        className="
            w-40 h-40 object-cover rounded-full 
            scale-100 transition-transform duration-300 group-hover:scale-105
            border border-gray-200
          "
                                />

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

                        {/* Опыт */}
                        <p className="text-chinese-600 text-xs font-semibold mt-1">
                                {experience}
                        </p>

                        {/* Цена */}
                        <p className="text-lg font-bold text-gray-900 mt-3 tracking-wide">
                                {priceLevel}{" "}
                                <span className="text-chinese-600 text-sm">’den başlayan fiyatlar</span>
                        </p>

                        {/* Звезды */}
                        <div className="flex justify-center mt-2 mb-2">{renderStars(rating)}</div>

                        {/* Описание */}
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                {description}
                        </p>

                        {/* “Ссылка” (стилизованная, но карточка кликабельна вся) */}
                        <div
                                className="
          mt-6 inline-block text-black font-semibold text-sm  
          underline decoration-gray-400 underline-offset-4
        "
                        >
                                Detaylı Bilgi →
                        </div>
                </Link>
        );
};

export default MasterCard;

