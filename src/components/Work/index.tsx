// import React from 'react'
import { works } from "../../data/work";

type TWork = {
  titleJob: string;
  company: string;
  years: string;
  description: string;
};

const SingleWork = ({ titleJob, company, years, description }: TWork) => {
  return (
    <li className="mb-5">
      <div className="flex w-[600px] mb-3">
        <div className="w-[50%]">
          <p className="font-bold text-gray-400">{titleJob}</p>
          <p className="font-bold  text-gray-400">{company}</p>
        </div>
        <div className="flex-1">
          <p>{years}</p>
        </div>
      </div>
      <div className="flex w-[600px]">
        <p>{description}</p>
      </div>
    </li>
  );
};

export const Work = () => {
  return (
    <div>
      <h3 className="font-bold flex my-5">WORK EXPERIENCE</h3>
      <div className="flex">
        <ul>
          {works.map((works, index) => {
            return (
              <SingleWork
                key={`Expertise_${index}`}
                titleJob={works.titleJob}
                company={works.company}
                years={works.years}
                description={works.description}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
