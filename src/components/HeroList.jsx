import Hero from "./Hero/Hero.jsx";
import { heroData } from "../data/hero.jsx";

const HeroList = () => {
  return (
    <>
      {heroData.map((hero, index) => (
        <Hero
          key={index}
          title={hero.title}
          text={hero.text}
          image={hero.image}
          isReversed={hero.isReversed}
        >
          {hero.buttons}
        </Hero>
      ))}
    </>
  );
};

export default HeroList;
