import { useAppSelector } from "../../app/hooks";
import { SkeletonPhoto } from "../../icons/SkeletonPhoto";

export const ItemSliderSkeleton = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <>
      <div className="w-12/12 col-span-full mb-8 h-[82px] rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700 sm:mb-10 sm:h-[41px] sm:w-7/12 xl:max-w-[600px]" />
      <div className="relative col-span-full flex min-h-[400px] flex-col items-center sm:col-span-7 sm:flex sm:min-h-[464.5px] sm:flex-row-reverse sm:items-start sm:justify-end sm:gap-x-[5%] xl:col-span-12 xl:h-full">
        <div className="relative col-span-full flex h-[290px] w-full max-w-[445px] items-center justify-center rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700 sm:mb-0 sm:h-[350px]  xl:h-full">
          <SkeletonPhoto
            className={
              theme === "dark" ? "dark:text-gray-600" : "text-gray-200"
            }
          />
        </div>
        <div className="col-span-full mb-10 mt-4 h-[50px] w-full rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700 sm:mb-0 sm:mt-0 sm:h-[350px] sm:w-2/12 xl:h-full" />
      </div>
    </>
  );
};
