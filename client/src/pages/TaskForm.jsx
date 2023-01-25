import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();

  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  // Formik es el componente que nos permite controlar el estado del formulario
  // Form es el componente que nos permite crear un formulario"
  // handleChange es una funcion que nos permite controlar los cambios en los inputs
  // onsSubmit es una funcion que nos permite controlar el envio del formulario
  // initialValues es un objeto que nos permite definir los valores iniciales de los inputs
  // onChange es una funcion que nos permite controlar los cambios en los inputs

  // objeto action para reiniciar valores del formulario

  const [task, setTask] = useState({
    title: "",
    url: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          url: task.url,
        });
        console.log(task);
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit Task" : "Create Task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }

          //actions.resetForm(); // EN EL EDIT YA NO REINICIA LOS VALORES
          setTask({
            title: "",
            url: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Escriba el titulo"
              onChange={handleChange}
              value={values.title}
            />
            <label>url</label>
            <textarea
              name="url"
              rows="3"
              placeholder="Escriba la url"
              values = {values.title}
              onChange={handleChange}
              value={values.url}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
