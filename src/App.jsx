import { useState } from 'react'
import './App.css'

function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    setTodoList([...todolist, newTask]);
  }
  
  const deleteTask = (taskName) => {
    const newTodoList = todolist.filter((task) => {
      if (task === taskName) {
        return false;
      }
      else {
        return true;
      }
    })
    setTodoList(newTodoList);
  }

  return (
    <>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todolist.map((task, key) => {
          return <div key={key}>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        })}
      </div>
    </>
  )
}

export default App
