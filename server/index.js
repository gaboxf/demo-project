import express from "express"; // "type": "module", in package.json. Para poder importar modulos
import { PORT } from "./config.js"; // Importar modulo config.js, con extension por que lo cree yo
import cors from "cors";


import indexRoutes from "./routes/index.routes.js"; // Importar modulo index.routes.js, con extension por que lo cree yo
import taskRoutes from "./routes/tasks.routes.js"; // Importo todo con el nombre taskRoutes

const app = express(); // Guardar modulo importado en la constante app

// cors es un middleware que nos permite controlar el acceso a los recursos de un servidor
// origin es la url de donde se va a consumir el servidor
// cors() por defecto permite el acceso a todos los recursos
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json()); // (ANTES QUE LLEGUEN A LAS RUTAS PROCESAR LOS DATOS DEL CLIENTES

app.use(indexRoutes); // Usar modulo index.routes.js
app.use(taskRoutes); // Las rutas me devuelven los mensajes

const PORTED = process.env.PORT || PORT

app.listen(PORTED); // Escuchar o ejecutar en el puerto 3000

console.log(`Server is listening on port: ${PORT}`); // Imprimir en consola
