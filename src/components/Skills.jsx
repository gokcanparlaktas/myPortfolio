import { useContext } from "react";
import { DataContext } from "../context/Context";

const Skills = () => {
  const { common, localizedData } = useContext(DataContext);
  return (
    <div className=" mt-5 pb-10 relative px-10 lg:px-0 ">
      <div className="flex flex-col mx-auto max-w-4xl mt-10">
        <div className="w-[11.3125rem] h-[3.0625rem] absolute top-[0] left-[-4.375rem] gap-0 rounded-[1.84375rem] z-10 bg-[#525252] opacity-80"></div>
        <div className="mx-auto text-4xl mb-10 z-50">
          <h2>{localizedData.skill}</h2>
        </div>
        <div className="flex container place-content-center text-center my-10 flex-wrap gap-5 lg:flex-nowrap">
          {common.skills.map((skill, index) => (
            <div
              className="rounded-xl p-2 transition-all duration-300 hover:scale-105 hover:bg-[#f7c1d5] group "
              key={index}
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-14 h-14 mb-3 transition-all duration-300 inline-flex filter group-hover:invert group-hover:brightness-0 "
              />
              <p className="text-2xl font-medium text-neutral-500 transition-all duration-300 group-hover:text-white ">
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
