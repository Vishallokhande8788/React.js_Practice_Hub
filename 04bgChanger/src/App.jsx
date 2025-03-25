import { useState } from "react";

function App() {
  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <>
      <h1 className="text-center text-6xl font-bold items-center mt-4 underline">
        Background Color Changer
      </h1>

      <div className="flex justify-center  min-h-screen gap-5 mt-10">
        <button
          className="bg-red-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("red")}
        >
          RED
        </button>
        <button
          className="bg-blue-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("blue")}
        >
          BLUE
        </button>
        <button
          className="bg-green-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("green")}
        >
          GREEN
        </button>
        <button
          className="bg-yellow-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("yellow")}
        >
          YELLOW
        </button>
        <button
          className="bg-purple-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("purple")}
        >
          PURPLE
        </button>
        <button
          className="bg-pink-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("pink")}
        >
          PINK
        </button>
        <button
          className="bg-gray-500 border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("gray")}
        >
          GRAY
        </button>
        <button
          className="bg-white border border-black h-20 w-20 flex justify-center items-center"
          onClick={() => changeBackground("white")}
        >
          WHITE
        </button>
      </div>
    </>
  );
}

export default App;
