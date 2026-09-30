import express from "express";
import { tasks as startingTasks, getTaskById } from "./tasks.js";

const app = express();
const tasks = [...startingTasks];

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/tasks", (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined && completed !== "true" && completed !== "false") {
    return res.status(400).json({ error: "completed must be true or false" });
  }

  const result = completed === undefined
    ? tasks
    : tasks.filter((task) => task.completed === (completed === "true"));

  res.json(result);
});

app.get("/api/tasks/:id", (req, res) => {
  const task = getTaskById(tasks, req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

app.post("/api/tasks", (req, res) => {
  const title = req.body?.title;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required" });
  }

  const newTask = {
    id: tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch("/api/tasks/:id", (req, res) => {
  const task = getTaskById(tasks, req.params.id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, completed } = req.body ?? {};

  if (title === undefined && completed === undefined) {
    return res.status(400).json({ error: "send title or completed" });
  }
  if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
    return res.status(400).json({ error: "title must not be empty" });
  }
  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "completed must be boolean" });
  }

  if (title !== undefined) task.title = title.trim();
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id === Number(req.params.id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
