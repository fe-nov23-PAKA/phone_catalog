export const CartCheckoutSkeleton = () => {
  return (
    <div className="flex max-h-[190px] animate-pulse flex-col items-center justify-center rounded-[16px] border border-element-color bg-gray-300 p-6 dark:rounded-none dark:border-dark-elements dark:bg-gray-700">
      <div className="flex w-full flex-col justify-center gap-y-4 text-center">
        <div className="flex flex-col items-center gap-y-1 border-b border-gray-200 pb-4 dark:border-gray-600">
          <div className="h-[39px] w-[90px] rounded-lg bg-gray-200 dark:rounded-none dark:bg-gray-600" />
          <div className="h-[19px] w-[112px] rounded-lg bg-gray-200 dark:rounded-none dark:bg-gray-600" />
        </div>
        <div className="h-[48px] w-full rounded-lg bg-gray-200 dark:rounded-none dark:bg-gray-600" />
      </div>
    </div>
  );
};
