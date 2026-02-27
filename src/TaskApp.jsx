import { useState } from "react";

function TaskApp() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <h1 className="task-title">Task App</h1>

      <div className="input-group">
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => toggleTask(index)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>

            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;