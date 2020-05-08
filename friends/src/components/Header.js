import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    header_Margin: {
      ...theme.mixins.Toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("ms")] : {
          marginBottom: "2em"
      },
      [theme.breakpoints.down("xs")] : {
          marginBottom: "1.25em"
      },
    },
    logo: {
      padding: "30px",
      width: "5%",
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "20px",
    },
  }));

const Header = () => {
  const header_Styles = useStyles();
  const [value, setValue] = useState(0);
//   const theme = useTheme();

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/portfolio" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/about" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  //set a useEffect to make an API call

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Tabs
            className={header_Styles.tabContainer}
            value={value}
            onChange={(event, value) => {
              setValue(value);
            }}
          >
            <Tab
              className={header_Styles.tab}
              label="Home"
              component={Link}
              to="/"
              disableRipple
            />
            <Tab
              className={header_Styles.tab}
              label="Friends"
              component={Link}
              to="/portfolio"
              disableRipple
            />
            <Tab
              className={header_Styles.tab}
              label="Log In"
              component={Link}
              to="/login"
              disableRipple
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
