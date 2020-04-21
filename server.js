const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
    'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

//nextId used in a funciton to get unique ids for each person.
let nextId = 7;

// An array full of friend objects
let friends = [
    {
        id: 1,
        name: 'Rachel Green',
        age: 30,
        email: 'rachel@friends.com',
    },
    {
        id: 2,
        name: 'Joey Tribbiani',
        age: 34,
        email: 'joey@friends.com',
    },
    {
        id: 3,
        name: 'Chandler Bing',
        age: 32,
        email: 'chandler@friends.com',
    },
    {
        id: 4,
        name: 'Ross Geller',
        age: 32,
        email: 'ross@friends.com',
    },
    {
        id: 5,
        name: 'Monica Bing',
        age: 31,
        email: 'monica@friends.com',
    },
    {
        id: 6,
        name: 'Phoebe Buffay-Hannigan',
        age: 30,
        email: 'phoebe@friends.com',
    },
];

//Parsing to JSON possibly..
app.use(bodyParser.json());

// Unknown tbh..
app.use(cors());

//auth to token check. make sure you are logged in to view sites

function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
        next();
    } else {
        res.status(403).json({ error: 'User must be logged in to do that.' });
    }
}

// POST /api/login
// pass creds as the body of the req, { username: 'lambda', password: 'password' }

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'lambda' && password === 'school') {
        req.loggedIn = true;
        res.status(200).json({
            payload: token,
        });
    } else {
        res.status(403).json({
            error: 'Username or Password incorrect. Please see Readme',
        });
    }
});

// GET /api/friends
// returns the list of friends

app.get('/api/friends', authenticator, (req, res) => {
    setTimeout(() => {
        res.send(friends);
    }, 1000);
});

// GET /api/friends/:id
// returns the friend with the id passed

app.get('/api/friends/:id', authenticator, (req, res) => {
    const friend = friends.find((f) => f.id == req.params.id);

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).send({ msg: 'Friend not found' });
    }
});

// POST /api/friends
// creates a friend and return the new list of friends. Pass the friend as the body of the request (second argument passed to 'axios.post')

app.post('/api/friends', authenticator, (req, res) => {
    const friend = { id: getNextId(), ...req.body };

    friends = [...friends, friend];

    res.send(friends);
});

// PUT /api/friends/:id
// updates the friend using the 'id' passed in. Send the object with the updated info as the body of the req(second part passed into 'axios.put')

app.put('/api/friends/:id', authenticator, (req, res) => {
    const { id } = req.params;

    const friendIndex = friends.findIndex((f) => f.id == id);

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

// DELETE /api/friends/:id
// remove the friend using the id passed as part of the url

app.delete('/api/friends/:id', authenticator, (req, res) => {
    const { id } = req.params;

    friends = friends.filter((f) => f.id !== Number(id));

    res.send(friends);
});

// retrieves the next number so each person gets a unique id guaranteed.
function getNextId() {
    return nextId++;
}

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
