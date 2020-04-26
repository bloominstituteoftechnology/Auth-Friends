import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Logo = styled.div`
  background: #66cdaa;
  height: 175px;
  width: 175px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "FredokaOne-Regular";
    margin: 0;
    font-size: 100px;
  }
  border-radius: 20px;
  box-shadow: 5px 5px black;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-top: 20px;
    &:hover {
        color: orange;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
`;

const Landing = () => {
  return (
    <Container>
    <h1>Welcome to FaceSpace</h1>
      <Logo>
          <h1>FS</h1>
      </Logo>
      <StyledLink to="/login">Login here</StyledLink>
    </Container>
  );
};

export default Landing;
