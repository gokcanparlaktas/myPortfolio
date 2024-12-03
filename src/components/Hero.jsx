import { useContext } from "react";
import { DataContext } from "../context/Context";

const Hero = () => {
  const { language, toggleLanguage, localizedData, darkMode, toggleDarkMode } =
    useContext(DataContext);

  return (
    <div className="pt-5 pb-20">
      <div className="container ">
        <div className="flex justify-end text-neutral-500 font-bold tracking-[0.1rem] text-base">
          <div>
            {language === "en-EN" ? (
              <span>
                <span
                  onClick={() => toggleLanguage("tr-TR")}
                  className="text-[#EA2678] cursor-pointer font hover:underline"
                >
                  TÜRKÇE
                </span>
                'YE GEÇ
              </span>
            ) : (
              <span>
                <span>SWITCH TO </span>
                <span
                  onClick={() => toggleLanguage("en-EN")}
                  className="text-[#EA2678] cursor-pointer font-bold hover:underline"
                >
                  ENGLISH
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="flex place-content-around mt-32 flex-wrap-reverse gap-5">
          <article className="flex flex-col gap-5">
            <div className="text-3xl font-normal leading-9">
              {localizedData.greet}
            </div>
            <div className="text-[42px] max-w-3xl font-medium leading-[64px]">
              {localizedData.article}
            </div>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/gokcanparlaktas96/"
                target="_blank"
                className="max-w-10"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-1.svg"
                  alt="Linkedin"
                />
              </a>
              <a
                href="https://github.com/gokcanparlaktas"
                target="_blank"
                className="max-w-10"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                  alt="GitHub"
                />
              </a>
            </div>

            <div className="text-lg">{localizedData.communication}</div>
          </article>
          <div className=" max-w-96 max-h-96 overflow-hidden rounded-xl shadow-[#EA2678_-20px_-20px]">
            <img
              className="object-cover w-full h-full scale-110"
              src="https://i.ibb.co/Yjzp2H9/Whats-App-G-rsel-2024-12-03-saat-16-20-21-78e77fb1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
