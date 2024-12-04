import { useContext } from "react";
import { DataContext } from "../context/Context";

const Skills = () => {
  const { common, localizedData } = useContext(DataContext);
  return (
    <div className=" mt-5 pb-10">
      <div className="flex flex-col bg-white mx-auto max-w-4xl mt-10">
        <div className="mx-auto text-4xl mb-10">
          <h2>{localizedData.skill}</h2>
        </div>
        <div className="flex container place-content-between text-center my-10 xs:flex-wrap gap-5 sm:flex-wrap md:flex-wrap lg:flex-nowrap">
          {common.skills.map((skill, index) => (
            <div
              className="rounded-xl w-32 hover:shadow-[#EA2678_5px_2px_20px] "
              key={index}
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-14 h-14 mb-3 inline-flex"
              />
              <p className="text-2xl font-medium text-neutral-500">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
