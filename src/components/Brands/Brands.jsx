import { brandsData } from "../../data/brandsData.js";
import Slider from "react-slick";
import "./Brands.css";

const Brands = () => {
  const settings = {
    slidesToShow: 6,
    speed: 1500,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="brands-slides mb-28 max-lg:mb-12">
      <Slider {...settings}>
        {brandsData.map((data) => (
          <div key={data.id}>
            <span
              className="brand-logo block h-22"
              style={{ backgroundImage: `url(${data.image})` }}
            ></span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
