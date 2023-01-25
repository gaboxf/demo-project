import axios from "axios";
const PORT = import.meta.env.VITE_APP_PORT;
const URL = import.meta.env.VITE_APP_URL;

export const getTasksRequest = async () => {
  const response = await axios.get(`${URL}:${PORT}/tasks`);
  return response.data;
};

export const createTaskRequest = async (task) => {
  await axios.post(`${URL}:${PORT}/tasks`, task);
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`${URL}:${PORT}/tasks/${id}`);
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(`${URL}:${PORT}/tasks/${id}`);
  return response;
};

export const updateTaskRequest = async (id, newFields) => {
  await axios.put(`${URL}:${PORT}/tasks/${id}`, newFields);
};
