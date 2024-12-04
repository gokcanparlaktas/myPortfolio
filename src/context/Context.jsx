import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";
import axios from "axios";
import { toast } from "react-toastify";
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

  const toggleLanguage = () => {
    const newLanguage = language === "tr-TR" ? "en-EN" : "tr-TR";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then(() => {
        toast.success("Bilgiler başarıyla API'a iletildi 👍", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        setError(err);
        toast.error("Bir hata oluştu:", err);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        language,
        toggleLanguage,
        localizedData: data[language],
        common: data.common,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
