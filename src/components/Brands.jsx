import { brandsData } from "../data/brandsData.js";
import BrandLogo from "./BrandLogo.jsx";

const Brands = () => {
  return (
    <div className="brands flex flex-wrap justify-between gap-4 mb-28">
      {brandsData.map((data) => (
        <BrandLogo key={data.id} backgroundImage={data.image} />
      ))}
    </div>
  );
};

export default Brands;
