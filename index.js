const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const API_KEY = 'mi-apikey-secreta';

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || authorization !== API_KEY) {
    return res.status(401).json({
      error: 'No autorizado. Falta API KEY válida.'
    });
  }

  next();
};

let tasks = [];
let goals = [];

app.use(authMiddleware);

app.get('/getTasks', (req, res) => {
  res.json(tasks);
});

app.get('/getGoals', (req, res) => {
  res.json(goals);
});

app.post('/addTask', (req, res) => {
  const task = req.body;

  tasks.push(task);

  res.json({
    message: 'Tarea agregada correctamente',
    task
  });
});

app.post('/addGoal', (req, res) => {
  const goal = req.body;

  goals.push(goal);

  res.json({
    message: 'Meta agregada correctamente',
    goal
  });
});

app.delete('/removeTask', (req, res) => {
  const { index } = req.body;

  if (index < 0 || index >= tasks.length) {
    return res.status(400).json({ error: 'Índice inválido' });
  }

  tasks.splice(index, 1);

  res.json({ message: 'Tarea eliminada correctamente' });
});

app.delete('/removeGoal', (req, res) => {
  const { index } = req.body;

  if (index < 0 || index >= goals.length) {
    return res.status(400).json({ error: 'Índice inválido' });
  }

  goals.splice(index, 1);

  res.json({ message: 'Meta eliminada correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
