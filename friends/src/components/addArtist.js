import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialNewArtistValue = {
  id: Date.now(),
  name: "",
  active_since: "",
  artist_link: "",
  image_url: "",
  bio: "",
};

const AddArtist = () => {
  const [newArtist, setNewArtist] = useState(initialNewArtistValue);
  const history = useHistory();

  const handleChange = (e) => {
    const newArtistInfo = { ...newArtist, [e.target.name]: e.target.value };
    setNewArtist(newArtistInfo);
  };

  const addNewArtist = (props) => {
    console.log("Meet the new Artist", newArtist);
    axiosWithAuth()
      .post("/Artists", newArtist)
      .then((res) => {
        console.log(res);
        history.push("/protected");
      })
      .catch((error) => {
        console.log("Incoming Error from Add New Artist", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewArtist(newArtist);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center add-artist"
      style={{ backgroundColor: "#222" }}
    >
      <div
        className="d-flex flex-column justify-content-center"
        style={{
          color: "white",
          maxWidth: "80vw",
          alignSelf: "center",
          backgroundColor: "#444",
          padding: "13vh 5vw",
          marginTop: "8vh",
          boxShadow: "0 0 1rem black",
        }}
      >
        <h1>寄稿アーティスト</h1>
        <h3>C O N T R I B U T E - A R T I S T </h3>
        <h6 style={{ marginTop: "5vh" }}>
          Street arts have spent decades developing different schemes and
          formats for influencing public space. Street arts are for everyone,
          regardless of age or social status. They allow for real exchange and
          communication, even with those who do not consider themselves as the
          ‘public’. Street arts invite us to grasp the much needed possibility
          of questioning the obedience paradigm we live in and are a space from
          which we can devise collective and joint visions. Street arts are our
          ally when facing indifference and the absence of empathy because they
          facilitate relationships with the unfamiliar, freedom of expression
          and collective emotions.
          <br />
          <br />
          <em>Therefore</em>, We are committed to creating spaces for debate
          where we can discuss the transformative power of street arts in depth.
          We encourage cultural institutions, foundations, private companies,
          artists, people who are professionally engaged in politics… to be
          courageous: with proposals which wish to transform both for the
          territory and for citizens, co-creating with street art professionals
          . We encourage artists from all disciplines to head outdoors with more
          conviction than ever to express and share their creativity. We
          encourage citizens to do it too, because art belongs to everyone.
          Recite, paint, draw, sing, dance, write… on the street! Now is the
          time to act.
          <br />
          <br />
          So if you know of any artists that need to fill the pages of Street
          Art, give us a heads up. Contribute an artist using the form below and
          we will make sure that they make it up immediately. See you on the
          streets! See you on the street.
        </h6>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center, align-items-center"
        style={{
          maxWidth: "50vw",
          margin: "30vh 0",
          alignSelf: "center",
          backgroundColor: "#444",
          padding: "8vh 10vw",
        }}
      >
        <h3 style={{marginBottom: '3vh', color: 'white'}}>C O N T R I B U T E - A R T I S T </h3>
        <TextField
          type="text"
          name="name"
          label="Name"
          variant="outlined"
          margin="dense"
          color="primary"
          value={newArtist.name}
          onClick={handleChange}
          style={{ backgroundColor: "#AAA" }}
        />
        <TextField
          name="activeSince"
          label="Active Since"
          variant="outlined"
          margin="dense"
          color="primary"
          value={newArtist.active_since}
          onClick={handleChange}
          style={{ backgroundColor: "#AAA" }}
        />
        <TextField
          name="artistLink"
          label="Artist Link"
          variant="outlined"
          margin="dense"
          color="primary"
          value={newArtist.artist_link}
          onClick={handleChange}
          style={{ backgroundColor: "#AAA" }}
        />
        <TextField
          name="imageLink"
          label="Image Link"
          variant="outlined"
          margin="dense"
          color="primary"
          value={newArtist.image_url}
          onClick={handleChange}
          style={{ backgroundColor: "#AAA" }}
        />
        <TextField
          name="bio"
          label="Bio"
          variant="outlined"
          margin="dense"
          color="primary"
          value={newArtist.bio}
          onClick={handleChange}
          style={{ backgroundColor: "#AAA" }}
        />
        <Button
          variant="contained"
          type="submit"
          size="medium"
          color="primary"
          style={{ margin: "2vh 0 " }}
        >
          Contribute Artist
        </Button>
      </form>
    </div>
  );
};

export default AddArtist;
