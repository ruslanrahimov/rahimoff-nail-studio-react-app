import { masters } from "../../data/masters.js";
import MasterCard from "../MasterCard.jsx";

const MastersPage = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-center my-10 uppercase">Uzmanlarımız</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {masters.map((master) => (
          <MasterCard key={master.id} {...master} />
        ))}
      </div>
    </section>
  );
};

export default MastersPage;
