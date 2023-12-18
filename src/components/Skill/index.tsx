// import React from 'react'
import { skill } from "../../data/skill";

type TSkill = {
  contentSkill: string;
};

const SingleContact = ({ contentSkill }: TSkill) => {
  return <li>{contentSkill}</li>;
};

export const Skill = () => {
  return (
    <div>
      <h3 className="font-bold text-white flex justify-center mt-10 mb-4">
        PERSONAL SKILL
      </h3>
      <div className="text-white flex justify-center align-middle">
        <ul className="list-disc">
          {skill.map((skill, index) => {
            return (
              <SingleContact
                key={`Skill_${index}`}
                contentSkill={skill.contentSkill}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
