import { Item } from "../types/Item";

export const sortedItems = (
  items: Item[],
  sortField: string,
  query: string,
): Item[] => {
  let queriedItems = [...items];

  if (query) {
    queriedItems = queriedItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return [...queriedItems].sort((a, b) => {
    switch (sortField) {
      case "cheapest":
        return a.price - b.price;
      case "newest":
        return b.year - a.year;
      case "alphabetically":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
};
