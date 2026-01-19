import { useContext, useState } from "react";
import { DataContext } from "../context/Context";

function Projects() {
  const { localizedData, common } = useContext(DataContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="mt-5 pb-20 overflow-x-hidden lg:overflow-x-visible">
      <div className="flex flex-col lg:container">
        <div className="mx-auto mt-10 ">
          <h2 className="text-4xl mb-10 flex items-center gap-2 justify-center">
            {localizedData.projectHeader}
            <span className="text-2xl animate-pulse">→</span>
          </h2>
        </div>
        <div className="flex overflow-x-auto overflow-y-hidden flex-nowrap gap-x-5 scrollbar-hide pb-[15rem]" style={{ minHeight: 'fit-content' }}>
          {localizedData.projects.map((project, index) => (
            <div
              key={index}
              className={`h-[670px] relative flex-col place-content- p-10 w-[100vw] md:w-[50vw] lg:w-[calc(33.333%-1.25rem)] rounded-lg shadow-md flex-shrink-0 bg-[${common.colors[index]}]`}
            >
              <div>
                <h3 className="text-2xl font-bold font-playfair leading-10 ">
                  {project.name}
                </h3>
              </div>

              <div>
                {" "}
                <p className="text-black mt-1 text-base font-normal leading-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex gap-3 mt-5 flex-wrap place-content-start ">
                  {project.skill.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-black text-base font-bold leading-[16px] tracking-[0.05em] font-playfair bg-white px-2.5 py-1.5 rounded-full "
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex mt-5 place-content-between">
                {project.gitLink && (
                  <div>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline"
                    >
                      {localizedData.show}
                    </a>
                  </div>
                )}
                {project.vercelLink && (
                  <div>
                    <a
                      href={project.vercelLink}
                      target="_blank"
                      className="text-[20px] font-inter font-semibold leading-[30px] text-black hover:underline"
                    >
                      {localizedData.application}→
                    </a>
                  </div>
                )}
              </div>
              <div className="absolute bottom-[-13rem] lg:bottom-[-11rem] left-0 right-0">
                <p className="text-center text-sm text-gray-600 mb-2 opacity-70">
                  {localizedData.clickToEnlarge}
                </p>
                <img
                  className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                  src={project.photoUrl}
                  alt="Logo"
                  onClick={() => setSelectedImage(project.photoUrl)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          onClick={handleClose}
        >
          <div className={`relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
            <img
              src={selectedImage}
              alt="Enlarged project"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
              onClick={handleClose}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
