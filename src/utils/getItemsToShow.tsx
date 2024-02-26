import { Item } from "../types/Item";
import { SortType } from "../types/SortType";

interface UniqueItems {
  [key: string]: Item;
}

export function getItemsToShow(
  sortType: SortType,
  productList: Item[],
): Item[] {
  const chekedItems = [...productList];

  chekedItems.sort((item1, item2) => {
    switch (sortType) {
      case SortType.NEW:
        return item2.year - item1.year;
      case SortType.HOT:
        return item2.fullPrice - item2.price - (item1.fullPrice - item1.price);
      default:
        return 0;
    }
  });

  const uniqueItems: UniqueItems = {};

  chekedItems.forEach((item) => {
    const checker = item.itemId.split("-");

    checker.splice(-2);

    const modifiedItemId = checker.join("-");

    if (!(modifiedItemId in uniqueItems)) {
      uniqueItems[modifiedItemId] = item;
    }
  });

  const itemsOut: Item[] = Object.values(uniqueItems);

  return itemsOut;
}
