import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-300 text-yellow-500 text-center text-3xl font-bold">
        Tailwind Props</h1>
    </>
  );
}

export default App;
