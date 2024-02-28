import { ItemSliderSkeleton } from "../ItemSliderSkeleton";

export const ItemDescriptionSkeleton = () => (
  <div className="mb-14 grid animate-pulse grid-cols-4 gap-4 pt-4 sm:mb-16 sm:grid-cols-12 xl:mb-20 xl:grid-cols-24">
    <ItemSliderSkeleton />
    <div className="col-span-full flex flex-col gap-[37.5px] sm:col-span-5 xl:col-start-[14] xl:col-end-[-1]">
      <div className="justify-between border-b-[1px] pb-[24px] transition-all dark:border-dark-elements">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="text-[12px] font-bold leading-[15px] text-secondary transition-all dark:text-dark-secondary">
              Available colors
            </div>
            <div className="text-[12px] font-bold leading-[15px] text-icons-color transition-all dark:text-dark-icons">
              ID: 000000
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-[30px] w-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-[30px] w-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-[30px] w-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-[30px] w-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="h-[30px] w-[30px] rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-[1px] pb-[24px] text-[12px] font-bold leading-[15px] text-secondary transition-all dark:border-dark-elements">
        <div>Select capacity</div>
        <div className="flex gap-2">
          <div className="h-[32px] w-[61px] rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
          <div className="h-[32px] w-[61px] rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
          <div className="h-[32px] w-[61px] rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
          <div className="h-[32px] w-[61px] rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="justify-flex-start mb-2 flex items-center">
          <div className="h-[32px] w-[80px] rounded-lg bg-gray-300 dark:rounded-none dark:bg-gray-700" />
          <div className="ml-2 h-[28px] w-[60px] rounded-lg bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <div className="h-[40px] w-4/5 rounded-lg bg-gray-300 dark:rounded-none dark:bg-gray-700" />
          <div className="h-[40px] w-[40px] rounded-full bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary">
            Screen
          </div>
          <div className="h-[15px] w-6/12 rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
        <div className="flex items-center justify-between">
          <div
            className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
          >
            Resolution
          </div>
          <div className="h-[15px] w-2/12 rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
        <div className="flex items-center justify-between">
          <div
            className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
          >
            Processor
          </div>
          <div className="h-[15px] w-4/12 rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
        <div className="flex items-center justify-between">
          <div
            className="
            text-gray-elem text-[12px] font-bold text-secondary transition-all dark:text-dark-secondary"
          >
            RAM
          </div>
          <div className="h-[15px] w-1/12 rounded-md bg-gray-300 dark:rounded-none dark:bg-gray-700" />
        </div>
      </div>
    </div>
  </div>
);
