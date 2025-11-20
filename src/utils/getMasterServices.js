import { masters } from "../data/masters.js";
import { tabContent } from "../data/services.js";

export function getMasterServices(masterId) {
  const master = masters.find((m) => m.id === masterId);
  if (!master) return [];

  // Собираем все услуги из tabContent в один массив
  const allServices = Object.values(tabContent).flatMap((cat) => cat.services);

  // Мерджим описание услуги + цену мастера
  return master.services
    .map((ms) => {
      const serviceInfo = allServices.find((s) => s.id === ms.id);

      if (!serviceInfo) return null;

      return {
        id: ms.id,
        name: serviceInfo.name,
        description: serviceInfo.description,
        price: ms.price,
      };
    })
    .filter(Boolean);
}
