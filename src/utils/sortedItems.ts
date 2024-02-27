import { Item } from "../types/Item";

export const sortedItems = (items: Item[], sortField: string): Item[] => {
  return [...items].sort((a, b) => {
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
