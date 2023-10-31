// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] //here we are using the spread operator  to copy the array and add the new item to it 
  );
  const [newTaskText, setNewTaskText] = useState(''); // using the state hook to store the new task from the input

  useEffect(() => { //using localStorage to store the tasks to prevent the page from reloading and losing the tasks
    localStorage.setItem('tasks', JSON.stringify(tasks)); // using the JSON.stringify() method to convert the array to a string and store it
  }, [tasks]);

  const removeTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index) // using the filter method to remove the task from the array and return a new array so that the tasks are not lost
    ); //basically saying : 'remove the task from the array and return a new array so that the tasks are not lost'
  };

  const addTask = () => { 
    /* this code adds a new task to a list of tasks if the newTaskText is not empty. 
    it updates the tasks list by appending a new task object with the text property set to the newTaskText and the completed property set to false. 
    lastly, it resets the newTaskText to an empty string so that the user can enter a new task.*/

    if (newTaskText.trim() !== '') { // using the trim() method to remove the white spaces from the input (good practice)
      setTasks((prevTasks) => [ 
        ...prevTasks,
        { text: newTaskText, completed: false }, 
        ...prevTasks
      ]);
      setNewTaskText('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed
                ? 'line-through'
                : 'none',
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                setTasks((prevTasks) =>
                  prevTasks.map((prevTask, i) =>
                    i === index
                      ? { ...prevTask, completed: !prevTask.completed }
                      : prevTask
                  )
                )
              }
            />
            {task.text}
            <button className='btn-delete' onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button className='btn-add' onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;