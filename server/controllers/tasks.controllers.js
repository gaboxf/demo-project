import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM data ORDER BY id ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ messaje: error.message });
  }
};

export const getTask = async (req, res) => {
  // console.log(req.params.id); // Imprimir en consola el id que envia el cliente

  try {
    const [result] = await pool.query("SELECT * FROM data WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: " Tarea no encontrada " });
    } else {
      res.send(result[0]);
    }
  } catch (error) {
    return res.status(500).json({ messaje: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    console.log(req.body); // Imprimir en consola el body que envia el cliente
    const { title, url } = req.body; // Desestructurar el body que envia el cliente
    const [result] = await pool.query(
      "INSERT INTO data (title, url) VALUES (?,?)",
      [title, url]
    );

    console.log(result); // Imprimir en consola el resultado

    res.json({
      id: result.insertId,
      title,
      url,
    });
  } catch (error) {
    return res.status(500).json({ messaje: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE data SET ? WHERE id =  ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    } else {
      res.json(result);
    }
  } catch (error) {
    return res.status(500).json({ messaje: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const [result] = await pool.query("DELETE FROM data WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0)
    return res.status(404).json({ message: "Tarea no encontrada" });
  return res.sendStatus(204);
};
