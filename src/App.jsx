import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//import prova marco
import Prova from "./pages/prova";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Prova />
      </div>
    </>
  );
}

export default App;
