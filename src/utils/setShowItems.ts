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
    const shownItems = startVisiblePhones.slice(itemsStart);

    return shownItems;
  }

  const shownItems = startVisiblePhones.slice(itemsStart, itemsEnd);

  return shownItems;
}
