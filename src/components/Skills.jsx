import { useContext } from "react";
import { DataContext } from "../context/Context";

const Skills = () => {
  const { common } = useContext(DataContext);
  return (
    <div className="flex container place-content-between text-center my-10">
      {common.skills.map((skill, index) => (
        <div key={index}>
          <img
            src={skill.url}
            alt={skill.name}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              marginBottom: "10px",
              display: "inline-block",
            }}
          />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
