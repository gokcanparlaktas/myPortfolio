import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "./context/Context";

function App() {
  const { error } = useContext(DataContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // 300px'den başla, sayfanın sonuna yakın bir noktada tam dolsun
      const startPoint = 300;
      // Sayfanın %90'ına kadar scroll edildiğinde tam dolsun
      const endPoint = maxScroll * 0.9;
      
      if (scrollY > startPoint) {
        setShowScrollTop(true);
        // Progress hesapla: 0-100 arası
        const progress = Math.min(100, ((scrollY - startPoint) / (endPoint - startPoint)) * 100);
        setScrollProgress(progress);
      } else {
        setShowScrollTop(false);
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // İlk render'da da kontrol et
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Background gradient hesapla - yukarıdan aşağı doğru dolma efekti
  const fillPercentage = scrollProgress;
  const lightColor = "rgba(234, 38, 120, 0.3)"; // Soluk pembe
  const darkColor = "#EA2678"; // Koyu pembe

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="flex flex-col font-inter overflow-hidden">
        <ToastContainer />
        <div>
          <Hero />
        </div>
        <div>
          <Skills className="bg-black" />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <Projects />
        </div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:scale-110 flex items-center justify-center w-14 h-14 ${
            showScrollTop
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{
            background: `linear-gradient(to bottom, ${lightColor} 0%, ${lightColor} ${100 - fillPercentage}%, ${darkColor} ${100 - fillPercentage}%, ${darkColor} 100%)`
          }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    );
  }
}

export default App;
