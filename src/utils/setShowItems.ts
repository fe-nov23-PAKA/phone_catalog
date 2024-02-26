import { Item } from "../types/Item";

export function setShowItems(
  itemsOnPage: string,
  page: string,
  itemsPagesMap: string[],
  startVisiblePhones: Item[],
  query?: string | null,
) {
  let queriedItems = [...startVisiblePhones];

  if (query) {
    queriedItems = queriedItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  const itemsStart = +itemsOnPage * +page - +itemsOnPage;
  const itemsEnd = +itemsOnPage * +page;

  if (page === itemsPagesMap[itemsPagesMap.length - 1]) {
    queriedItems = queriedItems.slice(itemsStart);

    return queriedItems;
  }

  queriedItems = queriedItems.slice(itemsStart, itemsEnd);

  return queriedItems;
}
