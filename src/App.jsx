import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState("0");

  function updateDisplay() {
    setCount("0");
  }

  function SetValues(num) {
    if (count === "0") {
      setCount(num.toString());
    } else if (num === 0 && count === "0") {
      return;
    } else {
      setCount((prevCount) => prevCount + num.toString());
    }
  }

  function addDecimal() {
    // Split the current input by operators to check the last number segment
    const segments = count.split(/[\+\-\*\/%]/);
    const currentSegment = segments[segments.length - 1];

    // Add decimal only if the last segment doesn't already have one
    if (!currentSegment.includes(".")) {
      setCount(count + ".");
    }
  }

  function toggleSign() {
    let num = Number(count);
    if (num > 0 && !count.includes("-")) {
      setCount(`-${count}`);
    } else if (num < 0 && count.includes("-")) {
      setCount(count.replace("-", ""));
    }
  }

  function add() {
    if (count !== "0" && !isNaN(count.slice(-1))) {
      setCount(count + "+");
    }
  }

  function subtract() {
    if (count !== "0" && !isNaN(count.slice(-1))) {
      setCount(count + "-");
    }
  }

  function multiply() {
    if (count !== "0" && !isNaN(count.slice(-1))) {
      setCount(count + "*");
    }
  }

  function modulus() {
    if (count !== "0" && !isNaN(count.slice(-1))) {
      setCount(count + "%");
    }
  }

  function divide() {
    if (count !== "0" && !isNaN(count.slice(-1))) {
      setCount(count + "/");
    }
  }

  function calculateResult() {
    try {
      // Evaluate the expression and limit decimal places
      const result = eval(count);
      setCount(result.toString());
    } catch (error) {
      alert("Invalid input. Please check the expression.");
      setCount("0");
    }
  }

  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
        <div className="container max-w-72 min-h-96 bg-[#165990] rounded-lg box-border flex flex-col gap-2 p-2">
          <div className="Output bg-[#215f98] rounded-lg h-12 flex justify-end items-center text-white text-4xl pr-2 overflow-x-auto whitespace-nowrap">
            {count}
          </div>
          <div className="buttons h-80 grid grid-cols-4 grid-rows-5 gap-2 select-none">
            <div
              onClick={updateDisplay}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              C
            </div>
            <div
              onClick={toggleSign}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              +-
            </div>
            <div
              onClick={() => modulus()}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              %
            </div>
            <div
              onClick={() => divide()}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              /
            </div>
            <div
              onClick={() => SetValues(7)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              7
            </div>
            <div
              onClick={() => SetValues(8)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              8
            </div>
            <div
              onClick={() => SetValues(9)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              9
            </div>
            <div
              onClick={() => multiply()}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              x
            </div>
            <div
              onClick={() => SetValues(4)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              4
            </div>
            <div
              onClick={() => SetValues(5)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              5
            </div>
            <div
              onClick={() => SetValues(6)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              6
            </div>
            <div
              onClick={() => subtract()}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              -
            </div>
            <div
              onClick={() => SetValues(1)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              1
            </div>
            <div
              onClick={() => SetValues(2)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              2
            </div>
            <div
              onClick={() => SetValues(3)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              3
            </div>
            <div
              onClick={() => add()}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              +
            </div>
            <div
              onClick={() => SetValues(0)}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              0
            </div>
            <div
              onClick={addDecimal}
              className="bg-[#aba8df] rounded-lg place-content-center text-center text-white text-xl hover:text-blue-950"
            >
              .
            </div>
            <div
              onClick={calculateResult}
              className="bg-[#ff886a] rounded-lg place-content-center text-center text-white text-xl col-span-2 hover:text-blue-950"
            >
              =
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
