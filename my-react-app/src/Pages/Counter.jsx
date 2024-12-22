import React, { useState } from "react"; 
import image from "../assets/background-image.jpg";
import "./Counter.css";
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    const decrementCounter = () => {
        setCounter(counter - 1);
    };
    const resetCounter = () => {
        setCounter(0);
    }
        return (
            <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <div className="buttons">
                {counter}
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
                <button onClick={resetCounter}>reset</button>
            </div>
            </div>
        );
    };

export default Counter;
