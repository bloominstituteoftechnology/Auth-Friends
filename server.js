const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let friends = [
  {
    id: 0,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: 1,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 2,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 4,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

let id = friends.length;

app.use(bodyParser.json());

app.use(cors());

app.get('/api/friends/get', (req, res) => {
  res.send(friends);
});

app.post('/api/friends/create', (req, res) => {
  ++id;
  const { name, email, age } = req.body;
  const myFriend = { id, name, email, age };
  friends.push(myFriend);
  res.send(friends);
});

app.put('/api/friends/update', (req, res) => {
  const { name, age, email } = req.body;
  const updatedFriend = { name, age, email };
  const newFriends = friends.map(friend => {
    return (friend = updatedFriend);
  });
  friends = newFriends;
  res.send(friends);
});

app.delete('/api/friends/delete', (req, res) => {
  const id = req.body.id;
  const newFriends = friends.filter(friend => {
    return id !== friend.id;
  });
  friends = newFriends;
  res.send(friends);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
