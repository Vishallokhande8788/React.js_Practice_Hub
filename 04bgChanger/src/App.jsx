import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <h1 className="text-center text-4xl font-bold mt-4 underline">
        Background Color Changer
      </h1>

      <div className="flex justify-center gap-5 mt-10 flex-wrap">
        <button
          className="bg-red-500 border border-black h-16 w-16"
          onClick={() => setBgColor("red")}
        >
          RED
        </button>
        <button
          className="bg-blue-500 border border-black h-16 w-16"
          onClick={() => setBgColor("blue")}
        >
          BLUE
        </button>
        <button
          className="bg-green-500 border border-black h-16 w-16"
          onClick={() => setBgColor("green")}
        >
          GREEN
        </button>
        <button
          className="bg-yellow-500 border border-black h-16 w-16"
          onClick={() => setBgColor("yellow")}
        >
          YELLOW
        </button>
        <button
          className="bg-purple-500 border border-black h-16 w-16"
          onClick={() => setBgColor("purple")}
        >
          PURPLE
        </button>
        <button
          className="bg-pink-500 border border-black h-16 w-16"
          onClick={() => setBgColor("pink")}
        >
          PINK
        </button>
        <button
          className="bg-gray-500 border border-black h-16 w-16"
          onClick={() => setBgColor("gray")}
        >
          GRAY
        </button>
        <button
          className="bg-white border border-black h-16 w-16"
          onClick={() => setBgColor("white")}
        >
          WHITE
        </button>
      </div>
    </div>
  );
}

export default App;
