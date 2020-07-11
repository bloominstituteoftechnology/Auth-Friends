import * as React from "react";
import "./Login.css";



interface LoginProps {

}

const Login:React.FC<LoginProps> = (props)=>{


    return(
        <div className="login">
            <form className="form">
                <label className="label">
                    <input className="input" type="text" placeholder="username"/>
                </label>
                <label className="label">
                    <input className="input" type="password" placeholder="password"/>
                </label>
            </form>
        </div>
    );
}

export default Login;




/*
(
    <>
      {!loading ? (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginTop: matchesSM && "2em" }}
        >
          <Grid item className={classes.formGridItem}>
            <Typography variant="h3">Sign In:</Typography>
          </Grid>
          <Grid item className={classes.formGridItem}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <FormControl
                className={classes.formControl}
                onSubmit={handleSubmit}
              >
                <Grid
                  item
                  container
                  direction={matchesSM ? "column" : "row"}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item className={classes.formGridItem}>
                    <TextField
                      style={{ padding: 0 }}
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item className={classes.formGridItem}>
                    <TextField
                      type="password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      label="Password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item className={classes.formGridItem} align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    LOG IN
                  </Button>
                </Grid>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item className={classes.formGridItem}>
            – OR –
          </Grid>
          <Grid item className={classes.formGridItem}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                //todo: loading spinner here
                setLoading(true);
                signInWithGoogle()
                  .then((res) => {
                    console.log("login res: ", res);
                    history.push("/");
                    setLoading(false);
                  })
                  .catch((err) => {
                    console.log("Error: ", err);
                    setLoading(false);
                  });
              }}
            >
              Sign in With Google
            </Button>
</Grid>
<Grid item>
<Link to="/reset-password" className="formLink,">
Forgot password?
</Link>
</Grid>
</Grid>
) : null}
</>
);
 */