const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';
let users = [];
let userTemplate = {
  id: "",
  token: "",
  username: "",
}

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: 2,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: 4,
    name: 'Dustin',
    age: 25,
    email: 'D-munny@lambdaschool.com'
  },
  {
    id: 5,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: 6,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  let count = 0;
  users.forEach((user) => {
    if (count !== 1) {
      if (authorization === user.token) {
        count = 1;
      }
    }
  });
  if (count === 1) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  let newUser = {...userTemplate};
  if (username === 'Lambda School' && password === 'i<3Lambd4') {
    req.loggedIn = true;
    newUser.id = uuid.v1();
    newUser.token = uuid.v1();
    newUser.username = username;
    users.push(newUser);
    res.status(200).json({
      payload: newUser.token
    });
  }else if (username === 'kinslj' && password === 'wx$mXBw3') {
    req.loggedIn = true;
    newUser.id = uuid.v1();
    newUser.token = uuid.v1();
    newUser.username = username;
    users.push(newUser);
    res.status(200).json({
      payload: newUser.token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/friends', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/users', authenticator, (req, res) => {
  let newUsers = Array.from(users).forEach(user => {
    delete user.token;
  })
  setTimeout(() => {
    res.send(newUsers);
  }, 1000);
})

app.get('/api/friends/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
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
