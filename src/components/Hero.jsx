import { useContext } from "react";
import { DataContext } from "../context/Context";

const Hero = () => {
  const { language, toggleLanguage, localizedData, common } =
    useContext(DataContext);

  return (
    <div className="mt-5 container ">
      <div className="flex justify-end text-neutral-500 font-bold tracking-[0.1rem] text-base">
        {language === "en-EN" ? (
          // Türkçe dilindeyken
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
          // İngilizce dilindeyken
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
      <article className="flex flex-col gap-10">
        <div>{localizedData.greet}</div>
        <div>{localizedData.article}</div>
        <div>{localizedData.communication}</div>
      </article>
    </div>
  );
};

export default Hero;
