const ServiceList = ({ name, data }) => {
  return (
    <ul className="service-list bg-chinese-500 my-4 p-8 rounded-xl">
      <h2 className="text-xl">{name}</h2>
      {data.map((service, index) => {
        return (
          <li key={index} className="flex  bg-chinese-300 my-4 p-5 rounded-xl">
            <div className="left w-full">
              <h3 className="text-lg">{service.name}</h3>
            </div>
            <div className="right flex w-full justify-end">
              <p className="price block">Uzman: {service.price}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ServiceList;
