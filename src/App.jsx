import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="flex flex-col h-screen bg-neutral-100 font-inter">
      <hero>
        <Hero />
      </hero>
      <skills>
        <Skills />
      </skills>
      <personalinfo>
        <Profile />
      </personalinfo>
    </div>
  );
}

export default App;
