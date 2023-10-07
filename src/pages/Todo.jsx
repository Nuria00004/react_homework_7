import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const handleInputChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleAddTask = () => {
      setTasks([...tasks, task]);
      setTask("");
    };
  
    return (
      <div className="App">
        <h1>Список задач</h1>
        <input
          type="text"
          placeholder="Добавить задачу"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Добавить</button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    );
  }

export default Todo
