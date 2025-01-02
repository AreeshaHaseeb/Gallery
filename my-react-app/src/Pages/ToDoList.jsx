import React, { useState } from "react";
import "./Todolist.css";

const initialTasks = ["Code", "Eating", "Drinking"];

const ToDoList = () => {
    const [tasks, setTasks] = useState(initialTasks); 

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== "") { 
            setTasks((prevTasks) => [...prevTasks, inputValue]); 
            setInputValue(""); 
        }
    };


    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index)); 
    }

    return (
        <div className="maincontent">
            <h2>To-Do List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} 
                placeholder="Add Task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
