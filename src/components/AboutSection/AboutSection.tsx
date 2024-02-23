import React from "react";
import { ItemDescriptionType } from "../../types/ItemDescriptionType";

type Props = {
  item: ItemDescriptionType;
};

export const AboutSection: React.FC<Props> = ({ item }) => {
  const {
    id,
    namespaceId,
    name,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    images,
    description,
    ...techSpecs
  } = item;

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-x-4 pb-14 font-semibold sm:grid-cols-12 sm:pb-10 xl:grid-cols-24">
        <div className="col-span-full mb-14 grid gap-y-8 xl:col-span-12">
          <h2 className="border-b pb-4 text-[20px]/[26px] font-bold sm:text-[22px]/[31px] sm:font-extrabold">
            About
          </h2>
          {description.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-[16px]/[21px] font-bold sm:text-[20px]/[26px]">
                {section.title}
              </h3>
              <p className="text-[14px]/[21px] font-semibold text-secondary xl:font-medium">
                {section.text.map((paragraph) => (
                  <>
                    <div>{paragraph}</div>
                    {paragraph !== section.text[section.text.length - 1] && (
                      <br />
                    )}
                  </>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-full flex flex-col gap-y-8 xl:col-start-[14] xl:col-end-[-1]">
          <h2 className="border-b pb-4 text-[20px]/[26px] font-bold sm:text-[22px]/[31px] sm:font-extrabold">
            Tech specs
          </h2>
          <div className="grid gap-y-2">
            {Object.entries(techSpecs).map(([key, value]) => (
              <div className="flex justify-between">
                <span className="text-[14px]/[21px] font-medium text-secondary">
                  {key === "ram"
                    ? `${key.toUpperCase()}`
                    : `${key.charAt(0).toUpperCase()}${key.slice(1)}`}
                </span>
                <span className="max-w-48 text-right text-[14px]/[21px] text-primary sm:max-w-full">
                  {Array.isArray(value) ? value.join(", ") : value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
