const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

const friends = [
  {
    id: 453,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
  },
  {
    id: 464324,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 234,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 34534,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 5345,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/friends/get', (req, res) => {
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
  const index = req.body.index;
  friends.splice(index, 1);
  res.send(friends);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
