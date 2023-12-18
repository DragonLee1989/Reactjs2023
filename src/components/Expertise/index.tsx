// import React from 'react'
import { expertise } from "../../data/expertise";
import { RankStar } from "../RankStar";

type TExpertise = {
  titleExpertise: string;
  starExpertise: number;
};

const SingleExpertise = ({ titleExpertise, starExpertise }: TExpertise) => {
  return (
    <li className="flex justify-start mb-3 w-[260px]">
      <div className="w-[50%]">
        <span>{titleExpertise}</span>
      </div>
      <div className="flex-1">
        <RankStar number={starExpertise} />
      </div>
    </li>
  );
};

export const Expertise = () => {
  return (
    <div>
      <h3 className="font-bold text-white flex justify-center mt-10 mb-4">
        EXPERTISE
      </h3>
      <div className="text-white flex justify-center align-middle">
        <ul>
          {expertise.map((expertise, index) => {
            return (
              <SingleExpertise
                key={`Expertise_${index}`}
                titleExpertise={expertise.titleExpertise}
                starExpertise={expertise.starExpertise}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
