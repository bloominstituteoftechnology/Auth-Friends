const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

let nextId = 7;

let friends = [
  {
    id: 1,
    name: "Ross Geller",
    age: 26,
    email: "ben@lambdaschool.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/c/ce/Ross-Season-5.png/"
  },
  {
    id: 2,
    name: "Chandler Bing",
    age: 26,
    email: "austen@lambdaschool.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/4/48/Chandler_Bing_portrait.jpg"
  },
  {
    id: 3,
    name: "Rachel Green",
    age: 24,
    email: "ryan@lambdaschool.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/3/38/RachelGreen.jpg"
  },
  {
    id: 4,
    name: "Phoebe Buffay",
    age: 27,
    email: "D-munny@lambdaschool.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/3/30/PhoebeBuffay.jpg/"
  },
  {
    id: 5,
    name: "Monica Geller",
    age: 25,
    email: "sean@lambdaschool.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/2/2f/Monica_Geller-Bing_Season_10.png"
  },
  {
    id: 6,
    name: "Joey Tribbiani",
    age: 25,
    email: "michelle@gmail.com",
    avatar:
      "https://vignette.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg  "
  },
  {
    id: 7,
    name: "Marcel",
    age: 25,
    email: "Marcel@gmail.com",
    avatar:
      "http://2.bp.blogspot.com/_wdX2dWnVFDU/SnmFu8nLM_I/AAAAAAAAArY/M9DfEh9CsuU/s400/marcel.jpg"
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "Lambda School" && password === "i<3Lambd4") {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/friends", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(friends);
  }, 1000);
});

app.get("/api/friends/:id", authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.post("/api/friends", authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put("/api/friends/:id", authenticator, (req, res) => {
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
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.delete("/api/friends/:id", authenticator, (req, res) => {
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
