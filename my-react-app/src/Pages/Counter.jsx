import React, { useState } from "react"; 
import "./Counter.css";
const Counter = () => {
    console.log("Counter Component Rendered"); 
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
            <div className="buttons">
                {counter}
                <button onClick={incrementCounter}>+</button>
                <button onClick={decrementCounter}>-</button>
                <button onClick={resetCounter}>reset</button>
            </div>
        );
    };

export default Counter;
