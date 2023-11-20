import React, { useState, useEffect } from "react";
import "../Todo.css";
function Todo() {
  const [task, addTask] = useState([]);
  const [curr, setCurrenttask] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log("Updated task:", task);
  }, [task]);

  function AddToList() {
    setCurrenttask(curr.trim());
    addTask([...task, { value: curr, key: id }]);
    setId((prev) => prev + 1);
    setCurrenttask("");
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
    <div className="Task">
      <input
        type="text"
        value={curr}
        placeholder="Add Task"
        onChange={(e) => setCurrenttask(e.target.value)}
        onKeyUp={(e) => handleKeyPress(e)}
      />
      <button onClick={AddToList}>add task</button>
      {task.map((element, key) => {
        return (
        <div className="task-indi">
        <input className="chkbox" type="checkBox" onChange={() => {
              removeTask(element.key);
            }} />
          <h1
            onClick={() => {
              removeTask(element.key);
            }}
            key={key}
          >
            {element.value}
          </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
