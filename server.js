const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let users = [
    {
    id: 7,
    name: 'Barney Stinson',
    age: 32,
    email: 'barney@friends.com'
  },
    {
    id: 8,
    name: 'Ted Mosby',
    age: 30,
    email: 'Ted@friends.com'
  },
    {
    id: 1,
    name: 'Robin Scherbatzky',
    age: 30,
    email: 'robin@friends.com'
  },
]

let friends = [
  {
    id: 1,
    name: 'Rachel Green',
    age: 30,
    email: 'rachel@friends.com'
  },
  {
    id: 2,
    name: 'Joey Tribbiani',
    age: 34,
    email: 'joey@friends.com'
  },
  {
    id: 3,
    name: 'Chandler Bing',
    age: 32,
    email: 'chandler@friends.com'
  },
  {
    id: 4,
    name: 'Ross Geller',
    age: 32,
    email: 'ross@friends.com'
  },
  {
    id: 5,
    name: 'Monica Bing',
    age: 31,
    email: 'monica@friends.com'
  },
  {
    id: 6,
    name: 'Phoebe Buffay-Hannigan',
    age: 30,
    email: 'phoebe@friends.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'thom' && password === '123') {
    req.loggedIn = true;
    res.status(200).json({
      username,
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  res.send(friends);
});

app.get('/api/users/:searchTerm', authenticator, (req, res) => {
  const searchTerm = req.params.searchTerm !== "none" ?  req.params.searchTerm.toLowerCase() : ""
  const searchedUsers = users.filter((user => user.name.toLowerCase().includes(searchTerm) ))
  res.send(searchedUsers);
});

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/me', authenticator, (req, res) => {
    res.status(200).json({username: 'thom'});
});

app.post('/api/friends', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1)
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/friends/:id', authenticator, (req, res) => {
  const { id } = req.params;

  friends = friends.filter(f => f.id !== Number(id));

  res.send(friends);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
