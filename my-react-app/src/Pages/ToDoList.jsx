import React, { useState } from "react";
import "./Todolist.css";

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Code", "Eating", "Drinking"]);

    function handleAddTask(){
        const newTasks = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";
        setTasks(t =>[...t, newTasks]);
    }

    function handleRemoveTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div className="maincontent">
            <h2>List of Items to Complete Today</h2>
            <ul>
                {tasks.map((task, index) => 
                    <li key={index} onClick={() => handleRemoveTask(index)}>
                        {task}
                    </li>
                )}
            </ul>
            <input type="text" placeholder="Enter your task" id="taskInput"/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default ToDoList;
