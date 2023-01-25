import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

// useEffect cuando visite la pagina principal se ejecuta el console.log
// getTaskRequest es una funcion que nos permite obtener las tareas...
// ...como es asyncrona inserta dentro un async function y await

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h2>No hay tareas</h2>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1>Pagina Principal</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
