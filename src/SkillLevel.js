import React from "react";

const CircleFull = ({ value = true }) => {
  return <div className={value ? "skill-circle selected" : "skill-circle"} />;
};
const SkillLevel = (...props) => {
  return (
    <div className="skills">
      {[1, 2, 3, 4, 5].map(i => (
        <CircleFull key={i} value={i < 4} /> 
      ))}
    </div>
  );
};
export default SkillLevel;