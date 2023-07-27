import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


export default function TodoWrapper() {
  const [task, setTask] = useState([])
  const handleTask =(todo) => {
    console.log("method called",todo);
    let newArr = [...task,todo]
    setTask(newArr);

  };
  const deleteTask = (id) => {
    let newArr1 = task.filter((task)=>
    {
      return id != task.id;
    });

    setTask(newArr1);
  }
  return (
    <div className='todo-wrapper'>
      <h1>Get Things Done .!</h1>
       <TodoForm handleTask={handleTask}/>
       {
        task.map((task)=>(
          <Todo task={task} deleteTask={deleteTask} />
        ))
       }
      

    </div>
  )
}
