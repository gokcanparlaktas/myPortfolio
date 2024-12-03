import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex flex-col font-inter">
      <Hero />

      <Skills className="bg-black" />

      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
