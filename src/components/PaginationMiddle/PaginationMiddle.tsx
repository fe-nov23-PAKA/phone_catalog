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

export const PaginationMiddle: React.FC<Props> = ({
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

  const currentPage = itemsPagesMap.findIndex(
    (pageNumber) => pageNumber === page,
  );

  visiblePages = [
    itemsPagesMap[currentPage - 1],
    itemsPagesMap[currentPage],
    itemsPagesMap[currentPage + 1],
  ];

  return (
    <>
      <li
        className={classNames(
          "rounded-full border text-primary transition-all hover:border-primary dark:rounded-none dark:border-dark-surface1 dark:bg-dark-surface1 dark:text-dark-white dark:hover:border-dark-elements dark:hover:bg-dark-elements",
        )}
      >
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center"
          onClick={(event) => {
            event.preventDefault();
            if (+page - 2 !== 1) {
              params.set("page", `${+page - 2}`);
              setSearchParams(params.toString());
            } else {
              params.delete("page");
              setSearchParams(params.toString());
            }
          }}
        >
          ...
        </button>
      </li>
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
          onClick={(event) => {
            event.preventDefault();

            params.set("page", `${+page + 2}`);
            setSearchParams(params);
          }}
        >
          ...
        </button>
      </li>
    </>
  );
};
