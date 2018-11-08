const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let friends = [
  {
    id: 1,
    name: 'Yosuke Hanamura',
    age: 16,
    email: '夜助@yasogami.jp',
    img: 'https://i.gyazo.com/f59d3606b41d35860db1da76ad7bdbc0.png',
  },
  {
    id: 2,
    name: 'Chie Satonaka',
    age: 16,
    email: '知恵@yasogami.jp',
    img: 'https://i.gyazo.com/0cb1c76c5ed05ac0032106c605d16013.png',
  },
  {
    id: 3,
    name: 'Yukiko Amagi',
    age: 16,
    email: '雪子@yasogami.jp',
    img: 'https://i.gyazo.com/137139745f59ebc3e48ab60f136d1193.png',
  },
  {
    id: 4,
    name: 'Kanji Tatsumi',
    age: 15,
    email: '漢字@yasogami.jp',
    img: 'https://i.gyazo.com/2747903445db8288258d721d67e1add5.png',
  },
  {
    id: 5,
    name: 'Teddie',
    age: '???',
    email: 'クマ@yasogami.jp',
    img: 'https://i.gyazo.com/4ca400d1ad65394f2f5b1bcb38d247be.png',
  },
  {
    id: 6,
    name: 'Rise Kujikawa',
    age: 15,
    email: 'リセット@risette.jp',
    img: 'https://i.gyazo.com/4e178ed726647030b3f692bbc2bc8c9a.png',
  },
  {
    id: 7,
    name: 'Naoto Shirogane',
    age: 15,
    email: '直人@yasogami.jp',
    img: 'https://i.gyazo.com/d44f4a7867588b04fb069366dd104e82.png',
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/friends', (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get('/api/friends/:id', (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/friends', (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/friends/:id', (req, res) => {
  const { id } = req.params;

  const friendIndex = friends.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...friends[friendIndex], ...req.body };

    friends = [
      ...friends.slice(0, friendIndex),
      friend,
      ...friends.slice(friendIndex + 1),
    ];
    res.send(friends);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/friends/:id', (req, res) => {
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
