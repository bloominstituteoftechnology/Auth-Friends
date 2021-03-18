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
    id: Date.now(),
    name: 'Kusama Yayoi',
    active_since: '1950s',
    artist_link: 'http://yayoi-kusama.jp/e/information/',
    image_url: 'https://backend.artreview.com/wp-content/uploads/2019/11/Yayoi-Kusama_hero-1230x600.png',
    bio: 'When it comes to iconic Japanese women artists, they don’t get much bigger than Kusama Yayoi, who is perhaps the most famous female artist working today. Most art lovers will be familiar with her polka-dotted pumpkins, which Kusama considers "the most humorous of vegetables"! Having spent her whole life battling with hallucinations, Kusama took to art to help deal with her internal struggles by putting them in a physical realm. Though almost 90 years old, Kusama is working as prolifically as ever; in fact she recently opened the Yayoi Kusama Museum in Shunjuku, Tokyo, which is so popular that you have to reserve tickets months in advance! Even if you don’t have a chance to visit Tokyo, you can probably find some works by this prolific artist somewhere near you!'
  },
  {
    id: Date.now(),
    name: 'ESOW',
    active_since: "2000's",
    artist_link: 'https://www.instagram.com/esowom/?hl=en',
    image_url: 'https://media.gettyimages.com/photos/japanese-graffiti-artist-esow-nears-completion-of-artwork-on-the-wall-picture-id74118232',
    bio: 'ESOW has been active as an artist and a skateboarder. He started skateboarding when he was thirteen, and encountered graffiti after he moved to the United States when he was seventeen. His work can be seen on a wide range of media from murals, to canvases, to street wear brands, and he has received strong support, especially from the street scene. ESOW, who belongs to a skateboard team in Tokyo called ‘T19’ and also is a member of ‘Ryokudokai (RDK)’, has a background derived from foreign street culture with a Japanese sensibility. In his work, characters often appear which show a combination of humor and melancholy on their faces, bringing a unique view of the world.'
  },
  {
    id: Date.now(),
    name: 'Noni Olabisi',
    active_since: "1980s",
    artist_link: 'https://sparcinla.org/noniolabisiinterview/',
    image_url: 'https://i.ytimg.com/vi/Mf6LUTgVXSs/maxresdefault.jpg',
    bio: 'SPARC is proud to be sponsoring the conservation of “To Protect and Serve” by Noni Olabisi, located at the corner of Jefferson Blvd and 11th Ave. Noni has been working with the CityWide Team since early December to repair 23 years of sun damage. During her conservation work, Noni took some time to answer some of our questions. “To Protect and Serve” was sponsored in 1992 by the SPARC Neighborhood Pride Program, as part of a collection of 105 murals for the City of Los Angeles Department of Cultural Affairs (DCA). SPARC’s CityWide Mural Program is a pilot project by the DCA that will restore a total of 9 historically significant murals across Los Angeles.  '
  },
  {
    id: Date.now(),
    name: 'Blade',
    active_since: "1970's",
    artist_link: 'https://galleriavarsi.it/artists/blade/',
    image_url: 'https://galleriavarsi.it/wp-content/uploads/2017/04/bio-artista-blade2.jpg',
    bio: 'Steven D. Ogburn, aka Blade, is one of the artists who emerged in the 1970s. Born in 1957, he shaped the graffiti we know and love today. Blade is a famed New York-based aerosol artist and a proud owner of the title King of Graffiti since he painted over five thousand trains with his striking characters.BLADE between 1972 and 1984 he painted more than 5,000 trains, which cross with his name and his style throughout New York City, earning it the title of King of Graff among his friends and peers. Its crew of belonging is the TC5, stands for The Crazy 5, present mainly on lines 2 and 5 of the metro, which pass in neighborhoods like: Bronx, Brooklyn, Manhattan and Central Park. In 1981 he took part in the show BLADE New York / New Wave to the PS1 Gallery in New York, which at the time was not the contemporary museum today, but a space occupied self-managed. The event went down in history for the participation of key artists of contemporary art, names like JM Basquiat, Keith Haring, Dondi, Seen, Lee Quinones and many others. Subsequently BLADE also exposes the Fun Gallery in Manhattan.In 1984, BLADE is among the protagonists of Subway Art, famous catalog that boasts as the two authors photojournalist Martha Cooper and Henry Chalfant, who undertook a genuine exploration, faithful and thorough about these new heroes of the road, precursors of a cultural movement completely revolutionary in its mode of expression, now world famous cult text about the origins of Writing.'
  },
  {
    id: Date.now(),
    name: 'Banksy',
    active_since: "1990's",
    artist_link: 'https://en.wikipedia.org/wiki/Banksy',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Banksy-art.jpg/440px-Banksy-art.jpg',
    bio: 'Arguably the most controversial street artist in the world, the works of Banksy have become a subculture in their own right. Banksy’s political statements and disruptive vision have impacted cities across the globe at vital moments in recent history, provoking alternative viewpoints and encouraging revolution in the art world. His identity remains unknown, even after more than 30 years of involvement in the global graffiti scene. He has worked in many different street art mediums and in many different styles, breaking down the boundaries and expectations of street art critics. His work includes many powerful, often controversial images, encouraging their rapid spread across the internet. Today, his iconic works have been re-shared and repurposed beyond measure.'
  },
  {
    id: Date.now(),
    name: 'Fin Dac',
    active_since: '2008',
    artist_link: 'https://findac.tumblr.com/',
    image_url: 'https://www.galeries-bartoux.com/wp-content/uploads/2020/03/fin-dac.jpg',
    bio: 'Fin Dac is native from the beautiful city of Cork in the south of Ireland,  has always lived in London where he still is. Self-taught artist and nonconformist, his modern geishas in black and white, often naked and tattooed, are exhibited around the world. Fin Dac works with stencils and a specific painting leaving the impression of spatters with pop colors around the eyes, just like a mask.Fin Dac loves beautiful women and is fascinated by Asian mystic and mysterious beauty. With a keen eye on details, he has a real esthetic style that make him different from other urban artists. On the artistic scene since 2008, Fin Dac gets his influence from dark and graphic novels from Francis Bacon or Audrey Beardsley. His first creation was made when his friend T-Wat asked him to realize a graffiti painting in front of the passers-by during an art show for Banksy.'
  },
  {
    id: Date.now(),
    name: 'Artur Bordalo',
    active_since: '2012',
    artist_link: 'https://www.bordaloii.com/about',
    image_url: 'https://global-uploads.webflow.com/5e4453833c505ce561372c5a/5e91817925b15935d0ef52ff_Bordalo%20II_About%20(1).jpg',
    bio: 'Artur Bordalo studied painting at the Academy of Fine Arts in Lisbon for eight years where he discovered sculpture, ceramics and experimented with a variety of materials. His passion for painting dates back to his childhood when he used to spend endless hours observing his grandfather painting in his studio and also tagging in the underworld of the city of Lisbon. Deeply influenced by his grandfather, Artur Bordalo started spray-painting walls in the streets at the age of 11. He then chose the artist name Bordalo II as a tribute to his grandfather Artur Real Bordalo (1925-2017) in order to honour him and highlight his artistic legacy.'
  },
  {
    id: Date.now(),
    name: 'Teddy “Stat” Phillips',
    active_since: 'mid 2000s',
    artist_link: 'https://www.instagram.com/stattheartist/?hl=en',
    image_url: 'https://crosscut.com/sites/default/files/styles/max_1600x1600/public/images/200731_de_amplifierartist_teaser.jpg.jpg?itok=afpU5kN0',
    bio: '“My grandfather said you can stand by and be silent, or you can try to make a change for not only yourself, but for your children,” says Phillips. “If you love your kids — I don\'t have any, but I love them already — you want to do what\'s best for them. You want to try to make their world a little easier for them to live in.” At the beginning of the Black Lives Matter protests this year, Phillips says he could hear people marching by his Capitol Hill apartment. After spending weeks in quarantine under the stay-at-home order, he decided it was time to join the fight.Phillips was one of 16 local creatives who helped paint the phrase Black Lives Matter in vibrant patterns on East Pine Street. His letter was the “I,” which he chose to paint black, with tiny blobs of red, green, blue and yellow seeping in from the corners. Front and center of the monolithic “I” is his personal rallying cry: “For the Culture.”'
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
    id: Date.now(),
    name: 'Swoon',
    active_since: '1999',
    artist_link: 'https://swoonstudio.org/',
    image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F14%2F2018%2F04%2F30%2F040618-swoon-baw-lead-2000.jpg',
    bio: 'Swoon is known for her instantly recognizable life-sized wheat-paste prints – all hand cut - of highly detailed figures situated on walls and abandoned buildings in Brooklyn and Manhattan. Being an activist and humanitarian, Swoon’s work reflects the social and environmental issues. Her art is inspired by both art historical and folk sources and largely based on the pictures as reference, ranging from German Expressionist wood block prints to Indonesian shadow puppets.'
  },
  {
    id: Date.now(),
    name: 'Kobra',
    active_since: '1987',
    artist_link: 'https://www.streetartbio.com/artists/about-eduardo-kobra-biography/',
    image_url: 'https://mymodernmet.com/wp/wp-content/uploads/archive/XBFV5G6uX8mcdU2ThZjq_tGi114Bh.jpg',
    bio: 'Eduardo Kobra’s ability to achieve photorealism while maintaining his playful, color theme is fantastic, making for a striking contrast against the setting it is placed in. Specifically, his cunning use of brushes, airbrush, and spray cans serve as a means of bringing to life notable figures from the past, emphasizing their true dignified nature and beauty. Eduardo Kobra has also utilized a darker color palette in some of his works while maintaining that stunning air of beauty in throughout his work. You can’t help but feel a sense of nostalgia while looking at his creations, taking you back to a time when those individuals existed. The ability to recreate art that taps into individuals and eras past is a truly gift given to Kobra that is purely remarkable.'
  },
  {
    id: Date.now(),
    name: 'Royyal Dog',
    active_since: '2010',
    artist_link: 'https://the-royyal-dog.squarespace.com/',
    image_url: 'https://whatthefunmag.com/wp-content/uploads/2020/06/KakaoTalk_Photo_2020-06-02-08-17-38-1024x751.jpeg',
    bio: 'Royyal Dog (Chris Chanyang Shim, 심찬양) is a graffiti writer and graffiti artist from Seoul, Korea.  He is best known for his photorealistic murals of African American women in traditional Korean hanbok dresses and iconic rappers.  His paintings carry a message of global harmony and have been recognized for multiculturalism. His work can be seen around the world.Royyal Dog studied animation at Chungkang College of Cultural Industries in Incheon.  He also studied pastoral studies at International Evangelical College in the Philippines before dropping out to pursue graffiti in Perth, Australia. Royyal Dog currently resides in Los Angeles with his wife and jindo/labrador retriever.'
  },
  {
    id: Date.now(),
    name: 'Katch1',
    active_since: 'early 90s',
    artist_link: 'https://www.instagram.com/katch1/?hl=en',
    image_url: 'https://frankiebeane.files.wordpress.com/2017/03/katch1.png?crop',
    bio: 'Katch 1 has been drawing since he could hold a pencil. Art was something he always enjoyed. It was always a part of his life. Raised in Hawaii, Katch discovered his love for graffiti and for skateboarding as a pre-teen. Soon after his first spray painting experience, Katch’s neighbor helped him discover skateboarding. If Katch wasn’t drawing or writing, he found himself on his skateboard. After graduating from high school, Katch moved to San Francisco to immerse himself into the cutting edge Bay Area graffiti scene. When Katch got there, rather than painting, he skateboarded and immersed himself into the extremely progressive Bay Area DJ scene. As he watched the commercial graffiti industry swell and blow up in the early 1990s, he decided to move to Los Angeles in hopes of getting a job doing his passion: graffiti art. After weeks of sleeping on a friend’s couch and of unsuccessfully job-hunting at restaurants and stores, Katch 1 attended an action sports tradeshow in San Diego. He went in with just his black book and photos, and walked out with several job offers. From there, he worked for Conart, the first urban graffiti-based t-shirt company in Los Angeles. When Katch was living in L.A., he became fascinated with the freight trains that he passed by him everyday on the freeway. After painting a few trains, he heard that people saw and photographed his trains in locations as far as New Jersey and Toronto. Katch was immediately hooked. Instead of the more popular boxcars, he chose the “hopper” freights, which allowed Katch to paint whole car trains, complete with letters, backgrounds, and characters. In the early nineties, when Katch hopped over a fence to take pictures of his first complete whole car, JUST 195 of NASA / AWR / MSK / TATS CRU approached him.  The two immediately bonded, and through JUST 195, Katch was introduced to some of L.A.’s most notorious graffiti artists and he painted in some of L.A.’s most famous graffiti yards. Eventually, around 1994, Katch 1 and a friend started Natural Koncept, a small  skateboarding company which featured his artwork. In 2008, Katch released a 256 page self titled book featuring twenty years of his artwork. Mainly residing in Los Angeles, Katch traveled frequently back and forth from Hawaii. Eventually he moved permanently back to Hawaii in 2010 to raise his family. He currently resides in Honolulu. Katch still draws all the artwork and does filming and editing of Natural Koncept’s skateboard videos. He also paint murals, skateboards, freelances, and works at Banzai Tattoo Shop in Pearl City as a full-time tattoo artist.'
  },
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
