const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

const friends = [
  {
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    id: 0,
  },
  {
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com',
    id: 1,
  },
  {
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com',
    id: 2,
  },
  {
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    id: 3,
  },
  {
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    id: 4,
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/friends/get', (req, res) => {
  console.log(friends);
  res.send(friends);
});

app.post('/api/friends/create', (req, res) => {
  friends.push(req.body);
  res.send(friends);
});

app.put('/api/friends/update', (req, res) => {
  const index = req.body.index;
  friends[index] = req.body.update;
  res.send(friends);
});

app.delete('/api/friends/delete', (req, res) => {
  console.log(req.body);
  const index = req.body.index;
  friends.splice(index, 1);
  res.send(friends);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
