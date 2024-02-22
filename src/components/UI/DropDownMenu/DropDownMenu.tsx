import classNames from "classnames";
import { ArrowDown } from "../../../icons/Arrow-Down";
import { ArrowUp } from "../../../icons/Arrow-Up";

interface Props {
  classname?: string;
  label?: string;
  dropDownField?: string;
  dropDownFields: string[];
  isOpen?: boolean;
  handlerToOpen?: () => void;
  handlerOnClick?: (
    option: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
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
  return (
    <div
      className={classNames("relative col-span-2 mb-6 w-full text-left", {
        [`${classname}`]: classname,
      })}
    >
      <div>
        <p className="mb-1 text-xs text-secondary">{label}</p>
        <button
          type="button"
          className={classNames(
            { "focus:ring-primary": !isOpen },
            { "hover:ring-secondary": isOpen },
            "inline-flex w-full items-center justify-between",
            "rounded-md px-3 py-2 ",
            "font-semibold text-primary",
            "shadow-sm ring-1 ring-inset ring-icons-color transition-all",
          )}
          onClick={handlerToOpen}
          id="menu-button"
        >
          {dropDownField}
          {isOpen ? <ArrowDown /> : <ArrowUp />}
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
        <div className="py-1" role="none">
          {dropDownFields.map((field) => (
            <a
              key={field}
              href="#/"
              className="block bg-white px-4
                    py-2 text-sm transition-all
                  hover:rounded-lg hover:bg-hover-color hover:text-primary"
              role="menuitem"
              id="menu-item-0"
              onClick={(event) => handlerOnClick(field, event)}
            >
              {field}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
