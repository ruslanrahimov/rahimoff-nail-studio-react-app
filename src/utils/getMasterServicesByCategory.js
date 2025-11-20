import { tabContent } from "../data/services";
import { masters } from "../data/masters";

// build dictionary: serviceId -> categoryKey
const serviceIdToCategory = {};

Object.entries(tabContent).forEach(([categoryKey, categoryValue]) => {
  categoryValue.services.forEach((s) => {
    serviceIdToCategory[s.id] = categoryKey;
  });
});

export function getMasterServicesByCategory(masterId) {
  const master = masters.find((m) => m.id === masterId);
  if (!master) return {};

  // group by category
  const categories = {};

  master.services.forEach((masterService) => {
    const categoryKey = serviceIdToCategory[masterService.id];
    if (!categoryKey) return;

    if (!categories[categoryKey]) categories[categoryKey] = [];

    // find full service description
    const serviceInfo = tabContent[categoryKey].services.find((s) => s.id === masterService.id);

    if (serviceInfo) {
      categories[categoryKey].push({
        ...serviceInfo,
        price: masterService.price,
      });
    }
  });

  return categories;
}
