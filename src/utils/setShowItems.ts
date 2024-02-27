import { Item } from "../types/Item";

export function setShowItems(
  itemsOnPage: string,
  page: string,
  itemsPagesMap: string[],
  startVisiblePhones: Item[],
) {
  const itemsStart = +itemsOnPage * +page - +itemsOnPage;
  const itemsEnd = +itemsOnPage * +page;

  if (page === itemsPagesMap[itemsPagesMap.length - 1]) {
    const queriedItems = startVisiblePhones.slice(itemsStart);

    return queriedItems;
  }

  const queriedItems = startVisiblePhones.slice(itemsStart, itemsEnd);

  return queriedItems;
}
