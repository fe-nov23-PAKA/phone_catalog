import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

interface Props {
  itemsPagesMap: string[];
  page: string;
  handleSetPage: (
    number: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  sortField: string;
  itemsOnPage: string;
}

export const PaginationEnd: React.FC<Props> = ({
  itemsPagesMap,
  page,
  handleSetPage,
  sortField,
  itemsOnPage,
}) => {
  const [, setSearchParams] = useSearchParams();
  const params = new URLSearchParams({
    sort: sortField,
    perPage: itemsOnPage,
  });
  let visiblePages: string[] = [];

  if (itemsPagesMap.length <= 2) {
    visiblePages = itemsPagesMap;
  } else if (page === itemsPagesMap[itemsPagesMap.length - 1]) {
    const toLastPageIndex = itemsPagesMap.length;
    const preLastPageIndex = itemsPagesMap.length - 2;

    visiblePages = itemsPagesMap.slice(preLastPageIndex, toLastPageIndex);
  } else {
    visiblePages = [
      itemsPagesMap[itemsPagesMap.length - 3],
      itemsPagesMap[itemsPagesMap.length - 2],
      itemsPagesMap[itemsPagesMap.length - 1],
    ];
  }

  const handleDotsBack = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    params.set("page", `${+page - 2}`);
    setSearchParams(params);
  };

  return (
    <>
      {itemsPagesMap.length > 2 && (
        <li
          className={classNames(
            "rounded-full border text-primary transition-all hover:border-primary dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 dark:text-dark-white dark:hover:border-dark-elements dark:hover:bg-dark-elements",
          )}
        >
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center"
            onClick={handleDotsBack}
          >
            ...
          </button>
        </li>
      )}
      {visiblePages.map((number) => (
        <li
          key={number}
          className={classNames(
            "rounded-full border text-primary transition-all hover:border-primary dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 dark:text-dark-white dark:hover:border-dark-elements dark:hover:bg-dark-elements",
            {
              "border-primary bg-primary text-white hover:bg-white hover:text-primary dark:!border-dark-accent dark:!bg-dark-accent dark:text-dark-white dark:hover:!border-dark-hover dark:hover:!bg-dark-hover":
                page === number,
            },
          )}
        >
          <button
            type="button"
            onClick={(event) => handleSetPage(number, event)}
            className="flex h-8 w-8 items-center justify-center"
          >
            {number}
          </button>
        </li>
      ))}
    </>
  );
};
