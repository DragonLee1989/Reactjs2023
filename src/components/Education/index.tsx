// import React from 'react'
import { education } from "../../data/education";

type TEducation = {
  titleEducation: string;
  degreeEducation: string;
  years: string;
};

const SingleEducation = ({
  titleEducation,
  degreeEducation,
  years,
}: TEducation) => {
  return (
    <li className="flex w-[600px] mb-2">
      <div className="w-[50%]">
        <p className="font-bold text-gray-400">{titleEducation}</p>
        <p>{degreeEducation}</p>
      </div>
      <div className="flex-1">
        <p>{years}</p>
      </div>
    </li>
  );
};

export const Education = () => {
  return (
    <div>
      <h3 className="font-bold flex my-5">EDUCATION</h3>
      <div className="flex">
        <ul>
          {education.map((education, index) => {
            return (
              <SingleEducation
                key={`Expertise_${index}`}
                titleEducation={education.titleEducation}
                degreeEducation={education.degreeEducation}
                years={education.years}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
