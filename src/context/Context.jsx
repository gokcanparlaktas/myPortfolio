import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "../data/data.json";
import "react-toastify/dist/ReactToastify.css";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) return storedLanguage;
    return navigator.language.toLowerCase().startsWith("tr")
      ? "tr-TR"
      : "en-EN";
  });

  const toggleLanguage = (newLang) => {
    const newLanguage = newLang || (language === "tr-TR" ? "en-EN" : "tr-TR");
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", language);
    }
  }, [language]);



  return (
    <DataContext.Provider
      value={{
        language,
        toggleLanguage,
        localizedData: data[language],
        common: data.common,
    
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
