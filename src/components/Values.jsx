import { values } from "../data/values.js";
import ValueCard from "./ValueCard";

const Values = ({ inView = true }) => {
  return (
    <>
      {/* Google Fonts import for DM Serif Display */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div className="values-container">
        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard
              key={value.id}
              backgroundImage={value.image}
              title={value.title}
              index={index}
              parentInView={inView}
            >
              {value.text}
            </ValueCard>
          ))}
        </div>

        <style jsx>{`
          .values-container {
            position: relative;
            margin-bottom: 80px;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1400px;
            margin: 0 auto;
          }

          @media (max-width: 1200px) {
            .values-grid {
              gap: 18px;
            }
          }

          @media (max-width: 1024px) {
            .values-container {
              margin-bottom: 60px;
            }

            .values-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }
          }

          @media (max-width: 768px) {
            .values-container {
              margin-bottom: 40px;
            }

            .values-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Values;
