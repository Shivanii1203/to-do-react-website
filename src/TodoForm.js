import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    let task = {
      id : uuid(),
      task: todo
    }
    props.handleTask(task)
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}  className='todo-form'>
        <input type ="text" 
        className='input-form' 
        placeholder='What is the task today' 
        value={todo}
         onChange={(e)=>setTodo(e.target.value)}></input>
        <button type="submit" className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}
