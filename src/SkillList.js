import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "Languages- C & C++", level: 5 },
    { name: "Data Structures & Algorithm", level: 5 },
    { name: "HTML & CSS", level: 5 },
    { name: "jS", level: 5 },
    { name: "Bootstrap", level: 5 },
    { name: "React", level: 5 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
