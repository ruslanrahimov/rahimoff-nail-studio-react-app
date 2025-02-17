import { services } from "../data/services.js";
import ServiceList from "./ServiceList.jsx";
import ServicePicture from "./ServicePicture.jsx";
import TabBar from "./TabBar.jsx";
const Services = () => {
  return (
    <div className="services-wrapper">
      <h2 className="content-header font-raleway font-light text-lg text-charcoal-500 pt-8 uppercase tracking-widest">
        FİYAT LİSTESİ
      </h2>
      <TabBar />
      <ServicePicture />
      <ServiceList name="El" data={services.hands} />
      <ServiceList name="Ayak" data={services.foots} />
      <ServiceList name="Tırnak Süsleme" data={services.extras} />
      <ServiceList name="Kaş" data={services.brows} />
    </div>
  );
};

export default Services;
