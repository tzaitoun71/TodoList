import { useState } from 'react'
import './App.css'
import Task from './Task';

function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 0 : todolist.length + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todolist, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todolist.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(todolist.map((task) => {
      if(task.id === id) {
        return {...task, completed: true}
      }
      else return task;
    }))
  }

  return (
    <>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task, key) => {
          return (
            <Task 
              key={key}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={task.completed}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  )
}

export default App
