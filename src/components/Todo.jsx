// Todo.js

import React, { useState, useEffect } from "react";
import "../Todo.css";

function Todo() {
  const [task, addTask] = useState([{key:0,value:"Type your Tasks"},{key:1,value:"Plan your next study session."}]);
  const [curr, setCurrenttask] = useState("");
  const [id, setId] = useState(2);

  useEffect(() => {
    console.log("Updated task:", task);
  }, [task]);

  function AddToList() {
    if (curr.trim() !== "") {
      setCurrenttask(curr.trim());
      addTask([...task, { value: curr, key: id }]);
      setId((prev) => prev + 1);
      setCurrenttask("");
    }
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      AddToList();
    }
  }

  function removeTask(id) {
    console.log("This remove function has been executed" + id);
    addTask(task.filter((e) => e.key !== id));
    if (task.length === 1) {
      setId(0);
    }
  }

  return (
    <div>
      <div className="Pos"> 
      <input 
        className="input bor"
        type="text"
        value={curr}
        placeholder="Add Task"
        onChange={(e) => setCurrenttask(e.target.value)}
        onKeyUp={(e) => handleKeyPress(e)}
      />
      <button className="input add-btn" onClick={AddToList}>
        +
      </button>
      </div>
      <div className="Task">
        {task.map((element, key) => (
          <div className="task-indi" key={key}>
          <button
              className="remove-btn"
              onClick={() => {
                removeTask(element.key);
              }}
            >
              <i class="fa-solid fa-check"></i>
            </button>
            <label htmlFor={`checkbox-${element.key}`}>
              <h1>{element.value}</h1>
            </label>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
