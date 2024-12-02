import { useContext } from "react";
import "./App.css";
import { DataContext } from "./context/Context";
import Header from "./components/Header";

function App() {
  const { localizedData } = useContext(DataContext);
  return (
    <>
      <div>
        <h1 className="my-component">Merhaba, Tailwind!</h1>
      </div>
      <header className="bg-black text-white">
        <Header />
      </header>
      <hero>
        <div>{localizedData.greet}</div>
      </hero>
    </>
  );
}

export default App;
