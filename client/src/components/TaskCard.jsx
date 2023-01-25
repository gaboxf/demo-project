import React from "react";
import {useTasks} from '../context/TaskProvider'
import {useNavigate} from 'react-router-dom'

function TaskCard({ task }) {
  const {deleteTask} = useTasks();
  const navigate = useNavigate();



  return (
    <div>
      <h2>{task.title}</h2>
      <span>{task.url}</span>
      <button onClick={() => navigate (`/edit/${task.id}`)} > Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <hr></hr>
    </div>
  );
}

export default TaskCard;
