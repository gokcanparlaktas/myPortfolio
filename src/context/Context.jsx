import { createContext, useState } from "react";
import data from "../data/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr-TR");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "tr-TR" ? "en-EN" : "tr-TR"
    );
  };

  const localizedData = data[language];

  return (
    <DataContext.Provider value={{ language, toggleLanguage, localizedData }}>
      {children}
    </DataContext.Provider>
  );
};
