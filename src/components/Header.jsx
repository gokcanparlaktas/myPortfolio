import { useContext } from "react";
import { DataContext } from "../context/Context";

const Header = () => {
  const { language, toggleLanguage } = useContext(DataContext);

  return (
    <div>
      <div>
        {language === "en-EN" ? (
          // Türkçe dilindeyken
          <span style={{ fontWeight: "bold" }}>
            <span
              onClick={() => toggleLanguage("tr-TR")}
              style={{
                color: "#EA2678", // Türkçe'yi aktif renk
                cursor: "pointer",
              }}
            >
              TÜRKÇE
            </span>
            'YE GEÇ
          </span>
        ) : (
          // İngilizce dilindeyken
          <span style={{ fontWeight: "bold" }}>
            <span>SWITCH TO </span>
            <span
              onClick={() => toggleLanguage("en-EN")}
              style={{
                color: "#EA2678", // İngilizce'yi aktif renk
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ENGLISH
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
