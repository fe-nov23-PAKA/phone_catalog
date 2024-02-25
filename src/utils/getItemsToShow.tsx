import { Item } from "../types/Item";
import { SortType } from "../types/SortType";

export function getItemsToShow(
  sortType: SortType,
  productList: Item[],
): Item[] {
  const chekedItems = [...productList];

  return chekedItems.sort((item1, item2) => {
    switch (sortType) {
      case SortType.NEW:
        return item2.year - item1.year;
      case SortType.HOT:
        return item2.fullPrice - item2.price - (item1.fullPrice - item1.price);
      default:
        return 0;
    }
  });
}
