import React, { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Todo(props) {
  console.log(props.task);
  const [done , setDone] = useState(false)
  const handleComplete = () => {
    setDone(!done)
  }
  return (
    <div className='todo'>
      <p onClick={handleComplete} className={`${done ? 'completed' : ""}`}>{props.task.task}</p>
       <FontAwesomeIcon icon={faTrash}
       onClick={() => props.deleteTask(props.task.id)}></FontAwesomeIcon>
       {/* console.log(props); */}
    </div>
  );
}
