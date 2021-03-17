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
    <div className="d-flex justify-content-center add-friend" style={{backgroundColor: '#222'}}>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center, align-items-center"
        style={{ maxWidth: "50vw", margin: '30vh 0' }}
      >
        <TextField
          type='text'
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
