import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  font-size: 2.4rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid black;

  a,
  a:visited {
    color: black;
    text-decoration: none;
    margin: 20px 0;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a,
  a:visited {
    color: black;
    text-decoration: none;
    margin: 20px 0;
  }
`;
