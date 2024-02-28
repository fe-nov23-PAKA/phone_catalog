import { useAppSelector } from "../../app/hooks";
import { Close } from "../../icons/Close";
import { SkeletonPhoto } from "../../icons/SkeletonPhoto";

export const CartItemSkeleton = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className="flex animate-pulse flex-col justify-between gap-4 rounded-[16px] bg-gray-300 p-4 dark:rounded-none dark:bg-gray-700 sm:flex-row sm:p-6">
      <div className="flex flex-row items-center gap-4">
        <div>
          <Close fill={theme === "dark" ? "#4B5563" : "#E5E7EB"} />
        </div>
        <div className="flex min-h-[80px] min-w-[80px] items-center justify-center">
          <SkeletonPhoto
            className={
              theme === "dark" ? "dark:text-gray-600" : "text-gray-200"
            }
          />
        </div>
        <div className="h-[21px] w-7/12 rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-600 sm:w-[120px] md:w-[80px] xl:w-[300px]" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <div className="h-[34px] w-[34px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-600" />
          <div className="h-[34px] w-[17px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-600" />
          <div className="h-[34px] w-[34px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-600" />
        </div>
        <div className="ml-6 h-[34px] min-w-[80px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-600" />
      </div>
    </div>
  );
};
