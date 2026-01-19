import { useContext, useMemo } from "react";
import { DataContext } from "../context/Context";

const Skills = () => {
  const { common, localizedData } = useContext(DataContext);
  
  const groupedSkills = useMemo(() => {
    const groups = {
      frontend: [],
      backend: [],
      database: [],
      other: []
    };
    
    common.skills.forEach((skill) => {
      if (skill.category && groups[skill.category]) {
        groups[skill.category].push(skill);
      }
    });
    
    return groups;
  }, [common.skills]);

  const categories = [
    { key: "frontend", label: localizedData.skillFrontend },
    { key: "backend", label: localizedData.skillBackend },
    { key: "database", label: localizedData.skillDatabase },
    { key: "other", label: localizedData.skillOther }
  ];

  return (
    <div className=" mt-5 pb-10 relative px-10 lg:px-0 ">
      <div className="flex flex-col mx-auto max-w-4xl mt-10">
        <div className="w-[11.3125rem] h-[3.0625rem] absolute top-[0] left-[-4.375rem] gap-0 rounded-[1.84375rem] z-10 bg-[#525252] opacity-80"></div>
        <div className="mx-auto text-4xl mb-10 z-50">
          <h2>{localizedData.skill}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            groupedSkills[category.key].length > 0 && (
              <div key={category.key} className="p-6 rounded-lg border border-gray-200 shadow-md bg-white">
                <h3 className="text-2xl font-semibold mb-5 text-center text-neutral-600">
                  {category.label}
                </h3>
                <div className="grid grid-cols-2 container place-content-center text-center my-5  gap-3 lg:grid lg:grid-cols-4 lg:gap-5">
                  {groupedSkills[category.key].map((skill, index) => (
                    <div
                      className="rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:bg-[#f7c1d5] group flex flex-col items-center  h-full"
                      key={`${category.key}-${index}`}
                    >
                      <img
                        src={skill.url}
                        alt={skill.name}
                        className="w-14 h-14 mb-3 transition-all duration-300 inline-flex mx-auto group-hover:grayscale group-hover:drop-shadow-lg group-hover:scale-110 flex-shrink-0"
                      />
                      <p className="text-xl font-medium text-neutral-500 transition-all duration-300 group-hover:text-white text-center">
                        {skill.name.split('<br>').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
