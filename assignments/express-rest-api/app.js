const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let db = {};
let nextId = 1;

app.get('/', (req, res) => {
  res.json({ message: 'Express REST API assignment root' });
});

app.get('/items', (req, res) => {
  res.json(Object.values(db));
});

app.get('/items/:id', (req, res) => {
  const item = db[req.params.id];
  if (!item) return res.status(404).json({ detail: 'Item not found' });
  res.json(item);
});

app.post('/items', (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ detail: 'Title is required' });
  const id = String(nextId++);
  const obj = { id, title, description: description || '' };
  db[id] = obj;
  res.status(201).json(obj);
});

app.put('/items/:id', (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;
  if (!db[id]) return res.status(404).json({ detail: 'Item not found' });
  if (!title) return res.status(400).json({ detail: 'Title is required' });
  const obj = { id, title, description: description || '' };
  db[id] = obj;
  res.json(obj);
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  if (!db[id]) return res.status(404).json({ detail: 'Item not found' });
  delete db[id];
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

module.exports = app;
