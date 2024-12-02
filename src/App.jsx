import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex flex-col h-screen bg-neutral-100 font-inter">
      <hero>
        <Hero />
      </hero>
      <Skills />
    </div>
  );
}

export default App;
