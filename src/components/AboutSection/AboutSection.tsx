import React, { useEffect } from "react";
import AOS from "aos";
import { ItemDescriptionType } from "../../types/ItemDescriptionType";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-x-4 pb-14 font-semibold sm:grid-cols-12 sm:pb-10 xl:grid-cols-24">
      <div className="col-span-full mb-14 grid gap-y-8 xl:col-span-12">
        <h2
          data-aos="fade-up"
          className="border-b pb-4 text-[20px]/[26px] font-bold transition-all dark:border-dark-elements dark:text-dark-white sm:text-[22px]/[31px] sm:font-extrabold"
        >
          About
        </h2>
        {description.map((section) => (
          <div data-aos="fade-right" key={section.title}>
            <h3 className="mb-4 text-[16px]/[21px] font-bold transition-all dark:text-dark-white sm:text-[20px]/[26px]">
              {section.title}
            </h3>
            <div className="text-[14px]/[21px] font-semibold text-secondary transition-all dark:text-dark-secondary">
              {section.text.map((paragraph) => (
                <React.Fragment key={paragraph}>
                  <p>{paragraph}</p>
                  {paragraph !== section.text[section.text.length - 1] && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-full flex flex-col gap-y-8 xl:col-start-[14] xl:col-end-[-1]">
        <h2
          data-aos="fade-up"
          className="border-b pb-4 text-[20px]/[26px] font-bold transition-all dark:border-dark-elements dark:text-dark-white sm:text-[22px]/[31px] sm:font-extrabold"
        >
          Tech specs
        </h2>
        <div data-aos="fade-left" className="grid gap-y-2">
          {Object.entries(techSpecs).map(([key, value]) => (
            <div className="flex justify-between" key={key}>
              <span className="text-[14px]/[21px] font-semibold text-secondary transition-all dark:text-dark-secondary">
                {key === "ram"
                  ? `${key.toUpperCase()}`
                  : `${key.charAt(0).toUpperCase()}${key.slice(1)}`}
              </span>
              <span className="max-w-48 text-right text-[14px]/[21px] text-primary transition-all dark:text-dark-white sm:max-w-full">
                {Array.isArray(value) ? value.join(", ") : value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
