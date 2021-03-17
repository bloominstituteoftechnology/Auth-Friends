const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let friends = [
  {
    id: 1,
    name: 'Banksy',
    active_since: "1990's",
    artist_link: 'https://en.wikipedia.org/wiki/Banksy',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Banksy-art.jpg/440px-Banksy-art.jpg',
    bio: 'Arguably the most controversial street artist in the world, the works of Banksy have become a subculture in their own right. Banksy’s political statements and disruptive vision have impacted cities across the globe at vital moments in recent history, provoking alternative viewpoints and encouraging revolution in the art world. His identity remains unknown, even after more than 30 years of involvement in the global graffiti scene. He has worked in many different street art mediums and in many different styles, breaking down the boundaries and expectations of street art critics. His work includes many powerful, often controversial images, encouraging their rapid spread across the internet. Today, his iconic works have been re-shared and repurposed beyond measure.'
  },
  {
    id: 2,
    name: 'Fin Dac',
    active_since: '2008',
    artist_link: 'https://findac.tumblr.com/',
    image_url: 'https://www.galeries-bartoux.com/wp-content/uploads/2020/03/fin-dac.jpg',
    bio: 'Fin Dac is native from the beautiful city of Cork in the south of Ireland,  has always lived in London where he still is. Self-taught artist and nonconformist, his modern geishas in black and white, often naked and tattooed, are exhibited around the world. Fin Dac works with stencils and a specific painting leaving the impression of spatters with pop colors around the eyes, just like a mask.Fin Dac loves beautiful women and is fascinated by Asian mystic and mysterious beauty. With a keen eye on details, he has a real esthetic style that make him different from other urban artists. On the artistic scene since 2008, Fin Dac gets his influence from dark and graphic novels from Francis Bacon or Audrey Beardsley. His first creation was made when his friend T-Wat asked him to realize a graffiti painting in front of the passers-by during an art show for Banksy.'
  },
  {
    id: 3,
    name: 'Artur Bordalo',
    active_since: '2012',
    artist_link: 'https://www.bordaloii.com/about',
    image_url: 'https://global-uploads.webflow.com/5e4453833c505ce561372c5a/5e91817925b15935d0ef52ff_Bordalo%20II_About%20(1).jpg',
    bio: 'Artur Bordalo studied painting at the Academy of Fine Arts in Lisbon for eight years where he discovered sculpture, ceramics and experimented with a variety of materials. His passion for painting dates back to his childhood when he used to spend endless hours observing his grandfather painting in his studio and also tagging in the underworld of the city of Lisbon. Deeply influenced by his grandfather, Artur Bordalo started spray-painting walls in the streets at the age of 11. He then chose the artist name Bordalo II as a tribute to his grandfather Artur Real Bordalo (1925-2017) in order to honour him and highlight his artistic legacy.'
  },
  {
    id: 4,
    name: 'Audrey Kawasaki',
    active_since: '2006',
    artist_link: 'https://www.audkawa.com/',
    image_url: 'https://d16kd6gzalkogb.cloudfront.net/__sized__/artist_images/audrey-kawasaki-artist-crop-c0-5__0-5-555x312-70.jpg',
    bio: 'Audrey Kawasaki (born March 31, 1982 in Los Angeles, California) is a Los Angeles-based painter, known for her distinctive, erotically charged portrayals of young, adolescent women. Her works are oil paintings painted directly onto wood panels, and her style has been described as a fusion of Art Nouveau and Japanese manga, with primary influences like Gustav Klimt and Alphonse Mucha, saying “The merging of realistically molded faces and bodies against the contrast of flat lines and patterns is so stimulating to me.'
  },
  {
    id: 5,
    name: 'Kusama Yayoi',
    active_since: '1950s',
    artist_link: 'http://yayoi-kusama.jp/e/information/',
    image_url: 'https://backend.artreview.com/wp-content/uploads/2019/11/Yayoi-Kusama_hero-1230x600.png',
    bio: 'When it comes to iconic Japanese women artists, they don’t get much bigger than Kusama Yayoi, who is perhaps the most famous female artist working today. Most art lovers will be familiar with her polka-dotted pumpkins, which Kusama considers "the most humorous of vegetables"! Having spent her whole life battling with hallucinations, Kusama took to art to help deal with her internal struggles by putting them in a physical realm. Though almost 90 years old, Kusama is working as prolifically as ever; in fact she recently opened the Yayoi Kusama Museum in Shunjuku, Tokyo, which is so popular that you have to reserve tickets months in advance! Even if you don’t have a chance to visit Tokyo, you can probably find some works by this prolific artist somewhere near you!'
  },
  {
    id: 6,
    name: 'Swoon',
    active_since: '1999',
    artist_link: 'https://swoonstudio.org/',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2018%2F04%2F30%2F040618-swoon-baw-lead-2000.jpg',
    bio: 'Swoon is known for her instantly recognizable life-sized wheat-paste prints – all hand cut - of highly detailed figures situated on walls and abandoned buildings in Brooklyn and Manhattan. Being an activist and humanitarian, Swoon’s work reflects the social and environmental issues. Her art is inspired by both art historical and folk sources and largely based on the pictures as reference, ranging from German Expressionist wood block prints to Indonesian shadow puppets.'
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
  if (username === 'lambda' && password === 'school') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
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

app.get('/api/Artists/:id', authenticator, (req, res) => {
  const friend = friends.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/Artists', authenticator, (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  friends = [...friends, friend];

  res.send(friends);
});

app.put('/api/Artists/:id', authenticator, (req, res) => {
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

app.delete('/api/Artists/:id', authenticator, (req, res) => {
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
