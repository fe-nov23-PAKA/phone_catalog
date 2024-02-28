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

export const PaginationStart: React.FC<Props> = ({
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

  if (+page === 1) {
    visiblePages = itemsPagesMap.slice(0, 2);
  } else {
    visiblePages = [itemsPagesMap[0], itemsPagesMap[1], itemsPagesMap[2]];
  }

  const handleDotsForward = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    params.set("page", `${+page + 2}`);
    setSearchParams(params);
  };

  return (
    <>
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
      <li
        className={classNames(
          "rounded-full border text-primary transition-all hover:border-primary dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 dark:text-dark-white dark:hover:border-dark-elements dark:hover:bg-dark-elements",
        )}
      >
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center"
          onClick={handleDotsForward}
        >
          ...
        </button>
      </li>
    </>
  );
};
