import classNames from "classnames";

interface Props {
  classname?: string;
}

export const ChosenItemsIcon: React.FC<Props> = ({ classname }) => {
  return (
    <div
      className={classNames(
        "absolute flex h-[14px] w-[14px] items-center",
        "justify-center rounded-full border border-white",
        "bg-secondary-accent text-[9px]/[11px] text-white",
        { [`${classname}`]: classname },
      )}
    >
      12
    </div>
  );
};
