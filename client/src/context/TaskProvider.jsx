import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api";
import { TaskContext } from "./TaskContext";

// Componente que va a envolver a todos los componentes que necesiten acceder al contexto
// value es el valor que va a tener el contexto y que todos los componentes que lo consuman van a poder acceder
// TaskContextProvider es el componente que va a envolver a todos los componentes que necesiten acceder al contexto
// TaskContext es para interactuar con el contexto

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask debe estar dentro de un TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Arreglo por que los datos me llegan en forma de arreglo[{...}]

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response); // Aca seria response.data pero como ya lo hice en el api no es necesario
  }

  const createTask = async (task) => {
    try {
      const result = await createTaskRequest(task);
      // Devuelve un objeto con la tarea creada
      //setTasks([... tasks, result.data])
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id,newFileds) => {
    try {
      const response = await updateTaskRequest(id,newFileds);
      console.log(`UPDATE : ${response}`);
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <TaskContext.Provider
      value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
