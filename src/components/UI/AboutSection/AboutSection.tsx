import React from "react";
import { Phone } from "../../../types/Phone";

type Props = {
  phone: Phone;
};

export const AboutSection: React.FC<Props> = ({ phone }) => {
  const {
    description,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <div className="flex h-full flex-col text-[20px]/[25px] font-semibold">
      <div className="mb-14 flex flex-col gap-y-8">
        <h2 className="border-b pb-4 font-extrabold sm:text-[22px]">About</h2>
        {description.map((section) => (
          <div key={section.title} className="">
            <h3 className="mb-4 text-base/[21px] font-bold sm:text-[20px]/[25px]">
              {section.title}
            </h3>
            <p className="text-sm/[21px] font-medium text-secondary">
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
      <div className="flex flex-col gap-y-2">
        <h2 className="mb-[30px] border-b pb-4 font-bold sm:mb-[25px] sm:font-extrabold">
          Tech specs
        </h2>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Screen</span>
          <span className="text-sm text-primary">{screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Resolution</span>
          <span className="text-sm text-primary">{resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Processor</span>
          <span className="text-sm text-primary">{processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">RAM</span>
          <span className="text-sm text-primary">{ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">
            Built in memory
          </span>
          <span className="text-sm text-primary">{capacity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Camera</span>
          <span className="text-sm text-primary">{camera}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Zoom</span>
          <span className="text-sm text-primary">{zoom}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-secondary">Cell</span>
          <span className="max-w-[50%] text-right text-sm text-primary">
            {cell.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};
