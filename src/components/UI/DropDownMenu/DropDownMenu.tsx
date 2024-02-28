import classNames from "classnames";
import { ArrowDown } from "../../../icons/Arrow-Down";
import { ArrowUp } from "../../../icons/Arrow-Up";
import { useAppSelector } from "../../../app/hooks";

interface Props {
  classname?: string;
  label?: string;
  dropDownField?: string;
  dropDownFields: string[];
  isOpen?: boolean;
  handlerToOpen?: () => void;
  handlerOnClick?: (
    option: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  setIsFieldOpen?: (isShown: boolean) => void;
}

export const DropDownMenu: React.FC<Props> = ({
  classname,
  label,
  dropDownField,
  dropDownFields,
  isOpen,
  handlerToOpen = () => {},
  handlerOnClick = () => {},
}) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      className={classNames("relative col-span-2 w-full text-left", {
        [`${classname}`]: classname,
      })}
    >
      <div>
        <p className="mb-1 text-xs font-bold tracking-wider text-secondary transition-all dark:text-dark-secondary">
          {label}
        </p>
        <button
          type="button"
          className={classNames(
            { "focus:ring-primary dark:focus:ring-dark-accent": !isOpen },
            { "hover:ring-secondary": isOpen },
            "inline-flex w-full items-center justify-between rounded-md bg-white px-3 py-2 text-[14px]/[21px] font-bold capitalize tracking-wider text-primary shadow-sm ring-1 ring-inset ring-icons-color transition-all dark:rounded-none dark:bg-dark-surface2 dark:text-dark-white dark:ring-dark-surface2 dark:hover:ring-dark-icons",
          )}
          onClick={handlerToOpen}
          id="menu-button"
        >
          {dropDownField}
          {isOpen ? (
            <ArrowDown fill={theme === "dark" ? "#75767F" : ""} />
          ) : (
            <ArrowUp fill={theme === "dark" ? "#75767F" : ""} />
          )}
        </button>
      </div>

      <div
        className={classNames(
          { hidden: isOpen },
          "absolute left-0 z-10 mt-1 text-secondary",
          "w-full origin-top-right rounded-md",
          "shadow-lg ring-1 ring-black ring-opacity-5",
          "focus:outline-none",
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div
          className="border-elements rounded-lg border bg-white py-1 transition-all dark:rounded-none dark:border-dark-elements dark:bg-dark-black"
          role="none"
        >
          {dropDownFields.map((field) => (
            <button
              key={field}
              type="button"
              className="block w-full rounded bg-white px-4 py-2
                    text-left text-sm font-semibold capitalize tracking-wider transition-all hover:bg-hover-color hover:text-primary dark:rounded-none
                  dark:bg-dark-black dark:text-dark-secondary dark:hover:bg-dark-surface2 dark:hover:text-dark-white"
              role="menuitem"
              id="menu-item-0"
              onClick={(event) => handlerOnClick(field, event)}
            >
              {field}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
