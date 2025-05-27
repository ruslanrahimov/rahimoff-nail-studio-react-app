import { values } from "../data/values.js";
import ValueCard from "./ValueCard";

const Values = () => {
  return (
    <div className="values grid gap-10 grid-cols-3 mb-28 max-lg:grid-cols-1 max-lg:grid-rows-3">
      {values.map((value) => (
        <ValueCard key={value.id} backgroundImage={value.image} title={value.title}>
          {value.text}
        </ValueCard>
      ))}
    </div>
  );
};

export default Values;
