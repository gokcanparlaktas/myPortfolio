import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Dil durumu ve tema durumu için useState kullanıyoruz
  const [language, setLanguage] = useState("tr-TR");
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode'u localStorage'dan alıp saklama
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Dark mode'u değiştirirken localStorage'da güncellenmesini sağlıyoruz
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Dil değişimi
  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "tr-TR" ? "en-EN" : "tr-TR"
    );
  };

  return (
    <DataContext.Provider
      value={{
        language,
        toggleLanguage,
        localizedData: data[language],
        common: data.common,
        darkMode, // darkMode state'ini ekliyoruz
        toggleDarkMode, // darkMode değiştirmek için fonksiyonu sağlıyoruz
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
