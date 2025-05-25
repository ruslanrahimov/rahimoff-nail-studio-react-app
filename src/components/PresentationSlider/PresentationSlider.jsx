import Slider from "react-slick";
import "./PresentationSlider.css";

const PresentationSlider = ({ data, settings }) => {
  return (
    <div className="presentation-slider w-full m-0 overflow-hidden">
      <div className="window">
        <div className="panel">
          <Slider {...settings}>
            {data.map((data) => (
              <div key={data.id}>
                <div
                  style={{ backgroundImage: `url(${data.image})` }}
                  className="presentation-slide w-full rounded-3xl h-100"
                ></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PresentationSlider;
