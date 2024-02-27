import classNames from "classnames";
import { useAppSelector } from "../app/hooks";

interface Props {
  count: number;
  classname?: string;
}

export const ChosenItemsIcon: React.FC<Props> = ({ count, classname }) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      className={classNames(
        "absolute flex h-[14px] w-[14px] items-center",
        "justify-center rounded-full border border-white transition-all",
        "bg-secondary-accent text-[9px]/[11px] text-white",
        { [`${classname}`]: classname },
        { "dark:bg-dark-red": theme === "dark" },
      )}
    >
      {count}
    </div>
  );
};
