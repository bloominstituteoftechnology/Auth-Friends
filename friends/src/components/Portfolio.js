import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/AxiosWithAuth";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
} from "@material-ui/core";
import Addfriend from "./AddFriend";

const Portfolio = () => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => setFriend(res.data))
      // .then(res => console.log("PORT FOLIO DATA",res))
      .catch((err) => console.log(err));
  }, [friend]);

//   const handleSubmit = (event) => {
//       event.preventDefault()
//       axiosWithAuth()
//       .delete(`/api/friends${friend.id}`)
//   }


  return (
    <>
      <Grid container>
        <Addfriend />
        {Object.entries(friend).length === 0 ? (
          <p>Loading</p>
        ) : (
          friend.map((friend) => {
            return (
              <>
                <Card
                  key={friend.id}
                  varrient="outlined"
                  style={{ margin: "1rem 0 1rem 1rem", width: "350px" }}
                >
                  <CardContent>
                    <Grid container>
                      <Grid item>
                        <Typography varient="h5">{friend.name}</Typography>
                        <Typography varient="h6">{friend.email}</Typography>
                      </Grid>
                      <Grid item>
                        <Avatar alt="Friends" src={friend.img} style={{marginLeft:"6rem"}} />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Button
                    variant="contained"
                    // className={classes.button_style}
                    // onClick={handleSubmit}
                    // disabled={loading}
                    onClick={() => {
                        axiosWithAuth()
                        .delete(`/api/friends/${friend.id}`)
                    }}
                    style={{
                      background: "#F50057",
                      color: "#fff",
                      margin: ".5em .5em",
                    }}
                  >
                    Delete Friend
                  </Button>
                </Card>
              </>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default Portfolio;
