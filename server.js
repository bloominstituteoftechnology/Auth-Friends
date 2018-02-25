const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

const friends = [
  {
 //   id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    phoneNumber: '(123) 456-7890',
    favoriteColor: 'Red',
  },
  {
   // id: 2,
    name: 'Austen',
    age: 32,
    email: 'austen@lambdaschool.com',
    phoneNumber: '(123) 456-7890',
    favoriteColor: 'Green',
  },
  {
  //  id: 3,
    name: 'Ryan',
    age: 35,
    email: 'ryan@lambdaschool.com',
    phoneNumber: '(123) 456-7890',
    favoriteColor: 'Purple',
  },
  {
  //  id: 4,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    phoneNumber: '(123) 456-7890',
    favoriteColor: 'Blue',
  },
  {
  //  id: 5,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    phoneNumber: '(123) 456-7890',
    favoriteColor: 'Yellow',
},
 /* {
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }*/
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
