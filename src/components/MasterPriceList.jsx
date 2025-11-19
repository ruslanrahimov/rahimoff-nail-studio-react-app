import { getMasterServices } from "../utils/getMasterServices.js";

const MasterPriceList = ({ masterId }) => {
        const services = getMasterServices(masterId);

        return (
                <div className="bg-chinese-500 my-8 p-6 rounded-xl max-md:p-3">
                        <h2 className="text-lg mb-4 font-semibold text-white">
                                Hizmetler ve Fiyatlar
                        </h2>

                        {services.map((service) => (
                                <li
                                        key={service.id}
                                        className="flex bg-chinese-300 my-4 p-5 rounded-xl"
                                >
                                        <div className="left w-full max-md:pr-12">
                                                <h3 className="text-sm font-medium max-md:pb-2 text-charcoal-900">
                                                        {service.name}
                                                </h3>
                                                <p className="description text-xs text-charcoal-700">
                                                        {service.description}
                                                </p>
                                        </div>

                                        <div className="right flex w-full justify-end max-md:flex-1">
                                                <p className="price block md:text-sm font-semibold text-charcoal-900">
                                                        {service.price === null ? "Değerlendirme Sonrası" : `${service.price} TL`}
                                                </p>
                                        </div>
                                </li>
                        ))}
                </div>
        );
};

export default MasterPriceList;
