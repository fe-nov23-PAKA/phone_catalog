import classNames from "classnames";

interface Props {
  count: number;
  classname?: string;
}

export const ChosenItemsIcon: React.FC<Props> = ({ count, classname }) => {
  return (
    <div
      className={classNames(
        "absolute flex h-[14px] w-[14px] items-center",
        "justify-center rounded-full border border-white",
        "bg-secondary-accent text-[9px]/[11px] text-white",
        { [`${classname}`]: classname },
      )}
    >
      {count}
    </div>
  );
};
