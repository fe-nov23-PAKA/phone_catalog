import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
};

export const ProductCardSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={classNames(
          "col-span-full box-border w-full animate-pulse rounded-lg border transition-all dark:rounded-none dark:border-gray-700 sm:col-span-6 md:col-span-4 xl:col-span-6",
          { [`${className}`]: className },
        )}
      >
        <div className="p-[32px]">
          <div className="">
            <div className="relative mb-2 flex h-[196px] items-center justify-center rounded-lg bg-gray-300 dark:rounded-none dark:bg-gray-700">
              <svg
                className="block h-10 w-10 object-contain text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="mt-4 flex h-[42px] flex-col justify-end rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
          </div>
          <div className="justify-flex-start mb-2 mt-2 flex items-center">
            <div className="h-[31px] w-[50px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
            <div className="ml-2 h-[28px] w-[49px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
          </div>
          <div className="mb-2 h-[2px] w-full rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
          <div className="mb-2 flex flex-col gap-y-2 py-2">
            <div className="flex items-center justify-between">
              <div className="h-[15px] w-[57px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
              <div className="h-[15px] w-[80px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-[15px] w-[57px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
              <div className="h-[15px] w-[80px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-[15px] w-[57px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
              <div className="h-[15px] w-[80px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-2">
            <div className="h-[40px] min-w-[160px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
            <div className="h-[40px] w-[40px] rounded-full bg-gray-200 dark:rounded-none dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </>
  );
};
