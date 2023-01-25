import { Router } from "express"; // Para poder usar el metodo Router de express

const router = Router(); // Guardar el metodo Router en la constante router
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controllers.js";

// get para obtener datos
// post enviar datos
// put actualizar datos
// delete eliminar datos

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router; // Exportar el modulo router
