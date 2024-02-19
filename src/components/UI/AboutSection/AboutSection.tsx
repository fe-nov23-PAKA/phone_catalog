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
        <h2 className="border-b pb-4">About</h2>
        {description.map((section) => (
          <div key={section.title} className="">
            <h3 className="mb-4 text-base/[21px]">{section.title}</h3>
            <p className="text-sm/[21px] text-secondary">
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
        <h2 className="border-b pb-4">Tech specs</h2>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Screen</span>
          <span className="text-sm text-primary">{screen}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Resolution</span>
          <span className="text-sm text-primary">{resolution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Processor</span>
          <span className="text-sm text-primary">{processor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">RAM</span>
          <span className="text-sm text-primary">{ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Built in memory</span>
          <span className="text-sm text-primary">{capacity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Camera</span>
          <span className="text-sm text-primary">{camera}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Zoom</span>
          <span className="text-sm text-primary">{zoom}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-secondary">Cell</span>
          <span className="text-sm text-primary">{cell.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};
