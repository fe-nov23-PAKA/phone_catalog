import { Phone } from "../types/Item";

export function setShowItems(
  itemsOnPage: number,
  page: number,
  itemsPagesMap: number[],
  startVisiblePhones: Phone[],
) {
  const itemsStart = itemsOnPage * page - itemsOnPage;
  const itemsEnd = itemsOnPage * page;

  if (page === itemsPagesMap[itemsPagesMap.length - 1]) {
    const shownItems = startVisiblePhones.slice(itemsStart);

    return shownItems;
  }

  const shownItems = startVisiblePhones.slice(itemsStart, itemsEnd);

  return shownItems;
}
