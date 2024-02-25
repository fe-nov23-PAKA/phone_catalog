import { Item } from "../types/Item";

export const sortedItems = (items: Item[], sortField: string): Item[] => {
  return [...items].sort((a, b) => {
    switch (sortField) {
      case "Cheapest":
        return a.price - b.price;
      case "Newest":
        return b.year - a.year;
      case "Alphabetically":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
};
