import React, { useState } from 'react'
import './Todo.css';
export default function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  };
  return (
    <div className="box">
      <h1>Todo List</h1>
      <div className='text-box'>
        <input type='text' placeholder='Add a Task' value={task}
          onChange={handleTaskChange} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {taskList.length > 0 ? (
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='no-text'>No tasks added yet.</p>
      )}
    </div>

  )
}
